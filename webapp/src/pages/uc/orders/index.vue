<template>
    <div class="suwis-order-list">
        <van-tabs animated v-model="activeTabIndex" @change="onClickTab">
            <van-tab v-for="tab in tabList" :title="tab.name" :key="tab.key">
                <van-list
                    v-model="loading"
                    finished-text="没有订单记录了"
                    error-text="请求失败，点击重新加载"
                    :error.sync="error"
                    :finished="finished"
                    @load="getList('add')">
                    <template v-if="list && list.length">
                        <OrderCard
                            v-for="order in list"
                            :key="order[0].id"
                            :order-data="order">
                            <GoodsItem :goods-list="order" @click="onClickGoods"></GoodsItem>
                            <template #footer>
                                <ButtonLine
                                    :button-list="order[0].sta | buttonList"
                                    :order-id="order[0].id"
                                    :order-numer="+order[0].number"
                                    @on-click="onButtonClick"></ButtonLine>
                            </template>
                        </OrderCard>
                    </template>
                </van-list>
            </van-tab>
        </van-tabs>
        <PayType 
            :show="payTypeShow" 
            :balance-sum="balance_sum"
            @close="payTypeShow = false" 
            @pay="confirmPay"></PayType>
        <van-actionsheet
            title="请输入支付密码"
            v-model="passwordModalShow"
            :close-on-click-overlay="false"
            @cancel="closePasswordModal">
            <van-password-input :value="password"/>
            <div class="link-line">
                <router-link to="/resetpaypwd" class="forget-password">忘记支付密码？</router-link>
            </div>
            <van-number-keyboard
                :show="true"
                @input="onPasswordInput"
                @delete="onPasswordDelete"
            />
        </van-actionsheet>
    </div>
</template>

