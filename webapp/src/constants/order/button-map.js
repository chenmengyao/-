export const RefundButton = [
    {
        key: 'contact',
        name: '联系卖家',
        type: 'default',
        sta: [0, 1, 2]
    },
    {
        key: 'logistics',
        name: '填写物流',
        type: 'default',
        sta: [1]
    },
    {
        key: 'modify',
        name: '修改申请',
        type: 'default',
        sta: [0, 2]
    },
    {
        key: 'cancel',
        name: '撤销申请',
        type: 'warning',
        sta: [0, 1, 2]
    },
]

export const AuctionButton = [
    {
        key: 'bid',
        name: '立即出价',
        type: 'warning',
        sta: [0]
    },
    {
        key: 'logistics',
        name: '查看物流',
        type: 'default',
        sta: [1]
    },
    {
        key: 'delete',
        name: '删除',
        type: 'default',
        sta: [1, 2]
    }
]

export default [
    {
        key: 'cancel',
        name: '取消订单',
        type: 'default',
        sta: [0]
    },
    {
        key: 'pay',
        name: '付款',
        type: 'warning',
        sta: [0]
    },
    {
        key: 'refund',
        name: '退款',
        type: 'default',
        sta: [1]
    },
    {
        key: 'return',
        name: '退/换货',
        type: 'default',
        sta: [2, 4]
    },
    {
        key: 'logistics',
        name: '查看物流',
        type: 'default',
        sta: [2, 4, 5]
    },
    {
        key: 'receive',
        name: '确认收货',
        type: 'warning',
        sta: [2]
    },
    {
        key: 'viewProgress',
        name: '查看进度',
        type: 'warning',
        sta: [3]
    },
    {
        key: 'evaluate',
        name: '评价',
        type: 'warning',
        sta: [4]
    },
    {
        key: 'delete',
        name: '删除订单',
        type: 'default',
        sta: [5, 6]
    }
]