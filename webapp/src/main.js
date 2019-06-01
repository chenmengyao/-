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
  // 动态设置页面标题
  try {
    plus.webview.currentWebview().setStyle({
      titleNView: {
        titleText: to.name
      }
    })
  } catch (e) {}
  let hideTabbar = true
  for (let url of config.noTabbarUrls) {
    if (to.path == url) {
      hideTabbar = false
      break
    }
  }
  store.commit('core/toggleTabbar', hideTabbar)
  next()
})

// 挂载到app变量上
window.app = {
  $vm: new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
