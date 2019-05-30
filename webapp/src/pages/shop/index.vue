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
        <van-col class="btn">
          综合
          <img class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
        </van-col>
        <van-col class="btn">
          销量
          <img class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
        </van-col>
        <van-col class="btn">
          价格
          <img class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
        </van-col>
      </van-row>
    </van-row>
    <!-- 商品列表 -->
    <good-list>
      <good-item v-for="item in goods"
        :img="item.img"
        :title="item.title"
        :price="item.price_min"
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
        type: 0,
        page: 1,
        num: 20,
        search: '你好'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.params.store_id = this.$route.query.id
      let res = await this.$axios.post('goods/lists', this.params)
      this.goods = res.data.data || []
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
