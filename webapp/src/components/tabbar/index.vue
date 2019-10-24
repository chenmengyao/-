<template lang="html">
  <div class="suwis-tabbar"></div>
</template>

<script>
import lwb from './launchwebview.json'
export default {
  data() {
    return {
      navlist: [{
        name: '首页',
        icon: '&#xe60b;',
        path: '/',
        id: 'index'
      }, {
        name: '分类',
        icon: '&#xe735;',
        path: '/goods/classify',
        id: 'list'
      }, {
        name: '购物车',
        icon: '&#xe645;',
        path: '/goods/shopping-cart',
        id: 'car'
      }, {
        name: '我的',
        icon: '&#xe65d;',
        path: '/uc',
        id: 'my'
      }],
      options: {
        ACTIVE_COLOR: 'rgba(221,11,17,1)',
        NORMAL_COLOR: '#666666'
      },
      ntab: {},
      plusready: false
    }
  },
  computed: {
    app() {
      return this.$store.getters['core/app']
    }
  },
  mounted() {
    // 初始化绑定事件
    document.addEventListener('plusready', this.init, false)
  },
  watch: {
    app: {
      deep: true,
      immediate: true,
      handler() {
        // 切换状态
        this.toggleState()
      }
    },
    $route(val) {
      setTimeout(() => {
        // 修复页面聚焦时底部tab高度失效问题
        let inputs = document.getElementsByTagName('input')
        console.log(inputs, 'inputs')
        for (let input of inputs) {
          input.removeEventListener('blur', this.resetWebview)
          input.addEventListener('blur', this.resetWebview)
          input.removeEventListener('focus', this.resetWebview)
          input.addEventListener('focus', this.resetWebview)
        }
      }, 698)
      // 切换状态
      let idx = val.meta.idx || -1
      if (val.path == '/') idx = 0
      if (idx < 0) return
      let current = this.navlist[idx]
      this.toggleTab(current)
    }
  },
  methods: {
    async init() {
      // 获取配置文件
      this.ntab = plus.nativeObj.View.getViewById('tabbar')
      this.ntab.addEventListener('click', (e) => {
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
      this.plusready = true

      // 默认选中首页
      this.toggleTab(this.navlist[0])
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
      try {
        this.ntab.draw(tags)
      } catch (e) {}
    },
    /**
     *  简单封装了绘制原生view控件的方法
     *  绘制内容支持font（文本，字体图标）,图片img , 矩形区域rect
     */
    drawNative: function(id, styles, tags) {
      var view = new plus.nativeObj.View(id, styles, tags)
      return view
    },
    // 切换状态栏显示状态
    toggleState() {
      try {
        this.app.tabbarVisible ? this.ntab.show() : this.ntab.hide()
      } catch (e) {}
    },
    // 重置webview高度
    resetWebview() {
      this.$toast('聚焦')
      let webview = plus.webview.currentWebview()
      webview.setStyle({
        height: '100%'
      })
    }
  }
}
</script>

<style lang="css">
</style>
