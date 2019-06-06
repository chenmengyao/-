<template lang="html">
  <div class="suwis-auction-rule">
    <div v-html="ritchtext"></div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			ritchtext: ''
		}
	},
	created() {
		this.$axios.post('goods/auction_rule').then(res => {
			if (res.data && res.data.data) {
				this.ritchtext = JSON.parse(res.data.data)
			}
		})
	}
}
</script>

<style lang="scss">
.suwis-auction-rule {
    padding: 15px;
    font-size: 14px;
}
</style>
