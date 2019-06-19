<template lang="html">
    <div class="suwis-popularize-details">
        <div class="top-box">
            <div class="info-box">
                <img :src="user.photo || require('@/assets/login/avatar@3x.png')" alt="" class="profile">
                <div class="info">
                    <div class="name">{{user.nickname}}</div>
                    <div class="location">{{user | location}} / {{user.name}}</div>
                </div>
                <div class="level">
                    <img src="@/assets/myvip.png" class="vip">
                    VIP
                </div>
            </div>
            <div class="sum-box">
                <dl class="sum">
                    <dt class="title">可用额度（元）</dt>
                    <dd class="available">{{user.vip_sum_use || 0}}</dd>
                </dl>
                <dl class="sum">
                    <dt class="title">VIP额度（元）</dt>
                    <dd class="total">{{user.vip_sum || 0}}</dd>
                </dl>
            </div>
        </div>

        <div class="list-box">
            <div class="top-bar">
                <div class="title">
                    <img src="@/assets/uc/cost.png" alt="" class="cost-img">
                    消费明细
                </div>
                <div class="button-item" @click="changeSort">
                    <span>消费时间</span>
                    <van-icon size="14px" :name="timeSort === 'up' ? 'arrow-up' : 'arrow-down'"></van-icon>
                </div>
            </div>
            <van-list
                v-model="loading"
                finished-text="没有消费明细了"
                error-text="请求失败，点击重新加载"
                :error.sync="error"
                :finished="finished"
                @load="getList">
                <template v-if="list && list.length">
                    <div class="cost-item" v-for="item in list">
                        <div class="line">
                            <span class="time">{{item.time | dateFmt}}</span>
                            <span class="amount">{{item.sum}}</span>
                        </div>
                        <div class="line">
                            <span class="pay-type">{{item.pay_type | payType}}</span>
                            <span class="status">{{item.sta | orderStatus}}</span>
                        </div>
                    </div>
                </template>
            </van-list>

        </div>

    </div>
</template>

<script>
    import payType from '@/constants/order/payType'
    import orderStatus from '@/constants/order/orderStatus'

    export default {
        filters: {
            location(v) {
                return (v.province + v.city + v.area) || '---'
            },
            orderStatus(v) {
                return orderStatus[v]
            },
            payType(v) {
                return payType[v].name
            }

        },
        data() {
            return {
                user: {},
                error: false,
                finished: false,
                loading: false,
                list: [],
                num: 20,            // 每页的数量
                page: 1,            // 页码
                timeSort: 'up'
            }
        },
        methods: {
            changeSort() {
                this.timeSort = this.timeSort === 'up' ? '' : 'up'
                this.getList()
            },
            getList(type = 'reset') {
                if (type === 'reset') {
                    this.list = []
                    this.page = 1
                }
                const { num, page } = this
                this.$axios
                    .post('/mine/generalize_detail', {
                        id: this.id,
                        page,
                        num,
                        time: this.timeSort,
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data && data.data.user) {
                                this.user = data.data.user
                                this.list = this.list.concat(data.data.order)
                                if (page * num > data.data.total) this.finished = true
                            } else {
                                this.finished = true
                            }
                        } else {
                            this.error = true
                            this.$toast(data.msg);
                        }
                        this.page++
                        this.loading = false
                    })
                    .catch(() => {
                        this.error = true
                    })
            }
        },
        created() {
            this.id = this.$route.query.id
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-popularize-details {
        min-height: 100vh;
        background-color: #f5f5f5;
        color: #333;
        font-size: 14px;
        .top-box {
            padding: 16px 14px;
            background-color: #fff;
        }
        .info-box {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            padding: 12px 14px;
            background: url('../../../assets/uc/vip-bc.png') no-repeat;
            background-size: cover;
            .profile {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #fff;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 10px;
                color: #fff;
            }
            .name {
                font-size: 16px;
            }
            .location {
                font-size: 10px;
            }
            .level {
                display: flex;
                align-items: center;
                align-self: flex-start;
                padding: 4px 6px;
                margin-left: 10px;
                background-color: #fff;
                border-radius: 10px;
                color: #e3b156;
                font-size: 12px;
            }
            .vip {
                width: 18px;
                height: 16px;
                margin-right: 4px;
            }
        }
        .sum-box {
            display: flex;
            text-align: center;
            .sum {
                flex: 1;
                margin: 0;
                &:first-child {
                    border-right: 1px solid #f5f5f5;
                }
                .title {
                    margin-bottom: 16px;
                    color: #666;
                    font-size: 12px;
                }
                .available, .total {
                    margin: 0;
                    color: #e83f44;
                    font-size: 16px;
                    line-height: 1.5;
                }
                .total {
                    color: #333;
                }
            }
        }

        .list-box {
            margin-top: 10px;
            padding: 16px 14px;
            background-color: #fff;
            .top-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                .title {
                    display: flex;
                    align-items: center;
                    color: #333;
                    font-size: 16px;
                }
                .cost-img {
                    width: 16px;
                    height: 18px;
                    margin-right: 8px;
                }
                .button-item {
                    display: flex;
                    align-items: center;
                    padding: 0 12px;
                }
                .van-icon {
                    margin-left: 8px;
                }
            }
            .cost-item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 44px;
                padding: 12px 14px;
                border-bottom: 1px solid #f5f5f5;
                .line {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #333;
                    font-size: 14px;
                }
                .pay-type {
                    color: #999;
                    font-size: 12px;
                }
                .status {
                    color: #f0914b;
                    font-size: 10px;
                }
            }
        }
    }
</style>
