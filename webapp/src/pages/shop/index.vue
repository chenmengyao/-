<template lang="html">
  <div class="suwis-shop">
    <!-- 店铺信息 -->
    <van-row class="shop" v-if="store">
      <van-col>
        <dl>
          <dt>
            <img :src="store.logo" alt="">
          </dt>
          <dd>
            <h6>{{store.name}}</h6>
            <span>在售商品<em>{{total}}</em>件</span>
          </dd>
        </dl>
      </van-col>
    </van-row>
    <!-- 店铺信息 //-->
    <van-row class="filter interval" type="flex" align="center" justify="space-between">
      <van-col class="list">
        <img class="icon" src="@/assets/shop/list@2x.png" alt="">列表
      </van-col>
      <van-row>
        <van-col class="btn" @click.native="changeParams('zh')">
          综合
          <img v-if="params.zh=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
          <img v-else class="icon" src="@/assets/shop/arrow_top.png" alt="">
        </van-col>
        <van-col class="btn" @click.native="changeParams('sell')">
          销量
          <img v-if="params.sell=='down'" class="icon" src="@/assets/shop/arrow_bottom.png" alt="">
          <img v-else class="icon" src="@/assets/shop/arrow_top.png" alt="">
        </van-col>
        <van-col class="btn" @click.native="changeParams('price')">
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
        :sell="item.num"
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
      store: {},
      goods: [],
      total: 0,
      params: {
        store_id: 0,
        sell: 'down',
        price: 'down',
        zh: 'down',
        page: 1,
        num: 20,
        search: ''
      }
    }
  },
  created() {
    this.getStore()
    this.getList()
    this.$store.commit('core/hideTabbar')
  },
  watch: {
    // params: {
    //   deep: true,
    //   handler() {
    //     this.getList()
    //   }
    // }
  },
  methods: {
    changeParams(prop) {
      if (!prop) {
        return
      }
      this.params[prop] = this.params[prop] == 'up' ? 'down' : 'up';
      this.getList(prop)
    },
    async getStore() {
      let res = await this.$axios.post('goods/getstore', {
        id: this.$route.query.id
      })
      let data = res.data.data || {}
      this.store = data
    },
    async getList(prop) {
      let {sell,price,zh,page,num,search} = this.params;
      let paramObj ;
      if (!prop) {
        paramObj = {
          zh,
          page,num,search,
          store_id:  this.$route.query.id
        }
      }else {
        paramObj = {
          page,num,search,
          store_id:  this.$route.query.id
        }
        paramObj[prop] = this.params[prop];
      }
      
      this.params.store_id = this.$route.query.id;
      let res = await this.$axios.post('goods/storelist', paramObj)
      let data = res.data.data || {}
      this.goods = data.goods || []
      this.total = data.total || 0
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-shop {
    position: relative;
    padding-bottom: 50px;
    .shop {
        bottom: 50px;
        height: 86px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        z-index: 399;
        font-size: 12px;
        padding: 0 12px;

        .van-col {
            display: flex;
            align-items: center;
        }

        dl {
            display: flex;
            align-items: center;

            dd,
            dt {
                margin: 0;
            }
            dd {
                padding-left: 10px;
            }

            img {
                max-width: 44px;
                height: 44px;
                border-radius: 4px;
                display: block;
            }

            h6 {
                color: $primary;
                margin: 0;
                padding-bottom: 5px;
                font-size: 14px;
            }

            span {
                color: $gray;
            }

            em {
                font-style: normal;
                color: $red;
            }
        }
        .link {
            justify-content: center;
            .btn {
                max-width: 68px;
            }
        }
    }
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
