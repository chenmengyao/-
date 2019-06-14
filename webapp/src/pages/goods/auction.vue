<template lang="html">
<div class="suwis-auction">
  <van-goods-action>
    <van-goods-action-mini-btn
      icon="chat-o"
      text="客服"
      @click.native="$router.push({path: '/mine/message/getsm', query: {store_id: $route.query.id}})"
    />
    <van-goods-action-big-btn
      primary
      text="立即出价"
      @click.native="!current.selectedSkuComb.id?$parent.showSku('showKeyboard'):showKeyboard()"
    />
  </van-goods-action>
  <!--  -->
  <!-- 底部操作条 //-->
  <van-actionsheet
    v-model="payTypeShow"
    title="确认付款"
    class="suwis-pay-type"
    :close-on-click-overlay="false">
    <van-cell-group>
      <van-cell title="请选择付款方式"></van-cell>
      <van-radio-group v-model="payType">
        <van-radio v-for="pay in typeList"
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
        <div class="deploy" @click="showPayboard">立即付款</div>
      </div>
    </van-cell-group>
  </van-actionsheet>
  <!--  -->
  <van-actionsheet
    title="请输入支付密码"
    v-model="keyboardShow"
    :close-on-click-overlay="false"
    @cancel="keyboardShow = false">
    <div class="keyboard-text" @click.stop>
      <van-field v-model="keyboardText" input-align="center" readonly placeholder="请输入出价价格" />
    </div>
    <van-number-keyboard
      :show="true"
      extra-key="."
      theme="custom"
      close-button-text="确定"
      @blur="keyboardShow = false"
      @input="keyboardInput"
      @delete="keyboardDelete"
      @hide="choosePaytype"
    />
   </van-number-keyboard>
 </van-actionsheet>
 <!--  -->
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
</div>
</template>

<script>
export default {
  props: ['details', 'current'],
  data() {
    return {
      typeList: [{
        id: 'balancepay',
        description: '佣金余额',
        icon: require('./../../assets/orders/score-pay@2x.png')
      }],
      // 优惠券显示内容
      keyboardText: '',
      keyboardArray: [],
      payType: '',
      paypass: '',
      paypassArray: [],
      // 可用余额
      balanceSum: 0,
      payTypeShow: false,
      keyboardShow: false,
      payboardShow: false
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
    },
    keyboardShow(val) {
      if (val) this.keyboardArray = []
    }
  },
  methods: {
    // 显示输入弹窗
    showKeyboard() {
      this.skuVisible = false
      this.keyboardShow = true
      this.getBalance()
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
      this.payTypeShow = true
    },
    // 显示密码弹窗
    showPayboard() {
      this.payboardShow = true
      this.payTypeShow = false
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
        pay_tpye: 'balancepay',
        sum: this.keyboardText,
        paypass: md5(this.paypass)
      })
      if (res.data.code == 1) {
        Toast('出价成功')
      } else {
        Toast(res.data.msg)
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
}
</style>
