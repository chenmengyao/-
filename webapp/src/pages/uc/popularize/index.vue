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
    export default {
        data() {
            return {
                applyShow: false,
                phoneText: '400-818-9956',
                emailText: '745108931@qq.com',
                status: 'noRight',
            }
        },
        methods: {
            getNewPopularize() {
                this.$axios
                    .post('/mine/generalize_new')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            console.log({data})
                            // data && Object.assign(this, data.data)
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.getNewPopularize()
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

<style lang="scss" scoped>
    .suwis-popularize {
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
    }
</style>
