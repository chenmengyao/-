<template lang="html">
    <div class="suwis-refund-detail">
        <div class="top-tip">您已成功发起退款申请，请耐心等待商家处理 </div>
        <div class="main-content">
            <SimpleGood
                :name="goodInfo.title"
                :desc="[goodInfo.header_one, goodInfo.header_two, goodInfo.header_three]"
                :store-logo="goodInfo.img"
            ></SimpleGood>
        </div>
        <van-cell>
            <template #title>
                换货原因 <span class="value">{{refundInfo.reason}}</span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                退款金额 <span class="value">￥{{refundInfo.price}}</span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                申请件数 <span class="value">{{refundInfo.num}}</span>
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                申请时间 <span class="value">{{refundInfo.time | dateFmt}}</span>
            </template>
        </van-cell>

        <van-cell-group>
            <van-cell>
                <template #title>
                    卖家处理意见 <span class="value">{{refundInfo.sta | refundStatus}}</span>
                </template>
            </van-cell>
            <van-cell>
                <template #title>
                    <div class="address-info">
                        <span>退货地址</span>
                        <div class="value">
                            <div>{{refundInfo.express_address}}</div>
                            <div>{{refundInfo.express_name}} <span v-if="refundInfo.express_tel">（{{refundInfo.express_tel}}）</span></div>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <div class="button-line">
            <ButtonLine
                :button-list="refundInfo.sta | buttonList"
                :order-id="+refundInfo.id"
                @on-click="onButtonClick"></ButtonLine>
        </div>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'
    import ButtonLine from '@/components/uc/orders/button-line'
    import refundStatus from '@/constants/order/refundStatus'
    import { RefundButton } from '@/constants/order/button-map'

    const typeMap = {
        refund: '退款',
        return: '退货退款',
        exchange: '换货'
    }

    export default {
        components: {
            ButtonLine,
            SimpleGood
        },
        filters: {
            buttonList: v => RefundButton.filter(item => item.sta.includes(v)),
            refundStatus:v => refundStatus[v]
        },
        data() {
            return {
                goodInfo: {},
                refundInfo: {}, // 退货信息
                order_id: ''
            }
        },
        methods: {
            /**
             *
             * @param key {String} 按钮的key
             * @param id {Number} 售后id
             */
            onButtonClick(key, id) {
                switch (key) {
                    case 'contact':
                        break
                    case 'logistics':
                        this.inputLogistics(id)
                        break
                    case 'modify':
                        this.modifyApplyInfo(this.order_id)
                        break
                    case 'cancel':
                        this.cancel(id)
                        break
                }
            },
            inputLogistics(id) {
                this.$router.push({
                    path: '/uc/orders/logistics-input',
                    query: {
                        refund_id: id,
                        order_id: this.order_id
                    }
                })
            },
            modifyApplyInfo(orderId) {
                let type
                Object.keys(typeMap).forEach(key => {
                    if (typeMap[key] === this.refundInfo.type) type = key
                })
                this.$router.push({
                    path: '/uc/orders/apply',
                    query: {
                        from: this.$route.path,
                        id: orderId,
                        type
                    }
                })
            },
            cancel(id) {
                this.$dialog.confirm({
                    title: '撤销售后申请',
                    message: '确定撤销售后申请吗'
                }).then(() => {
                    this.$axios
                        .post('/order/aftercancel', {
                            id
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('撤销申请成功')
                                this.$router.push('/uc/orders/refund')
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            }
        },
        created() {
            this.order_id = this.$route.query.id
            this.$axios
                .post('/order/goodsintor', {
                    order_id: this.order_id
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
            this.$axios
                .post('/order/afterdetail', {
                    order_id: this.order_id
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.refundInfo = data.data
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
            .address-info {
                display: flex;
                .value {
                    flex: 1;
                }
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
