<template lang="html">
<div class="suwis-auction" :class="{disable}">
  <!-- 支付押金 -->
  <div class="deposit-info" v-if="auctionShow">
    <dl class="price">
      <dt>
        <span>定金</span>
        <span>
          ￥<em>{{sswr(details.price_max*0.1)}}</em>
        </span>
      </dt>
      <dd>
        <img src="@/assets/details/hnit@2x.png" alt="">竞拍不成功时，缴纳的保证金将退回到原支付渠道
      </dd>
    </dl>
    <p>
      该拍品需缴纳保证金￥{{sswr(details.price_max*0.1)}}。
    </p>
    <p>
      建议您使用<em class="emred">支付宝、微信、余额</em>，确保账户有足够的钱款哦
    </p>
    <van-cell-group v-if="adres&&adres.id">
      <van-cell :value="`收货人：${adres.name||''}(${adres.tel||''})`" />
      <van-cell :value="`收地址：${adres.city||''}${adres.area||''}${adres.address||''}`" @click="chooseAdres" is-link />
    </van-cell-group>
    <van-cell-group v-else>
      <van-cell value="请选择收货地址" is-link @click="chooseAdres"></van-cell>
    </van-cell-group>
    <van-cell value="查看协议" is-link @click="$router.push('/special/auctionrlue')">
      <template slot="title">
        <div style="white-space: nowrap;" @click.stop>
          <van-checkbox v-model="agreeAgreement">竞拍需要同意惠回来竞拍协议</van-checkbox>
        </div>
      </template>
    </van-cell>
    <van-cell>
      拍品多为孤品性质类商品，“7天退货”服务为卖家可选择服务保障，不强制商家提供，竞拍前请充分考虑
    </van-cell>
    <van-goods-action>
      <van-goods-action-big-btn
        primary
        :text="!auctionShow?'立即出价': `支付定金`"
        @click.native="showPayTypeShow"
      />
     </van-goods-action>
  </div>
  <!--  -->
  <van-goods-action>
    <van-goods-action-mini-btn
      icon="chat-o"
      text="客服"
      @click.native="$router.push({path: '/mine/message/getsm', query: {store_id: details.store_id}})"
    />

    <van-goods-action-mini-btn
      icon="shop-o"
      text="店铺"
      @click.native="$router.push({path: '/shop', query: {id: details.store_id }})"
    />
    <van-goods-action-big-btn
      primary
      :text="details.isauction==1?'立即出价': `支付定金 (￥${sswr( details.price_max*0.1 || 0)} )`"
      @click.native="$parent.showSku('showKeyboard')"
    />
   </van-goods-action>
  <!--  -->
  <!-- 底部操作条 //-->
  <!-- 请选择付款方式 -->
  <van-actionsheet
    v-model="payTypeShow"
    title="确认付款"
    class="suwis-pay-type"
    :close-on-click-overlay="false">
    <van-cell-group>
      <van-cell title="请选择付款方式"></van-cell>
      <van-radio-group v-model="payType">
        <van-radio style="padding-left:15px;" v-for="pay in typeList"
          :name="pay.id"
          :key="pay.id">
          <div class="paytype-check-line">
            <span class="option">
              <img :src="pay.icon" class="pay-image">
              {{pay.description}}支付
            </span>
            <span class="balance-sum" v-show="pay.id === 'balancepay'">可用佣金{{balanceSum}}</span>
          </div>
        </van-radio>
      </van-radio-group>
      <div class="paytype-button-line">
        <div class="deploy" v-if="payType=='balancepay'" @click="showPayboard">立即付款</div>
        <div class="deploy" v-else @click="pay">立即付款</div>
      </div>
    </van-cell-group>
  </van-actionsheet>
  <!-- 请选择付款方式 //-->
  <!--  出价价格 -->
  <van-actionsheet
    title="请输入出价价格"
    v-model="keyboardShow"
    :close-on-click-overlay="false"
    @cancel="keyboardShow = false">
    <div class="keyboard-text" @click.stop>
      <van-field v-model="keyboardText" input-align="center" :placeholder="`当前出价${sumPrice(details.price_max,current.selectedSkuComb.lowest_price)}元起`" readonly />
    </div>
    <van-number-keyboard
      :show="true"
      extra-key="."
      theme="custom"
      close-button-text="确定"
      @input="keyboardInput"
      @delete="keyboardDelete"
      @close="choosePaytype"
    />
   </van-number-keyboard>
 </van-actionsheet>
 <!-- 出价价格 //-->
 <!-- 请输入支付密码 -->
 <van-actionsheet
   title="请输入支付密码"
   v-model="payboardShow"
   :close-on-click-overlay="false"
   @cancel="payboardShow = false">
   <van-password-input :value="paypass"/>
   <div class="link-line">
     <router-link to="/resetpaypwd" class="forget-password">忘记支付密码？</router-link>
   </div>
   <van-number-keyboard
     :show="true"
     @input="passwordInput"
     @delete="passwordDelete"
   />
 </van-actionsheet>
 <!-- 请输入支付密码 //-->
