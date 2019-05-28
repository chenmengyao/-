<template>
    <van-actionsheet v-model="show" title="确认付款">
        <van-cell-group>
            <van-cell title="请选择付款方式"></van-cell>
            <van-radio-group v-model="radio">
                <van-radio v-for="pay in typeList" :name="pay.key" :key="pay.key">
                    <div class="check-line">
                        <img :src="pay.imgUrl" alt="pay.name" class="pay-image">
                        {{pay.name}}
                        <!--<div class="content"></div>-->
                    </div>

                </van-radio>
            </van-radio-group>
        </van-cell-group>
    </van-actionsheet>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                radio: 'aliPay',
                typeList: [
                    {
                        key: 'aliPay',
                        name: '支付宝支付',
                        imgUrl: require('../../../assets/orders/ali-pay@2x.png')
                    },
                    {
                        key: 'wechatPay',
                        name: '微信支付',
                        imgUrl: require('../../../assets/orders/weixin@2x.png')
                    },
                    {
                        key: 'unionPay',
                        name: '银联支付',
                        imgUrl: require('../../../assets/orders/union-pay@2x.png')
                    },
                    {
                        key: 'scorePay',
                        name: '佣金余额支付',
                        imgUrl: require('../../../assets/orders/score-pay@2x.png')
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .check-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 50px;
        .pay-image {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
    }
</style>