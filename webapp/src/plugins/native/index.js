document.addEventListener('plusready', () => {
  // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
  var first = null
  var webview = plus.webview.currentWebview()
  plus.key.addEventListener('backbutton', function() {
    let path = window.app.$vm.$route.path
    setTimeout(() => {
      alert(path + '|' + window.app.$vm.$route.path)
      if (path == window.app.$vm.$route.path) {
        // 首次按键，提示‘再按一次退出应用’
        if (!first) {
          first = new Date().getTime()
          // mui.toast('再按一次退出应用')
          setTimeout(function() {
            first = null
          }, 1000)
        } else {
          if (new Date().getTime() - first < 1000) {
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
    }, 100)
  }, false)
})
