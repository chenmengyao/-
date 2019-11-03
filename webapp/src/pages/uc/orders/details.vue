<template lang="html">
    <div class="suwis-order-detail">
        <!-- 商品卡片 -->
        <OrderCard
            v-for="order in orderlist"
            :key="order[0].id"
            :order-data="order"
            :show-price="false"
            @click="onClickStore">
            <GoodsItem
                :goods-list="order"
                @click="onClickGoods"></GoodsItem>
        </OrderCard>
        <!-- 商品卡片 //-->

        <!-- 地址卡片 -->
        <div class="card card-address">
            <img src="@/assets/orders/address@2x.png" alt="地址" class="image-address">
            <div class="info">
                <div class="user">
                    <span class="name">{{shopData.express_name}}</span>
                    <span class="tel">{{shopData.express_tel}}</span>
                </div>
                <div class="address">{{shopData.express_address}}</div>
            </div>
        </div>
        <!-- 地址卡片 //-->

        <!-- 价格卡片 -->
        <div class="card card-price">
            <div class="card-row row-light-grey">
                <span class="row-key">商品总价</span>
                <span class="row-value text-right">￥ {{goodsSum}}</span>
            </div>

            <div class="card-row row-light-grey">
                <span class="row-key">运费</span>
                <span class="row-value text-right">￥ {{shopData.carriage}}</span>
            </div>

            <div class="card-row thick-row">
                <span class="row-key">订单总价</span>
                <span class="row-value text-right">￥ {{orderSum}}</span>
            </div>

            <div class="card-row thick-row" v-if="shopData.source === '2'">
                <span class="row-key">定金</span>
                <span class="row-value text-right">￥ {{shopData.earnest}}</span>
            </div>

            <div class="card-row thick-row">
                <span class="row-key">{{ shopData.source === '2' ? '需付款' : '实际付款' }}</span>
                <span class="row-value text-right color-red">￥ {{startSum}}</span>
            </div>
        </div>
        <!-- 价格卡片 //-->

        <!-- 订单信息卡片 -->
        <div class="card card-order">
            <h5 class="card-title">订单信息</h5>
            <div class="card-row">
                <span class="row-key">订单编号</span>
                <span class="row-value">{{shopData.number}}</span>
            </div>
            <div class="card-row">
                <span class="row-key">交易编号</span>
                <span class="row-value">{{shopData.number + shopData.id}}</span>
            </div>
            <div class="card-row">
                <span class="row-key">获得积分</span>
                <span class="row-value">{{shopData.get_score || 0}}</span>
            </div>
            <div class="card-row">
                <span class="row-key">下单时间</span>
                <span class="row-value">{{shopData.time | dateFmt}}</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 0">
                <span class="row-key">付款时间</span>
                <span class="row-value">{{shopData.pay_time | dateFmt}}</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 1">
                <span class="row-key">发货时间</span>
                <span class="row-value">{{shopData.shipments_time | dateFmt}}</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 4">
                <span class="row-key">成交时间</span>
                <span class="row-value">{{shopData.success_time | dateFmt}}</span>
            </div>
            <div class="card-row row-button">
                <router-link tags="div" v-if="this.$route.query.sts!=0" class="button-item" :to="{path:'/mine/message/getsm',query:{store_id:orderData.store_id}}">
                    <img class="image-button" src="@/assets/orders/message@2x.png" alt="联系商家">
                    联系商家
                </router-link>
                <div class="button-item"  @click="callPhone(contactWay.phone)">
                    <img class="image-button" src="@/assets/orders/telephone@2x.png" alt="联系平台">
                    联系平台
                </div>
            </div>
        </div>
        <!-- 订单信息卡片 //-->

        <!-- 按钮卡片 -->
        <div class="card card-button">
            <ButtonLine
                :button-list="shopData.sta | buttonList"
                :order-id="shopData.id"
                :order-numer="shopData.number"
                @on-click="onButtonClick"></ButtonLine>
        </div>
        <!-- 按钮卡片 //-->

        <!-- 支付类型弹框 -->
        <PayType
            :show="payTypeShow"
            :balance-sum="balance_sum"
            @close="payTypeShow = false"
            @pay="confirmPay"></PayType>
        <!-- 支付类型弹框 //-->

        <!-- 输入支付密码弹框 -->
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
        <!-- 输入支付密码弹框 //-->

    </div>
</template>

