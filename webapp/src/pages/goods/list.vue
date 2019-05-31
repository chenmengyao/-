<template lang="html">
  <div class="suwis-goods">
    <van-row class="filter" type="flex" align="center" justify="space-between">
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
      <van-col class="list" @click.native="$router.push('/goods/classify')">
        <img class="icon" src="@/assets/shop/list@2x.png" alt="">分类
      </van-col>
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
			store: {},
			goods: [],
			total: 0,
			params: {
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
			let res = await this.$axios.post('goods/lists', this.params)
			let data = res.data.data || {}
			this.goods = data.goods || []
		}
	}
}
</script>

<style lang="scss" scoped>
.suwis-goods {
    position: relative;
    padding-top: 50px;

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
