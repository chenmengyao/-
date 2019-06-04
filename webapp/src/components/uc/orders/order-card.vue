<template>
    <div class="suwis-order-shop">
        <div class="header">
            <div class="shop-info">
                <img class="shop-logo" src="@/assets/orders/shop-logo.png" alt="店铺头像" width="20" height="20">
                <span class="shop-name">{{resultData.store_name}}</span>
                <van-icon name="arrow"/>
            </div>
            <span class="shop-status">{{ resultData.sta | status }}</span>
        </div>

        <slot></slot>

        <div class="total-price" v-if="showPrice">共{{totalNum}}件商品 合计: ￥{{totalSum}}</div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    import GoodsItem from './goods-item'

    // 店铺状态映射
    const statusMap = {
        0: '等待买家付款',
        1: '等待卖家发货',
        2: '卖家已发货',
        3: '等待卖家处理',
        4: '买家已确认收货',
        5: '交易成功',
        6: '交易关闭'
    }

    export default {
        components: {
            GoodsItem
        },
        props: {
            goodsList: {
                type: Array,
                default: () => []
            },
            orderData: {
                type: [Object, Array],
                required: true,
            },
            showPrice: {
                type: Boolean,
                default: true
            },
            order: {
                type: [Array, Object],
                default: () => []
            }
        },
        filters: {
            status: v => statusMap[v]
        },
        computed: {
            resultData() {
                const { orderData } = this
                return Array.isArray(orderData) ? orderData[0] : orderData
            },
            totalNum() {
                const { orderData } = this
                if (Array.isArray(orderData)) {
                    return this.orderData.reduce((result, goods) => result + goods.num, 0)
                } else {
                    return orderData.num
                }
            },
            // 计算总价
            totalSum() {
                const { orderData } = this
                if (Array.isArray(orderData)) {
                    return this.orderData.reduce((result, goods) => result + goods.num * goods.goods_price, 0)
                } else {
                    return orderData.num * orderData.goods_price
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .suwis-order-shop {
        margin-bottom: 6px;
        padding: 14px 15px;
        background-color: #fff;
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .shop-info {
                display: flex;
                align-items: center;
            }
            .shop-logo {
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
            .shop-name {
                margin-right: 6px;
            }
            .van-icon-arrow {
                color: rgb(180, 180, 180);
            }
            .shop-status {
                font-size: 12px;
                color: rgb(232,63,68);
            }
        }

        .card-desc {
            margin-bottom: 8px;
            color: #999;
            font-size: 10px;
        }
        .card-tag {
            margin-right: 5px;
            color: rgba(240,145,75,1)
        }
        .total-price {
            margin: 6px 0 10px;
            text-align: right;
        }

    }
</style>