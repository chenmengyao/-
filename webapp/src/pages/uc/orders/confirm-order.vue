<template>
    <div class="suwis-confirm-order">
        <van-cell-group class="address">
            <van-cell :title="`收货人：${address.name}（${address.tel}）`" />
            <van-cell title-class="cell-flex" clickable @click="selectAddress">
                <template slot="title">
                    收货地址：{{address | location}}
                    <van-icon name="arrow" size="10px" color="#b4b4b4" style="margin-left: 28px;"/>
                </template>
            </van-cell>
        </van-cell-group>

        <template v-if="shopList && shopList.length">
            <div class="goods-box" v-for="shop in shopList">
                <div class="shop-info">
                    <img class="shop-logo" :src="shop[0].logo || defaultShopLogo" alt="店铺头像" width="20" height="20">
                    <span class="shop-name">{{shop[0].name}}</span>
                </div>
                <van-card
                    v-for="goods in shop"
                    :key="goods.goods_id"
                    :num="orderFrom === 'single' ? num : goods.num"
                    :price="goods.price"
                    :title="goods.title"
                    :thumb="goods.img"
                    @click="onClick(goods)">
                    <template #desc>
                        <div class="desc-line">
                            <div class="desc-item" v-if="goods.header_one">{{goods.header_one}}</div>
                            <div class="desc-item" v-if="goods.header_two">{{goods.header_two}}</div>
                            <div class="desc-item" v-if="goods.header_three">{{goods.header_three}}</div>
                        </div>
                    </template>
                </van-card>
            </div>
        </template>

        <van-cell-group class="personal-box">
            <van-cell title="购买数量" v-if="orderFrom === 'single'" center value-class="cell-content">
                <template>
                    <van-stepper v-model="num" />
                </template>
            </van-cell>
            <van-cell title="配送方式" center value-class="content">
                <template>
                    普通快递 <span style="font-size: 10px">（运费：￥{{postage}}）</span>
                </template>
            </van-cell>
            <van-field
                v-model="express_remark"
                clearable
                label="买家留言"
                placeholder="请填写备注信息" />
        </van-cell-group>

        <van-cell-group class="discount-box">
            <van-cell center value-class="cell-content">
                <template slot="title">
                    <van-checkbox v-model="useCoupon" @change="getData">
                        卖家优惠券
                        <div v-show="coupon.sum"> 可优惠{{coupon.sum}}元</div>
                    </van-checkbox>
                </template>
                <template>
                    <div @click="selectCoupon">
                        去使用
                        <van-icon name="arrow" size="10px" color="#b4b4b4"/>
                    </div>
                </template>
            </van-cell>
            <van-cell center value-class="cell-content short-content">
                <template slot="title">
                    <van-checkbox v-model="useDiscount" @change="getData">会员优惠 <span style="color: #b4b4b4;font-size: 12px;line-height: 24px;">（会员折扣9.5折）</span></van-checkbox>
                </template>
                <template>
                    -{{discount}}
                </template>
            </van-cell>
            <van-cell center value-class="cell-content short-content">
                <template slot="title">
                    <van-checkbox v-model="useScore" @change="getData">
                        积分抵扣 <span style="color: #b4b4b4;font-size: 12px;line-height: 24px;">（可用积分：1234）</span>
                        <div v-show="score">使用{{score}}分</div>
                    </van-checkbox>
                </template>
                <template>
                    <div @click="setScore">
                        去使用
                        <van-icon name="arrow" size="10px" color="#b4b4b4"/>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="result-box">
            <van-cell title="还需支付" center value-class="cell-content">
                <template>
                    <span style="color: #e83f44">￥{{total}}</span>
                </template>
            </van-cell>
        </van-cell-group>

        <div class="submit-box">
            <span>合计：<span style="color: #e83f44">{{total}}</span></span>
            <button class="submit" @click="toPay">提交订单</button>
        </div>

        <PayType :show="payTypeShow" @close="payTypeShow = false" @select="selectPayType"></PayType>

        <CouponList v-model="couponShow" title="选择优惠券">
            <couponItem
                v-for="coupon in couponList"
                :title="coupon.title"
                :desc="`满${coupon.total}元即可使用`"
                :price="coupon.sum"
                :time="coupon.end_time | dateFmt"
                btn-text="使用"
                @click="onCouponClick(coupon)">
            </couponItem>
        </CouponList>
    </div>
</template>

