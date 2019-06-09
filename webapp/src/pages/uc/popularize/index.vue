<template lang="html">
    <div class="suwis-popularize">
        <template v-if="status === 'noData'">
            <img src="@/assets/uc/no-data@2x.png" alt="暂无数据" class="tip-image">
            <div class="tip-text">暂无相关数据哦～</div>
        </template>

        <template v-else-if="status === 'noRight'">
            <img src="@/assets/uc/no-data@2x.png" alt="暂无权限" class="tip-image">
            <div class="tip-text">您还不是团长，暂无推广权限</div>
            <button class="apply-grouper" @click="applyShow = true">申请成为团长</button>
        </template>

        <template v-else>
            <div class="name">
                <van-tabs v-model="activeTab" animated class="tabs" @change="onClickTab">
                    <van-tab v-for="tab in tabList" :title="tab.name" class="tab-item">
                        <van-list
                            v-model="loading"
                            finished-text="没有用户了"
                            error-text="请求失败，点击重新加载"
                            :error.sync="error"
                            :finished="finished"
                            @load="getList('add')">
                            <template v-if="list && list.length">
                                <div class="member-item" v-for="item in list">
                                    <div class="left" @click="toDetail(item.id)">
                                        <div class="title">
                                            <img :src="item.sex | sexUrl" class="profile">
                                            <span class="name">{{item.nickname}}</span>
                                            <img src="@/assets/myvip.png" class="vip">
                                            <span class="level">VIP</span>
                                        </div>
                                        <div class="info">{{item.city || '---'}} / {{item.tel}}</div>
                                        <div class="date">{{item.time | dateFmt}}</div>
                                    </div>
                                    <div class="right" :style="{'justify-content': tabStatus === 'new' ? 'center' : 'flex-end'}">
                                        <button v-if="tabStatus === 'new'" class="button" @click="grant(item.id)">发放额度</button>
                                        <span v-else-if="tabStatus === 'all'" class="sum">{{item.sum || 0}}</span>
                                    </div>
                                </div>
                            </template>
                        </van-list>
                    </van-tab>
                </van-tabs>
                <div class="button-line">
                    <div class="button-item" @click="changeSort('time')">
                        <span>注册时间</span>
                        <van-icon size="14px" :name="timeSort === 'up' ? 'arrow-up' : 'arrow-down'" :color="sortActive === 'time' ? '#f0914b' : '#999'"></van-icon>
                    </div>
                    <div class="button-item" v-if="tabStatus === 'all'" @click="changeSort('num')">
                        <span>消费金额</span>
                        <van-icon size="14px" :name="numSort === 'up' ? 'arrow-up' : 'arrow-down'" :color="sortActive === 'num' ? '#f0914b' : '#999'"></van-icon>
                    </div>
                </div>
            </div>

        </template>

        <!-- 申请成为团长弹框 -->
        <van-popup v-model="applyShow" :close-on-click-overlay="false">
            <div class="title">申请成为团长</div>
            <div class="cell">
                <div class="cell-title">
                    <img src="@/assets/uc/phone@2x.png" alt="电话" class="icon" >
                    电话：{{phoneText}}
                </div>
                <div id="clipboard-phone" class="value" :data-clipboard-text="phoneText">复制</div>
            </div>
            <div class="cell">
                <div class="cell-title">
                    <img src="@/assets/uc/email@2x.png" alt="邮箱" class="icon" >
                    邮箱：{{emailText}}
                </div>
                <div id="clipboard-email" class="value" :data-clipboard-text="emailText">复制</div>
            </div>
            <div class="close" @click="applyShow = false">×</div>
        </van-popup>
        <!-- 申请成为团长弹框 //-->
    </div>
</template>

