document.addEventListener('plusready', () => {
  // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
  // 路由拦截-前置
  var prevPath = null
  var first = null
  var webview = plus.webview.currentWebview()
  window.app.$vm.$router.beforeEach((to, from, next) => {
    prevPath = from.path
    // 触发窗口大小事件
    webview.setStyle({
      top: '44px'
    })
    next()
  })

  // 检测是否处于支付状态
  let hasPayWindow = () => {
    let paywin = plus.webview.getWebviewById('pay_win')
    if (paywin) {
      paywin.close()
      paywin = null
      return true
    } else {
      return false
    }
  }

  plus.key.addEventListener('backbutton', function() {
    if (hasPayWindow()) return
    let path = window.app.$vm.$route.path
    if (prevPath == path || path == '/') {
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
          webview.close()
        }
      })
    }
  }, false)

})
