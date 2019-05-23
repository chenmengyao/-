<template lang="html">
  <div class="suwis-updatepwd">
    <van-cell-group>
      <van-field v-model="formData.tel" @focus="formMsg.tel=''" :error-message="formMsg.tel" placeholder="请输入您的11位手机号">
        <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
      </van-field>
      <van-field v-model="formData.code" @focus="formMsg.code=''" :error-message="formMsg.code" placeholder="请输入验证码">
        <img class="field-icon" style="margin-top:2.2px;" slot="left-icon"  src="@/assets/login/code@3x.png" alt="">
         <van-button class="send-code" slot="button" size="small" type="primary" :disabled="countDownText>0" @click="sendCode">{{countDownText>0?`${countDownText}s后可重新发送`:'发送验证码'}}</van-button>
      </van-field>
      <van-field type="password" v-model="formData.password" @focus="formMsg.password=''" :error-message="formMsg.password" placeholder="请输入8-16位登录密码">
        <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
      </van-field>
      <van-field type="password" v-model="formData.passwordConfirm" @focus="formMsg.passwordConfirm=''" :error-message="formMsg.passwordConfirm" placeholder="请再次确认您的登录密码">
        <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
      </van-field>
    </van-cell-group>
    <van-button class="btn-submit" type="primary" @click="updateBefore">确认修改</van-button>
  </div>
</template>

<script>
import {
  Toast
} from 'vant'
export default {
  data() {
    return {
      formData: {
        tel: '',
        code: '',
        password: '',
        passwordConfirm: ''
      },
      formMsg: {
        tel: '',
        code: '',
        password: '',
        passwordConfirm: ''
      },
      countDownText: 0
    }
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
        tel: this.formData.tel
      }).then(res => {
        if (res.data.code == 1) {
          Toast('验证码已发送，请注意查收')
        } else {
          Toast(res.data.msg)
          this.countDownText = 0
        }
      })
    },
    // 校验
    updateBefore() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.tel)) {
        this.formMsg.tel = '请输入正确的手机号'
        return
      }
      if (!/^\d{6}$/.test(this.formData.code)) {
        this.formMsg.code = '请输入6位数的验证码'
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
      this.update()
    },
    // 更新
    async update() {
      let res = await this.$axios.post('login/resetpsd', this.formData)
      if (res.data.code == 1) {
        Toast('修改成功')
        setTimeout(() => {
          this.$router.push('/login')
        }, 600)
      } else {
        Toast(res.data.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-updatepwd {
    background: rgba(245,245,245,1);
    height: 100vh;

    .field-icon {
        width: 19px;
        display: block;
        margin-top: 1.6px;
    }

    .btn-submit {
        border-radius: 50px;
        width: calc(100% - 30px);
        margin: 5vw auto;
        position: absolute;
        bottom: 15px;
        left: 15px;
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
}
</style>
