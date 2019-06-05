import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册组件
import '@/components'
// 注册插件
import '@/plugins'
import echarts from 'echarts'
import config from './../app.config'
Vue.prototype.$echarts = echarts

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '89cd7d92df47ba3d8791a760bd4c07e1',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  v: '1.4.4'
});

Vue.config.productionTip = false

const onPlusReady = function(callback, context = this) {
  if (window.plus) {
    callback.call(context)
  } else {
    document.addEventListener('plusready', callback.bind(context))
  }
}

Vue.mixin({
  beforeCreate() {
    onPlusReady(() => {
      this.plusReady = true
    }, this)
  },
  methods: {
    onPlusReady
  }
})
// 路由拦截
router.beforeEach((to, from, next) => {
  // 记录更新时间
  router.updateTime = Date.now()
  // 动态设置页面标题
  try {
    plus.webview.currentWebview().setStyle({
      titleNView: {
        titleText: to.name,
        buttons: [{
          "float": "left",
          "fontSize": "27px",
          "fontSrc": "_www/fonts/iconfont.ttf",
          "text": "\ue6b6",
          "onclick": `javascript:plus.webview.currentWebview().evalJS('back("${to.name}");')`
        }]
      }
    })
  } catch (e) {}
  let hideTabbar = true
  console.log('-------------')
  for (let url of config.noTabbarUrls) {
    console.log(to.path , url)
    if (to.path == url) {
      hideTabbar = false
      break
    }
  }
  console.log(hideTabbar)
  store.commit('core/toggleTabbar', hideTabbar)
  next()
})

// 路由回退
window.back = (name) => {
  // 返回
  router.history.go(-1)
  setTimeout(() => {
    // 监测时间间隔
    if (Date.now() - router.updateTime > 900) {
      // 清空返回箭头
      try {
        plus.webview.currentWebview().setStyle({
          titleNView: {
            titleText: name,
            buttons: []
          }
        })
      } catch (e) {}
    }
  }, 690)
}

// 挂载到app变量上
window.app = {
  $vm: new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
