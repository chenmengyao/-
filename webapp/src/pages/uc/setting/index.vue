<template>
    <div class="suwis-setting">
        <ul class="list">
            <li class="item">
                <div class="name">会员头像</div>
                <div class="value">
                    <img :src="user.photo || require('../../../assets/login/avatar@3x.png')" alt="头像" class="profile">
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)" style="margin-left: 28px;"/>
                </div>
            </li>
            <li class="item">
                <div class="name">用户昵称</div>
                <div class="value">
                    {{user.nickname}}
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </div>
            </li>
            <li class="item">
                <div class="name">我的二维码名片</div>
                <div class="value">
                    <img src="@/assets/uc/qc-code-black@2x.png" alt="二维码" class="qc-code">
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </div>
            </li>
            <li class="item remark">
                <div class="name">我的位置</div>
                <div class="value">
                    {{user.city}}
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </div>
            </li>
            <li class="item remark">
                <div class="name">我的收货地址</div>
                <router-link class="value" to="/uc/setting/address">
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </router-link>
            </li>
            <li class="item remark">
                <div class="name">登录密码</div>
                <div class="value">
                    修改
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </div>
            </li>
            <li class="item remark">
                <div class="name">支付密码</div>
                <div class="value">
                    修改
                    <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                </div>
            </li>
        </ul>
        <div class="login-out" @click="logout">退出当前账户</div>
    </div>
</template>

<script>
    export default {
        name: "setting",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            getUserInfo() {
                this.$axios
                    .post('/mine/index')
                    .then(res => {
                        if (res.data.code == 1) {
                            Object.assign(this.user, res.data.data.user)
                        } else {
                            this.$toast(res.data.msg);
                        }
                    })
            },
            logout() {
                this.$axios
                    .post('/login/outlogin')
                    .then(res => {
                        if (res.data.code == 1) {
                            this.$toast('退出成功');
                            this.$store.commit('core/exit')
                            this.$router.push('/login')
                        } else {
                            this.$toast(res.data.msg);
                        }
                    })
            }
        },
        created() {
            this.getUserInfo()
        }
    }
</script>

<style scoped lang="scss">
.suwis-setting {
    min-height: 100vh;
    background-color: rgb(245, 245, 245);
    box-sizing: border-box;
    .content {
        background-color: #fff;
    }
    .list {
        background: #fff;
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
            display: flex;
            justify-content: flex-end;
            min-height: 24px;
            min-width: 50px;
            align-items: center;
            color: rgb(153, 153, 153);
        }
        .profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .qc-code {
            width: 12px;
            height: 12px;
        }
        .van-icon-arrow {
            margin-left: 10px;
        }
    }
    .login-out {
        position: fixed;
        bottom: 0;
        width: 100%;
        height:45px;
        line-height: 45px;
        background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
        color: #fff;
        font-size: 14px;
        text-align: center;
    }
}
</style>