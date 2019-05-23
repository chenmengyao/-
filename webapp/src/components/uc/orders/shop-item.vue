<template>
    <div class="suwis-order-shop">
        <div class="header">
            <div class="shop-info">
                <img class="shop-logo" src="@/assets/index/clearance@3x.png" alt="店铺头像" width="20" height="20">
                <span class="shop-name">{{shopData.store_name}}</span>
                <van-icon name="arrow"/>
            </div>
            <span class="shop-status">{{ shopData.sta | status }}</span>
        </div>
        <van-card
            v-for="goods in goodsList"
            :key="goods.goods_id"
            :num="goods.num"
            :price="goods.goods_price"
            :title="goods.goods_name"
            :thumb="goods.goods_img">
            <template v-if="shopData.desc && shopData.desc.length" #desc>
                <div class="card-desc">
                    <span v-for="desc in shopData.desc" :key="desc">{{desc}}</span>
                </div>
            </template>
            <template v-if="shopData.tags && shopData.tags.length" #tags>
                <div class="card-tags">
                    <van-tag class="card-tag" color="rgba(240,145,75,.16)" v-for="tag in shopData.tags">{{tag}}</van-tag>
                </div>
            </template>
        </van-card>
        <div class="total-price" v-if="showPrice">共{{totalNum}}件商品 合计: ￥{{shopData.sum}}</div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    // 店铺状态映射
    const statusMap = {
        0: '等待买家付款',
        1: '等待卖家发货',
        2: '卖家已发货',
        4: '买家已确认收货',
        3: '等待卖家处理'
    }

    export default {
        props: {
            goodsList: {
                type: Array,
                default: []
            },
            shopData: {
                type: Object,
                required: true,
            },
            showPrice: {
                type: Boolean,
                default: true
            }
        },
        filters: {
            status: v => statusMap[v]
        },
        computed: {
            totalNum() {
                return this.goodsList.reduce((result, goods) => result + goods.num, 0)
            }
        },
        data() {
            return {

            }
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
        .van-card {
            background-color: #fff;
        }
        .van-card__content {
            text-align: left;
            .van-card__title {
                overflow: hidden;
                height: 28px;
                margin-bottom: 8px;
                font-size: 14px;
                word-break: break-all;
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