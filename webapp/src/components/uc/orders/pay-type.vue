<template>
<van-actionsheet v-model="popupShow"
  title="确认付款"
  class="suwis-pay-type"
  :close-on-click-overlay="false"
  @cancel="cancel">
  <van-cell-group>
    <van-cell title="请选择付款方式"></van-cell>
    <van-radio-group v-model="payType">
      <van-radio v-for="pay in typeList"
        :name="pay.id"
        :key="pay.id">
        <div class="check-line">
          <span class="option">
            <img :src="pay.icon"
              class="pay-image">
            {{pay.description}}支付
          </span>
          <span class="balance-sum"
            v-show="pay.id === 'balancepay'">可用佣金{{balanceSum}}</span>
        </div>
      </van-radio>
    </van-radio-group>
    <div class="button-line">
      <div class="deploy"
        @click="pay">立即付款</div>
    </div>
  </van-cell-group>
</van-actionsheet>
</template>

<script>
var w = null
export default {
  props: {
    balanceSum: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    // 支付金额
    orderId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pays: {},
      payType: 'balancepay',
      popupShow: false,
      typeList: [{
        id: 'balancepay',
        description: '佣金余额',
        icon: require('../../../assets/orders/score-pay@2x.png')
      }, {
        id: 'yunpay',
        description: '银联支付',
        icon: require('../../../assets/orders/union-pay@2x.png')
      }]
    }
  },
  watch: {
    show() {
      this.popupShow = this.show
    }
  },
  mounted() {
    this.onPlusReady(() => {
      // 获取支付通道
      plus.payment.getChannels((channels) => {
        for (var i in channels) {
          var channel = channels[i]
          if (channel.id == 'qhpay' || channel.id == 'qihoo') { // 过滤掉不支持的支付通道：暂不支持360相关支付
            continue;
          }
          this.typeList.push({
            id: channel.id,
            description: channel.description,
            serviceReady: channel.serviceReady,
            icon: require(`@/assets/orders/${channel.id}@2x.png`)
          })
          this.pays[channel.id] = channel
          this.checkServices(channel)
        }
      }, function(e) {
        outLine('获取支付通道失败：' + e.message)
      })
    })
  },
  methods: {
    cancel() {
      this.payType = ''
      this.$emit('close')
    },
    async pay() {
      const id = this.payType
      if (id === 'balancepay') {
        this.$emit('pay', id)
        return
      }
      if (w) {
        return;
      }
      //检查是否请求订单中
      if (id === 'appleiap') {
        clicked('payment_iap.html');
        return;
      }
      if (!id) {
        plus.nativeUI.alert('请选择支付渠道', null, '提示');
        return;
      }
      console.log('----- 请求支付 -----');
      if (id == 'yunpay') {
        // 银联支付
        let token = app.$vm.$store.getters['core/token']
        let url = `${this.$config.apihost}pay/pay/order/${this.orderId}/token/${token}/pay_type/yunpay/yunpay_notify/http://10.16.40.49:8080/#/uc/orders/yunpaycallbak`
        w = plus.nativeUI.showWaiting();
        // 新开一个webview
        let paywin = plus.webview.create(url, 'pay_win', {}, {})
        paywin.show()
        paywin.addEventListener('rendered', () => {
          // 关闭支付弹窗
          this.$emit('close')
          // 关闭loading
          w.close()
          w = null
        })
        return
      }
      var appid = plus.runtime.appid;
      if (navigator.userAgent.indexOf('StreamApp') >= 0) {
        appid = 'Stream';
      }
      w = plus.nativeUI.showWaiting();
      let res = await this.$axios.post('/pay/pay', {
        pay_type: id,
        order: this.orderId
      })
      w.close();
      w = null;

      let params
      // 支付宝
      if (id == 'alipay') params = res.data
      // 微信
      if (id == 'wxpay') {
        let data = res.data || {}
        // params = {
        //   appid: data.appid,
        //   noncestr: data.nonce_str,
        //   package: 'Sign=WXPay',
        //   partnerid: data.mch_id,
        //   prepayid: data.prepay_id,
        //   timestamp: Math.round(new Date().getTime() / 1000).toString(),
        //   sign: data.sign
        // }
        params = data
      }
      plus.payment.request(this.pays[id], params, (result) => {
        console.log('----- 支付成功 -----');
        console.log(JSON.stringify(result));
        plus.nativeUI.alert('支付成功', () => {
          // 支付成功
          this.popupShow = false
          this.$emit('success', true)
        })
      }, (e) => {
        console.log('----- 支付失败 -----');
        alert('[' + e.code + ']：' + e.message);
        this.$emit('fail', true)
        // plus.nativeUI.alert('更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html', null, '支付失败：' + e.code);
      })
    },
    checkServices(pc) {
      if (!pc.serviceReady) {
        var txt = null;
        switch (pc.id) {
          case 'alipay':
            txt = '检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？';
            break;
          default:
            txt = '系统未安装“' + pc.description + '”服务，无法完成支付，是否立即安装？';
            break;
        }
        plus.nativeUI.confirm(txt, function(e) {
          if (e.index == 0) {
            pc.installService();
          }
        }, pc.description);
      }
    }
  }
}
</script>

<style lang="scss">
.suwis-pay-type {
    .van-radio-group {
        padding: 0 15px;
        .van-radio {
            display: flex;
            align-items: center;
        }
        .van-radio__label {
            flex: 1;
        }
    }
}
</style>

<style scoped lang="scss">
.check-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 50px;
    .pay-image {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    .balance-sum {
        color: #f0914b;
        font-size: 12px;
    }
    .option {
        display: flex;
        align-items: center;
    }
}

.button-line {
    padding: 30px 26px 24px;
    border-top: 1px solid #f5f5f5;
    .deploy {
        height: 45px;
        margin: 0 auto;
        background: linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        line-height: 45px;
        text-align: center;
    }
}
</style>