</div>
</template>

<script>
import md5 from 'md5'
// 支付等待
let payw = null
export default {
  props: ['details', 'current','currentMarkup'],
  data() {
    return {
      disable: false,
      timer: {},
      adres: {},
      typeList: [{
        id: 'balancepay',
        description: '佣金余额',
        icon: require('./../../assets/orders/score-pay@2x.png')
      }, {
        id: 'yunpay',
        description: '银联支付',
        icon: require('./../../assets/orders/union-pay@2x.png')
      }],
      pays: {},
      agreeAgreement: false,
      // 加价金额
      keyboardText: '',
      keyboardArray: [],
      payType: '',
      // 支付密码
      paypass: '',
      paypassArray: [],
      // 可用余额
      balanceSum: 0,
      // 支付方式显示
      payTypeShow: false,
      // 加价金额显示
      keyboardShow: false,
      // 支付密码显示
      payboardShow: false,
      // 支付定金界面显示
      auctionShow: false
    }
  },
  watch: {

    keyboardArray(val) {
      this.keyboardText = val.join('')
    },
    paypassArray(val) {
      this.paypass = val.join('')
    },
    payboardShow(val) {
      if (val) this.paypassArray = []
      this.payTypeShow = false
    },
    payTypeShow(val) {
      if (val) this.keyboardShow = false
    },
    keyboardShow(val) {
      if (val) this.keyboardArray = []
    },
    auctionShow(val) {
      //
      // 添加分享按钮
      if (this.auctionShow) {
        this.$store.commit('core/header', {
          title: '定金支付',
          buttons: {
            // right: {
            //   fontSize: '27px',
            //   text: '\ue655',
            //   onclick: () => {
            //     this.shareVisible = false
            //   }
            // }
          }
        })
      }else {
        this.$store.commit('core/header', {
          title: '商品详情',
          buttons: {
            right: {
              fontSize: '27px',
              text: '\ue655',
              onclick: () => {
                this.shareVisible = true
              }
            }
          }
        })
      }

    },
    current(val) {
      // 存储到sessionStorage
    }
  },
  mounted() {
    // 尝试获取sessionStorage的值
    let current = JSON.parse(window.sessionStorage.getItem('details_sku_current'))
    if (current && this.details.type == 2) {
      this.$parent.current = current
      this.showKeyboard()
      // 清理缓存
      window.sessionStorage.removeItem('details_sku_current')
    }
    // 获取地址
    this.$route.query.address_id ? this.getAdres() : this.getAdresList()
    // 启动定时器检查拍卖时间是否结束
    this.timer = setInterval(() => {
      this.disable = this.details.activity_end_time * 1000 < Date.now()
    }, 1000)
    // 获取支付通道
    this.onPlusReady(() => {
      // 获取支付通道
      plus.payment.getChannels((channels) => {
        for (var i in channels) {
          var channel = channels[i]
          // 过滤掉不支持的支付通道：暂不支持360相关支付
          if (channel.id == 'qhpay' || channel.id == 'qihoo') continue
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
  beforeDestroy() {
    // 清理定时器
    window.clearInterval(this.timer)
  },
  methods: {
    sswr(number) {
      return Math.round(number * 100) / 100
    },
    sumPrice(price_max,lowest_price) {
      if (!price_max&&!lowest_price) {
        return 0
      }
      if (!price_max) {
        return lowest_price
      }
      if (!lowest_price) {
        return price_max
      }
      var maxNum = 10000000000;
      return Math.abs((price_max*maxNum+lowest_price*maxNum)/maxNum)
    },
    async getAdresList() {
      let res = await this.$axios.post('/user/alladdress')
      let list = res.data.data || []
      for (let item of list) {
        if (item.sta) this.adres = item
      }
      // 如果没有默认的
      if (!this.adres.id) this.adres = list[0]
    },
    // 获取地址信息
    async getAdres() {
      let res = await this.$axios.post('/user/address', {
        id: this.$route.query.address_id
      })
      this.adres = res.data.data || {}
    },
    // 显示输入弹窗
    showKeyboard() {
      this.getBalance()
      // 是否已经交押金
      if (this.details.isauction == 1) {
        this.keyboardShow = true
      } else {
        // 设置押金
        this.keyboardText = this.current.selectedSkuComb.price * 0.001
        this.auctionShow = true
      }
    },
    // 输入价格
    keyboardInput(num) {
      this.keyboardArray.push(num)
    },
    // 删除价格
    keyboardDelete() {
      this.keyboardArray.pop()
    },
    // 密码输入
    passwordInput(num) {
      this.paypassArray.push(num)
      if (this.paypassArray.length == 6) {
        this.payboardShow = false
        setTimeout(() => {
          this.auction()
        }, 399)
      }
    },
    // 密码删除
    passwordDelete() {
      this.paypassArray.pop()
    },
    // 选择支付方式
    choosePaytype() {
      this.details.isauction == 1 ? this.addprice() : this.payTypeShow = true
      this.keyboardShow = false
    },
    // 选择地址
    chooseAdres() {
      // 将地址信息存储到sessionStorage中
      window.sessionStorage.setItem('details_sku_current', JSON.stringify(this.current))
      let query = this.$route.query
      delete query.address_id
      // 跳转地址选择器界面
      this.$router.push({
        path: '/uc/setting/address',
        query: {
          from: '/goods/details?id=96&showauction=true',
          ...query
        }
      })
    },
    // 显示支付方式
    showPayTypeShow() {
      if (!this.adres||!this.adres.id) {
        this.$toast('请选择收货地址')
        return
      }
      if (!this.agreeAgreement) {
        this.$toast('请同意竞拍协议')
        return
      }
      console.log(this.details)
      this.payTypeShow = true;
    },
    // 显示密码弹窗
    showPayboard() {
      if (this.payType=='balancepay'&&this.auctionShow&&this.balanceSum<this.sswr(this.details.price_max*0.1)) {  // 支付定金
        this.$toast('可用佣金不足！')
        return
      }
      this.payboardShow = true
    },
    // 查询可用金额
    async getBalance() {
      // 查询可用佣金
      let res = await this.$axios.post('/mine/mycommission')
      this.balanceSum = res.data.data || 0
    },
    // 出价
    async auction(evt) {

      let res = await this.$axios.post('goods/auction', {
        goods_id: this.current.goodsId,
        stand_id: this.current.selectedSkuComb.s1,
        pay_type: 'balancepay',
        address_id: this.adres.id,
        paypass: md5(this.paypass)
      })
      if (res.data.code == 1) {
        this.$toast('押金支付成功')
        this.auctionShow = false
        try {
          this.$parent.getDetails()
        } catch (e) {}
      } else {
        this.$toast(res.data.msg)
      }
    },
    // 加价
    async addprice(current) {
      let currentData = current || this.current;
      if (this.currentMarkup < this.details.price_max+this.details.lowest_price) {
        this.$toast(`当前商品最低出价不得低于${this.details.price_max+this.details.lowest_price}元`)
        return false
      }
      this.keyboardShow = false;
      let res = await this.$axios.post('goods/auction_addprice', {
        goods_id: currentData.goodsId,
        stand_id: currentData.selectedSkuComb.s1,
        // pay_tpye: 'balancepay',
        price: this.currentMarkup,
        // paypass: md5(this.paypass)
      })
      if (res.data.code == 1) {
        this.$toast('加价成功')
        try {
          this.$parent.getDetails()
        } catch (e) {}
      } else {
        this.$toast(res.data.msg)
      }
      window.test = this
    },
    ylPayHandle() {
      setTimeout(() => {
        var tiemId = setInterval(()=>{
          var paywin = plus.webview.getWebviewById('pay_win');
          if (!paywin) {
            clearInterval(tiemId)
            var ylpayStast = plus.storage.getItem("ylpayStast");
            if (ylpayStast== 'success') {
              this.$toast('押金支付成功')
              this.payTypeShow = false;
              this.auctionShow = false
              try {
                this.$parent.getDetails()
              } catch (e) {}
            }
            plus.storage.setItem("ylpayStast","")
          }
          paywin = null;
        },200)
      }, 500);
    },
    async pay() {
      var _that=this
      if (payw) return
      // 检查是否请求订单中
      if (this.payType === 'appleiap') {
        clicked('payment_iap.html');
        return
      }
      if (!this.payType) {
        this.$toast('请选择支付渠道')
        return;
      }
      console.log('----- 请求支付 -----');
      if (this.payType == 'yunpay') {
        // 银联支付
        let token = app.$vm.$store.getters['core/token']
        let url = this.$config.apihost + `goods/auction?token=${this.$store.getters['core/token']}&`
        url += `goods_id=${this.current.goodsId}&`
        url += `stand_id=${this.current.selectedSkuComb.s1}&`
        url += `pay_type=${this.payType}&`
        url += `address_id=${this.adres.id}&`
        url += `notify_url=${this.$config.yunpaycburl}`
        // payw = plus.nativeUI.showWaiting();
        // 新开一个webview
        let paywin = plus.webview.create(url, 'pay_win', {}, {});
        paywin.show();
        this.ylPayHandle();
        // paywin.addEventListener('rendered', () => {
        //   // 关闭loading
        //   payw.close()
        //   payw = null
        // })
        return
      }
      payw = plus.nativeUI.showWaiting();
      let res = await this.$axios.get('goods/auction', {
        params: {
          goods_id: this.current.goodsId,
          stand_id: this.current.selectedSkuComb.s1,
          pay_type: this.payType,
          address_id: this.adres.id,
          notify_url: this.$config.yunpaycburl,
          paypass: ''
        }
      })
      console.log(res, 'res')
      payw.close();
      var appid = plus.runtime.appid;
      if (navigator.userAgent.indexOf('StreamApp') >= 0) {
        appid = 'Stream';
      }
      payw = null;
      let params
      // 支付宝
      if (this.payType == 'alipay') {
        params = res.data
      }
      // 微信
      if (this.payType == 'wxpay') {
        let data = res.data || {}
        params = data
      }

      plus.payment.request(this.pays[this.payType], params, (result) => {
        console.log('----- 支付成功 -----');
        console.log(JSON.stringify(result));
        plus.nativeUI.alert('支付成功', () => {
          // 支付成功
          _that.auctionShow = false;
          _that.payTypeShow = false;
          try {
            _that.$parent.getDetails()
          } catch (e) {}
        })
      }, (e) => {
        console.log('----- 支付失败 -----');
        let msg = e.message
        _that.$toast(msg.substr(msg.indexOf(']') + 1 || 0, msg.length));
        _that.$emit('fail', true)
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
.suwis-auction {
    position: absolute;
    z-index: 999;
    left: 0;
    .emred {
      color: red;
    }
    .deposit-info {
        position: fixed;
        background: #fff;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        padding: 0;
        .price {
            margin: 0;
            background: linear-gradient(54deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
            color: #fff;
            padding: 15px;

            dt {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                border-bottom: 1px solid #fff;
                padding-bottom: 2vw;
                margin-bottom: 3vw;
                span {
                    font-size: 1.2rem;
                }
                em {
                    font-style: normal;
                    font-size: 2.6rem;
                    font-weight: bold;
                }
            }

            dd {
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                font-size: 14px;

                img {
                    display: block;
                    max-width: 18px;
                    margin-right: 5px;
                }
            }
        }
    }

    .keyboard-text {
        width: 100vw;
        margin-bottom: 216px;
        background: #fff;
        padding: 10px;
    }

    .van-number-keyboard {
        z-index: 9999 !important;
    }
    //
    .paytype-check-line {
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

    .paytype-button-line {
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

    .link-line {
        margin: 0 20px 250px;
        text-align: right;

        a {
            color: #f0914b;
            position: relative;
            top: 18px;
        }
    }
    // 禁用按钮
    &.disable {
        .van-button {
            pointer-events: none;
            background: #ccc;
            border-color: #ccc;
        }
    }
}
</style>
