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
      @click.native="!current.selectedSkuComb.id?showSku('showKeyboard'):showKeyboard()"
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
  <div :class="{show:keyboardShow}" class="keyboard-text" @click.stop>
    <van-field v-model="keyboardText" input-align="center" readonly placeholder="请输入出价价格" />
  </div>
  <van-number-keyboard
    :show="keyboardShow"
    extra-key="."
    theme="custom"
    close-button-text="确定"
    @blur="keyboardShow = false"
    @input="keyboardInput"
    @delete="keyboardDelete"
    @hide="choosePaytype"
  />
 </van-number-keyboard>
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
export default {}
</script>

<style lang="scss">
</style>
