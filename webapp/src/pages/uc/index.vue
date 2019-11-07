<template lang="html">
    <div class="suwis-uc">
        <div class="uc-top-button">
            <img class="button" src="@/assets/uc/qr-code@2x.png" alt="二维码" v-if="user_type === 0 || user_type === 2" @click="barCodeScan">
            <router-link to="/uc/setting">
                <img class="button" src="@/assets/uc/setting@2x.png" alt="设置">
            </router-link>
        </div>
        <div class="uc-info">
            <img :src="user.photo || require('../../assets/login/avatar@3x.png')" alt="头像" class="profile">
            <div class="info">
                <div class="login-info">
                    <template v-if="logined">
                        {{user.name || user.nickname}}
                        <span class="level" v-if='user_type === 1'>
                            <img src="@/assets/myvip.png" alt="vip" class="vip">
                            VIP
                        </span>
                    </template>
                    <template v-else>
                        <router-link to="/login" class="link">
                            请先登录／注册
                            <van-icon name="arrow" size="14px" color="#fff"/>
                        </router-link>
                    </template>
                </div>
                <div class="location">
                    <van-icon name="location" color="#fff"/>
                    {{ (user.province + user.city) || '---' }}
                </div>
            </div>
        </div>
        <div class="my-order">
            <div class="title">
                <span>我的订单</span>
                <router-link to="/uc/orders?type=0000" class="link">
                    全部订单
                    <van-icon name="arrow" size="10px" color="rgb(153,153,153)" style="margin-left: 6px"/>
                </router-link>
            </div>

            <div class="order-list">
                <router-link to="/uc/orders?activeTabIndex=1&type=0000" class="order-item">
                    <img src="@/assets/uc/pay@2x.png" alt="代付款" class="order-image">
                    <span class="item-name">待付款</span>
                    <span class="item-num">{{ sta_0 }}</span>
                </router-link>
                <router-link to="/uc/orders?activeTabIndex=2&type=0000" class="order-item">
                    <img src="@/assets/uc/send@2x.png" alt="代发货" class="order-image">
                    <span class="item-name">待发货</span>
                    <span class="item-num">{{ sta_1 }}</span>
                </router-link>
                <router-link to="/uc/orders?activeTabIndex=3&type=0000" class="order-item">
                    <img src="@/assets/uc/receive@2x.png" alt="代收货" class="order-image">
                    <span class="item-name">待收货</span>
                    <span class="item-num">{{ sta_2 }}</span>
                </router-link>
                <router-link to="/uc/orders?activeTabIndex=4&type=0000" class="order-item">
                    <img src="@/assets/uc/evaluate@2x.png" alt="代评价" class="order-image">
                    <span class="item-name">待评价</span>
                    <span class="item-num">{{ sta_4 }}</span>
                </router-link>
                <router-link to="/uc/orders/refund" class="order-item">
                    <img src="@/assets/uc/refund@2x.png" alt="售后中" class="order-image">
                    <span class="item-name">售后中</span>
                    <span class="item-num">{{ sta_3 }}</span>
                </router-link>
            </div>
        </div>

        <ul class="option-list">
            <li class="option-li">
                <router-link to="/uc/auction" class="option-item link">
                    <img src="@/assets/orders/auction@2x.png" alt="" class="option-image">
                    <span class="option-name">我的竞拍</span>
                </router-link>

                <router-link to="/uc/coupons" class="option-item link">
                    <img src="@/assets/uc/my-coupon@2x.png" alt="" class="option-image">
                    <span class="option-name">我的卡券</span>
                </router-link>

                <router-link to="/uc/footprint" class="option-item link">
                    <img src="@/assets/uc/foot.png" alt="" class="option-image">
                    <span class="option-name">我的足迹</span>
                </router-link>

            </li>
            <li class="option-li">
                <a href="javascript:;" class="option-item link" @click="toVip">
                    <img src="@/assets/uc/my-vip@2x.png" class="option-image">
                    <span class="option-name">我的VIP</span>
                </a>

                <router-link to="/uc/score" class="option-item link">
                    <img src="@/assets/uc/my-score@2x.png" alt="" class="option-image">
                    <span class="option-name">我的积分</span>
                </router-link>

                <router-link to="/uc/popularize" class="option-item link">
                    <img src="@/assets/uc/my-extend@2x.png" alt="" class="option-image">
                    <span class="option-name">我的推广</span>
                </router-link>
            </li>
            <li class="option-li">
                <router-link to="/mine/commission" class="option-item link">
                    <img src="@/assets/uc/my-charge@2x.png" alt="" class="option-image">
                    <span class="option-name">我的佣金</span>
                </router-link>

                <router-link to="/mine/information" class="option-item link">
                    <img src="@/assets/uc/my-message@2x.png" alt="" class="option-image">
                    <span class="option-name">我的消息</span>
                </router-link>

                <router-link to="/mine/feedback" class="option-item link">
                    <img src="@/assets/uc/response@2x.png" alt="" class="option-image">
                    <span class="option-name">意见反馈</span>
                </router-link>
            </li>
        </ul>
        <BarCode ref="ucBarCode" :show="qrCodeShow" @close="closeBarCode" @success='scanSuccess'></BarCode>
        <van-dialog
            v-model="isShow"
            show-cancel-button
            title="成为VIP"
            @confirm="successSubmit"
            :beforeClose="beforeClose"
            >
            <van-field
                class="ldfield"
                v-model="buildingNum"
                placeholder="请输入您的楼栋号"
            />
            </van-dialog>
    </div>
</template>

