<template lang="html">
  <div class="suwis-register" :class="{loaded:loaded}">
    <div class="bg" :style="{'background-image':`url(${bgurl})`}"></div>
    <div class="form">
      <div class="tabs">
        <van-field v-model="formData.tel" @focus="formMsg.tel=''" :error-message="formMsg.tel" placeholder="请输入您的11位手机号">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
        </van-field>
        <van-field v-model="formData.code" @focus="formMsg.code=''" :error-message="formMsg.code" placeholder="请输入验证码">
          <img class="field-icon" style="margin-top:2.2px;" slot="left-icon"  src="@/assets/login/code@3x.png" alt="">
          <van-button class="send-code" slot="button" size="small" type="primary" :disabled="countDownText>0" @click="sendCode">{{countDownText>0?`${countDownText}s后可重新发送`:'发送验证码'}}</van-button>
       </van-field>
        </van-field>
        <van-field v-model="formData.nickname" @focus="formMsg.nickname=''" :error-message="formMsg.nickname" placeholder="请输入登录名">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/user@3x.png" alt="">
        </van-field>
        <van-field type="password" v-model="formData.password" @focus="formMsg.password=''" :error-message="formMsg.password" placeholder="请输入8-16位登录密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
        </van-field>
        <van-field type="password" v-model="formData.passwordConfirm" @focus="formMsg.passwordConfirm=''" :error-message="formMsg.passwordConfirm" placeholder="请再次确认您的登录密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
        </van-field>
        <van-field type="password" v-model="formData.paypass" @focus="formMsg.paypass=''" :error-message="formMsg.paypass" placeholder="请输入6位数字支付密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/paypwd@3x.png" alt="">
        </van-field>
        <van-field type="password" v-model="formData.paypassConfirm" @focus="formMsg.paypassConfirm=''" :error-message="formMsg.paypassConfirm" placeholder="请再次确认支付密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/paypwd@3x.png" alt="">
        </van-field>
        <van-button :disabled="disabled" @click="registerBefore" class="btn-submit" type="primary">注册</van-button>
        <div class="footer-link">
          <span class="ua">
            <van-checkbox v-model="agreed">登录即代表已同意<router-link to="/user-agreement"><em>《用户服务协议》</em></router-link></van-checkbox>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Toast
} from 'vant'
import md5 from 'md5'
export default {
  components: {},
  data() {
    return {
      formData: {
        tel: '',
        code: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
        paypass: '',
        paypassConfirm: ''
      },
      formMsg: {
        tel: '',
        code: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
        paypass: '',
        paypassConfirm: ''
      },
      countDownText: 0,
      disabled: false,
      agreed: true
    }
  },
  created() {

  },
  watch: {
    countDownText() {
      if (this.countDownText > 0) {
        this.codeDisabled = true
        setTimeout(() => {
          this.countDownText--
        }, 1000)
      }
    }
  },
  methods: {
    // 发送验证码
    sendCode() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.tel)) {
        this.formMsg.tel = '请输入正确的号码'
        return
      }
      this.countDownText = 60
      this.$axios.post('login/getcode', {
        tel: this.formData.tel,
        type: 1
      }).then(res => {
        if (res.data.code == 1) {
          Toast('验证码已发送，请注意查收')
        } else {
          Toast(res.data.msg)
          this.countDownText = 0
        }
      })
    },
    registerBefore() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.tel)) {
        this.formMsg.tel = '请输入正确的手机号'
        return
      }
      if (!/^\d{6}$/.test(this.formData.code)) {
        this.formMsg.code = '请输入6位数的验证码'
        return
      }
      if (!this.formData.nickname) {
        this.formMsg.nickname = '请输入登录名'
        return
      }
      if (!/^[a-zA-Z0-9]\w{5,17}$/.test(this.formData.password)) {
        this.formMsg.password = '请输入6-18位字母+数字的密码'
        return
      }
      if (this.formData.passwordConfirm !== this.formData.password) {
        this.formMsg.passwordConfirm = '两次输入的密码不一致'
        return
      }
      if (!/^\d{6}$/.test(this.formData.paypass)) {
        this.formMsg.paypass = '请输入6位数字支付密码'
        return
      }
      if (this.formData.paypassConfirm !== this.formData.paypassConfirm) {
        this.formMsg.paypassConfirm = '两次输入的支付密码不一致'
        return
      }
      if (!this.agreed) {
        Toast('请同意用户服务协议')
        return
      }
      this.register()
    },
    register() {
      let params = {
        ...this.formData
      }
      delete params.pwdConfirm
      delete params.passwordConfirm
      params.password = md5(params.password)
      params.paypass = md5(params.paypass)
      this.disabled = true
      this.$axios.post('login/registered', params).then(res => {
        setTimeout(() => {
          this.disabled = false
        }, 600)
        let data = res.data
        if (data.code == 1) {
          Toast('注册成功')
          setTimeout(() => {
            this.$router.push('/login')
          }, 600)
        } else {
          Toast(data.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-register {
    background: linear-gradient(90deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
    height: 100vh;
    position: relative;
    padding: 32vw 15px 15px;
    box-sizing: border-box;
    .form {
        background: #fff;
        border-radius: 4px;
        position: absolute;
        height: 139vw;
        top: 15px;
        width: calc(100% - 30px);
        box-sizing: border-box;
        padding: 15px;

        .field-icon {
            width: 19px;
            display: block;
            margin-top: 1.6px;
        }

        .btn-submit {
            border-radius: 50px;
            width: 100%;
            margin: 5vw auto;
        }

        .van-tab__pane {
            padding-top: 6vw;
        }

        .send-code {
            background: transparent;
            color: #E83F44;
            border: none;
            height: 20px;
        }

        .footer-link {
            top: 20vw;
            position: relative;
            text-align: center;
            font-style: normal;
            line-height: 26px;
            font-size: 14px;

            * {
                font-style: normal;
            }

            a {
                color: #333333;
            }

            .ua {
                padding-top: 6vw;
                display: inline-block;
                color: #999999;

                em {
                    color: #F0914B;
                }
            }
        }
    }
}
</style>
