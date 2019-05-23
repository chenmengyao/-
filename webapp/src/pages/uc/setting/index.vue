<template>
    <div class="suwis-setting">
        <van-cell title="会员头像" :center="true" to="/uc" value-class="content">
            <template>
                <img :src="user.photo || require('../../../assets/login/avatar@3x.png')" alt="头像" class="profile">
                <van-icon name="arrow" size="10px" color="#b4b4b4" style="margin-left: 28px;"/>
            </template>
        </van-cell>
        <van-cell title="用户昵称" :center="true" value-class="content">
            <template>
                {{user.nickname}}
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的二维码名片" :center="true" value-class="content">
            <template>
                <img src="@/assets/uc/qc-code-black@2x.png" alt="二维码" class="qc-code">
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的位置" :center="true" value-class="content">
            <template>
                {{user.city}}
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的收货地址" :center="true" value-class="content" to="/uc/setting/address">
            <van-icon name="arrow" size="10px" color="#b4b4b4"/>
        </van-cell>
        <van-cell title="登录密码" :center="true" value-class="content" to="/updatepwd">
            <template>
                修改
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="支付密码" :center="true" value-class="content" to="/updatepwd">
            <template>
                修改
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
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
                    .then(({ data }) => {
                        if (data.code === 1) {
                            data && Object.assign(this, data.data)
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            logout() {
                this.$axios
                    .post('/login/outlogin')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.$toast('退出成功');
                            this.$store.commit('core/exit')
                            this.$router.push('/login')
                        } else {
                            this.$toast(data.msg);
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
    background: #f5f5f5;
    box-sizing: border-box;
    font-size: 14px;
    .content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 24px;
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