<script>
    import OrderCard from '@/components/uc/orders/order-card'
    import GoodsItem from '@/components/uc/orders/goods-item'
    import ButtonLine from '@/components/uc/orders/button-line'
    import PayType from '@/components/uc/orders/pay-type'
    import ButtonMap from '@/constants/order/button-map'
    import payTypeMap from '@/constants/order/payType'

    import md5 from'md5'

    export default {
        name: "OrderList",
        components: {
            ButtonLine,
            GoodsItem,
            OrderCard,
            PayType
        },
        filters: {
            buttonList: v => ButtonMap.filter(item => item.sta.includes(v))
        },
        data() {
            return {
                activeTabIndex: 0,
                balance_sum: 0, // 可用佣金
                currentOrderId: '',
                currentOrderNumber: '',
                error: false,
                finished: false,
                loading: false,
                list: [],
                num: 20,            // 每页的数量
                page: 1,            // 页码
                sta: undefined,     // 不传sta为全部订单 0 待付款 1 待发货 2 待收货 3 退款/售后 4 待评价 5 已完成 6 已关闭
                payTypeShow: false,
                password: '',               // 支付密码
                passwordModalShow: false,   // 输入弹框显示
                passwordModalType: 'receive',    // 密码弹框类型
                tabList: [
                    {
                        key: 'all',
                        name: '全部订单',
                        sta: undefined
                    },
                    {
                        key: 'toPay',
                        name: '待付款',
                        sta: 0
                    },
                    {
                        key: 'toSend',
                        name: '待发货',
                        sta: 1
                    },
                    {
                        key: 'toReceive',
                        name: '待收货',
                        sta: 2
                    },
                    {
                        key: 'toEvaluate',
                        name: '待评价',
                        sta: 4
                    }
                ]
            }
        },
        methods: {
            closePasswordModal() {
                this.password = ''
            },
            confirmPay(key) {
                this.passwordModalShow = true
                this.currentPayType = payTypeMap.find(type => type.key === key)
            },
            getBalance() {
                // 查询可用佣金
                this.$axios
                .post('/mine/mycommission')
                .then(({ data }) => {
                    if (data.code === 1) {
                    if (data.data) {
                        this.balance_sum = data.data
                    }
                    } else {
                    this.$toast(data.msg);
                    }
                })
            },
            getList(type = 'reset') {
                // 重置页码参数
                if (type === 'reset') {
                  this.list = []
                  this.page = 1
                }
                const { num, page, sta } = this
                this.$axios
                    .post('/order/index', {
                        sta,
                        num,
                        page
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data && data.data.order) {
                                const orderData = this.handleOrderData(data.data.order)
                                this.list = this.list.concat(orderData)
                                if (page * num > data.data.total) this.finished = true
                            }
                        } else {
                            this.error = true
                            this.$toast(data.msg);
                        }
                        this.page++
                        this.loading = false
                    })
                    .catch(() => {
                        this.error = true
                    })
            },
            // 针对订单数据做处理返回新的数组,按店铺id进行分组
            handleOrderData(orderList = []) {
                return orderList.reduce((result, order) => {
                    if (Array.isArray(order)) {
                        const temp = {}
                        order.forEach(goods => {
                            // 根据店铺id对商品进行分组
                            temp[goods.store_id] ? temp[goods.store_id].push(goods) : temp[goods.store_id] = [goods]
                        })
                        Object.values(temp).forEach(value => result.push(value))
                    } else {
                        result.push([order])
                    }
                    return result
                }, [])
            },
            onClickGoods(goods) {
                this.$router.push({
                    path: '/uc/orders/details',
                    query: {id: goods.id}
                })
            },
            onClickTab(index) {
                this.sta = this.tabList[index].sta
                this.getList()
            },
            onClickOrder(goods) {
                this.$router.push({
                    path: '/uc/orders/details',
                    query: {id: goods.id}
                })
            },
            onButtonClick(key, orderId, orderNumer) {
                switch (key) {
                    case 'cancel':
                        this.cancelOrder(orderId)
                        break
                    case 'pay':
                        this.payOrder(orderNumer)
                        break
                    case 'logistics':
                        this.checkLogistics(orderId)
                        break
                    case 'refund':
                        this.refundOrder(orderId)
                        break
                    case 'return':
                        this.returnOrder(orderId)
                        break
                    case 'receive':
                        this.confirmReceive(orderId)
                        break
                    case 'evaluate':
                        this.evaluateOrder(orderId)
                        break
                    case 'delete':
                        this.deleteOrder(orderId)
                        break
                }
            },
            onPasswordInput(key) {
                this.password = this.password + key
                if (this.password.length === 6) {
                    if (this.passwordModalType === 'receive') {
                        this.$axios
                        .post('/order/receiving', {
                            order_id: this.currentOrderId,
                            paypass: md5(this.password)
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('确认收货成功');
                                this.password = ''
                                this.currentOrderId = ''
                                this.passwordModalShow = false
                                this.getList()
                            } else {
                                this.password = ''
                                this.$toast(data.msg);
                            }
                        })
                    } else if (this.passwordModalType === 'pay') {
                        this.$axios
                        .post('/pay/pay', {
                            order: this.currentOrderNumber,
                            pay_type: this.currentPayType.key,
                            paypass: this.currentPayType.key === 'balancepay' ? md5(this.password) : undefined
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.password = ''
                                this.currentOrderNumber = ''
                                this.passwordModalShow = false
                                this.payTypeShow = false
                                this.$toast('支付成功');
                                this.getList()
                            } else {
                                this.password = ''
                                this.$toast(data.msg);
                            }
                        })
                    }
                }
            },
            onPasswordDelete() {
                this.password = this.password.slice(0, this.password.length - 1);
            },
            cancelOrder(orderId) {
                this.$dialog.confirm({
                    title: '取消订单',
                    message: '该订单还未付款，您确定要取消吗？'
                }).then(() => {
                    this.$axios
                        .post('/order/cancel', {
                            number: orderId
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('取消订单成功');
                                this.getList()
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            },

            checkLogistics(orderId) {
                this.$router.push({
                    path: '/uc/orders/logistics-details',
                    query: {
                        id: orderId
                    }
                })
            },
            payOrder(orderNumer) {
                this.getBalance()
                this.payTypeShow = true
                this.passwordModalType = 'pay'
                this.currentOrderNumber = orderNumer
            },
            refundOrder(orderId) {
                this.$router.push({
                    path: '/uc/orders/apply',
                    query: {
                        id: orderId,
                        type: 'refund'
                    }
                })
            },
            returnOrder(orderId) {
                this.$router.push({
                    path: '/uc/orders/servicetype',
                    query: {
                        id: orderId
                    }
                })
            },
            selectPayType(key) {
                this.payTypeShow = false
            },
            confirmReceive(orderId) {
                this.passwordModalShow = true
                this.passwordModalType = 'receive'
                this.currentOrderId = orderId
            },
            evaluateOrder(orderId) {
                this.$router.push({
                    path: '/uc/orders/comment',
                    query: {
                        id: orderId
                    }
                })
            },
            deleteOrder(orderId) {
                this.$dialog.confirm({
                    title: '删除订单',
                    message: '您确定要删除该订单吗？'
                }).then(() => {
                    this.$axios
                        .post('/order/delete', {
                            id: orderId
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('删除订单成功');
                                this.getList()
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            }
        },
        created() {
            this.activeTabIndex = this.$route.query.activeTabIndex || 0
            this.sta = this.tabList[this.activeTabIndex].sta
        }
    }
</script>

<style scoped lang="scss">
    .suwis-order-list {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        .van-password-input {
            margin: 16px 20px;
        }
        .forget-password {
            color: #f0914b;
        }
        .link-line {
            margin: 0 20px 250px;
            text-align: right;
        }
    }
</style>
