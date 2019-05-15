<template>
    <div class="suwis-order-list">
        <van-tabs animated v-model="activeTabIndex" @click="onClickTab">
            <van-tab v-for="tab in tabList" :title="tab.name" :key="tab.key">
                <ShopItem
                    v-for="shop in shopList"
                    :key="shop.name"
                    :shop-data="shop">
                    <template #footer>
                        <ButtonLine :button-list="shop.sta | buttonList"></ButtonLine>
                    </template>
                </ShopItem>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'

    // 按钮类型映射
    const buttonMap = {
        toPay: [
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
        toSend: [],
        toReceive: [
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
        toEvaluate: [
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
                        name: '全部订单'
                    },
                    {
                        key: 'toPay',
                        name: '待付款'
                    },
                    {
                        key: 'toSend',
                        name: '待发货'
                    },
                    {
                        key: 'toReceive',
                        name: '待收货'
                    },
                    {
                        key: 'toEvaluate',
                        name: '待评价'
                    }
                ]
            }
        },
        methods: {
            onClickTab(index) {
            },
        }
    }
</script>

<style scoped lang="scss">
    .suwis-order-list {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
    }
</style>