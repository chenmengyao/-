<template>
<van-actionsheet v-model="popupShow"
  title="确认付款"
  :close-on-click-overlay="false"
  @cancel="cancel">
  <van-cell-group>
    <van-cell title="请选择付款方式"></van-cell>
    <van-radio-group v-model="payType"
      @change="select">
      <van-radio v-for="pay in typeList"
        :name="pay.id"
        :key="pay.id">
        <div class="check-line">
          <img :src="pay.icon"
            class="pay-image">
          {{pay.description}}支付
        </div>
      </van-radio>
    </van-radio-group>
    <br>
    <br>
    <br>
    <br>
    <br>
  </van-cell-group>
</van-actionsheet>
</template>

<script>
var w = null
var PAYSERVER = 'http://demo.dcloud.net.cn/payment/?payid='
// var PAYSERVER = 'http://huihuilai.ambcon.cn/index.php/index/pay/pay?pay_type='
export default {
  props: {
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
      payType: '',
      popupShow: false,
      typeList: []
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
      this.$emit('close')
    },
    async pay(id) {
      if (w) {
        return;
      } //检查是否请求订单中
      if (id === 'appleiap') {
        // outSet('应用内支付');
        clicked('payment_iap.html');
        return;
      }
      console.log('----- 请求支付 -----');
      var url = PAYSERVER;
      if (id == 'alipay' || id == 'wxpay') {
        url += id;
      } else {
        plus.nativeUI.alert('当前环境不支持此支付通道！', null, '捐赠');
        return;
      }
      var appid = plus.runtime.appid;
      if (navigator.userAgent.indexOf('StreamApp') >= 0) {
        appid = 'Stream';
      }
      url += '&appid=' + appid + '&total=';

      w = plus.nativeUI.showWaiting();
      // alert(this.orderId)
      // let res = await this.$axios.post('/pay/pay', {
      //   pay_type: id,
      //   order: this.orderId
      // })
      // console.log(res.data, 'res.data')
      // alert(res.data)
      // plus.payment.request(this.pays[id], res.data, (result) => {
      //   console.log('----- 支付成功 -----');
      //   console.log(JSON.stringify(result));
      //   plus.nativeUI.alert('支付成功', () => {
      //     // 支付成功
      //     this.popupShow = false
      //     this.$emit('success', true)
      //   })
      // }, (e) => {
      //   console.log('----- 支付失败 -----');
      //   console.log('[' + e.code + ']：' + e.message);
      //   this.$emit('fail', true)
      //   plus.nativeUI.alert('更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html', null, '支付失败：' + e.code);
      // })
      // // 请求支付订单
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        switch (xhr.readyState) {
          case 4:
            w.close();
            w = null;
            if (xhr.status == 200) {
              console.log('----- 请求订单成功 -----');
              console.log(xhr.responseText);
              var order = xhr.responseText;
              alert(order)
              plus.payment.request(this.pays[id], order, (result) => {
                console.log('----- 支付成功 -----');
                console.log(JSON.stringify(result));
                plus.nativeUI.alert('支付成功', () => {
                  // 支付成功
                  this.popupShow = false
                  this.$emit('success', true)
                })
              }, (e) => {
                console.log('----- 支付失败 -----');
                console.log('[' + e.code + ']：' + e.message);
                this.$emit('fail', true)
                plus.nativeUI.alert('更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html', null, '支付失败：' + e.code);
              })
            } else {
              console.log('----- 请求订单失败 -----', xhr)
              console.log(xhr.status)
              plus.nativeUI.alert('获取订单信息失败！')
            }
            break;
          default:
            break;
        }
      }
      xhr.open('GET', url + 0.1);
      console.log('请求支付订单：' + url + 0.1);
      xhr.send();
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
    },
    select() {
      this.pay(this.payType)
      // this.popupShow = false
      this.$emit('select', this.payType)
    }
  }
}
</script>

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
}

.van-radio-group {
    padding: 0 15px;
}
</style>
