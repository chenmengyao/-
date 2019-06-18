<template lang="html">
  <div class="suwis-goods">
    <van-row class="filter" type="flex" align="center" justify="space-between">
      <van-row>
        <van-col class="btn" @click.native="params.evaluate=='down'?params.evaluate='up':params.evaluate='down'">
          综合
          <img v-if="params.evaluate=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
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
      <van-col class="list" @click.native="$router.push('/goods/classify')">
        <img class="icon" src="@/assets/shop/list@2x.png" alt="">分类
      </van-col>
    </van-row>
    <!-- 商品列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadList"
    >
      <good-list>
        <good-item v-for="item in goods"
          :img="item.img"
          :title="item.title"
          @click.native="$router.push({path:'/goods/details', query: {id: item.id}})">
          <template v-if="item.type!=2">
            <template slot="price">￥{{item.price}}</template>
            <template slot="sell">{{item.num||0}}人已付款</template>
          </template>
          <template v-else>
            <template slot="price"><span style="color:#333333;">当前价格</span>￥{{item.price}}</template>
            <template slot="sell">{{item.price_count||0}}次出价</template>
          </template>
        </good-item>
      </good-list>
    </van-list>
    <!-- 商品列表 //-->
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      store: {},
      goods: [],
      total: 0,
      params: {
        sell: 'down',
        price: 'down',
        evaluate: 'down',
        page: 0,
        num: 20,
        search: '',
        category: ''
      },
      loading: false,
      finished: false
    }
  },
  created() {},
  watch: {
    'params.sell'() {
      this.params.page = 1
      this.goods = []
      this.getList()
    },
    'params.price'() {
      this.params.page = 1
      this.goods = []
      this.getList()
    },
    'params.evaluate'() {
      this.params.page = 1
      this.goods = []
      this.getList()
    }
  },
  methods: {
    loadList: _.debounce(function() {
      // 获取url上的参数
      this.params.page += 1
      this.getList()
    }, 186),
    async getList() {
      this.loading = true
      this.params.search = this.$route.query.search || ''
      this.params.category = this.$route.query.category || ''
      let res = await this.$axios.post('goods/lists', this.params)
      let data = res.data.data || {}
      this.goods = this.goods.concat(data.goods || [])
      this.loading = false
      if (!data.goods || data.goods.length == 0) this.finished = true
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-goods {
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;

    .interval {
        border-top: 6px solid $border;
    }

    .filter {
        padding: 15px;
        font-size: 14px;
        position: fixed;
        width: 100vw;
        background: #fff;
        top: 0;
        left: 0;
        height: 50px;
        box-sizing: border-box;
        z-index: 999;

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
            &:first-child {
                margin-left: 0;
            }
            .icon {
                margin: 0 1vw;
            }
        }
    }
}
</style>
