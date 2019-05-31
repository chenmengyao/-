<template lang="html">
  <div class="suwis-tabbar"></div>
</template>

<script>
export default {
	mounted() {
		console.error('created')
		// 初始化绑定事件
		setTimeout(() => {
			this.init()
		}, 1000)
	},
	methods: {
		init() {
			this.ntab = plus.nativeObj.View.getViewById('tabbar')
			this.ntab.addEventListener('click', (e) => {
				console.log('tab click')
				// console.log(e)
				let x = e.clientX
				let w = window.innerWidth
				let index = 0
				// 判断点击位置
				if (x < w * 0.25) {
					index = 0
				}
				if (x > w * 0.23 && x < w * 0.47) {
					index = 1
				}
				if (x > w * 0.47 && x < w * 0.72) {
					index = 2
				}
				if (x > w * 0.72) {
					index = 3
				}
				let current = this.navlist[index]
				this.toggleTab(current)
			})
		},
		toggleTab(current) {
			// 深拷贝
			let tags = JSON.parse(JSON.stringify(lwb.subNViews[0].tags))
			for (let tag of tags) {
				if (tag.id === `${current.id}Text` || tag.id === `${current.id}Icon`) {
					tag.textStyles.color = this.options.ACTIVE_COLOR
				}
			}
			this.$router.push(current.path)
			// 设置颜色
			this.ntab.draw(tags)
		},
		/**
		 *  简单封装了绘制原生view控件的方法
		 *  绘制内容支持font（文本，字体图标）,图片img , 矩形区域rect
		 */
		drawNative: function(id, styles, tags) {
			var view = new plus.nativeObj.View(id, styles, tags)
			return view
		}
	}
}
</script>

<style lang="css">
</style>
