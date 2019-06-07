import _ from 'lodash'
export default {
  namespaced: true,
  // 状态
  state: {
    // 用户数据
    user: {},
    // app状态
    app: {
      // 底部导航条是否显示
      tabbarVisible: true
    },
    // 头部状态
    header: {
      left: {},
      right: {}
    }
  },
  mutations: {
    // 登录
    login(state, params) {
      state.user = params
    },
    // 退出登录
    exit(state, params) {
      state.user = {}
    },
    // 显示底部导航条
    showTabbar(state, params) {
      state.app.tabbarVisible = true
    },
    // 隐藏底部
    hideTabbar(state, params) {
      state.app.tabbarVisible = false
    },
    // 切换底部导航条
    toggleTabbar(state, params) {
      state.app.tabbarVisible = params
    },
    // 头部状态修改
    header(state, params) {
      let left = (params.buttons && params.buttons.left) || {
        float: 'left',
        fontSize: '27px',
        fontSrc: '_www/fonts/iconfont.ttf',
        text: '\ue6b6'
      }
      left.onclick = `javascript:plus.webview.currentWebview().evalJS('headerLeftClick("${params.title}");')`
      let right = _.defaultsDeep(params.buttons && params.buttons.right ? { ...params.buttons.right
      } : {}, {
        float: 'right',
        fontSize: '16px',
        fontSrc: '_www/fonts/iconfont.ttf'
      })
      right.onclick = `javascript:plus.webview.currentWebview().evalJS('headerRightClick("${params.title}");')`
      // 动态设置页面标题
      try {
        plus.webview.currentWebview().setStyle({
          titleNView: {
            titleText: params.title,
            buttons: [left, right]
          }
        })
      } catch (e) {
        // console.log(e)
      }
      // 左侧按钮点击
      window.headerLeftClick = (name) => {
        if (params.buttons && params.buttons.left) {
          params.buttons.left.onclick()
        } else {
          // 返回
          window.app.$vm.$router.history.go(-1)
        }
      }
      // 右键点击
      window.headerRightClick = (name) => {
        params.buttons.right.onclick()
      }
    }
  },
  getters: {
    // 是否登陆
    logined(state) {
      return JSON.stringify(state.user) != '{}'
    },
    // token
    token(state) {
      return state.user.token
    },
    // 用户信息
    user(state) {
      return state.user.user
    },
    // app状态信息
    app(state) {
      return state.app
    }
  }
}
