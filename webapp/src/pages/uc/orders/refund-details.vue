<template lang="html">
    <div class="suwis-refund-detail">
        <div class="top-tip">您已成功发起退款申请，请耐心等待商家处理 </div>
        <div class="main-content">
            <SimpleGood
                :name="goodInfo.goods_name"
                :desc="goodInfo.desc"
                :store-logo="goodInfo.goods_img"
            ></SimpleGood>
        </div>
        <van-cell>
            <template #title>
                换货原因 <span class="value">7天无理由换货</span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                退款金额 <span class="value"></span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                申请件数 <span class="value"></span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                申请时间 <span class="value"></span>
            </template>
        </van-cell>

        <van-cell-group>
            <van-cell>
                <template #title>
                    卖家处理意见 <span class="value"></span>
                </template>
            </van-cell>
            <van-cell>
                <template #title>
                    退货地址 <span class="value"></span>
                </template>
            </van-cell>
        </van-cell-group>

        <div class="button-line">
            <ButtonLine
                :button-list="goodInfo.sta | buttonList"
                :order-id="goodInfo.id"
                @on-click="onButtonClick"></ButtonLine>
        </div>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'
    import ButtonLine from '@/components/uc/orders/button-line'
    import { RefundButton } from '@/constants/order/button-map'

    export default {
        components: {
            ButtonLine,
            SimpleGood
        },
        filters: {
            buttonList(v) {
                return RefundButton[v] || []
            }
        },
        data() {
            return {
                goodInfo: {},
                id: ''
            }
        },
        methods: {
            onButtonClick(key, orderId) {
                switch (key) {
                    case 'contact':
                        break
                    case 'modify':
                        this.modify()
                        break
                    case 'cancel':
                        break
                    case 'logistics':
                        break

                }
            },
            modify() {
                this.$router.push({
                    path: '/uc/orders/apply',
                    query: {
                        id: this.id
                    }
                })
            }
        },
        created() {
            this.id = this.$route.query.id
            this.$axios
                .post('/order/goodsintor', {
                    order_id: this.id
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.goodInfo = data.data
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-refund-detail {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        color: #333;
        font-size: 14px;
        .top-tip {
            height: 40px;
            background:rgba(232, 63, 68, .13);
            color: #e83f44;
            line-height: 40px;
            text-align: center;
        }
        .main-content {
            margin-top: 50px;
        }
        .van-cell {
            .value {
                margin-left: 16px;
            }
        }
        .van-cell-group {
            margin-top: 8px;
        }
        .button-line {
            position: fixed;
            bottom: 0;
            box-sizing: border-box;
            width: 100%;
            padding: 16px 12px;
            background-color: #fff;
        }
    }
</style>