<script>
    import defaultLogo from '@/assets/login/avatar@3x.png'
    import maleLogo from '@/assets/uc/male.png'
    import femaleLogo from '@/assets/uc/female.png'

    export default {
        filters: {
            sexUrl(sex) {
                const logoList = [defaultLogo, maleLogo, femaleLogo]
                return sex ? logoList[sex] : defaultLogo
            }
        },
        data() {
            return {
                activeTab: 0,
                applyShow: false,   // 申请成为团长弹框展示
                error: false,
                finished: false,
                loading: false,
                list: [],
                num: 20,            // 每页的数量
                page: 1,            // 页码
                phoneText: '400-818-9956',
                emailText: '745108931@qq.com',
                timeSort: 'up',
                numSort: 'up',
                sortActive: 'time',
                status: 'list',
                tabStatus: 'new',
                tabList: [
                    {
                        key: 'new',
                        name: '新注册',
                    },
                    {
                        key: 'all',
                        name: '全部'
                    }
                ]
            }
        },
        methods: {
            changeSort(type) {
                this.sortActive === type
                    ? this[`${type}Sort`] = this[`${type}Sort`] === 'up' ? '' : 'up'
                    : this.sortActive = type
                this.getList()
            },
            toDetail(id) {
                this.$router.push({
                    path: '/uc/popularize/details',
                    query: { id }
                })
            },
            getList(type = 'reset') {
                if (type === 'reset') {
                    this.list = []
                    this.page = 1
                }
                const { num, page } = this
                const url = this.tabStatus === 'new' ? '/mine/generalize_new' : '/mine/generalize_all'
                this.$axios
                    .post(url, {
                        page,
                        num,
                        time: this.timeSort,
                        sum: this.tabStatus === 'new' ? undefined : this.numSort
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data && data.data.user) {
                                this.list = this.list.concat(data.data.user)
                                if (page * num > data.data.total) this.finished = true
                            } else {
                                this.error = true
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
            },
            grant(id) {
                this.$router.push({
                    path: '/uc/popularize/grant',
                    query: { id }
                })
            },
            onClickTab(index) {
                this.tabStatus = this.tabList[index].key
                this.getList()
            }
        },
        mounted() {
            const clipboardPhone = new this.clipboard('#clipboard-phone')
            const clipboardEmail = new this.clipboard('#clipboard-email')
            clipboardPhone.on('success', () => {
                this.$toast('电话复制成功')
            })
            clipboardPhone.on('error', () => {
                this.$toast('电话复制失败，请手动复制')
            })
            clipboardEmail.on('success', () => {
                this.$toast('邮箱复制成功')
            })
            clipboardEmail.on('error', () => {
                this.$toast('邮箱复制失败，请手动复制')
            })
        }
    }
</script>

<style lang="scss" scopde>
    .suwis-popularize {
        position: relative;
        min-height: 100vh;
        text-align: center;
        .tip-image {
            margin-top: 30px;
            width: 214px;
            height: 148px;
        }
        .tip-text {
            margin-top: 30px;
            color: #999;
        }
        .apply-grouper {
            width: 160px;
            height: 44px;
            margin-top: 40px;
            color: #fff;
            border: none;
            background: linear-gradient(54deg, #f55c3c 0%, #f6603e 17%, #dd0b11 100%);;
            border-radius: 22px;
            font-size: 16px;
            line-height: 44px;
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
            }
            .cell {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 14px 0;
                .cell-title {
                    display: flex;
                    align-items: center;
                    color: #666;
                    font-size: 14px;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                }
                .value {
                    width: 40px;
                    height: 20px;
                    color: #e83f44;
                    font-size: 14px;
                    text-align: center;
                }
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

        .member-item {
            display: flex;
            padding: 14px 16px;
            border-bottom: 1px solid #f5f5f5;
            .left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 70px;
                flex: 1;
                text-align: left;
                .title {
                    display: flex;
                    align-items: center;
                }
                .profile {
                    width: 20px;
                    height: 20px;
                }
                .name {
                    margin-left: 6px;
                    color: #333;
                    font-size: 14px;
                }
                .vip {
                    width: 18px;
                    height: 16px;
                    margin-left: 6px;
                }
                .level {
                    margin-left: 4px;
                    color: #e3b156;
                }
                .info {
                    color: #666;
                    font-size: 12px;
                    text-indent: 26px;
                }
                .date {
                    color: #999;
                    font-size: 12px;
                    text-indent: 26px;
                }
            }
            .right {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                .button {
                    width: 70px;
                    height: 30px;
                    padding: 0;
                    line-height: 28px;
                    border: 1px solid #e83f44;
                    box-sizing: border-box;
                    color: #e83f44;
                    border-radius: 15px;
                    background: #fff;
                    font-size: 12px;
                    text-align: center;
                }
                .sum {
                    color: #999;
                    font-size: 12px;
                }
            }
        }

        .button-line {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            justify-content: flex-end;
            width: 60%;
            background: #fff;
            color: #666;
            font-size: 12px;
            line-height: 44px;
            .button-item {
                display: flex;
                align-items: center;
                padding: 0 12px;
            }
            .van-icon {
                margin-left: 8px;
            }
        }
    }
</style>
