<template lang="html">
  <div class="suwis-shopping-cart">
    <div class="list-group" v-for="shop in shops">
      <van-checkbox>
        <div class="name">
          <img class="icon" :src="shop.logo" alt="">{{shop.name}}<img class="arrow" src="@/assets/details/arrowright@3x.png" alt="">
        </div>
      </van-checkbox>
      <van-checkbox   v-for="good in shop.goods">
        <van-card
          :num="good.id"
          :price="good.price"
          :desc="good.header_one"
          :title="good.title"
          :thumb="good.img"
        >
      </van-card>
    </van-checkbox>
  </div>
  <div class="btn-group">
    <van-checkbox>
      全选
    </van-checkbox>
    <img src="@/assets/shopping-cart/remove@3x.png" alt="">
  </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			shops: []
		}
	},
	created() {
		this.getCarList()
	},
	methods: {
		// 获取购物车数量
		async getCarList(evt) {
			let res = await this.$axios.post('car/list')
			// 购物车数量
			this.shops = res.data.data || []
		}
	}
}
</script>

<style lang="scss">
.suwis-shopping-cart {
    padding: 15px;
    background: $bg;
    padding-bottom: 55px;
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
        }
    }

    .btn-group {
        position: fixed;
        bottom: 0;
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

        img {
            display: block;
            height: 30px;
        }
    }
}
</style>
