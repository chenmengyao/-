<template lang="html">
  <div class="suwis-shop">
    <!-- 店铺信息 -->
    <van-row class="interval shop" v-if="details.store">
      <van-col>
        <dl>
          <dt>
            <img :src="details.store.logo" alt="">
          </dt>
          <dd>
            <h6>{{details.store.name}}</h6>
            <span>在售商品<em>{{details.store_count}}</em>件</span>
          </dd>
        </dl>
      </van-col>
      <van-col class="link">
        <router-link :to="{ path: '/', params: {} }">
          <img class="btn" src="@/assets/details/look@3x.png" alt="">
        </router-link>
      </van-col>
    </van-row>
    <!-- 店铺信息 //-->
    <van-row class="filter interval" type="flex" align="center" justify="space-between">
      <van-col class="list">
        <img class="icon" src="@/assets/shop/list@2x.png" alt="">列表
      </van-col>
      <van-row>
        <van-col class="btn" @click.native="params.zh=='down'?params.zh='up':params.zh='down'">
          综合
          <img v-if="params.zh=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
          <img v-else class="icon" src="@/assets/shop/arrow_top.png" alt="">
        </van-col>
        <van-col class="btn" @click.native="params.sell=='down'?params.sell='up':params.sell='down'">
          销量
          <img v-if="params.sell=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
          <img v-else class="icon" src="@/assets/shop/arrow_top.png" alt="">
        </van-col>
        <van-col class="btn" @click.native="params.price=='down'?params.price='up':params.price='down'">
          价格
          <img v-if="params.price=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
          <img v-else class="icon" src="@/assets/shop/arrow_top.png" alt="">
        </van-col>
      </van-row>
    </van-row>
    <!-- 商品列表 -->
    <good-list>
      <good-item v-for="item in goods"
        :img="item.img"
        :title="item.title"
        :price="item.price"
        :sell="item.sell"
        @click.native="$router.push({path:'/goods/details', query: {id: item.id}})">
      </good-item>
    </good-list>
    <!-- 商品列表 //-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {},
      goods: [],
      params: {
        store_id: 0,
        sell: 'down',
        price: 'down',
        zh: 'down',
        search: ''
      }
    }
  },
  created() {
    this.getList()
  },
  watch: {
    params: {
      deep: true,
      handler() {
        this.getList()
      }
    }
  },
  methods: {
    async getList() {
      this.params.store_id = this.$route.query.id
      let res = await this.$axios.post('goods/storelist', this.params)
      let data = res.data.data || {}
      this.goods = data.goods || []
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-shop {
    position: relative;
    .interval {
        border-top: 6px solid $border;
    }
    .filter {
        padding: 15px;
        font-size: 14px;
        .icon {
            max-width: 14px;
            margin-right: 3px;
            display: block;
        }
        .btn,
        .list {
            display: flex;
            align-items: center;
        }
        .btn {
            margin-left: 2vw;
            .icon {
                margin: 0 1vw;
            }
        }
    }
}
</style>
