<template lang="html">
  <div class="suwis-login" :class="{loaded:loaded}" @keyup.enter="loginBefore">
    <div class="bg" :style="{'background-image':`url(${bgurl})`}"></div>
    <div class="form">
      <img class="avatar" src="@/assets/login/avatar@3x.png" alt="">
      <div class="tabs">
        <van-tabs v-model="modalType">
          <van-tab title="手机验证码登陆">
            <van-field v-model="formData.phone" placeholder="请输入您的11位手机号">
              <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
            </van-field>
            <van-field v-model="formData.code" placeholder="请输入验证码">
              <img class="field-icon" style="margin-top:4.3px;" slot="left-icon"  src="@/assets/login/code@3x.png" alt="">
               <van-button class="send-code" slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
            <van-button class="btn-submit" type="warning">登录</van-button>
            <div class="footer-link">
              <a href="#">忘记密码？</a>
              <br>
              <span class="ua">
                登陆即代表已同意<em>《用户服务协议》</em>
              </span>
            </div>
          </van-tab>
          <van-tab title="账号登陆">账号登陆 2</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  components: {},
  data() {
    return {
      // 登陆方式
      loginType: 'account',
      modalType: 'login',
      formData: {
        code: '',
        phone: '18687512006',
        pwd: '123456',
        pwdConfirm: '',
        type: 1
      },
      rules: {
        phone: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          required: true,
          pattern: /^1(3|4|5|7|8)\d{9}$/,
          message: '请输入正确的手机号',
          trigger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        pwdConfirm: [{
          required: true,
          message: '两次输入的密码不一致',
          trigger: 'blur',
          validator: (rule, value, callback) => {
            if (value !== this.formData.pwd) {
              callback(new Error('两次输入的密码不一致'))
            } else {
              callback()
            }
          }
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }]
      },
      bglist: ['images/login/00002.jpg', 'images/login/00003.jpg', 'images/login/00004.jpg'],
      loaded: false,
      disabled: false,
      codeDisabled: false,
      countDownText: 0,
      agreed: true,
      agreement: false,
      agreementText: '',
      token: 0,
      qrcodeurl: ''
    }
  },
  computed: {
    bgurl() {
      return this.bglist[Math.round(Math.random() * (this.bglist.length - 1))]
    }
  },
  created() {
    var img = new Image()
    img.src = this.bgurl
    img.onload = () => {
      this.loaded = true
    }
    // 清理状态
    this.$store.commit('core/exit', true)
  },
  watch: {
    countDownText() {
      if (this.countDownText > 0) {
        this.codeDisabled = true
        setTimeout(() => {
          this.countDownText--
        }, 1000)
      } else {
        this.codeDisabled = false
      }
    },
    loginType(val) {
      // 重置token
      this.token = 0
      // 获取二维码
      this.getQrcode()
    }
  },
  methods: {
    async loadAgreement() {
      this.agreement = true
      let result = await this.$axios.get('/system/get_service_agreement')
      this.agreementText = result.data.data
    },
    // 发送验证码
    sendCode() {
      let form
      if (this.modalType == 'login') form = 'codeForm'
      if (this.modalType == 'register') form = 'registerForm'
      if (this.modalType == 'reset') form = 'resetForm'
      this.$refs[form].validateField('phone', (msg) => {
        if (msg) {
          this.$Message.warning(msg)
        } else {
          this.countDownText = 60
          this.$axios.post('/system/send_code', {
            phone: this.formData.phone,
            type: this.modalType
          }).then(res => {
            if (res.data.code == 200) {
              this.$Message.success('验证码已发送，请注意查收')
            } else {
              this.$Message.warning(res.data.msg)
              this.countDownText = 0
            }
          })
        }
      })
    },
    // 登陆前校验
    loginBefore() {
      if (this.loginType == 'account') {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.login()
          } else {
            // TODO:
          }
        })
      }
      if (this.loginType == 'code') {
        this.$refs.codeForm.validate((valid) => {
          if (valid) {
            this.login()
          } else {
            // TODO:
          }
        })
      }
    },
    // 登陆
    login() {
      let params = {
        ...this.formData
      }
      params.pwd = md5(params.pwd)
      this.disabled = true
      this.$axios.post('/app/user/login', params).then(res => {
        setTimeout(() => {
          this.disabled = false
          this.$router.push('/orders')
        }, 600)
        let data = res.data
        if (data.code == 200) {
          // 储存用户信息
          this.$store.commit('core/login', data.data)
        } else {
          this.$Message.warning(data.msg)
        }
      })
    },
    registerBefore() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.register()
        } else {
          // TODO:
        }
      })
    },
    register() {
      let params = {
        ...this.formData
      }
      delete params.pwdConfirm
      params.pwd = md5(params.pwd)
      this.disabled = true
      this.$axios.post('/app/user/register', params).then(res => {
        setTimeout(() => {
          this.disabled = false
        }, 600)
        let data = res.data
        if (data.code == 200) {
          this.$Message.success('注册成功')
          // 储存用户信息
          this.modalType = 'login'
        } else {
          this.$Message.warning(data.msg)
        }
      })
    },
    resetBefore() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          this.reset()
        } else {
          // TODO:
        }
      })
    },
    reset() {
      let params = {
        ...this.formData
      }
      delete params.pwdConfirm
      params.pwd = md5(params.pwd)
      this.disabled = true
      this.$axios.post('/app/user/reset', params).then(res => {
        setTimeout(() => {
          this.disabled = false
        }, 600)
        let data = res.data
        if (data.code == 200) {
          this.$Message.success('密码重置成功')
          // 储存用户信息
          this.modalType = 'login'
        } else {
          this.$Message.warning(data.msg)
        }
      })
    },
    // async getQrcode() {
    //   let res = await this.$axios.get(`/app/user/get_qrcode/${this.token}`)
    //   this.token = res.data.data.token
    //   setTimeout(() => {
    //     // this.getQrcode()
    //   }, 2000)
    //   console.log(res)
    // },
    async getQrcode() {
      let res = await this.$axios.get(`/app/user/get_qrcode/${this.token}`)
      // 首次
      if (res.data.code == 200 && !res.data.data.user) {
        this.token = res.data.data.token
        this.qrcodeurl = `//qr.topscan.com/api.php?text=${this.token}`
      }
      // 登陆成功
      if (res.data.code == 200 && res.data.data.user) {
        // 储存用户信息
        this.$store.commit('core/login', res.data.data)
        setTimeout(() => {
          this.$router.push('/orders')
        }, 600)
        return true
      }
      // 二维码过期
      if (res.data.code == 650) {
        this.token = 0
      }
      setTimeout(() => {
        if (this.loginType == 'qrcode') this.getQrcode()
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-login {
    background: linear-gradient(90deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
    height: 100vh;
    position: relative;
    padding: 32vw 15px 15px;
    box-sizing: border-box;
    .form {
        background: #fff;
        border-radius: 4px;
        position: absolute;
        bottom: 15px;
        top: 80px;
        width: calc(100% - 30px);
        box-sizing: border-box;
        padding: 0 15px;

        .avatar {
            width: 80px;
            border-radius: 100%;
            margin-top: -40px;
            margin-bottom: 6vw;
        }

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
        }

        .footer-link {
            bottom: 60px;
            position: fixed;
            left: 0;
            text-align: center;
            width: 100%;
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
