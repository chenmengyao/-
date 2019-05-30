<template lang="html">
  <van-popup v-model="value" position="bottom">
    <div class="suwis-coupon-list">
      <img class="btn-close" @click="close" src="@/assets/coupons/close.png" alt="">
      <h5>
        {{title}}
      </h5>
      <!--  -->
      <slot></slot>
    </div>
  </van-popup>
</template>

<script>
export default {
	props: ['title', 'value'],
	data() {
		return {}
	},
	methods: {
		close() {
			this.$emit('input', false)
		}
	}
}
</script>

<style lang="scss">
.suwis-coupon-list {
    position: relative;
    background: #fff;
    padding: 15px;

    .btn-close {
        position: absolute;
        top: 2vw;
        right: 2vw;
        max-width: 29px;
    }

    h5 {
        margin: 0;
        font-size: 14px;
        color: $primary;
    }
}
</style>
