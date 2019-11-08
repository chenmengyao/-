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
      <van-field :password="true" type="password" v-model="formData.paypass" @focus="formMsg.paypass=''" :error-message="formMsg.paypass" placeholder="请输入6位数字支付密码">
        <img class="field-icon" slot="left-icon"  src="@/assets/login/paypwd@3x.png" alt="">
      </van-field>
      <van-field type="password" v-model="formData.paypassConfirm" @focus="formMsg.paypassConfirm=''" :error-message="formMsg.paypassConfirm" placeholder="请再次确认您的支付密码">
        <img class="field-icon" slot="left-icon"  src="@/assets/login/paypwd@3x.png" alt="">
      </van-field>
    </van-cell-group>
    <van-button :disabled="disabled" class="btn-submit" type="primary" @click="updateBefore">确认修改</van-button>
  </div>
</template>

<script>
import {
	Toast
} from 'vant'
import md5 from 'md5'
export default {
	data() {
		return {
			formData: {
				tel: '',
				code: '',
				paypass: '',
				paypassConfirm: ''
			},
			formMsg: {
				tel: '',
				code: '',
				paypass: '',
				paypassConfirm: ''
			},
			countDownText: 0,
			disabled: false
		}
	},
	watch: {
		countDownText() {
			if (this.countDownText > 0) {
				setTimeout(() => {
					this.countDownText--
				}, 1000)
			}
		}
	},
	methods: {
		// 发送验证码
		sendCode() {
			console.log(this.$store.state.core.user.user.tel,55)
			if (!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.tel)||this.$store.state.core.user.user.tel!=this.formData.tel) {
				this.formMsg.tel = '请输入正确的号码'
				return
			}
			this.countDownText = 60
			this.$axios.post('login/getcode', {
				tel: this.formData.tel,
				type: 2
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
			if (!/^\d{6}$/.test(this.formData.paypass)) {
				this.formMsg.paypass = '请输入6位数字支付密码'
				return
			}
			if (this.formData.paypassConfirm !== this.formData.paypass) {
				this.formMsg.paypassConfirm = '两次输入的支付密码不一致'
				return
			}
			this.update()
		},
		// 更新
		async update() {
			this.disabled = true
			let params = {
				...this.formData
			}
			delete params.paypassConfirm
			params.paypass = md5(params.paypass)
			let res = await this.$axios.post('login/resetpaypsd', params)
			setTimeout(() => {
				this.disabled = false
			}, 600)
			if (res.data.code == 1) {
				Toast('修改成功')
				setTimeout(() => {
					// this.$router.push('/login')
					this.$router.replace({path: '/login'})
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
    padding-bottom: 50px;
    box-sizing: border-box;

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
