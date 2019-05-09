export default {
  namespaced: true,
  // 状态
  state: {
    user: {}
  },
  mutations: {
    login(state, params) {
      state.user = params
    },
    exit(state, params) {
      state.user = {}
    }
  },
  getters: {
    logined(state) {
      return JSON.stringify(state.user) != '{}'
    },
    token(state) {
      return state.user.token
    }
  }
}
