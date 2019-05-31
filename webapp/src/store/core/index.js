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
