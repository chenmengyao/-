<template>
    <div class="suwis-score">
        <div class="button-line">
            <span class="button" @click="ruleShow = true">积分规则</span>
        </div>
        <div class="my-score">
            <div class="current-score">{{score_balance}}</div>
            <div class="current-desc">（当前积分）</div>
            <div class="history-score">
                <div class="yesterday">昨日获得积分：{{score_lastday}}</div>
                <div class="total">累积获得积分：{{score_sum}}</div>
            </div>
        </div>
        <div class="score-list-box">
            <div class="top-bar"></div>
            <ul class="score-list">
                <van-list
                    v-model="loading"
                    finished-text="没有积分记录了"
                    error-text="请求失败，点击重新加载"
                    :error.sync="error"
                    :finished="finished"
                    @load="getList">
                    <van-cell
                        v-for="item in score_log"
                        :center="true"
                        :key="item.id"
                        :title="item.time | date"
                        :label="item.type"
                        :value-class="[item.sta === 1 ? 'color-green' : 'color-red']"
                        :value="item | score"/>
                </van-list>
            </ul>
            <div class="bottom-bar"></div>
        </div>

        <van-popup v-model="ruleShow" :close-on-click-overlay="false">
            <div class="title">积分规则</div>
            <p class="para">① 每消费满{{scoreRoule.score_get}}元（实际付款）可以获得1积分；</p>
            <p class="para">② 购物时，{{scoreRoule.score_use}}积分可以抵扣现金1元；</p>
            <p class="para">③ 从注册日起，每满一年积分自动清零。</p>
            <div class="close" @click="ruleShow = false">×</div>
        </van-popup>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        filters: {
            date: v => moment(v*1000).format('YYYY-MM-DD HH:mm:ss'),
            score: v => {
                const symbol = v.sta === 1 ? '+' : '-'
                return symbol + v.score
            }
        },
        data() {
            return {
                error: false,
                finished: false,
                loading: false,
                ruleShow: false,
                score_balance: 0,
                score_lastday: 0,
                score_log: [],
                score_sum: 0,
                scoreRoule: {score_get:0,score_use:0}
            }
        },
        methods: {
            getList() {
                this.$axios
                    .post('/mine/myscore')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.finished = true
                            if (data.data) {
                                Object.assign(this, data.data)
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
        }
    }
</script>

<style scoped lang="scss">
    .suwis-score {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        color: #333;
        background: #f5f5f5 url(../../../assets/uc/bg-score@2x.png) no-repeat;
        -webkit-background-size: cover;
        background-size: contain;
        .button-line {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 10px 14px;
            color: #fff;
            font-size: 14px;
            line-height: 24px;
        }
        .my-score {
            color: #fff;
            text-align: center;
            .current-score {
                margin-top: 10px;
                font-size: 30px;
                font-weight: 600;
            }
            .current-desc {
                margin-top: 8px;
                font-size: 10px;
            }
            .history-score {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding: 0 38px;
                font-size: 10px;
            }
        }
        .score-list-box {
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;
            margin: 20px 0 0;
            .top-bar {
                z-index: 99;
                height: 12px;
                margin: 0 8px;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgb(215, 190, 210);
            }
            .score-list {
                flex: 1;
                margin: 0 14px 30px;
                background: #fff;
                .color-red {
                    color: #e83f44;
                }
                .color-green {
                    color: #14af44;
                }
            }
            .bottom-bar {

            }

        }
        .van-popup {
            box-sizing: border-box;
            width: 320px;
            height: 180px;
            padding: 20px;
            border-radius: 4px;
            overflow: unset;
            .title {
                margin-bottom: 16px;
                font-size: 16px;
                text-align: center;
            }
            .para {
                margin: 0;
                color: #666;
                font-size: 14px;
                line-height: 24px;
            }
            .close {
                position: absolute;
                bottom: -70px;
                left: 50%;
                width: 38px;
                height: 38px;
                line-height: 36px;
                border: 1px solid #fff;
                border-radius: 50%;
                color: #fff;
                font-size: 36px;
                text-align: center;
                transform: translateX(-50%);
            }
        }
    }
</style>