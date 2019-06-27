document.addEventListener('plusready', () => {
  // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
  // 路由拦截-前置
  var prevPath = null
  var first = null
  var webview = plus.webview.currentWebview()
  window.app.$vm.$router.beforeEach((to, from, next) => {
    prevPath = from.path
    next()
  })
  plus.key.addEventListener('backbutton', function() {
    let path = window.app.$vm.$route.path
    if (prevPath == path) {
      window.app.$vm.$toast('再按一次退出应用')
      // 首次按键，提示‘再按一次退出应用’
      if (!first) {
        first = Date.now()
        setTimeout(function() {
          first = null
        }, 1000)
      } else {
        if (Date.now() - first < 1000) {
          plus.runtime.quit()
        }
      }
    } else {
      webview.canBack(function(e) {
        if (e.canBack) {
          webview.back()
        } else {
          webview.close() // hide,quit
          // plus.runtime.quit()
        }
      })
    }
  }, false)
})
