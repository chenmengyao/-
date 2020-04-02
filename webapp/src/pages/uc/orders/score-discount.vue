<template>
    <div class="suwis-score-discount">
        <van-cell-group class="score-box">
            <van-cell center value-class="cell-content">
                <template slot="title">
                    我的积分：{{score_balance}}分
                </template>
            </van-cell>
            <van-cell center value-class="cell-content">
                <template slot="title">
                    可用积分：{{score_need}}分
                    <span class="use-all" @click="score = score_need">全部使用</span>
                </template>
            </van-cell>
            <van-field
                v-model="score"
                clearable
                label="本次使用："
                placeholder="请输入本次使用的积分数" />
            <div class="bottom-tip">*积分兑换公式：{{scoreRoule.score_use}}积分=1元</div>
        </van-cell-group>

        <div class="button-line">
            <div class="deploy" @click="confirm">确定</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: {},
                score: '',
                scoreRoule: {score_get:0,score_use:0},
                score_need: 0,  // 该订单最大可用积分
                score_balance: ''   // 积分余额
            }
        },
        methods: {
            confirm() {
                
                if (+this.score > +this.score_balance) {
                    this.$toast('您的积分不足！');
                    return
                }
                if (+this.score > +this.score_need) {
                    this.$toast('输入的积分不能大于可用积分');
                    return
                }
                const { address_id, car_id, express_remark, num, stand_id } = this.query
                this.$router.replace({
                    path: '/uc/orders/confirm-order',
                    query: {
                        address_id,
                        car_id,
                        express_remark,
                        num,
                        stand_id,
                        score: this.score
                    }
                })
            }
        },
        created() {
            
            this.$axios
                .post('/mine/score_rule')
                .then(({ data }) => {
                    if (data.code === 1&&data.data) {
                        this.scoreRoule = data.data;
                    } else {
                        this.$toast(data.msg);
                    }
                })
            Object.assign(this.query, this.$route.query)
            this.score_need = this.query.score_need
            this.$axios
                .post('/mine/myscore')
                .then(({ data }) => {
                    if (data.code === 1) {
                        this.finished = true
                        if (data.data) {
                            this.score_balance = data.data.score_balance
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                    this.loading = false
                })
                .catch(() => {
                    this.error = true
                })
        }
    }
</script>

<style scoped lang="scss">
    .suwis-score-discount {
        min-height: 100vh;
        background: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        .score-box {
            background: #fff;
        }
        .bottom-tip {
            padding: 8px 16px;
            color: #f0914b;
            font-size: 10px;
            text-align: right;
        }
        .use-all {
            margin-left: 5px;
            padding: 2px 5px;
            color: #f0914b;
            font-size: 12px;
        }
        .button-line {
            width: 100%;
            margin-top: 30px;
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