<script>
import {
	Dialog
} from 'vant'
import BarCode from '@/components/bar-code'
import {
  mapGetters
} from 'vuex'

export default {
  components: {
    BarCode,
    Dialog
  },
  computed: {
    ...mapGetters({
      logined: 'core/logined'
    })
  },
  data() {
    return {
      buildingNum: '',
      codeUrl: '',
      isShow: true,
      barCodeActivity: '',
      qrCodeShow: false,
      sta_0: 0,
      sta_1: 0,
      sta_2: 0,
      sta_3: 0,
      sta_4: 0,
      user: {},
      user_type: 0 // 0:普通用户,1:vip,2:团长
    }
  },
  methods: {
      onClose() {

      },
      aaaa() {

      },
    closeBarCode() {
      this.qrCodeShow = false
    },
    getUserInfo() {
      this.$axios.post('/mine/index')
        .then(({
          data
        }) => {
          if (data.code === 1) {
            data && Object.assign(this, data.data)
          } else {
            this.$toast(data.msg);
          }
        })
    },
    barCodeScan() {
      const {
        user_type
      } = this
      if (user_type === 0) {
        this.qrCodeShow = true
        this.barCodeActivity = 'start'

      } else if (user_type === 2) {
        this.$router.push({
          path: '/uc/setting/card',
        })
      }
    },
    scanSuccess(codeUrl) {
        this.qrCodeShow = false;
      if (!codeUrl||codeUrl.indexOf('index/user/addmember')===-1) {
          this.$toast('请扫描正确团长二维码！');
          return
      }
      this.codeUrl = codeUrl;
      this.isShow = true;
    },
    beforeClose(action, done) {
        if(action === 'cancel') {
            done() //关闭
        }
        if(action === 'confirm'&&!this.buildingNum) {
            this.$toast('请输入楼栋号')
            done(false) //不关闭弹框
        }else {
            done()
        }
    },
    successSubmit() {
        if (!this.buildingNum) {
            return
        }
        let token = app.$vm.$store.getters['core/token'];
        if (this.codeUrl.indexOf('://')==-1) {
            this.codeUrl = `${location.protocol}//${this.codeUrl}`;
        }
        alert(codeUrl)
        let url = `${codeUrl}/token/${token}/region_detail/${this.buildingNum}`;
        alert(url)
        this.$axios
            .post(url, {
            region_id: url
            })
            .then(({
            data
            }) => {
            if (data.code === 1) {
                this.isShow = false;
                this.$toast('绑定成功')
                
            } else {
                this.isShow = false;
                this.$toast(data.msg);
            }
        })
    },
    toVip() {
      if (this.user_type === 0) {
        this.$toast('抱歉，您还不是VIP');
      } else {
        this.$router.push('/uc/vip')
      }
    }
  },
  created() {
    this.getUserInfo();
  },
  beforeRouteLeave (to, from, next) {
      this.qrCodeShow = false;
      next()
  }
}
</script>

<style lang="scss" scoped>
.suwis-uc {
    box-sizing: border-box;
    min-height: 100vh;
    padding-bottom: 50px;
    background: #fff url("../../assets/uc/uc-bg@2x.png") top center no-repeat;
    background-size: contain;
    .link {
        color: inherit;
    }
    .ldfield {
        padding-bottom: 30px;
        padding-left: 30px;
    }
    .uc-top-button {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2vh;
        padding: 2vh 5vw 0;
        .button {
            width: 24px;
            height: 24px;
            margin-left: 10px;
        }
    }
    .uc-info {
        display: flex;
        margin: 0 16px;
        .profile {
            width: 18vw;
            height: 18vw;
            margin-right: 16px;
            border-radius: 50%;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 1;
            color: rgb(255, 255, 255);
            text-align: left;
            .login-info {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 600;
            }
            .level {
                display: flex;
                align-items: center;
                height: 20px;
                margin-left: 10px;
                padding: 0 8px;
                border-radius: 12px;
                background: #fff;
                color: #e3b156;
                font-size: 12px;
            }
            .vip {
                width: 18px;
                height: 16px;
                margin-right: 2px;
            }
            .van-icon-arrow {
                margin-left: 6px;
            }
            .location {
                font-size: 14px;
            }
        }
    }
    .my-order {
        box-sizing: border-box;
        height: 22vh;
        margin: 6vw 16px 0;
        padding: 1.5vh 4vw;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(232, 63, 68, 0.19);
        border-radius: 4px;
        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1.65vh;
            border-bottom: 1px solid rgb(239, 239, 239);
            font-size: 16px;
        }
        .link {
            color: rgb(153, 153, 153);
            font-size: 12px;
        }
        .order-list {
            margin-top: 0.6vh;
            display: flex;
            justify-content: space-between;
            .order-item {
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            .order-image {
                width: 8vw;
                height: 8vw;
                margin-bottom: 1vh;
            }
            .item-name {
                margin-bottom: 1vh;
                color: #4d4d4d;
                font-size: 12px;

            }
            .item-num {
                color: #4d4d4d;
                font-size: 16px;
            }
        }
    }

    .option-list {
        margin: 1.2vh 4vw 0;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
        .option-li {
            display: flex;
            height: 12.4vh;
            border-bottom: 1px solid #f5f5f5;
            &:last-child {
                border: none;
            }
        }
        .option-item {
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: column;
            height: 100%;
            background: #fff;
            border-right: 1px solid #f5f5f5;
            &:last-child {
                border: none;
            }
        }
        .option-image {
            width: 8vw;
            height: 8vw;
            margin: 1.5vh 0 1vh;
        }
    }
}
</style>