<script>
    import defaultShopLogo from '@/assets/orders/shop-logo.png'
    import PayType from '@/components/uc/orders/pay-type'
    import CouponList from '@//components/coupon-list'
    import CouponItem from '@//components/coupon-item'

    export default {
        components: {
            CouponList,
            CouponItem,
            PayType
        },
        filters: {
            location(v) {
                return (v.province + v.city + v.area + v.address) || '---'
            }
        },
        computed: {
            postage() {
                return this.shopList.reduce((result, shop) => {
                    shop.forEach(goods => result += goods.postage)
                    return result
                }, 0)
            }
        },
        data() {
            return {
                address_id: '',
                address: {},
                car_id: '',
                couponList: [],
                coupon: {},   // 优惠券id
                couponShow: false,
                discount: 0,    // 折扣的金额
                useDiscount: true,   // 折扣
                defaultShopLogo,
                express_remark: '', // 备注
                num: 0,    // 直接购买时商品的数量
                score: 0,
                stand_id: '',
                shopList: [],
                total: 0,
                useCoupon: true,
                useScore: true,  // 积分
                orderFrom: '',  // 订单来源：single: 直接购买    car：购物车
                payTypeShow: false,
            }
        },
        methods: {
            getData() {
                let url, params
                if (this.orderFrom === 'single') {
                    url = '/goods/makesureorder'
                    params = {
                        stand_id: this.stand_id,
                        num: this.num,
                        coupon_sum: this.useCoupon ? this.coupon.sum : undefined,
                        is_vip: this.useDiscount ? 1 : undefined,
                        score_sum: this.useScore ? this.score : undefined
                    }
                } else if (this.orderFrom === 'car') {
                    url = '/car/makesureorder'
                    params = {
                        car_id: this.car_id,
                        coupon_sum: this.useCoupon ? this.coupon.sum : undefined,
                        is_vip: this.useDiscount ? 1 : undefined,
                        score_sum: this.useScore ? this.score : undefined
                    }
                }
                this.$axios
                    .post(url, params)
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data) {
                                this.handleData(this.orderFrom === 'single' ? [data.data.goods] : data.data.car)
                                this.total = data.data.total
                                this.discount = data.data.use_vipdiscount
                                this.couponList = data.data.coupon
                                this.address = data.data.address.find(item => this.address_id ? item.id === +this.address_id : item.sta === 1)
                                console.log(this.address)
                            }
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            // 将商品数据格式化为一个数组，该数组的项是以店铺为单元的商品数组
            handleData(data) {
                // 先生成按照店铺id作为key的对象
                const shopData = data.reduce((result, item) => {
                    if (result[item.id]) {
                        result[item.id].push(item)
                    } else {
                        result[item.id] = [item]
                    }
                    return result
                }, {})
                this.shopList = Object.values(shopData)
            },
            onClick(goods) {
                this.$router.push({
                    path: '/goods/details',
                    query: {
                        id: goods.id
                    }
                })
            },
            onCouponClick(coupon) {
                this.coupon = coupon
                this.couponShow = false
            },
            selectAddress() {
                this.$router.push({
                    path: '/uc/setting/address',
                    query: {
                        from: 'confirm-order',
                        car_id: this.orderFrom === 'single' ? undefined : this.car_id,
                        stand_id: this.orderFrom === 'single' ? this.stand_id : undefined,
                        num: this.orderFrom === 'single' ? this.num : undefined,
                        score: this.score
                    }
                })
            },
            selectCoupon() {
                this.couponList.length ? this.couponShow = true : this.$toast('抱歉，暂无可用优惠券')
            },
            selectPayType(key) {
                this.payTypeShow = false
            },
            setScore() {
                this.$router.push({
                    path: '/uc/orders/score-discount',
                    query: {
                        address_id: this.address_id,
                        car_id: this.orderFrom === 'single' ? undefined : this.car_id,
                        stand_id: this.orderFrom === 'single' ? this.stand_id : undefined,
                        num: this.orderFrom === 'single' ? this.num : undefined,
                    }
                })
            },
            toPay() {
                this.payTypeShow = true
                this.$axios
                    .post('/tgoods/topay', {
                        stand_id: this.stand_id,
                        num: this.num,
                        coupon_id: this.useCoupon ? this.coupon.id : undefined,
                        is_vip: this.useDiscount ? 1 : undefined,
                        score_sum: this.useScore ? this.score : undefined
                    })
            }
        },
        created() {
            if (this.$route.query.stand_id) {
                this.orderFrom = 'single'
                this.stand_id = this.$route.query.stand_id
                this.num = this.$route.query.num
            } else if (this.$route.query.car_id) {
                this.orderFrom = 'car'
                this.car_id = this.$route.query.car_id
            }
            this.score = this.$route.query.score
            this.address_id = this.$route.query.address_id
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    .suwis-confirm-order {
        min-height: 100vh;
        margin-bottom: 60px;
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
            .van-card__content {
                justify-content: space-between;
            }
            .van-card__title {
                height: 32px;
            }
            .desc-line {
                display: flex;
                flex-wrap: wrap;
                color: #999;
                .desc-item {
                    padding: 0 6px;
                    margin-right: 8px;
                    background:rgba(240,145,75,0.1);
                }
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