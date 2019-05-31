<template lang="html">
  <div class="suwis-login" :class="{loaded:loaded}" @keyup.enter="loginBefore">
    <div class="form">
      <img class="avatar" src="@/assets/login/avatar@3x.png" alt="">
      <div class="tabs">
        <van-tabs v-model="loginType">
          <van-tab title="手机验证码登陆">
            <van-field v-model="formData.tel" @focus="formMsg.tel=''" :error-message="formMsg.tel"  type="tel" placeholder="请输入您的11位手机号">
              <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
            </van-field>
            <van-field v-model="formData.code" @focus="formMsg.code=''" :error-message="formMsg.code" placeholder="请输入验证码">
              <img class="field-icon" style="margin-top:2.2px;" slot="left-icon"  src="@/assets/login/code@3x.png" alt="">
               <van-button class="send-code" slot="button" size="small" type="primary" :disabled="countDownText>0" @click="sendCode">{{countDownText>0?`${countDownText}s后可重新发送`:'发送验证码'}}</van-button>
            </van-field>
            <van-button class="btn-submit" type="primary" @click="loginBefore">登录</van-button>
          </van-tab>
          <van-tab title="账号登陆">
            <van-field v-model="formData.nickname" @focus="formMsg.nickname=''" :error-message="formMsg.nickname" placeholder="请输入登录名">
              <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
            </van-field>
            <van-field v-model="formData.password" @focus="formMsg.password=''" :error-message="formMsg.password" type="password" placeholder="请输入验证码">
              <img class="field-icon" slot="left-icon"  src="@/assets/login/paypwd@3x.png" alt="">
            </van-field>
            <van-button :disabled="disabled" class="btn-submit" type="primary" @click="loginBefore">登录</van-button>
          </van-tab>
        </van-tabs>
        <div class="footer-link">
          <router-link to="/resetpwd">
            忘记密码？
          </router-link>
          <br>
          <span class="ua">
            登陆即代表已同意<router-link to="/user-agreement"><em>《用户服务协议》</em></router-link>
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
			// 登陆方式
			loginType: 1,
			formData: {
				tel: '18687512006',
				code: '',
				nickname: 'Ivorzk',
				password: '123456',
				type: 1
			},
			formMsg: {
				tel: '',
				code: '',
				nickname: '',
				password: '',
			},
			loaded: false,
			disabled: false,
			countDownText: 0
		}
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true
		}, 150)
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
		// 登陆前校验
		loginBefore() {
			// 验证码登陆
			if (this.loginType == 0) {
				if (!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.tel)) {
					this.formMsg.tel = '请输入正确的号码'
					return
				}
				if (!/^\d{6}$/.test(this.formData.code)) {
					this.formMsg.code = '请输入6位数的验证码'
					return
				}
			}
			// 账号登陆
			if (this.loginType == 1) {
				if (!this.formData.nickname) {
					this.formMsg.nickname = '请输入用户名'
					return
				}
				if (!this.formData.password) {
					this.formMsg.password = '请输入密码'
					return
				}
			}
			this.login()
		},
		// 登陆
		async login() {
			let params = {
				...this.formData
			}
			params.password = md5(params.password)
			this.disabled = true
			let res = await this.$axios.post(this.loginType == 0 ? 'login/tellogin' : 'login/acclogin', params)
			setTimeout(() => {
				this.disabled = false
			}, 600)
			let data = res.data
			if (data.code == 1) {
				let user = await this.getUserInfo(data.data)
				// 储存用户信息
				this.$store.commit('core/login', {
					token: data.data,
					user
				})
			} else {
				Toast(data.msg)
			}
		},
		// getuser
		async getUserInfo(token) {
			let res = await this.$axios.post('mine/index', {
				token
			})
			return res.data.data.user
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
    opacity: 0;
    transition: all 0.3s;
    &.loaded {
        opacity: 1;
    }
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
            margin: -40px auto 6vw;
            border: 3px solid #DD0B11;
            display: block;
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
            height: 20px;
            line-height: 20px;
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
