(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac2e65c"],{"034f":function(t,a,s){"use strict";var e=s("840e"),r=s.n(e);r.a},"14fe":function(t,a,s){},"2fdb":function(t,a,s){"use strict";var e=s("5ca1"),r=s("d2c8"),i="includes";e(e.P+e.F*s("5147")(i),"String",{includes:function(t){return!!~r(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},4347:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"suwis-order-detail"},[t._l(t.orderlist,(function(a){return e("OrderCard",{key:a[0].id,attrs:{"order-data":a,"show-price":!1},on:{click:t.onClickStore}},[e("GoodsItem",{attrs:{"goods-list":a},on:{click:t.onClickGoods}})],1)})),e("div",{staticClass:"card card-address"},[e("img",{staticClass:"image-address",attrs:{src:s("80a6"),alt:"地址"}}),e("div",{staticClass:"info"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(t.shopData.express_name))]),e("span",{staticClass:"tel"},[t._v(t._s(t.shopData.express_tel))])]),e("div",{staticClass:"address"},[t._v(t._s(t.shopData.express_address))])])]),e("div",{staticClass:"card card-price"},[e("div",{staticClass:"card-row row-light-grey"},[e("span",{staticClass:"row-key"},[t._v("商品总价")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.goodsSum))])]),e("div",{staticClass:"card-row row-light-grey"},[e("span",{staticClass:"row-key"},[t._v("运费")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.shopData.carriage))])]),e("div",{staticClass:"card-row thick-row"},[e("span",{staticClass:"row-key"},[t._v("订单总价")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.orderSum))])]),"2"===t.shopData.source?e("div",{staticClass:"card-row thick-row"},[e("span",{staticClass:"row-key"},[t._v("定金")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.shopData.earnest))])]):t._e(),e("div",{staticClass:"card-row thick-row"},[e("span",{staticClass:"row-key"},[t._v(t._s("2"===t.shopData.source?"需付款":"实际付款"))]),e("span",{staticClass:"row-value text-right color-red"},[t._v("￥ "+t._s(t.startSum))])])]),e("div",{staticClass:"card card-order"},[e("h5",{staticClass:"card-title"},[t._v("订单信息")]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("订单编号")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.number))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("交易编号")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.number+t.shopData.id))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("获得积分")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.get_score||0))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("下单时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.time)))])]),t.shopData.sta>0?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("付款时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.pay_time)))])]):t._e(),t.shopData.sta>1?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("发货时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.shipments_time)))])]):t._e(),t.shopData.sta>4?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("成交时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.success_time)))])]):t._e(),e("div",{staticClass:"card-row row-button"},[0!=this.$route.query.sts?e("router-link",{staticClass:"button-item",attrs:{tags:"div",to:{path:"/mine/message/getsm",query:{store_id:t.orderData.store_id}}}},[e("img",{staticClass:"image-button",attrs:{src:s("34bf"),alt:"联系商家"}}),t._v("\n                联系商家\n            ")]):t._e(),e("div",{staticClass:"button-item",on:{click:function(a){return t.callPhone(t.contactWay.phone)}}},[e("img",{staticClass:"image-button",attrs:{src:s("61f3"),alt:"联系平台"}}),t._v("\n                联系平台\n            ")])],1)]),e("div",{staticClass:"card card-button"},[e("ButtonLine",{attrs:{"button-list":t._f("buttonList")(t.shopData.sta),"order-id":t.shopData.id,"order-numer":t.shopData.number},on:{"on-click":t.onButtonClick}})],1),e("PayType",{attrs:{show:t.payTypeShow,"balance-sum":t.balance_sum},on:{close:function(a){t.payTypeShow=!1},pay:t.confirmPay}}),e("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:t.closePasswordModal},model:{value:t.passwordModalShow,callback:function(a){t.passwordModalShow=a},expression:"passwordModalShow"}},[e("van-password-input",{attrs:{value:t.password}}),e("div",{staticClass:"link-line"},[e("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[t._v("忘记支付密码？")])],1),e("van-number-keyboard",{attrs:{show:!0},on:{input:t.onPasswordInput,delete:t.onPasswordDelete}})],1)],2)},r=[],i=(s("8615"),s("ac4d"),s("8a81"),s("ac6a"),s("7514"),s("6762"),s("2fdb"),s("539b")),o=s("bfd2"),n=s("2916"),c=s("5090"),d=s("80a5"),u=s("a04d"),l=s("6821f"),p=s.n(l),h={components:{OrderCard:i["a"],ButtonLine:c["a"],GoodsItem:o["a"],PayType:n["a"]},filters:{buttonList:function(t){return d["c"].filter((function(a){return a.sta.includes(t)}))}},computed:{goodsSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,a){return t+a.num*a.goods_price}),0).toFixed(2):this.orderData.num&&this.orderData.goods_price?(t.num*t.goods_price).toFixed(2):void 0},orderSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,a){return t+ +a.old_price}),0).toFixed(2):t.old_price},startSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,a){return t+ +a.start_sum}),0).toFixed(2):t.start_sum}},data:function(){return{tempList:[[]],contactWay:{},balance_sum:0,currentOrderId:"",currentOrderNumber:"",orderlist:[],orderData:{},payTypeShow:!1,password:"",passwordModalShow:!1,passwordModalType:"receive",shopData:{}}},methods:{callPhone:function(t){window.location.href="tel://"+t},closePasswordModal:function(){this.password=""},confirmPay:function(t){this.passwordModalShow=!0,this.currentPayType=u["a"].find((function(a){return a.key===t}))},getBalance:function(){var t=this;this.$axios.post("/mine/mycommission").then((function(a){var s=a.data;1===s.code?s.data&&(t.balance_sum=s.data):t.$toast(s.msg)}))},onButtonClick:function(t,a,s){switch(t){case"cancel":this.cancelOrder(s);break;case"pay":this.payOrder(s);break;case"logistics":this.checkLogistics(a);break;case"refund":this.refundOrder(a);break;case"return":this.returnOrder(a);break;case"receive":this.confirmReceive(a);break;case"evaluate":this.evaluateOrder(a);break;case"delete":this.deleteOrder(a);break}},onClickGoods:function(t){this.$router.push({path:"/goods/details",query:{id:t.goods_id}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onPasswordInput:function(t){var a=this;this.password=this.password+t,6===this.password.length&&("receive"===this.passwordModalType?this.$axios.post("/order/receiving",{order_id:this.currentOrderId,paypass:p()(this.password)}).then((function(t){var s=t.data;1===s.code?(a.$toast("确认收货成功"),a.password="",a.currentOrderId="",a.passwordModalShow=!1):(a.password="",a.$toast(s.msg))})):"pay"===this.passwordModalType&&this.$axios.post("/pay/pay",{order:this.currentOrderNumber,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?p()(this.password):void 0}).then((function(t){var s=t.data;1===s.code?(a.$toast("支付成功"),a.$router.push({path:"/uc/orders",query:{activeTabIndex:2,type:"0000"}})):(a.password="",a.$toast(s.msg))})))},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},cancelOrder:function(t){var a=this;this.$dialog.confirm({title:"取消订单",message:"该订单还未付款，您确定要取消吗？"}).then((function(){a.$axios.post("/order/cancel",{number:t}).then((function(t){var s=t.data;1===s.code?(a.$toast("取消订单成功"),a.$router.push("/uc/orders")):a.$toast(s.msg)}))}))},payOrder:function(t){this.getBalance(),this.payTypeShow=!0,this.passwordModalType="pay",this.currentOrderNumber=t},checkLogistics:function(t){this.$router.push({path:"/uc/orders/logistics-details",query:{id:t}})},refundOrder:function(t){this.$router.push({path:"/uc/orders/apply",query:{id:t,type:"refund"}})},returnOrder:function(t){this.$router.push({path:"/uc/orders/servicetype",query:{id:t}})},confirmReceive:function(t){this.passwordModalShow=!0,this.passwordModalType="receive",this.currentOrderId=t},evaluateOrder:function(t){this.$router.push({path:"/uc/orders/comment",query:{id:t}})},deleteOrder:function(t){var a=this;this.$dialog.confirm({title:"删除订单",message:"您确定要删除该订单吗？"}).then((function(){a.$axios.post("/order/delete",{id:t}).then((function(t){var s=t.data;1===s.code?(a.$toast("删除订单成功"),a.$router.push("/uc/orders")):a.$toast(s.msg)}))}))},handleOrderData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,a){if(Array.isArray(a)){var s={},e=!0,r=!1,i=void 0;try{for(var o,n=a[Symbol.iterator]();!(e=(o=n.next()).done);e=!0){var c=o.value;s[c.store_id]?s[c.store_id].push(c):s[c.store_id]=[c]}}catch(p){r=!0,i=p}finally{try{e||null==n.return||n.return()}finally{if(r)throw i}}for(var d=0,u=Object.values(s);d<u.length;d++){var l=u[d];t.push(l)}}else t.push([a]);return t}),[])}},created:function(){var t=this;this.id=this.$route.query.id,this.$axios.post("/order/detail",{id:this.id}).then((function(a){var s=a.data;1===s.code?s.data&&(t.orderData=s.data,t.shopData=Array.isArray(s.data)?s.data[0]:s.data,t.orderlist=t.handleOrderData(Array.isArray(s.data)?s.data:[s.data])):t.$toast(s.msg)})),this.$axios.post("/mine/contactWay").then((function(a){var s=a.data;s.data&&(t.contactWay=s.data)}))}},v=h,y=(s("86f8"),s("2877")),f=Object(y["a"])(v,e,r,!1,null,"27bc7818",null);a["default"]=f.exports},5090:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,(function(a){return s("van-button",{key:a.key,attrs:{plain:"",round:"",size:"small",type:a.type},on:{click:function(s){return t.onClick(a.key)}}},[t._v(t._s(a.name)+"\n    ")])})),1)},r=[],i=(s("c5f6"),{props:{buttonList:Array,orderData:Object,orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){this.$emit("on-click",t,this.orderId,this.orderNumer,this.orderData)}}}),o=i,n=(s("e30a"),s("2877")),c=Object(n["a"])(o,e,r,!1,null,"164845ee",null);a["a"]=c.exports},"539b":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"suwis-order-shop"},[e("div",{staticClass:"header"},[e("div",{staticClass:"shop-info",on:{click:t.onClick}},[e("img",{staticClass:"shop-logo",attrs:{src:s("724c"),alt:"店铺头像",width:"20",height:"20"}}),e("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),e("van-icon",{attrs:{name:"arrow"}})],1),e("span",{staticClass:"shop-status"},[t._v(t._s(t.statusText))])]),t._t("default"),t.showPrice?e("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],i=(s("c5f6"),s("bfd2"),{0:"等待付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"已确认收货",5:"交易成功",6:"交易关闭"}),o={0:"正在竞拍",1:"已成功",2:"已关闭"},n={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}},orderType:{type:String,default:"normal"}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},statusText:function(){var t=this.resultData.sta;return"normal"===this.orderType?i[t]:"auction"===this.orderType?o[t]:void 0},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,a){return t+a.num}),0):t.num},totalSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,a){return t+Number(a.start_sum)}),0):Number(t.start_sum)}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},c=n,d=(s("e19c"),s("2877")),u=Object(d["a"])(c,e,r,!1,null,"0f0e5c70",null);a["a"]=u.exports},"5a0d":function(t,a,s){},6762:function(t,a,s){"use strict";var e=s("5ca1"),r=s("c366")(!0);e(e.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"80a5":function(t,a,s){"use strict";s.d(a,"b",(function(){return e})),s.d(a,"a",(function(){return r}));var e=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}],r=[{key:"bid",name:"立即出价",type:"warning",sta:[0]},{key:"logistics",name:"查看物流",type:"default",sta:[1]},{key:"delete",name:"删除",type:"default",sta:[1,2]}];a["c"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2,4]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},"840e":function(t,a,s){},"86f8":function(t,a,s){"use strict";var e=s("14fe"),r=s.n(e);r.a},a7e26:function(t,a,s){},bfd2:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.goodsList.length?s("div",t._l(t.goodsList,(function(a){return s("div",{key:a.goods_id,staticClass:"suwis-goods-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:a.goods_img},on:{click:function(s){return t.onClick(a)}}}),s("div",{staticClass:"center"},[s("div",{staticClass:"title",on:{click:function(s){return t.onClick(a)}}},[t._v(t._s(a.goods_name))]),s("div",{staticClass:"desc-line"},[a.header_one?s("div",{staticClass:"desc-item"},[t._v(t._s(a.header_one))]):t._e(),a.header_two?s("div",{staticClass:"desc-item"},[t._v(t._s(a.header_two))]):t._e(),a.header_three?s("div",{staticClass:"desc-item"},[t._v(t._s(a.header_three))]):t._e()]),"true"===a.is7?s("div",{staticClass:"tag-line"},[s("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),s("div",{staticClass:"right"},[a.goods_price?s("div",{staticClass:"price"},[t._v("￥"+t._s(a.goods_price))]):t._e(),a.num?s("div",{staticClass:"num"},[t._v("×"+t._s(a.num))]):t._e()])])})),0):t._e()},r=[],i={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},o=i,n=(s("034f"),s("2877")),c=Object(n["a"])(o,e,r,!1,null,"64b5afc1",null);a["a"]=c.exports},e19c:function(t,a,s){"use strict";var e=s("5a0d"),r=s.n(e);r.a},e30a:function(t,a,s){"use strict";var e=s("a7e26"),r=s.n(e);r.a}}]);