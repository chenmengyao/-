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
                            v-for="shop in list"
                            :key="Array.isArray(shop) ? shop[0].id : shop.id"
                            :shop-data="Array.isArray(shop) ? shop[0] : shop"
                            @on-click-item="onClickOrder">
                            <GoodsItem :goods-list="Array.isArray(shop) ? shop : [shop]" @click="onClickGoods"></GoodsItem>
                            <template #footer>
                                <ButtonLine
                                    :button-list="(Array.isArray(shop) ? shop[0].sta : shop.sta) | buttonList"
                                    :order-id="Array.isArray(shop) ? shop[0].id : shop.id"
                                    @on-click="onButtonClick"></ButtonLine>
                            </template>
                        </OrderCard>
                    </template>
                </van-list>
            </van-tab>
        </van-tabs>
        <PayType :show="payTypeShow" @close="payTypeShow = false" @select="selectPayType"></PayType>
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
                currentOrderId: '',
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
                                this.list = this.list.concat(data.data.order)
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
            onButtonClick(key, orderId) {
                switch (key) {
                    case 'cancel':
                        this.cancelOrder(orderId)
                        break
                    case 'pay':
                        this.payOrder(orderId)
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
                }
            },
            onPasswordDelete() {
                this.password = this.password.slice(0, this.password.length - 1);
            },
            cancelOrder(orderId) {
                this.$dialog.confirm({
                    title: '取消订单',
                    message: '该订单还未付款，您确定要取消吗？？'
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
            payOrder(orderId) {
                this.payTypeShow = true
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
