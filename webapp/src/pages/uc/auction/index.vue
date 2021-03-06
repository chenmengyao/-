<template>
<div class="suwis-uc-auction">
  <van-tabs animated
    v-model="activeTabIndex"
    @change="onClickTab">
    <van-tab v-for="tab in tabList"
      :title="tab.name"
      :key="tab.key">
      <van-list v-model="loading"
        finished-text="没有记录了"
        error-text="请求失败，点击重新加载"
        :error.sync="error"
        :finished="finished"
        @load="getList('add')">
        <template v-if="list && list.length">
          <OrderCard v-for="order in list"
            orderType="auction"
            :key="order[0].id"
            :showPrice="false"
            :order-data="order"
            @click="onClickStore">
            <GoodsItem :goods-list="order"
              @click="onClickGoods"></GoodsItem>
            <template #footer>
              <div class="info-line"
                v-if="order[0].sta === 0">
                <span>我的出价：<span class="color-red">￥{{order[0].price_me}}</span></span>
                <span>最高出价：<span class="color-red">￥{{order[0].price_max}}</span></span>
              </div>
              <div class="info-line"
                v-else-if="order[0].sta === 2">
                <span>结束日期：{{order[0].activity_end_time | dateFmt}}</span>
                <span>最高出价：<span class="color-red">￥{{order[0].price_max}}</span></span>
              </div>
              <ButtonLine :button-list="order[0].sta | buttonList"
                :order-id="order[0].id"
                :order-numer="order[0].number"
                :order-data="order[0]"
                @on-click="onButtonClick"></ButtonLine>
            </template>
          </OrderCard>
        </template>
      </van-list>
    </van-tab>
  </van-tabs>
  <PayType :show="payTypeShow"
    :balance-sum="balance_sum"
    @close="payTypeShow = false"
    @pay="confirmPay"></PayType>
  <van-actionsheet title="请输入支付密码"
    v-model="passwordModalShow"
    :close-on-click-overlay="false"
    @cancel="closePasswordModal">
    <van-password-input :value="password" />
    <div class="link-line">
      <router-link to="/resetpaypwd"
        class="forget-password">忘记支付密码？</router-link>
    </div>
    <van-number-keyboard :show="true"
      @input="onPasswordInput"
      @delete="onPasswordDelete" />
  </van-actionsheet>

  <!--  出价价格 -->
  <van-actionsheet title="请输入出价价格"
    class="number-keyword"
    v-model="keyboardShow"
    :close-on-click-overlay="false"
    @cancel="closeNumberKeyword">
    <div class="keyboard-text"
      @click.stop>
      <van-field v-model="keyboardText"
        input-align="center"
        :placeholder="`当前出价${(currentOrderStandData.price_max >= currentOrderStandData.auction_price)||!currentOrderStandData.auction_price  ? sumPrice(currentOrderStandData.price_max,currentOrderStandData.lowest_price):currentOrderStandData.auction_price}元起`"
        readonly />
    </div>
    <van-number-keyboard :show="true"
      extra-key="."
      theme="custom"
      close-button-text="确定"
      @input="keyboardInput"
      @delete="keyboardDelete"
      @close="addprice" />
    </van-number-keyboard>
  </van-actionsheet>
  <!-- 出价价格 //-->
</div>
</template>

<script>
import OrderCard from '@/components/uc/orders/order-card'
import GoodsItem from '@/components/uc/orders/goods-item'
import ButtonLine from '@/components/uc/orders/button-line'
import PayType from '@/components/uc/orders/pay-type'
import {
  AuctionButton
} from '@/constants/order/button-map'
import payTypeMap from '@/constants/order/payType'

import md5 from 'md5'

