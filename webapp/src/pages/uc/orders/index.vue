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
                    @load="getList">
                    <template v-if="list && list.length">
                        <ShopItem
                            v-for="shop in list"
                            :key="Array.isArray(shop) ? shop[0].id : shop.id"
                            :shop-data="Array.isArray(shop) ? shop[0] : shop"
                            :goods-list="Array.isArray(shop) ? shop : [shop]"
                            @on-click-item="onClickOrder">
                            <template #footer>
                                <ButtonLine
                                    :button-list="(Array.isArray(shop) ? shop[0].sta : shop.sta) | buttonList"
                                    :order-id="Array.isArray(shop) ? shop[0].id : shop.id"
                                    @on-click="onButtonClick"></ButtonLine>
                            </template>
                        </ShopItem>
                    </template>
                </van-list>
            </van-tab>
        </van-tabs>
        <ScorePay :show="payTypeShow"></ScorePay>
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'
    import ScorePay from '@/components/uc/orders/pay-type'
    import ButtonMap from '@/constants/order/button-map'

    export default {
        name: "OrderList",
        components: {
            ButtonLine,
            ShopItem,
            ScorePay
        },
        filters: {
            buttonList: v => ButtonMap[v]
        },
        data() {
            return {
                activeTabIndex: 0,
                error: false,
                finished: false,
                loading: false,
                list: [],
                num: 20,            // 每页的数量
                page: 1,            // 页码
                sta: undefined,     // 不传sta为全部订单 0 待付款 1 待发货 2 待收货 3 退款/售后 4 待评价 5 已完成 6 已关闭
                payTypeShow: false,
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
            getList() {
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
            onClickTab(index) {
                this.sta = this.tabList[index].sta
                this.page = 1
                this.list = []
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
                    case 'viewLogistics':
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
            cancelOrder(orderId) {
                this.$dialog.confirm({
                    message: '该订单还未付款，您确定要取消吗？？'
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
            returnOrder(orderId) {
                this.$router.push({
                    path: '/uc/orders/servicetype',
                    query: {
                        id: orderId
                    }
                })
            },
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
            },
            deleteOrder(orderId) {
                this.$dialog.confirm({
                    message: '该订单已关闭／完成，您确定要删除吗？'
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
            }
        },
        created() {
            this.activeTabIndex = this.$route.query.activeTabIndex || 0
        }
    }
</script>

<style scoped lang="scss">
    .suwis-order-list {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
    }
</style>
