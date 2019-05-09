<template lang="html">
  <div class="suwis-login" :class="{loaded:loaded}" @keyup.enter="loginBefore">
    <div class="bg" :style="{'background-image':`url(${bgurl})`}"></div>
    <div class="login-form">
      <div class="logo">
        <img src="images/logo_blue.png" alt="">
        蜗拖智能车货匹配平台
      </div>
      <div v-if="modalType=='login'">
        <Tabs v-model="loginType" :value="loginType">
          <TabPane label="账号登陆" name="account">
            <Form ref="loginForm" :model="formData" :rules="rules" label-position="top">
              <FormItem label="用户名" prop="phone">
                <Input v-model="formData.phone"></Input>
              </FormItem>
              <FormItem label="密码" prop="pwd">
                <Input v-model="formData.pwd" type="password"></Input>
              </FormItem>
              <FormItem style="text-align:right;">
                <Button style="width:100%;" :disabled="disabled" type="primary" @click="loginBefore">{{disabled?'登录中':'登录'}}</Button>
              </FormItem>
              <div style="display:flex;justify-content: space-between;width:100%;">
                <span style="font-size:14px;">
                  还没账号？<a href="javascript:;" @click="modalType='register'">立即注册</a>
                </span>
                <span>
                  <a href="javascript:;" @click="modalType='reset'">忘记密码？</a>
                </span>
              </div>
            </Form>
          </TabPane>
          <TabPane label="扫码登陆" name="qrcode">
            <div class="qrcode">
              <img :src="qrcodeurl" alt="">
              <span class="tips">打开货主端APP扫一扫</span>
              <a href="javascript:;" @click="modalType='appdownload'">下载蜗托APP</a>
              <p class="tips gray">（如扫码登录无反应，请在APP重新登录后再试）</p>
            </div>
          </TabPane>
          <TabPane label="短信登陆" name="mscode">
            <Form ref="codeForm" :model="formData" :rules="rules" label-position="top">
              <FormItem label="手机号" prop="phone">
                <Input v-model="formData.phone"></Input>
              </FormItem>
              <FormItem label="短信验证码" prop="code">
                <div style="display:flex;justify-content: space-between;width:100%;">
                  <Input v-model="formData.code" type="text" style="width:180px;"></Input>
                  <Button style="width:128px;" :disabled="codeDisabled" type="success" @click="sendCode">
                    <span v-if="!codeDisabled">
                      获取短信验证码
                    </span>
                    <span v-else>
                      {{countDownText}}s后可重新发送
                    </span>
                  </Button>
                </div>
              </FormItem>
              <FormItem style="text-align:right;">
                <Button style="width:100%;" :disabled="disabled" type="primary" @click="loginBefore">{{disabled?'登录中':'登录'}}</Button>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>
      <div v-if="modalType=='appdownload'">
        <div class="qrcode">
          <img src="images/qrcode.jpg" alt="">
          <span class="tips">扫码下载货主版APP</span>
          <a href="javascript:;" @click="modalType='login'">账号登陆</a>
        </div>
      </div>
      <div v-if="modalType=='register'">
        <Form ref="registerForm" :model="formData" :rules="rules" label-position="top">
          <FormItem label="用户名" prop="phone">
            <Input v-model="formData.phone"></Input>
          </FormItem>
          <FormItem label="短信验证码" prop="code">
            <div style="display:flex;justify-content: space-between;width:100%;">
              <Input v-model="formData.code" type="text" style="width:180px;"></Input>
              <Button style="width:128px;" :disabled="codeDisabled" type="success" @click="sendCode">
                <span v-if="!codeDisabled">
                  获取短信验证码
                </span>
                <span v-else>
                  {{countDownText}}s后可重新发送
                </span>
              </Button>
            </div>
          </FormItem>
          <FormItem label="密码" prop="pwd">
            <Input v-model="formData.pwd" type="password"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="pwdConfirm">
            <Input v-model="formData.pwdConfirm" type="password"></Input>
          </FormItem>
          <div style="margin-bottom:15px;">
            <Checkbox v-model="agreed">
              <span>注册即代表同意<a href="javascript:;" @click="loadAgreement">《蜗拖智能车货匹配平台服务协议》</a></span>
            </Checkbox>
          </div>
          <FormItem style="text-align:right;">
            <Button style="width:100%;" :disabled="disabled" type="primary" @click="registerBefore">{{disabled?'注册种':'注册成为蜗拖货主'}}</Button>
          </FormItem>
          <div style="display:flex;justify-content: flex-end;width:100%;">
            <span>
              <a href="javascript:;" @click="modalType='login'">已有账号,立即登陆</a>
            </span>
          </div>
        </Form>
      </div>
      <div v-if="modalType=='reset'">
        <Form ref="resetForm" :model="formData" :rules="rules" label-position="top">
          <FormItem label="用户名" prop="phone">
            <Input v-model="formData.phone"></Input>
          </FormItem>
          <FormItem label="短信验证码" prop="code">
            <div style="display:flex;justify-content: space-between;width:100%;">
              <Input v-model="formData.code" type="text" style="width:180px;"></Input>
              <Button style="width:128px;" :disabled="codeDisabled" type="success" @click="sendCode">
                <span v-if="!codeDisabled">
                  获取短信验证码
                </span>
                <span v-else>
                  {{countDownText}}s后可重新发送
                </span>
              </Button>
            </div>
          </FormItem>
          <FormItem label="密码" prop="pwd">
            <Input v-model="formData.pwd" type="password"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="pwdConfirm">
            <Input v-model="formData.pwdConfirm" type="password"></Input>
          </FormItem>
          <FormItem style="text-align:right;">
            <Button style="width:100%;" :disabled="disabled" type="primary" @click="resetBefore">重置密码</Button>
          </FormItem>
          <div style="display:flex;justify-content: flex-end;width:100%;">
            <span>
              <a href="javascript:;" @click="modalType='login'">已有账号,立即登陆</a>
            </span>
          </div>
        </Form>
      </div>
    </div>
    <!-- 注册协议 -->
    <Drawer title="《蜗拖智能车货匹配平台服务协议》" :width="800" placement="right" :closable="true" v-model="agreement">
      <div v-html="agreementText"></div>
    </Drawer>
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

}
</style>
