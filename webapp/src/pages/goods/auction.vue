<template lang="html">
<div class="suwis-auction" >
  <!-- 支付押金 -->
  <div class="deposit-info" v-if="auctionShow">
    <dl class="price">
      <dt>
        <span>定金</span>
        <span>
          ￥<em>{{(current.selectedSkuComb.price*0.1).toFixed(2)}}</em>
        </span>
      </dt>
      <dd>
        <img src="@/assets/details/hnit@2x.png" alt="">竞拍不成功时，缴纳的保证金将退回到原支付渠道
      </dd>
    </dl>
    <van-cell value="该拍品需缴纳保证金15.0。建议您使用支付宝、微信、余额，确保账户有足够的钱款哦" />
    <van-cell-group>
      <van-cell value="收货人：胡然（18062439081）" />
      <van-cell value="收地址：湖北省武汉市洪山区光谷大道光谷现代世贸中心I栋1102" />
    </van-cell-group>
    <van-cell value="查看协议" icon="shop-o" is-link>
      <template slot="title">
        <span class="custom-text">竞拍需要同意惠回来竞拍协议</span>
      </template>
    </van-cell>
    <van-cell>
      拍品多为孤品性质类商品，“7天退货”服务为卖家可选择服务保障，不强制商家提供，竞拍前请充分考虑
    </van-cell>
    <van-goods-action>
      <van-goods-action-big-btn
        primary
        :text="details.isauction==1?'立即出价':`支付定金${current.selectedSkuComb.price*0.1}`"
        @click.native="!current.selectedSkuComb.id?$parent.showSku('showKeyboard'):showKeyboard()"
      />
     </van-goods-action>
  </div>
  <!--  -->
  <van-goods-action>
    <van-goods-action-mini-btn
      icon="chat-o"
      text="客服"
      @click.native="$router.push({path: '/mine/message/getsm', query: {store_id: $route.query.id}})"
    />
    <van-goods-action-big-btn
      primary
      :text="details.isauction==1?'立即出价': `支付定金 (￥${current.selectedSkuComb.price*0.1} )`"
      @click.native="!current.selectedSkuComb.id?$parent.showSku('showKeyboard'):showKeyboard()"
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
  <!-- 请选择付款方式 //-->
  <!--  出价价格 -->
  <van-actionsheet
    title="请输入出价价格"
    v-model="keyboardShow"
    :close-on-click-overlay="false"
    @cancel="keyboardShow = false">
    <div class="keyboard-text" @click.stop>
      <van-field v-model="keyboardText" input-align="center" readonly />
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
export default {
  props: ['details', 'current'],
  data() {
    return {
      typeList: [{
        id: 'balancepay',
        description: '佣金余额',
        icon: require('./../../assets/orders/score-pay@2x.png')
      }],
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
    }
  },
  methods: {
    // 显示输入弹窗
    showKeyboard() {
      this.getBalance()
      // 是否已经交押金
      if (this.details.isauction == 1) {
        this.keyboardShow = true
      } else {
        // 设置押金
        this.keyboardText = this.details.stand[0].price
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
    // 显示密码弹窗
    showPayboard() {
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
        pay_tpye: 'balancepay',
        address_id: 5,
        paypass: md5(this.paypass)
      })
      if (res.data.code == 1) {
        this.$toast('押金支付成功')
        setTimeout(() => {
          window.location.reload()
        }, 1200)
      } else {
        this.$toast(res.data.msg)
      }
    },
    // 加价
    async addprice() {
      let res = await this.$axios.post('goods/auction_addprice', {
        goods_id: this.current.goodsId,
        stand_id: this.current.selectedSkuComb.s1,
        // pay_tpye: 'balancepay',
        price: this.keyboardText,
        // paypass: md5(this.paypass)
      })
      if (res.data.code == 1) {
        this.$toast('加价成功')
      } else {
        this.$toast(res.data.msg)
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
}
</style>
