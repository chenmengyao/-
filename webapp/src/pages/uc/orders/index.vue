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
                            :key="shop[0].id"
                            :shop-data="shop[0]"
                            :goods-list="shop"
                            @on-click-item="onClickOrder">
                            <template #footer>
                                <ButtonLine
                                    :button-list="shop[0].sta | buttonList"
                                    :order-id="shop[0].id"
                                    @on-click="onButtonClick"></ButtonLine>
                            </template>
                        </ShopItem>
                    </template>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'

    // 按钮类型映射
    const buttonMap = {
        0: [
            {
                key: 'cancel',
                name: '取消订单',
                type: 'default'
            },
            {
                key: 'pay',
                name: '付款',
                type: 'warning'
            }
        ],
        1: [],
        2: [
            {
                key: 'viewLogistics',
                name: '查看物流',
                type: 'default'

            },
            {
                key: 'receive',
                name: '确认收货',
                type: 'warning'
            }
        ],
        4: [
            {
                key: 'viewLogistics',
                name: '查看物流',
                type: 'default'
            },
            {
                key: 'evaluate',
                name: '评价',
                type: 'warning'
            }
        ]
    }

    export default {
        name: "OrderList",
        components: {
            ButtonLine,
            ShopItem
        },
        filters: {
            buttonList: v => buttonMap[v]
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
                shopList: [
                    {
                        store_name: '小锅米线',
                        sta: 'toPay',
                        num: 7,
                        goods_price: 793,
                        desc: ['超好吃', '肉质鲜嫩'],
                        tags: ['物美价廉', '实惠']
                    },
                    {
                        store_name: '土鸡米线',
                        sta: 'toEvaluate',
                        num: 3,
                        goods_price: 256
                    },
                    {
                        store_name: '汆肉米线',
                        sta: 'toReceive',
                        num: 4,
                        goods_price: 199
                    }
                ],
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
                    path: '/uc/orders/confirm-order',
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
                    case 'receive':
                        this.confirmReceive()
                        break

                    case 'evaluate':
                        this.evaluateOrder()
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
            evaluateOrder() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .suwis-order-list {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
    }
</style>
