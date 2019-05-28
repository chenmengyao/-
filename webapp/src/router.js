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
    path: '/resetpwd',
    name: 'resetpwd',
    component: () => import('./pages/resetpwd.vue')
  }, {
    path: '/resetpaypwd',
    name: 'resetpaypwd',
    component: () => import('./pages/resetpaypwd.vue')
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
    path: '/shop',
    name: 'shop',
    component: () => import('./pages/shop')
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
    path: '/uc', // 我的（个人中心）
    name: 'uc',
    component: () => import('./pages/uc/index.vue')
  }, {
    path: '/uc/setting', // 设置
    name: 'uc_setting',
    component: () => import('./pages/uc/setting/index.vue')
  }, {
    path: '/uc/setting/address', // 设置-地址列表
    name: 'uc_setting_address',
    component: () => import('./pages/uc/setting/address.vue')
  }, {
    path: '/uc/setting/handleAddress', // 设置-新增/编辑地址
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
    path: '/uc/orders', // 订单列表
    name: 'uc_orders',
    component: () => import('./pages/uc/orders/index.vue')
  }, {
    path: '/uc/orders/apply', // 订单-申请退款/退换货
    name: 'uc_orders_apply',
    component: () => import('./pages/uc/orders/apply-refund.vue')
  }, {
    path: '/uc/orders/comment', // 订单-评价
    name: 'uc_orders_comment',
    component: () => import('./pages/uc/orders/comment.vue')
  }, {
    path: '/uc/orders/confirm-order', // 订单-提交订单
    name: 'uc_orders_confirm_order',
    component: () => import('./pages/uc/orders/confirm-order.vue')
  }, {
    path: '/uc/orders/score-discount', // 订单-积分折扣
    name: 'uc_orders_score_discount',
    component: () => import('./pages/uc/orders/score-discount.vue')
  }, {
    path: '/uc/orders/details', // 订单-订单详情
    name: 'uc_orders_details',
    component: () => import('./pages/uc/orders/details.vue')
  }, {
    path: '/uc/orders/logistics-details', // 订单-物流详情
    name: 'uc_orders_logistics_details',
    component: () => import('./pages/uc/orders/logistics-details.vue')
  }, {
    path: '/uc/orders/logistics-query', // 订单-查询物流
    name: 'uc_orders_logistics_query',
    component: () => import('./pages/uc/orders/logistics-query.vue')
  }, {
    path: '/uc/orders/refund', // 订单-售后订单列表
    name: 'uc_orders_refund',
    component: () => import('./pages/uc/orders/refund.vue')
  }, {
    path: '/uc/orders/refund-details', // 订单-售后订单详情
    name: 'uc_orders_refund_details',
    component: () => import('./pages/uc/orders/refund-details.vue')
  }, {
    path: '/uc/orders/servicetype', // 订单-售后类型选择
    name: 'uc_orders_servicetype',
    component: () => import('./pages/uc/orders/servicetype.vue')
  }, {
    path: '/uc/footprint', // 个人-足迹
    name: 'uc_footprint',
    component: () => import('./pages/uc/footprint/index.vue')
  }, {
    path: '/uc/score', // 个人-积分
    name: 'uc_score',
    component: () => import('./pages/uc/score/index.vue')
  }, {
    path: '/uc/vip', // 个人-我的VIP
    name: 'uc_vip',
    component: () => import('./pages/uc/vip/index.vue')
  }, {
    path: '/uc/popularize', // 个人-我的推广
    name: 'uc_popularize',
    component: () => import('./pages/uc/popularize/index.vue')
  }, {
    path: '/uc/popularize/details', // 个人-推广详情
    name: 'uc_popularize_details',
    component: () => import('./pages/uc/popularize/details.vue')
  }, {
    path: '/uc/popularize/grant', // 个人-推广-发放额度
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
    path: '/mine/information', //消息列表
    name: 'mine_commission',
    component: () => import('./pages/mine/information.vue')
  }, {
    path: '/mine/message/system', //系统消息
    name: 'mine_system',
    component: () => import('./pages/mine/message/system.vue')
  }, {
    path: '/mine/message/logistics', //交易物流
    name: 'mine_logistics',
    component: () => import('./pages/mine/message/logistics.vue')
  }, {
    path: '/mine/message/kefu', //消息列表
    name: 'mine_kefu',
    component: () => import('./pages/mine/message/kefu.vue')
  }, {
    path: '/mine/message/getsm', //客服聊天
    name: 'mine_getsm',
    component: () => import('./pages/mine/message/getsm.vue')
  }]
})
