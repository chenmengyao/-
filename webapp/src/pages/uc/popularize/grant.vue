<template lang="html">
    <div class="suwis-grant">
        <van-cell-group>
            <van-cell :center="true">
                <template #title>
                    昵称：{{detail.nickname}}
                </template>
            </van-cell>
            <van-cell :center="true">
                <template #title>
                    真实姓名：{{detail.name}}
                </template>
            </van-cell>
            <van-cell :center="true">
                <template #title>
                    性别：{{detail.sex | sex}}
                </template>
            </van-cell>
            <van-cell :center="true">
                <template #title>
                    地区：{{detail | location}}
                </template>
            </van-cell>
            <van-cell :center="true">
                <template #title>
                    电话：{{detail.tel}}
                </template>
            </van-cell>
            <van-field
                v-model.trim="grant"
                center
                clearable
                label="额度："
                label-width="45px"
                placeholder="请在此输入该用户的VIP额度">
                <span slot="button">元</span>
            </van-field>
        </van-cell-group>

        <div class="tip">
            <span style="color: #e83f44">*</span>从注册之日起满1年VIP额度自动清零
        </div>

        <div class="button-line">
            <button class="button" @click="submit">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        filters: {
            location(v) {
                const province = v.province || ''
                const city = v.city || ''
                const area = v.area || ''
                return (province + city + area) || '---'
            }
        },
        data() {
            return {
                detail: {},
                grant: ''   // 额度
            }
        },
        methods: {
            submit() {
                if (!this.grant) {
                    this.$toast('请填写发放额度')
                    return
                }
                this.$dialog.confirm({
                    message: `确认发放额度${this.grant}元？`
                }).then(() => {
                    this.$axios
                        .post('/mine/grantvip', {
                            id: this.id,
                            vip_sum: this.grant
                        })
                        .then(({ data }) => {
                            if (data.code === 1) {
                                this.$toast('发放额度成功');
                                this.$router.push('/uc/popularize')
                            } else {
                                this.$toast(data.msg);
                            }
                        })
                })
            }
        },
        created() {
            this.id = this.$route.query.id
            this.$axios
                .post('/mine/getgrantvip', {
                    id: this.id
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) this.detail = data.data
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-grant {
        position: relative;
        box-sizing: border-box;
        min-height: 100vh;
        background: #f5f5f5;
        color: #333;
        font-size: 14px;
        .tip {
            margin-top: 12px;
            padding: 0 24px;
            color: #999;
            font-size: 12px;
            text-align: right;
        }
        .button-line {
            position: absolute;
            bottom: 35px;
            width: 100%;
            color: #fff;
            line-height: 45px;
            text-align: center;
            .button {
                width: 320px;
                height: 45px;
                margin: 0 auto;
                padding: 0;
                background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
                border-radius: 50px;
                border: none;
            }
        }
    }
</style>
