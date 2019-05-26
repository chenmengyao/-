<template>
    <div class="suwis-confirm-order">
        <van-cell-group class="address">
            <van-cell :title="`收货人：${shopData.express_name}（${shopData.express_tel}）`" />
            <van-cell title-class="cell-flex">
                <template slot="title">
                    收地址：{{shopData.express_address}}
                    <van-icon name="arrow" size="10px" color="#b4b4b4" style="margin-left: 28px;"/>
                </template>
            </van-cell>
        </van-cell-group>

        <div class="goods-box">
            <div class="shop-info">
                <img class="shop-logo" src="@/assets/orders/shop-logo.png" alt="店铺头像" width="20" height="20">
                <span class="shop-name">{{shopData.store_name}}</span>
            </div>
            <van-card
                v-for="goods in order"
                :key="goods.goods_id"
                :num="goods.num"
                :price="goods.goods_price"
                :title="goods.goods_name"
                :thumb="goods.goods_img"
                @click="onClick(goods)">
                <template v-if="goods.desc && goods.desc.length" #desc>
                    <div class="card-desc">
                        <span v-for="desc in shopData.desc" :key="desc">{{desc}}</span>
                    </div>
                </template>
                <template v-if="goods.tags && goods.tags.length" #tags>
                    <div class="card-tags">
                        <van-tag class="card-tag" color="rgba(240,145,75,.16)" v-for="tag in shopData.tags">{{tag}}</van-tag>
                    </div>
                </template>
            </van-card>
        </div>

        <van-cell-group class="personal-box">
            <van-cell title="购买数量" center value-class="cell-content">
                <template>
                    <van-stepper v-model="shopData.num" />
                </template>
            </van-cell>
            <van-cell title="配送方式" center value-class="content">
                <template>
                    普通快递 <span style="font-size: 10px">（运费：￥0.00）</span>
                </template>
            </van-cell>
            <van-field
                v-model="shopData.desc"
                clearable
                label="买家留言"
                placeholder="请填写备注信息" />
        </van-cell-group>

        <van-cell-group class="discount-box">
            <van-cell center value-class="cell-content">
                <template slot="title">
                    <van-checkbox v-model="shopData.coupon">卖家优惠券</van-checkbox>
                </template>
                <template>
                    去使用
                    <van-icon name="arrow" size="10px" color="#b4b4b4"/>
                </template>
            </van-cell>
            <van-cell center value-class="cell-content short-content">
                <template slot="title">
                    <van-checkbox v-model="shopData.coupon">会员优惠 <span style="color: #b4b4b4;font-size: 12px;line-height: 24px;">（会员折扣9.5折）</span></van-checkbox>
                </template>
                <template>
                    -20
                </template>
            </van-cell>
            <van-cell center value-class="cell-content short-content">
                <template slot="title">
                    <van-checkbox v-model="shopData.coupon">积分抵扣 <span style="color: #b4b4b4;font-size: 12px;line-height: 24px;">（可用积分：1234）</span></van-checkbox>
                </template>
                <template>
                    去使用
                    <van-icon name="arrow" size="10px" color="#b4b4b4"/>
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="result-box">
            <van-cell title="还需支付" center value-class="cell-content">
                <template>
                    <span style="color: #e83f44">￥20</span>
                </template>
            </van-cell>
        </van-cell-group>

        <div class="submit-box">
            <span>合计：<span style="color: #e83f44">￥20</span></span>
            <button class="submit">提交订单</button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                id: '',
                shopData: {
                    num: 1,
                    desc: '',
                    coupon: true
                },
                order: []
            }
        },
        methods: {
            onClick(goods) {

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
                            this.order = data.data
                            this.shopData = data.data[0]
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style scoped lang="scss">
    .suwis-confirm-order {
        min-height: 100vh;
        background: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        .address {
            margin-bottom: 8px;
            padding-bottom: 4px;
            background: url(../../../assets/orders/address-border@2x.png) bottom left no-repeat;
            -webkit-background-size: cover;
            background-size: contain;
        }
        .cell-flex {
            display: flex;
            justify-content: space-between;
        }
        .van-icon {
            line-height: 24px;

        }
        .cell-content {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            line-height: 24px;
            color: #666;
            font-size: 12px;
            &.short-content {
                flex: 0.3;
            }
        }
        .goods-box {
            margin-bottom: 8px;
            padding: 14px 15px;
            background-color: #fff;
            .van-card {
                padding: 0;
                background: #fff;
            }
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
        }
        .personal-box {
            margin-bottom: 8px;
        }

        .submit-box {
            position: fixed;
            display: flex;
            justify-content: flex-end;
            bottom: 0;
            width: 100%;
            height: 50px;
            background: #fff;
            font-size: 12px;
            line-height: 50px;
            .submit {
                margin-left: 14px;
                width: 100px;
                padding: 0;
                background:linear-gradient(54deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
                border: none;
                color: #fff;
            }
        }
    }
</style>