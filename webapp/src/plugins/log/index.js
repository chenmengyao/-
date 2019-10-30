let actions = {
  query: '查询',
  remove: '删除',
  create: '创建',
  update: '更新'
}
export default {
  loging(axios, req) {
    let url = req.url.replace(req.baseURL, '')
    // 操作记录里面存在则对外发送请求
    if (this.opts[url] && url != '/system/save_system_log') {
      axios.post('/system/save_system_log', {
        ...this.opts[url]
      })
    }
  },
  // 操作
  opts: {
    '/app/admin/add': {
      module: '权限管理/新增管理员',
      type: actions.create
    },
    '/app/admin/change_pwd': {
      module: '权限管理/修改密码',
      type: actions.update
    },
    '/app/admin/del': {
      module: '权限管理/删除管理员',
      type: actions.remove
    },
    '/app/admin/edit': {
      module: '权限管理/编辑管理员信息',
      type: actions.update
    },
    '/app/admin/login': {
      module: '管理员登录系统',
      type: actions.query
    },
    '/app/admin/logout': {
      module: '管理员退出系统',
      type: actions.query
    },
    '/app/admin/logout': {
      module: '管理员退出系统',
      type: actions.query
    },
    '/manage/commodity/appoint/': {
      module: '订单管理/指定接单司机',
      type: actions.update
    },
    '/manage/commodity/change/': {
      module: '订单管理/更改订单状态',
      type: actions.update
    },
    '/coupon/add': {
      module: '优惠券管理/新增优惠券',
      type: actions.create
    },
    '/coupon/del/': {
      module: '优惠券管理/删除优惠券',
      type: actions.remove
    },
    '/coupon/edit': {
      module: '优惠券管理/编辑优惠券',
      type: actions.update
    },
    '/feedback/auto_reply': {
      module: '系统设置/意见反馈/自动回复反馈意见',
      type: actions.create
    },
    '/feedback/del': {
      module: '系统设置/意见反馈/删除反馈意见',
      type: actions.remove
    },
    '/message/read/': {
      module: '消息中心/标记消息已读',
      type: actions.update
    },
    '/module/add': {
      module: '系统设置/自定义模块/新增自定义模块',
      type: actions.create
    },
    '/module/del': {
      module: '系统设置/自定义模块/删除自定义模块',
      type: actions.remove
    },
    '/app/route/add_route': {
      module: '用户管理/添加路线信息',
      type: actions.create
    },
    '/system/save_app_usage_guide': {
      module: '系统设置/保存APP使用指南',
      type: actions.remove
    },
    '/system/save_banner': {
      module: '系统设置/保存轮播图列表',
      type: actions.update
    },
    '/system/save_cargo_type': {
      module: '系统设置/保存货物类型',
      type: actions.update
    },
    '/system/save_commission': {
      module: '系统设置/保存佣金比例',
      type: actions.update
    },
    '/system/save_contract_setting': {
      module: '系统设置/保存合同设置',
      type: actions.update
    },
    '/system/save_coupon_open': {
      module: '系统设置/优惠券开启设置',
      type: actions.update
    },
    '/system/save_feedback_auto': {
      module: '系统设置/保存意见反馈自动回复模板',
      type: actions.update
    },
    '/system/save_feedback_type': {
      module: '系统设置/保存意见反馈类型',
      type: actions.update
    },
    '/system/save_message_warn1/': {
      module: '系统设置/保存消息提醒设置',
      type: actions.update
    },
    '/system/save_message_warn2/': {
      module: '系统设置/保存消息提醒设置',
      type: actions.update
    },
    '/system/save_order_astrict': {
      module: '系统设置/保存订单限制',
      type: actions.update
    },
    '/system/save_privacy_agreement': {
      module: '系统设置/保存隐私协议',
      type: actions.update
    },
    '/system/save_recharge': {
      module: '系统设置/保存充值设置',
      type: actions.update
    },
    '/system/save_service_agreement': {
      module: '系统设置/保存平台服务协议',
      type: actions.update
    },
    '/system/save_vehicle_brand': {
      module: '系统设置/保存车辆品牌',
      type: actions.update
    },
    '/system/save_vehicle_length': {
      module: '系统设置/保存车长',
      type: actions.update
    },
    '/system/save_vehicle_type': {
      module: '系统设置/保存车型',
      type: actions.update
    },
    '/system/save_withdrawal': {
      module: '系统设置/保存提现规则',
      type: actions.update
    },
    '/manage/message/change/': {
      module: '消息中心/修改消息状态',
      type: actions.update
    },
    '/app/vehicle/add_vehicle': {
      module: '用户管理/添加车辆信息',
      type: actions.create
    }
  }
}
