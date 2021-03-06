import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
         {
           path: "/",
           name: "惠回来",
           component: () => import("./pages/index.vue"),
           meta: {
             keepAlive: true,
             idx: 0
           }
         },
         {
           path: "/login",
           name: "登录",
           component: () => import("./pages/login.vue"),
           meta: {
             keepAlive: true
           }
         },
         {
           path: "/register",
           name: "注册",
           component: () => import("./pages/register.vue")
         },
         {
           path: "/user-agreement",
           name: "用户协议",
           component: () => import("./pages/user-agreement.vue")
         },
         {
           path: "/resetpwd",
           name: "重置密码",
           component: () => import("./pages/resetpwd.vue")
         },
         {
           path: "/resetpaypwd",
           name: "重置支付密码",
           component: () => import("./pages/resetpaypwd.vue")
         },
         {
           path: "/news",
           name: "头条资讯",
           component: () => import("./pages/news/index.vue")
         },
         {
           path: "/news/details",
           name: "头条详情",
           component: () => import("./pages/news/details.vue")
         },
         {
           path: "/goods/classify",
           name: "商品分类",
           component: () => import("./pages/goods/classify.vue"),
           meta: {
             keepAlive: true,
             idx: 1
           }
         },
         {
           path: "/goods/details",
           name: "商品详情",
           component: () => import("./pages/goods/details.vue")
         },
         {
           path: "/goods/list",
           name: "商品列表",
           component: () => import("./pages/goods/list.vue"),
           meta: {
             keepAlive: false
           }
         },
         {
           path: "/goods/comment-list",
           name: "商品评价",
           component: () => import("./pages/goods/comment-list.vue"),
           meta: {
             keepAlive: false
           }
         },
         {
           path: "/goods/search",
           name: "搜索商品",
           component: () => import("./pages/goods/search.vue")
         },
         {
           path: "/goods/shopping-cart",
           name: "购物车",
           meta: {
             idx: 2
           },
           component: () => import("./pages/goods/shopping-cart.vue")
         },
         {
           path: "/shop",
           name: "店铺",
           component: () => import("./pages/shop")
         },
         {
           path: "/service",
           name: "便民服务",
           component: () => import("./pages/service/index.vue")
         },
         {
           path: "/special/auction",
           name: "竞拍捡漏",
           component: () => import("./pages/special/auction-sale.vue")
         },
         {
           path: "/special/auctionrlue",
           name: "竞拍规则",
           component: () => import("./pages/special/auctionrlue.vue")
         },
         {
           path: "/uc/auction",
           name: "我的竞拍",
           component: () => import("./pages/uc/auction/index.vue")
         },
         {
           path: "/special/clearance",
           name: "底价清仓",
           component: () => import("./pages/special/clearance-sale.vue")
         },
         {
           path: "/special/flash",
           name: "限时抢购",
           component: () => import("./pages/special/flash-sale.vue")
         },
         {
           path: "/special/recommend",
           name: "好物推荐",
           component: () => import("./pages/special/recommend-sale.vue")
         },
         {
           path: "/uc",
           name: "个人中心",
           component: () => import("./pages/uc/index.vue"),
           meta: {
             idx: 3
           }
         },
         {
           path: "/uc/setting",
           name: "设置",
           component: () => import("./pages/uc/setting/index.vue")
         },
         {
           path: "/uc/setting/address",
           name: "设置-我的收货地址",
           component: () => import("./pages/uc/setting/address.vue")
         },
         {
           path: "/uc/setting/card",
           name: "设置-团长名片",
           component: () => import("./pages/uc/setting/card.vue")
         },
         {
           path: "/uc/setting/handleAddress",
           name: "设置-新增/编辑地址",
           component: () =>
             import("./pages/uc/setting/handleAddress.vue")
         },
         {
           path: "/uc/coupons",
           name: "优惠券",
           component: () => import("./pages/uc/coupons/index.vue")
         },
         {
           path: "/uc/coupons/details",
           name: "优惠券信息",
           component: () => import("./pages/uc/coupons/details.vue")
         },
         {
           path: "/uc/messages",
           name: "我的消息",
           component: () => import("./pages/uc/messages/index.vue")
         },
         {
           path: "/uc/messages/logistics",
           name: "我的消息-交易物流",
           component: () => import("./pages/uc/messages/logistics.vue")
         },
         {
           path: "/uc/messages/service",
           name: "uc_messages_service",
           component: () => import("./pages/uc/messages/service.vue")
         },
         {
           path: "/uc/messages/system",
           name: "uc_messages_system",
           component: () => import("./pages/uc/messages/system.vue")
         },
         {
           path: "/uc/orders",
           name: "我的订单",
           component: () => import("./pages/uc/orders/index.vue"),
           meta: {
             keepAlive: true
           }
         },
         {
           path: "/uc/orders/apply",
           name: "订单-申请退款/退换货",
           component: () => import("./pages/uc/orders/apply-refund.vue")
         },
         {
           path: "/uc/orders/comment",
           name: "发表评价",
           component: () => import("./pages/uc/orders/comment.vue")
         },
         {
           path: "/uc/orders/confirm-order",
           name: "确认订单",
           component: () => import("./pages/uc/orders/confirm-order.vue")
         },
         {
           path: "/uc/orders/score-discount",
           name: "订单-积分折扣",
           component: () =>
             import("./pages/uc/orders/score-discount.vue")
         },
         {
           path: "/uc/orders/details",
           name: "我的订单",
           component: () => import("./pages/uc/orders/details.vue")
         },
         {
           path: "/uc/orders/logistics-details",
           name: "订单-物流详情",
           component: () =>
             import("./pages/uc/orders/logistics-details.vue")
         },
         {
           path: "/uc/orders/logistics-input",
           name: "订单-查询物流",
           component: () =>
             import("./pages/uc/orders/logistics-input.vue")
         },
         {
           path: "/uc/orders/refund",
           name: "订单-售后订单列表",
           component: () => import("./pages/uc/orders/refund.vue")
         },
         {
           path: "/uc/orders/refund-details",
           name: "订单-售后订单详情",
           component: () =>
             import("./pages/uc/orders/refund-details.vue")
         },
         {
           path: "/uc/orders/servicetype",
           name: "订单-售后类型选择",
           component: () => import("./pages/uc/orders/servicetype.vue")
         },
         {
           path: "/uc/footprint",
           name: "我的足迹",
           component: () => import("./pages/uc/footprint/index.vue")
         },
         {
           path: "/uc/score",
           name: "我的积分",
           component: () => import("./pages/uc/score/index.vue")
         },
         {
           path: "/uc/vip",
           name: "我的VIP",
           component: () => import("./pages/uc/vip/index.vue")
         },
         {
           path: "/uc/popularize",
           name: "我的推广",
           component: () => import("./pages/uc/popularize/index.vue")
         },
         {
           path: "/uc/popularize/details",
           name: "我的推广-推广详情",
           component: () => import("./pages/uc/popularize/details.vue")
         },
         {
           path: "/uc/popularize/grant",
           name: "我的推广-发放额度",
           component: () => import("./pages/uc/popularize/grant.vue")
         },
         {
           path: "/mine/feedback",
           name: "意见反馈",
           component: () => import("./pages/mine/feedback.vue")
         },
         {
           path: "/mine/details",
           name: "历史记录",
           component: () => import("./pages/mine/details.vue")
         },
         {
           path: "/mine/commission",
           name: "我的佣金",
           component: () => import("./pages/mine/commission.vue")
         },
         {
           path: "/mine/information",
           name: "消息列表",
           component: () => import("./pages/mine/information.vue")
         },
         {
           path: "/mine/message/system",
           name: "系统消息",
           component: () => import("./pages/mine/message/system.vue")
         },
         {
           path: "/mine/message/logistics",
           name: "交易物流",
           component: () => import("./pages/mine/message/logistics.vue")
         },
         {
           path: "/mine/message/kefu",
           name: "客服消息",
           component: () => import("./pages/mine/message/kefu.vue")
         },
         {
           path: "/mine/message/getsm",
           name: "客服聊天",
           component: () => import("./pages/mine/message/getsm.vue")
         }
       ];

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