<script>
    import OrderCard from '@/components/uc/orders/order-card'
    import GoodsItem from '@/components/uc/orders/goods-item'
    import PayType from '@/components/uc/orders/pay-type'
    import ButtonLine from '@/components/uc/orders/button-line'
    import ButtonMap from '@/constants/order/button-map'
    import payTypeMap from '@/constants/order/payType'

    import md5 from 'md5'

    export default {
        components: {
            OrderCard,
            ButtonLine,
            GoodsItem,
            PayType
        },
        filters: {
            buttonList: v => ButtonMap.filter(item => item.sta.includes(v))
        },
        computed: {
            // 商品总价
            goodsSum() {
                const { orderData } = this;
                
                if (Array.isArray(orderData)) {
                    return this.orderData.reduce(function(result, goods){
                        return result + goods.num * goods.goods_price
                    }, 0).toFixed(2)
                } else {
                    if(!this.orderData.num||!this.orderData.goods_price){
                        return
                    }
                    return (orderData.num * orderData.goods_price).toFixed(2)
                }
            },
            // 订单总价
            orderSum() {
                const { orderData } = this
                if (Array.isArray(orderData)) {
                    return (this.orderData.reduce((result, goods) => result += +goods.old_price, 0)).toFixed(2)
                } else {
                    return orderData.old_price
                }
            },
            // 实际付款
            startSum() {
                const { orderData } = this
                if (Array.isArray(orderData)) {
                    return (this.orderData.reduce((result, goods) => result += +goods.start_sum, 0)).toFixed(2)
                } else {
                    return orderData.start_sum
                }
            }
        },
        data() {
            return {
                tempList: [
                    [

                    ]
                ],
                contactWay:{},
                balance_sum: 0,
                currentOrderId: '',
                currentOrderNumber: '',
                orderlist: [],
                orderData: {},  // 订单信息
                payTypeShow: false,
                password: '',
                passwordModalShow: false,   // 输入弹框显示
                passwordModalType: 'receive',    // 密码弹框类型
                shopData: {}    // 店铺信息
            }
        },
        methods: {
            //拨打电话
            callPhone(tel) {
               window.location.href = 'tel://' + tel
            },
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
            onButtonClick(key, orderId, orderNumer) {
                switch (key) {
                    case 'cancel':
                        this.cancelOrder(orderNumer)
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

            onClickGoods(goods) {
                this.$router.push({
                    path: '/goods/details',
                    query: {id: goods.goods_id}
                })
            },
            onClickStore(store) {
                this.$router.push({
                    path: '/shop',
                    query: {id: store.store_id}
                })
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
                                this.$toast('支付成功');
                                this.$router.push({
                                    path: '/uc/orders',
                                    query: {
                                        activeTabIndex: 2,
                                        type:'0000'
                                    }
                                })
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
            cancelOrder(orderNumer) {
                this.$dialog.confirm({
                    title: '取消订单',
                    message: '该订单还未付款，您确定要取消吗？'
                }).then(() => {
                    this.$axios
                        .post('/order/cancel', {
                            number: orderNumer
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('取消订单成功');
                                this.$router.push('/uc/orders')
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            },
            payOrder(orderNumer) {
                this.getBalance()
                this.payTypeShow = true
                this.passwordModalType = 'pay'
                this.currentOrderNumber = orderNumer
            },
            checkLogistics(orderId) {
                this.$router.push({
                    path: '/uc/orders/logistics-details',
                    query: {
                        id: orderId
                    }
                })
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

            // 确认收货收货
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
                                this.$router.push('/uc/orders')
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            },
            // 针对订单数据做处理返回新的数组,按店铺id进行分组
            handleOrderData(orderList = []) {
                return orderList.reduce((result, order) => {
                    if (Array.isArray(order)) {
                        const temp = {}
                        for (let goods of order) {
                          // 根据店铺id对商品进行分组
                          temp[goods.store_id] ? temp[goods.store_id].push(goods) : temp[goods.store_id] = [goods]
                        }
                        for (let value of Object.values(temp)) {
                          result.push(value)
                        }
                    } else {
                        result.push([order])
                    }
                    return result
                }, [])
            }
        },
        created() {
            this.id = this.$route.query.id
            this.$axios
                .post('/order/detail', {
                    id: this.id
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.orderData = data.data;
                            this.shopData = Array.isArray(data.data) ? data.data[0] : data.data
                            this.orderlist = this.handleOrderData(Array.isArray(data.data) ? data.data : [data.data])
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })

             this.$axios
                .post('/mine/contactWay')
                .then(({ data }) => {
                    if(data.data){
                        this.contactWay=data.data
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-order-detail {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        color: rgb(51, 51, 51);
        text-align: left;
        .card {
            margin-bottom: 8px;
            padding: 16px 12px;
            background-color: #fff;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .card-address {
            display: flex;
            align-items: center;
            .image-address {
                width: 28px;
                height: 28px;
                margin-right: 10px;
            }
            .info {
                flex: 1;
            }
            .user {
                margin-bottom: 10px;
                line-height: 24px;
            }
            .name {
                margin-right: 10px;
                font-size: 16px;
            }
            .tel {
                font-size: 12px;
                color: rgb(153, 153, 153)
            }
            .address {
                line-height: 24px;
                word-break: break-all
            }
        }
        .card-row {
            display: flex;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.row-light-grey {
                color: rgb(153, 153, 153);
                font-size: 12px;
            }
            .text-right {
                text-align: right;
            }
            .color-red {
                color: rgb(232, 63, 68);
            }

        }
        .card-price {
            padding-bottom: 6px;
            .card-row {
                justify-content: space-between;
            }
            .thick-row {
                margin: 0;
                padding: 10px 0;
                border-top: 1px solid #f5f5f5;
            }
        }
        .card-order {
            .card-row {
                color: rgb(102, 102, 102);
                font-size: 12px;
                &.row-button {
                    justify-content: space-around;
                    margin-top: 16px;
                    padding-top: 13px;
                    border-top: 1px solid #f5f5f5;
                }
                .button-item {
                    display: flex;
                    align-content: center;
                    cursor: pointer;
                    font-size: 14px;
                }
                .image-button {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                }
                a{
                    color: #666666
                }
            }
            .row-key {
                width: 48px;
                margin-right: 16px;
            }
        }
        .card-title {
            margin: 0 0 16px;
            font-size: 16px;
            font-weight: normal;
        }
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