export default {
  name: "Auction",
  components: {
    ButtonLine,
    GoodsItem,
    OrderCard,
    PayType
  },
  filters: {
    buttonList: v => AuctionButton.filter(item => item.sta.includes(v))
  },
  data() {
    return {
      activeTabIndex: 0,
      balance_sum: 0, // 可用佣金
      currentOrderId: '',
      currentOrderNumber: '',
      currentOrderStandId: '',
      currentOrderStandData: {},
      error: false,
      finished: false,
      loading: false,
      keyboardArray: [],
      keyboardShow: false, // 数字键盘显示
      keyboardText: '',
      list: [],
      num: 20, // 每页的数量
      page: 1, // 页码
      sta: 0, // 0 正在竞拍 1 已成功 2 已关闭
      payTypeShow: false,
      password: '', // 支付密码
      passwordModalShow: false, // 输入弹框显示
      passwordModalType: 'receive', // 密码弹框类型
      tabList: [{
          key: 'auctioning',
          name: '正在竞拍',
          sta: 0
        },
        {
          key: 'auctionFail',
          name: '已关闭',
          sta: 2
        },
        {
          key: 'auction',
          name: '已成功',
          sta: 1
        }
      ]
    }
  },
  methods: {
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
      return Math.abs(Math.round(price_max*maxNum+lowest_price*maxNum)/maxNum)
    },
    // 加价
    async addprice() {
      let res = await this.$axios.post('goods/auction_addprice', {
        stand_id: this.currentOrderStandId,
        price: this.keyboardText,
      })
      if (res.data.code == 1) {
        this.$toast('加价成功')
        this.getList()
        this.closeNumberKeyword()
      } else {
        this.$toast(res.data.msg)
      }
    },
    // 显示出价键盘
    bidOrder(stand_id,data) {
      this.keyboardShow = true
      this.currentOrderStandData = data
      this.currentOrderStandId = stand_id
    },
    closeNumberKeyword() {
      this.keyboardShow = false
      this.keyboardArray = []
    },
    closePasswordModal() {
      this.password = ''
    },
    confirmPay(key) {
      this.passwordModalShow = true
      this.currentPayType = payTypeMap.find(type => type.key === key)
    },
    getBalance() {
      // 查询可用佣金
      this.$axios
        .post('/mine/mycommission')
        .then(({
          data
        }) => {
          if (data.code === 1) {
            if (data.data||data.data===0) {
              this.balance_sum = data.data
            }
          } else {
            this.$toast(data.msg);
          }
        })
    },
    getList(type = 'reset') {
      // 重置页码参数
      if (type === 'reset') {
        this.list = []
        this.page = 1
      }
      const {
        num,
        page,
        sta
      } = this
      let url, params = {
        num,
        page
      }
      switch (sta) {
        case 0:
          url = 'mine/auctioning'
          break
        case 1:
          url = 'order/index'
          params.sta = 0
          break
        case 2:
          url = 'mine/auctionfail'
      }
      this.$axios
        .post(url, params)
        .then(({
          data
        }) => {
          if (data.code === 1) {
            if (data.data && (data.data.order || data.data.list)) {
              const orderData = this.handleOrderData(data.data.order || data.data.list)
              this.list = this.list.concat(orderData)
              if (page * num > data.data.total) this.finished = true
            } else {
              this.finished = true
            }
          } else {
            this.error = true
            this.$toast(data.msg);
          }
          this.page++
          this.loading = false
        })
        .catch(() => {
          this.error = true
        })
    },
    // 针对订单数据做处理返回新的数组,按店铺id进行分组
    handleOrderData(orderList = []) {
      return orderList.reduce((result, order) => {
        if (Array.isArray(order)) {
          const temp = {}
          for (let goods of order) {
            // 根据店铺id对商品进行分组
            temp[goods.store_id] ? temp[goods.store_id].push(goods) : temp[goods.store_id] = [goods]
          }
          for (let value of Object.values(temp)) {
            result.push(value)
          }
        } else {
          result.push([order])
        }
        return result
      }, [])
    },
    // 输入价格
    keyboardInput(num) {
      this.keyboardArray.push(num)
    },
    // 删除价格
    keyboardDelete() {
      this.keyboardArray.pop()
    },
    // TAB点击时触发
    onClickGoods(goods) {
      this.$router.push({
        path: '/goods/details',
        query: {
          id: goods.goods_id,
          type: 'auction'
        }
      })
    },
    onClickStore(store) {
      this.$router.push({
        path: '/shop',
        query: {
          id: store.store_id
        }
      })
    },
    onClickTab(index) {
      this.sta = this.tabList[index].sta
      if (this.sta === 1) this.$router.push({
        path: '/uc/orders',
        query: {
          activeTabIndex: 1
        }
      })
      this.loading = true
      this.finished = false
      this.error = false
      this.getList()
    },
    onButtonClick(key, orderId, orderNumer, orderData) {
      switch (key) {
        case 'bid':
          this.bidOrder(orderData.stand_id,orderData)
          break
        case 'delete':
          this.deleteOrder(orderId)
          break
      }
    },
    onPasswordInput(key) {
      this.password = this.password + key
      if (this.password.length === 6) {
        if (this.passwordModalType === 'receive') {
          this.$axios
            .post('/order/receiving', {
              order_id: this.currentOrderId,
              paypass: md5(this.password)
            })
            .then(({
              data
            }) => {
              if (data.code === 1) {
                this.$toast('确认收货成功');
                this.password = ''
                this.currentOrderId = ''
                this.passwordModalShow = false
                this.getList()
              } else {
                this.password = ''
                this.$toast(data.msg);
              }
            })
        } else if (this.passwordModalType === 'pay') {
          this.$axios
            .post('/pay/pay', {
              order: this.currentOrderNumber,
              pay_type: this.currentPayType.key,
              paypass: this.currentPayType.key === 'balancepay' ? md5(this.password) : undefined
            })
            .then(({
              data
            }) => {
              if (data.code === 1) {
                this.password = ''
                this.currentOrderNumber = ''
                this.passwordModalShow = false
                this.payTypeShow = false
                this.$toast('支付成功');
                this.getList()
              } else {
                this.password = ''
                this.$toast(data.msg);
              }
            })
        }
      }
    },
    onPasswordDelete() {
      this.password = this.password.slice(0, this.password.length - 1);
    },
    selectPayType(key) {
      this.payTypeShow = false
    },
    deleteOrder(orderId) {
      this.$dialog.confirm({
        title: '删除',
        message: '您确定要删除吗？'
      }).then(() => {
        this.$axios
          .post('/mine/deleteauction', {
            id: orderId
          })
          .then(({
            data
          }) => {
            if (data.code === 1) {
              this.$toast('删除成功');
              this.getList()
            } else {
              this.$toast(data.msg);
            }
          })
      })
    }
  },
  watch: {
    keyboardArray(val) {
      this.keyboardText = val.join('')
    },
  },
  created() {
    this.sta = this.tabList[this.activeTabIndex].sta
  }
}
</script>

<style scoped lang="scss">
.suwis-uc-auction {
    min-height: 100vh;
    background-color: rgb(245, 245, 245);
    .van-password-input {
        margin: 16px 20px;
    }
    .forget-password {
        color: #f0914b;
    }
    .link-line {
        margin: 0 20px 250px;
        text-align: right;
    }
    .info-line {
        display: flex;
        justify-content: space-between;
        margin: 8px 0;
        font-size: 14px;
    }
    .color-red {
        color: #e83f44;
    }
    .number-keyword {
        height: 324px;
    }
}
</style>
