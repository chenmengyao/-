export default {
  namespaced: true,
  // 状态
  state: {
    user: {}
  },
  mutations: {
    login(state, params) {
      state.user = params
      console.log(state.user, 's')
    },
    exit(state, params) {
      state.user = {}
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
    }
  }
}
