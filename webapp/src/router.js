import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./pages/index.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('./pages/login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('./pages/register.vue')
  }, {
    path: '/user-agreement',
    name: 'user_agreement',
    component: () => import('./pages/user-agreement.vue')
  }, {
    path: '/updatepwd',
    name: 'updatepwd',
    component: () => import('./pages/updatepwd.vue')
  }, {
    path: '/news', //资讯头条列表
    name: 'news',
    component: () => import('./pages/news/index.vue')
  }, {
    path: '/news/details', //资讯头条详情
    name: 'news_details',
    component: () => import('./pages/news/details.vue')
  }, {
    path: '/goods/classify',
    name: 'goods_classify',
    component: () => import('./pages/goods/classify.vue')
  }, {
    path: '/goods/details',
    name: 'goods_details',
    component: () => import('./pages/goods/details.vue')
  }, {
    path: '/goods/list',
    name: 'goods_list',
    component: () => import('./pages/goods/list.vue')
  }, {
    path: '/goods/search',
    name: 'goods_search',
    component: () => import('./pages/goods/search.vue')
  }, {
    path: '/goods/shopping-cart',
    name: 'goods_shopping',
    component: () => import('./pages/goods/shopping-cart.vue')
  }, {
    path: '/service',
    name: 'service',
    component: () => import('./pages/service/index.vue')
  }, {
    path: '/special/auction', //竞拍捡漏
    name: 'special_auction',
    component: () => import('./pages/special/auction-sale.vue')
  }, {
    path: '/special/clearance', //低价清仓
    name: 'special_clearance',
    component: () => import('./pages/special/clearance-sale.vue')
  }, {
    path: '/special/flash', //限时抢购
    name: 'special_flash',
    component: () => import('./pages/special/flash-sale.vue')
  }, {
    path: '/special/recommend', //好物推荐
    name: 'special_recommend',
    component: () => import('./pages/special/recommend-sale.vue')
  }, {
    path: '/uc',
    name: 'uc',
    component: () => import('./pages/uc/index.vue')
  }, {
    path: '/uc/setting',
    name: 'uc_setting',
    component: () => import('./pages/uc/setting/index.vue')
  }, {
    path: '/uc/setting/address',
    name: 'uc_setting_address',
    component: () => import('./pages/uc/setting/address.vue')
  }, {
    path: '/uc/setting/handleAddress',
    name: 'uc_setting_handleAddress',
    component: () => import('./pages/uc/setting/handleAddress.vue')
  }, {
    path: '/uc/coupons',
    name: 'uc_coupons',
    component: () => import('./pages/uc/coupons/index.vue')
  }, {
    path: '/uc/coupons/details',
    name: 'uc_coupons_details',
    component: () => import('./pages/uc/coupons/details.vue')
  }, {
    path: '/uc/messages',
    name: 'uc_messages',
    component: () => import('./pages/uc/messages/index.vue')
  }, {
    path: '/uc/messages/logistics',
    name: 'uc_messages_logistics',
    component: () => import('./pages/uc/messages/logistics.vue')
  }, {
    path: '/uc/messages/service',
    name: 'uc_messages_service',
    component: () => import('./pages/uc/messages/service.vue')
  }, {
    path: '/uc/messages/system',
    name: 'uc_messages_system',
    component: () => import('./pages/uc/messages/system.vue')
  }, {
    path: '/uc/orders',
    name: 'uc_orders',
    component: () => import('./pages/uc/orders/index.vue')
  }, {
    path: '/uc/orders/apply',
    name: 'uc_orders_apply',
    component: () => import('./pages/uc/orders/apply-refund.vue')
  }, {
    path: '/uc/orders/comment',
    name: 'uc_orders_comment',
    component: () => import('./pages/uc/orders/comment.vue')
  }, {
    path: '/uc/orders/confirm-order', // 确认订单
    name: 'uc_orders_confirm_order',
    component: () => import('./pages/uc/orders/confirm-order.vue')
  }, {
      path: '/uc/orders/score-discount', // 积分折扣
      name: 'uc_orders_score_discount',
      component: () => import('./pages/uc/orders/score-discount.vue')
  }, {
    path: '/uc/orders/details', // 订单详情
    name: 'uc_orders_details',
    component: () => import('./pages/uc/orders/details.vue')
  }, {
    path: '/uc/orders/logistics-details',
    name: 'uc_orders_logistics_details',
    component: () => import('./pages/uc/orders/logistics-details.vue')
  }, {
    path: '/uc/orders/logistics-query',
    name: 'uc_orders_logistics_query',
    component: () => import('./pages/uc/orders/logistics-query.vue')
  }, {
    path: '/uc/orders/refund-details',
    name: 'uc_orders_refund_details',
    component: () => import('./pages/uc/orders/refund-details.vue')
  }, {
    path: '/uc/orders/refund',
    name: 'uc_orders_refund',
    component: () => import('./pages/uc/orders/refund.vue')
  }, {
    path: '/uc/orders/servicetype',
    name: 'uc_orders_servicetype',
    component: () => import('./pages/uc/orders/servicetype.vue')
  }, {
    path: '/uc/footprint',
    name: 'uc_footprint',
    component: () => import('./pages/uc/footprint/index.vue')
  }, {
    path: '/uc/score',
    name: 'uc_score',
    component: () => import('./pages/uc/score/index.vue')
  }, {
    path: '/uc/vip',
    name: 'uc_vip',
    component: () => import('./pages/uc/vip/index.vue')
  }, {
    path: '/uc/popularize',
    name: 'uc_popularize',
    component: () => import('./pages/uc/popularize/index.vue')
  }, {
    path: '/uc/popularize/details',
    name: 'uc_popularize_details',
    component: () => import('./pages/uc/popularize/details.vue')
  }, {
    path: '/uc/popularize/grant',
    name: 'uc_popularize_grant',
    component: () => import('./pages/uc/popularize/grant.vue')
  }, {
    path: '/mine/feedback',
    name: 'mine_feedback',
    component: () => import('./pages/mine/feedback.vue')
  }, {
    path: '/mine/commission', //我的佣金
    name: 'mine_commission',
    component: () => import('./pages/mine/commission.vue')
  }, {
    path: '/mine/information',
    name: 'mine_commission',
    component: () => import('./pages/mine/information.vue')
  }, {
    path: '/mine/message/system',
    name: 'mine_system',
    component: () => import('./pages/mine/message/system.vue')
  }, {
    path: '/mine/message/logistics',
    name: 'mine_logistics',
    component: () => import('./pages/mine/message/logistics.vue')
  }]
})
