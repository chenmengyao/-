<template>
<div id="app">
	<!-- 桌面 -->
	<start v-if="logined"></start>
	<!-- 桌面 //-->
	<login v-else></login>
	<!-- 底部原生导航条 -->
	<tabbar></tabbar>
</div>
</template>
<script>
import {
	getters
} from 'vuex'
import start from '@/pages/start'
import login from '@/pages/login'
import config from './../app.config'
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
			let logined = this.$store.getters['core/logined']
			// 检测当前路由是否为面授权
			for (let path of config.licenseExemptUrls) {
				if (path == this.$route.path) {
					logined = true
					break
				}
			}
			return logined
		}
	},
	methods: {}
};
</script>

<style lang="scss">
#app {
    width: 100vw;
	// position: relative;
	// z-index: 99999999;
}
</style>
