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
          :num="good.num"
          :price="good.price"
          :desc="good.header_one + ' ' + good.header_two"
          :title="good.title"
          :thumb="good.img"
        >
      </van-card>
    </van-checkbox>
  </div>
  <div class="btn-group">
    <van-checkbox v-model="checkall" @change="allChange">
      全选
    </van-checkbox>
    <van-button class="btn" type="primary">结算({{checkedNums}})</van-button>
  </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			shops: [],
			// 已选商品
			checkedNums: 0,
			checkall: false
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
		},
		// 店铺改变
		shopChange(shop) {
			for (let good of shop.goods) {
				this.$set(good, 'checked', shop.checked)
			}
			this.calcCheckNums()
		},
		// 全选
		allChange() {
			for (let shop of this.shops) {
				this.$set(shop, 'checked', this.checkall)
				this.shopChange(shop)
			}
		},
		calcCheckNums() {
			this.checkedNums = 0
			for (let shop of this.shops) {
				for (let good of shop.goods) {
					good.checked ? this.checkedNums++ : ''
				}
			}
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

        .btn {
            height: 6.9vw;
            line-height: 6.9vw;
            min-width: 20vw;
        }
    }
}
</style>
