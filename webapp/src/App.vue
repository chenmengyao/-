<template>
<div id="app">
	<!-- 桌面 -->
	<start v-if="logined"></start>
	<!-- 桌面 //-->
	<login v-else></login>
</div>
</template>
<script>
import {
	getters
} from 'vuex'
import start from '@/pages/start'
import login from '@/pages/login'
// import _ from 'lodash'
export default {
	name: "app",
	components: {
		start,
		login
	},
	data() {
		return {}
	},
	computed: {
		logined() {
			return this.$store.getters['core/logined']
		}
	},
	methods: {}
};
</script>

<style lang="scss">
#app {
    height: 100vh;
    width: 100vw;
}
</style>
