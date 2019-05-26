<template lang="html">
    <div class="suwis-order-detail">
        <!-- 商品卡片 -->
        <ShopItem
            :shop-data="shopData"
            :goods-list="goodsList"
            :show-price="false"
        ></ShopItem>
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
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row row-light-grey">
                <span class="row-key">运费</span>
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row">
                <span class="row-key">订单总价</span>
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row">
                <span class="row-key">实际付款</span>
                <span class="row-value text-right color-red">￥ 192</span>
            </div>
        </div>
        <!-- 价格卡片 //-->

        <!-- 订单信息卡片 -->
        <div class="card card-order">
            <h5 class="card-title">订单信息</h5>
            <div class="card-row">
                <span class="row-key">商品总价</span>
                <span class="row-value">20190122123456789</span>
            </div>
            <div class="card-row">
                <span class="row-key">交易编号</span>
                <span class="row-value">{{shopData.number}}</span>
            </div>
            <div class="card-row">
                <span class="row-key">获得积分</span>
                <span class="row-value">{{shopData.get_score}}</span>
            </div>
            <div class="card-row">
                <span class="row-key">下单时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 0">
                <span class="row-key">付款时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 1">
                <span class="row-key">发货时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row" v-if="shopData.sta > 4">
                <span class="row-key">成交时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row row-button">
                <div class="button-item">
                    <img class="image-button" src="@/assets/orders/message@2x.png" alt="联系商家">
                    联系商家
                </div>
                <div class="button-item">
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
                @on-click="onButtonClick"></ButtonLine>
        </div>
        <!-- 按钮卡片 //-->
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'
    import ButtonMap from '@/constants/order/button-map'

    export default {
        components: {
            ShopItem,
            ButtonLine
        },
        filters: {
            buttonList: v => ButtonMap.filter(item => item.sta.includes(v))
        },
        data() {
            return {
                goodsList: [],
                shopData: {}
            }
        },
        methods: {
            onButtonClick(key, orderId) {
                switch (key) {
                    case 'cancel':
                        this.cancelOrder(orderId)
                        break
                    case 'pay':
                        this.payOrder(orderId)
                        break
                    case 'viewLogistics':

                        break
                    case 'receive':
                        this.confirmReceive(orderId)
                        break

                    case 'evaluate':
                        this.evaluateOrder(orderId)
                        break
                }
            },
            cancelOrder(orderId) {
                this.$dialog.confirm({
                    message: '确认取消此订单吗？'
                }).then(() => {
                    this.$axios
                        .post('/order/cancel', {
                            number: orderId
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.page = 1
                                this.$toast('取消订单成功');
                                this.getList()
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            },
            payOrder(orderId) {
                this.payTypeShow = true
            },
            // 确认收货收货
            confirmReceive(orderId) {
                this.$dialog.confirm({
                    message: '确认收到此商品吗？'
                }).then(() => {
                    this.$axios
                        .post('/order/receiving', {
                            order_id: orderId
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.page = 1
                                this.$toast('确认收货成功');
                                this.getList()
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })

            },
            evaluateOrder(orderId) {
                this.$router.push({
                    path: '/uc/orders/comment',
                    query: {
                        id: orderId
                    }
                })
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
                            this.shopData = Array.isArray(data.data) ? data.data[0] : data.data
                            this.goodsList = Array.isArray(data.data) ? data.data : [data.data]
                        }
                    } else {
                        this.$toast(data.msg);
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
        .card-price .card-row {
            justify-content: space-between;
        }
        .card-order {
            .card-row {
                color: rgb(102, 102, 102);
                font-size: 12px;
                &.row-button {
                    justify-content: space-around;
                    margin-top: 16px;
                }
                .button-item {
                    display: flex;
                    align-content: center;
                    cursor: pointer;
                }
                .image-button {
                    width: 16px;
                    height: 16px;
                    margin-right: 8px;
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
    }
</style>
