<template lang="html">
  <div class="suwis-shopping-cart">
    <div class="list-group" v-for="shop in shops">
      <van-checkbox v-model="shop.checked" @change="shopChange(shop)">
        <div class="name">
          <img class="icon" :src="shop.logo" alt="">{{shop.name}}<img class="arrow" src="@/assets/details/arrowright@3x.png" alt="">
        </div>
      </van-checkbox>
      <van-checkbox v-model="good.checked" v-for="good in shop.goods" @change="calcCheckNums">
        <van-card
          @click.native.stop="$router.push({path:'/goods/details', query:{id:good.goods_id}})"
          :price="good.type=='4'?good.clearance_price:good.price"
          :desc="(good.header_one||'') + ' ' + (good.header_two||'')"
          :title="good.title"
          :thumb="good.img"
        >
        <div slot="footer" style="margin-top:-30px;" @click.stop>
          <van-stepper class="van-stepper" @plus="numChange(good,1)" @minus="numChange(good,-1)" async-change :min="1" :value="good.num" />
        </div>
      </van-card>
    </van-checkbox>
  </div>
  <!-- 购物车空提示 -->
  <div class="no-data-text" v-if="JSON.stringify(shops)=='{}'">
    <div>
      <h5>购物车空空如也</h5>
      <router-link to="/">去选购</router-link>
    </div>
  </div>
  <!-- 购物车空提示 //-->
  <div class="btn-group">
    <van-checkbox v-model="checkall" @change="allChange">
      全选
    </van-checkbox>
    <div>
      <span class="sum">合计：<em>￥{{total.toFixed(2)}}</em></span>
      <van-button class="btn" v-if="selecteds.length>0" type="warning" @click="deleteGoods">删除</van-button>
      <van-button class="btn" type="primary" @click="makeOrder">结算({{selecteds.length}})</van-button>
    </div>
  </div>
</div>
</template>

<script>
import {
  Toast
} from 'vant'
export default {
  data() {
    return {
      shops: null,
      checkall: false,
      // 已选商品
      selecteds: [],
      total: 0,
      changing: false
    }
  },
  created() {
    this.getCarList()
  },
  watch: {
    shops: {
      deep: true,
      handler() {
        // 计算
        this.calcCheckNums()
      }
    }
  },
  methods: {
    // 获取购物车数量
    async getCarList(evt) {
      let res = await this.$axios.post('car/list')
      // 购物车数量
      this.shops = res.data.data || {}
    },
    // 店铺改变
    shopChange(shop) {
      for (let good of shop.goods) {
        this.$set(good, 'checked', shop.checked)
      }
      this.calcCheckNums()
    },
    // 数量改变
    async numChange(good, val) {
      if (this.changing) return
      this.changing = true
      good.num += val
      let res = await this.$axios.post('car/changenum', {
        id: good.id,
        num: good.num
      })
      if (res.data.code != 1) {
        good.num--
        Toast(res.data.msg)
      }
      this.changing = false
    },
    // 全选
    allChange() {
      for (let key in this.shops) {
        let shop = this.shops[key]
        this.$set(shop, 'checked', this.checkall)
        this.shopChange(shop)
      }
    },
    calcCheckNums() {
      this.selecteds = []
      this.total = 0
      for (let key in this.shops) {
        let shop = this.shops[key]
        for (let good of shop.goods) {
          if (good.checked) {
            this.selecteds.push(good.id)
            this.total += good.price * good.num
          }
        }
      }
    },
    async deleteGoods() {
      let res = await this.$axios.post('car/delete', {
        id: this.selecteds
      })
      if (res.data.code == 1) {
        this.selecteds = []
        // 刷新列表
        this.getCarList()
      } else {
        Toast(res.data.msg)
      }
    },
    // 结算购物车 car/makesureorder
    async makeOrder() {
      if (this.selecteds.length == 0) {
        Toast('请选择结算商品')
        return
      }
      let url, params
      url = '/car/makesureorder'
      params = {
        car_id: this.selecteds.join(','),
        is_vip:  1,
      }
      this.$axios.post(url, params).then(({
        data
      }) => {
        if (data.code === 1) {
          this.$router.push({
            path: '/uc/orders/confirm-order',
            query: {
              car_id: this.selecteds.join(',')
            }
          })
        } else {
          this.$toast(data.msg);
        }
      })
      
    }
  }
}
</script>

<style  lang="scss">
.suwis-shopping-cart{
  .van-stepper{
    display: flex;
    justify-content: flex-end;
  }
  .van-stepper__input{
    height: 18px;
    padding:5px 1px;
  }
}
</style>

<style lang="scss" scoped>
.suwis-shopping-cart {
    padding: 15px;
    background: $bg;
    padding-bottom: 105px;
    min-height: 100vh;
    box-sizing: border-box;

    .list-group {
        background: #fff;
        margin-bottom: 5vw;
        padding: 1vw 0;
        border-radius: 4px;
        padding-left: 12px;

        .name {
            display: flex;
            align-items: center;
            white-space: nowrap;
            font-size: 16px;
            margin: 15px 0;
            .icon {
                max-width: 20px;
                height: 20px;
                min-width: 20px;
                object-fit: fill;
                border-radius: 100%;
                overflow: hidden;
                display: block;
                margin-right: 5px;
            }
            .arrow {
                max-width: 6.9px;
                display: block;
                margin-left: 5px;
            }
        }

        .van-card {
            background: transparent;
            padding-left: 0;
            width: 80vw;

            .van-card__thumb {
                img {
                    width: 90px;
                    height: 90px;
                    object-fit: cover;
                }
            }
        }

        .van-stepper {
            position: relative;

            &:before {
                width: 36vw;
                height: 36vw;
                position: absolute;
                content: '';
                display: block;
                right: -5vw;
                top: -6vw;
            }
        }
    }

    .btn-group {
        position: fixed;
        bottom: 50px;
        left: 0;
        width: 100vw;
        height: 55px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        border-top: 1px solid $border;
        white-space: nowrap;
        font-size: 12px;

        img {
            display: block;
            height: 30px;
        }

        .btn {
            height: 6.9vw;
            line-height: 6.9vw;
            min-width: 18vw;
            margin-left: 3.9vw;
            border-radius: 50px;
        }

        em {
            font-style: normal;
            color: $red;
        }

        .sum {
            font-size: 12px;
        }
    }

    .no-data-text {
        display: flex;
        height: calc(100vh - 100px);
        align-items: center;
        justify-content: center;

        div {
            text-align: center;
            h5 {
                font-size: 18px;
                margin: 0;
                padding: 10px;
                color: $primary;
                font-weight: normal;
            }
            a {
                color: $red;
            }
        }
    }
}
</style>
