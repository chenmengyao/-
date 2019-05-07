import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./pages/index.vue')
    },{
      path: '/news',//资讯头条列表
      name: 'news',
      component: () => import('./pages/news/index.vue')
    },{
      path: '/news/details',//资讯头条详情
      name: 'news_details',
      component: () => import('./pages/news/details.vue')
    },{
      path: '/goods/classify',
      name: 'goods_classify',
      component: () => import('./pages/goods/classify.vue')
    },{
      path: '/goods/details',
      name: 'goods_details',
      component: () => import('./pages/goods/details.vue')
    },{
      path: '/goods/list',
      name: 'goods_list',
      component: () => import('./pages/goods/list.vue')
    },{
      path: '/goods/search',
      name: 'goods_search',
      component: () => import('./pages/goods/search.vue')
    },{
      path: '/goods/shopping-cart',
      name: 'goods_shopping',
      component: () => import('./pages/goods/shopping-cart.vue')
    },{
      path: '/service',
      name: 'service',
      component: () => import('./pages/service/index.vue')
    },{
      path: '/special/auction',
      name: 'special_auction',
      component: () => import('./pages/special/auction-sale.vue')
    },{
      path: '/special/clearance',
      name: 'special_clearance',
      component: () => import('./pages/special/clearance-sale.vue')
    },{
      path: '/special/flash',
      name: 'special_flash',
      component: () => import('./pages/special/flash-sale.vue')
    },{
      path: '/special/recommend',
      name: 'special_recommend',
      component: () => import('./pages/special/recommend-sale.vue')
    },{
      path: '/uc',
      name: 'uc',
      component: () => import('./pages/uc/index.vue')
    },{
      path: '/uc/coupons',
      name: 'uc_coupons',
      component: () => import('./pages/uc/coupons/index.vue')
    },{
      path: '/uc/coupons/details',
      name: 'uc_coupons_details',
      component: () => import('./pages/uc/coupons/details.vue')
    },{
      path: '/uc/messages',
      name: 'uc_messages',
      component: () => import('./pages/uc/messages/index.vue')
    },{
      path: '/uc/messages/logistics',
      name: 'uc_messages_logistics',
      component: () => import('./pages/uc/messages/logistics.vue')
    },{
      path: '/uc/messages/service',
      name: 'uc_messages_service',
      component: () => import('./pages/uc/messages/service.vue')
    },{
      path: '/uc/messages/system',
      name: 'uc_messages_system',
      component: () => import('./pages/uc/messages/system.vue')
    },{
      path: '/uc/orders',
      name: 'uc_orders',
      component: () => import('./pages/uc/orders/index.vue')
    },{
      path: '/uc/orders/apply',
      name: 'uc_orders_apply',
      component: () => import('./pages/uc/orders/apply-refund.vue')
    },{
      path: '/uc/orders/comment',
      name: 'uc_orders_comment',
      component: () => import('./pages/uc/orders/comment.vue')
    },{
      path: '/uc/orders/details',
      name: 'uc_orders_details',
      component: () => import('./pages/uc/orders/details.vue')
    },{
      path: '/uc/orders/logistics-details',
      name: 'uc_orders_logistics_details',
      component: () => import('./pages/uc/orders/logistics-details.vue')
    },{
      path: '/uc/orders/logistics-query',
      name: 'uc_orders_logistics_query',
      component: () => import('./pages/uc/orders/logistics-query.vue')
    },{
      path: '/uc/orders/refund-details',
      name: 'uc_orders_refund_details',
      component: () => import('./pages/uc/orders/refund-details.vue')
    },{
      path: '/uc/orders/refund',
      name: 'uc_orders_refund',
      component: () => import('./pages/uc/orders/refund.vue')
    },{
      path: '/uc/orders/servicetype',
      name: 'uc_orders_servicetype',
      component: () => import('./pages/uc/orders/servicetype.vue')
    },{
      path: '/uc/popularize',
      name: 'uc_popularize',
      component: () => import('./pages/uc/popularize/index.vue')
    },{
      path: '/uc/popularize/details',
      name: 'uc_popularize_details',
      component: () => import('./pages/uc/popularize/details.vue')
    },{
      path: '/uc/popularize/grant',
      name: 'uc_popularize_grant',
      component: () => import('./pages/uc/popularize/grant.vue')
    },{
      path: '/mine/feedback',
      name: 'mine_feedback',
      component: () => import('./pages/mine/feedback')
    }
  ]
})
