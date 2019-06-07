<template lang="html">
  <div class="suwis-user-agreement">
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
		this.$axios.post('user/user_agreement').then(res => {
			if (res.data && res.data.data) {
				this.ritchtext = JSON.parse(res.data.data)
			}
		})
	}
}
</script>

<style lang="scss" scoped>
.suwis-user-agreement {
    padding: 15px;
    font-size: 14px;
}
</style>
