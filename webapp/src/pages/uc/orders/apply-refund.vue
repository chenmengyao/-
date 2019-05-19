<template lang="html">
    <div class="suwis-apply-refund">
        <main class="content">
            <SimpleGood
                :name="goodInfo.name"
                :desc="goodInfo.desc"
            ></SimpleGood>
            <ul class="list">
                <li class="item">
                    <div class="name">货物状态</div>
                    <div class="value" @click="showStatus">
                        请选择
                        <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                    </div>
                </li>
                <li class="item">
                    <div class="name">退款原因</div>
                    <div class="value" @click="showReason">
                        请选择
                        <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                    </div>
                </li>
                <li class="item">
                    <div class="name">退款金额</div>
                    <div class="value">
                        <span class="color-red price">￥135</span>
                    </div>
                </li>
                <li class="item remark">
                    <div class="name">退款说明：</div>
                    <van-field
                        v-model="remark"
                        placeholder="请输入退款说明（选填）"/>
                </li>
            </ul>

            <div class="card">
                <div class="title">
                    上传凭证
                    <span class="subtitle">（最多3张）</span>
                </div>
                <div class="upload-line">
                    <van-uploader :after-read="onRead">
                        <div class="icon-line">
                            <van-icon name="photograph" size="24px" color="rgb(180, 180, 180)"/>
                        </div>
                        <div class="upload-text">添加图片</div>
                    </van-uploader>
                </div>
            </div>

            <div class="button-line">
                <div class="deploy">提交</div>
            </div>

        </main>

        <van-actionsheet v-model="statusShow" title="货物状态">
            <van-radio-group v-model="status">
                <van-cell-group>
                    <van-cell title="已收到货" clickable @click="changeStatus('1')">
                        <van-radio name="1" />
                    </van-cell>
                    <van-cell title="未收到货" clickable @click="changeStatus('2')">
                        <van-radio name="2" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-actionsheet>

        <van-actionsheet v-model="reasonShow" title="退款原因">
            <van-radio-group v-model="reason">
                <van-cell-group>
                    <van-cell title="7天无理由退款" clickable @click="changeReason('1')">
                        <van-radio name="1" />
                    </van-cell>
                    <van-cell title="地址、商品信息填写错误" clickable @click="changeReason('2')">
                        <van-radio name="2" />
                    </van-cell>
                    <van-cell title="商家缺货" clickable @click="changeReason('3')">
                        <van-radio name="3" />
                    </van-cell>
                    <van-cell title="其他" clickable @click="changeReason('4')">
                        <van-radio name="4" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-actionsheet>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'

    export default {
        components: {
            SimpleGood
        },
        data() {
            return {
                goodInfo: {
                    name: '猫猫包袋女2019新款潮韩版时尚水桶复',
                    desc: ['黑色', '时尚款']
                },
                remark: '',
                reason: '',
                status: '',
                reasonShow: false,
                statusShow: false
            }
        },
        methods: {
            changeReason(reason) {
                this.reason =reason
            },
            changeStatus(status) {
                this.status = status
            },
            showReason() {
                this.reasonShow = true
            },
            showStatus() {
                this.statusShow = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-apply-refund {
        min-height: 100vh;
        padding-top: 50px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        .content {
            background-color: #fff;
        }
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            border-bottom: 1px solid rgb(245, 245, 245);
            font-size: 14px;
            line-height: 24px;
            .value {
                color: rgb(153, 153, 153);
            }
            .color-red {
                color: #e83f44;
            }
            .price {
                margin-right: 15px;
            }
            .van-cell {
                flex: 1;
                padding: 0;
            }
        }

        .card {
            padding: 14px;
            .title {
                margin-bottom: 10px;
                text-align: left;
            }
            .subtitle {
                color: rgb(153, 153, 153);
                font-size: 12px;
            }
        }

        .upload-line {
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            .van-uploader {
                width: 64px;
                height: 64px;
                margin-right: 10px;
                border: 1px dashed rgb(136, 136, 136);
                text-align: center;
                color: rgb(180, 180, 180);
            }
            .icon-line {
                margin-top: 12px;
            }
            .upload-text {
                font-size: 12px;
            }
        }
        .button-line {
            position: fixed;
            width: 100%;
            bottom: 25px;
            .deploy {
                width:323px;
                height:45px;
                margin: 0 auto;
                background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
                border-radius:25px;
                color: #fff;
                cursor: pointer;
                font-size: 16px;
                line-height: 45px;
            }
        }

        .van-actionsheet {
            padding-bottom: 80px;
            .van-cell__title {
                text-align: left;
            }
        }

    }
</style>
