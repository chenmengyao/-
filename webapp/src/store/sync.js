import _ from 'lodash'
export default (store) => {
  // 尝试获取应用状态
  let sessionState = sessionStorage.getItem('suwis_cloud_state')
  if (sessionState) {
    setTimeout(() => {
      window.app.$vm.$store.replaceState(_.defaultsDeep(JSON.parse(sessionState), store.state))
    }, 0)
  }
  // 初始化
  store.subscribe((mutation, state) => {
    sessionStorage.setItem('suwis_cloud_state', JSON.stringify(state))
  })
}
