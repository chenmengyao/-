<template lang="html">
    <div class="suwis-logistics-input">
        <van-cell-group>
            <van-field
                disabled
                v-model="express_title"
                label="物流公司"
                right-icon="arrow"
                placeholder="请选择物流公司"
                @click-right-icon="selectCompany"
            ></van-field>
            <van-field
                v-model.trim="express_code"
                label="快递单号"
                placeholder="请输入快递单号"
            ></van-field>
        </van-cell-group>

        <div class="button-line">
            <div class="deploy" @click="submit">提交</div>
        </div>

        <van-popup v-model="companyShow" position="bottom" :close-on-click-overlay="false">
            <van-picker
                show-toolbar
                title="选择物流公司"
                :columns="companyList"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                order_id: '',
                refund_id: '',
                companyList: [],    // 物流公司
                companyShow: false,
                express_title: '',
                express_code: ''
            }
        },
        methods: {
            onCancel() {
                this.companyShow = false
            },
            onConfirm(val) {
                this.express_title = val
                this.companyShow = false
            },
            selectCompany() {
                this.companyShow = true
            },
            submit() {
                const { express_title, express_code } = this
                if (!express_title) {
                    this.$toast('请选择物流公司')
                    return
                }
                if (!express_code) {
                    this.$toast('请输入快递单号')
                    return
                }
                this.$axios
                    .post('/order/afterexpress', {
                        id: this.refund_id,
                        express_title,
                        express_code
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.$toast('提交成功')
                            this.$router.push({
                                path: '/uc/orders/refund-details',
                                query: {
                                    id: this.order_id
                                }
                            })
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.refund_id = this.$route.query.refund_id
            this.order_id = this.$route.query.order_id
            this.$axios
                .post('/order/expresstitle')
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.companyList = data.data.map(item => item.content)
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
.suwis-logistics-input {
    min-height: 100vh;
    background: #f5f5f5;
    color: #333;
    font-size: 14px;
    .content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 24px;
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
            text-align: center;
        }
    }
}
</style>
