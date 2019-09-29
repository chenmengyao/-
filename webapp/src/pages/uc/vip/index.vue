<template>
<div class="suwis-vip">
  <div class="info-box">
    <div class="tag">团长: {{detail.captain_name}}</div>
    <div class="info-line">
      <img src="@/assets/login/avatar@3x.png"
        alt="头像"
        class="profile">
      <div class="info-right">
        <div class="name">
          {{detail.name}}
          <!-- <span class="level">
            <img src="@/assets/myvip.png"
              alt="vip"
              class="vip">
            VIP
          </span> -->
        </div>
        <div class="register-time">
          {{detail.time | dateFmt3}} 注册VIP
        </div>
        <ul class="save-money">
          <li>VIP累计节省金额<em>{{detail.vip_sum_use}}</em>元</li>
        </ul>
      </div>
    </div>
    <!-- 暂时隐藏 VIP升级条 -->
    <!-- <div class="score-line">
        <div class="progress-line">
            <div class="progress" :style="{ width: location }"></div>
            <div class="total-score" :style="{ left: location }">37500</div>
        </div>
        <div class="level-line">
            <span>LV.{{detail.vip}}</span>
            <span>LV.{{detail.vip + 1}}</span>
        </div>
    </div> -->
    <!-- 暂时隐藏 // -->
  </div>

  <ul class="illustration">
    <li class="item">
      <div class="title">
        <img src="@/assets/uc/vip@2x.png"
          alt="vip"
          class="icon">
        VIP累计节省金额
      </div>
      <p class="para">说明：申请成为VIP以后，将能在平台享受优惠券和折扣优惠，系统自动结算节省金额，此处统计自注册以来节省的全部金额。</p>
    </li>

    <!-- <li class="item">
      <div class="title">
        <img src="@/assets/uc/vip-level@2x.png"
          alt="vip"
          class="icon">
        VIP等级
      </div>
      <p class="para">当前等级：LV.{{detail.vip}}</p>
      <p class="para">实际使用vip额度超出原有额度一倍时，VIP等级可以提升一级</p>
    </li> -->

    <li class="item">
      <div class="title">
        <img src="@/assets/uc/vip-privilege@2x.png"
          alt="vip"
          class="icon">
        VIP特权
      </div>
      <p class="para">①系统派发优惠券，购买平台商品时即可使用；</p>
      <p class="para">②部分商品可享受自动折扣；</p>
      <p class="para">③商品折扣和vip优惠券可以累加使用。</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    location() {
      return '75%'
    }
  },
  data() {
    return {
      detail: {

      }
    }
  },
  methods: {
    getVip() {
      this.$axios
        .post('mine/myvip')
        .then(({
          data
        }) => {
          if (data.code === 1) {
            if (data.data) {
              this.detail = data.data
            }
          } else {
            this.$toast(data.msg);
          }
        })
    }
  },
  created() {
    this.getVip()
  }
}
</script>

<style scoped lang="scss">
.suwis-vip {
    min-height: 100vh;
    background-color: #fff;
    .info-box {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 16px;
        padding: 16px 14px;
        background: url("../../../assets/uc/uc-bg-gold@2x.png") no-repeat;
        background-size: cover;
        border-radius: 4px;
        .tag {
            position: absolute;
            top: 0;
            right: 0;
            height: 24px;
            padding: 0 6px;
            background: url("../../../assets/uc/uc-bg-grouper@2x.png") no-repeat;
            background-size: cover;
            border-bottom-left-radius: 4px;
            color: #c7973a;
            font-size: 10px;
            line-height: 24px;
        }
        .info-line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 32px;
            .profile {
                box-sizing: border-box;
                width: 40px;
                height: 40px;
                margin-right: 10px;
                border-radius: 50%;
                border: 1px solid #fff;
            }
            .info-right {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: space-between;
                height: 40px;
                color: #fff;
            }
            .name {
                display: flex;
                align-items: center;
                margin-right: 10px;
                font-size: 16px;
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
            .register-time {
                font-size: 10px;
            }
            .save-money {
                font-size: 10px;
                display: flex;
                position: relative;
                align-items: center;
                margin: 3vw 3.8vw;

                &:before {
                    content: '';
                    display: block;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    background: #fff;
                    position: absolute;
                    left: -12px;
                    top: 50%;
                }

                em {
                    font-size: 18px;
                    font-style: normal;
                    padding: 0 5px;
                }
            }
        }
        .score-line {
            .progress-line {
                position: relative;
                margin: 0 36px 8px;
                background: #b28327;
                &::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -4px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #fff;
                }
                &::after {
                    content: '';
                    position: absolute;
                    top: -2px;
                    right: -4px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #b28327;
                }
            }
            .total-score {
                position: absolute;
                top: -24px;
                height: 16px;
                padding: 0 6px;
                background: rgba(255,255,255,.75);
                border-radius: 10px;
                color: #e5b75f;
                line-height: 16px;
                font-size: 10px;
                transform: translateX(-50%);
                &::before {
                    content: '';
                    position: absolute;
                    top: 9px;
                    left: 50%;
                    border: 4px solid #fff;
                    border-color: transparent transparent rgba(255,255,255,.75) rgba(255,255,255,.75);
                    transform: rotate(-45deg) translateX(-50%);
                }
            }
            .progress {
                height: 4px;
                background: #fff;
            }
            .level-line {
                display: flex;
                justify-content: space-between;
                margin: 0 28px;
                color: #fff;
                font-size: 10px;
            }
        }
    }
    .illustration {
        .item {
            padding: 14px 12px 16px;
            border-bottom: 1px solid #f5f5f5;
        }
        .title {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .icon {
                width: 18px;
                height: 18px;
                margin-right: 10px;
                color: #333;
                font-size: 16px;
            }
        }
        .para {
            margin: 0 0 0 28px;
            color: #999;
            font-size: 14px;
            line-height: 24px;
        }
    }
}
</style>
