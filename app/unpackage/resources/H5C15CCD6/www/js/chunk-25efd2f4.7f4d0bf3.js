(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25efd2f4"],{"2fdb":function(t,e,s){"use strict";var a=s("5ca1"),r=s("d2c8"),n="includes";a(a.P+a.F*s("5147")(n),"String",{includes:function(t){return!!~r(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"34a2":function(t,e,s){"use strict";var a=s("6dc3"),r=s.n(a);r.a},5090:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,function(e){return s("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(s){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])}),1)},r=[],n=(s("c5f6"),{props:{buttonList:Array,orderId:Number,orderNumer:Number},methods:{onClick:function(t){this.$emit("on-click",t,this.orderId,this.orderNumer)}}}),i=n,o=(s("aaec"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"3eb0d516",null);e["a"]=c.exports},"539b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-order-shop"},[a("div",{staticClass:"header"},[a("div",{staticClass:"shop-info",on:{click:t.onClick}},[a("img",{staticClass:"shop-logo",attrs:{src:s("724c"),alt:"店铺头像",width:"20",height:"20"}}),a("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),a("van-icon",{attrs:{name:"arrow"}})],1),a("span",{staticClass:"shop-status"},[t._v(t._s(t._f("status")(t.resultData.sta)))])]),t._t("default"),t.showPrice?a("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],n=(s("bfd2"),{0:"等待买家付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"买家已确认收货",5:"交易成功",6:"交易关闭"}),i={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}}},filters:{status:function(t){return n[t]}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,e){return t+e.num},0):t.num},totalSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,e){return t+e.num*e.goods_price},0):t.num*t.goods_price}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},o=i,c=(s("67ee"),s("2877")),d=Object(c["a"])(o,a,r,!1,null,"4b507ddb",null);e["a"]=d.exports},5404:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-order-list"},[s("van-tabs",{attrs:{animated:""},on:{change:t.onClickTab},model:{value:t.activeTabIndex,callback:function(e){t.activeTabIndex=e},expression:"activeTabIndex"}},t._l(t.tabList,function(e){return s("van-tab",{key:e.key,attrs:{title:e.name}},[s("van-list",{attrs:{"finished-text":"没有订单记录了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(e){t.error=e},load:function(e){return t.getList("add")}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,function(e){return s("OrderCard",{key:e[0].id,attrs:{"order-data":e},on:{click:t.onClickStore},scopedSlots:t._u([{key:"footer",fn:function(){return[s("ButtonLine",{attrs:{"button-list":t._f("buttonList")(e[0].sta),"order-id":e[0].id,"order-numer":+e[0].number},on:{"on-click":t.onButtonClick}})]},proxy:!0}],null,!0)},[s("GoodsItem",{attrs:{"goods-list":e},on:{click:t.onClickGoods}})],1)}):t._e()],2)],1)}),1),s("PayType",{attrs:{show:t.payTypeShow,"balance-sum":t.balance_sum},on:{close:function(e){t.payTypeShow=!1},pay:t.confirmPay}}),s("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:t.closePasswordModal},model:{value:t.passwordModalShow,callback:function(e){t.passwordModalShow=e},expression:"passwordModalShow"}},[s("van-password-input",{attrs:{value:t.password}}),s("div",{staticClass:"link-line"},[s("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[t._v("忘记支付密码？")])],1),s("van-number-keyboard",{attrs:{show:!0},on:{input:t.onPasswordInput,delete:t.onPasswordDelete}})],1)],1)},r=[],n=(s("8615"),s("ac6a"),s("7514"),s("6762"),s("2fdb"),s("539b")),i=s("bfd2"),o=s("5090"),c=s("2916"),d=s("80a5"),u=s("a04d"),l=s("6821f"),h=s.n(l),p={name:"OrderList",components:{ButtonLine:o["a"],GoodsItem:i["a"],OrderCard:n["a"],PayType:c["a"]},filters:{buttonList:function(t){return d["b"].filter(function(e){return e.sta.includes(t)})}},data:function(){return{activeTabIndex:0,balance_sum:0,currentOrderId:"",currentOrderNumber:"",error:!1,finished:!1,loading:!1,list:[],num:20,page:1,sta:void 0,payTypeShow:!1,password:"",passwordModalShow:!1,passwordModalType:"receive",tabList:[{key:"all",name:"全部订单",sta:void 0},{key:"toPay",name:"待付款",sta:0},{key:"toSend",name:"待发货",sta:1},{key:"toReceive",name:"待收货",sta:2},{key:"toEvaluate",name:"待评价",sta:4}]}},methods:{closePasswordModal:function(){this.password=""},confirmPay:function(t){this.passwordModalShow=!0,this.currentPayType=u["a"].find(function(e){return e.key===t})},getBalance:function(){var t=this;this.$axios.post("/mine/mycommission").then(function(e){var s=e.data;1===s.code?s.data&&(t.balance_sum=s.data):t.$toast(s.msg)})},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset";"reset"===e&&(this.list=[],this.page=1);var s=this.num,a=this.page,r=this.sta;this.$axios.post("/order/index",{sta:r,num:s,page:a}).then(function(e){var r=e.data;if(1===r.code){if(r.data&&r.data.order){var n=t.handleOrderData(r.data.order);t.list=t.list.concat(n),a*s>r.data.total&&(t.finished=!0)}}else t.error=!0,t.$toast(r.msg);t.page++,t.loading=!1}).catch(function(){t.error=!0})},handleOrderData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce(function(t,e){if(Array.isArray(e)){var s={};e.forEach(function(t){s[t.store_id]?s[t.store_id].push(t):s[t.store_id]=[t]}),Object.values(s).forEach(function(e){return t.push(e)})}else t.push([e]);return t},[])},onClickGoods:function(t){this.$router.push({path:"/uc/orders/details",query:{id:t.id}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onClickTab:function(t){this.sta=this.tabList[t].sta,this.getList()},onClickOrder:function(t){this.$router.push({path:"/uc/orders/details",query:{id:t.id}})},onButtonClick:function(t,e,s){switch(t){case"cancel":this.cancelOrder(e);break;case"pay":this.payOrder(s);break;case"logistics":this.checkLogistics(e);break;case"refund":this.refundOrder(e);break;case"return":this.returnOrder(e);break;case"receive":this.confirmReceive(e);break;case"evaluate":this.evaluateOrder(e);break;case"delete":this.deleteOrder(e);break}},onPasswordInput:function(t){var e=this;this.password=this.password+t,6===this.password.length&&("receive"===this.passwordModalType?this.$axios.post("/order/receiving",{order_id:this.currentOrderId,paypass:h()(this.password)}).then(function(t){var s=t.data;1===s.code?(e.$toast("确认收货成功"),e.password="",e.currentOrderId="",e.passwordModalShow=!1,e.getList()):(e.password="",e.$toast(s.msg))}):"pay"===this.passwordModalType&&this.$axios.post("/pay/pay",{order:this.currentOrderNumber,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?h()(this.password):void 0}).then(function(t){var s=t.data;1===s.code?(e.password="",e.currentOrderNumber="",e.passwordModalShow=!1,e.payTypeShow=!1,e.$toast("支付成功"),e.getList()):(e.password="",e.$toast(s.msg))}))},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},cancelOrder:function(t){var e=this;this.$dialog.confirm({title:"取消订单",message:"该订单还未付款，您确定要取消吗？"}).then(function(){e.$axios.post("/order/cancel",{number:t}).then(function(t){var s=t.data;1===s.code?(e.$toast("取消订单成功"),e.getList()):e.$toast(s.msg)})})},checkLogistics:function(t){this.$router.push({path:"/uc/orders/logistics-details",query:{id:t}})},payOrder:function(t){this.getBalance(),this.payTypeShow=!0,this.passwordModalType="pay",this.currentOrderNumber=t},refundOrder:function(t){this.$router.push({path:"/uc/orders/apply",query:{id:t,type:"refund"}})},returnOrder:function(t){this.$router.push({path:"/uc/orders/servicetype",query:{id:t}})},selectPayType:function(t){this.payTypeShow=!1},confirmReceive:function(t){this.passwordModalShow=!0,this.passwordModalType="receive",this.currentOrderId=t},evaluateOrder:function(t){this.$router.push({path:"/uc/orders/comment",query:{id:t}})},deleteOrder:function(t){var e=this;this.$dialog.confirm({title:"删除订单",message:"您确定要删除该订单吗？"}).then(function(){e.$axios.post("/order/delete",{id:t}).then(function(t){var s=t.data;1===s.code?(e.$toast("删除订单成功"),e.getList()):e.$toast(s.msg)})})}},created:function(){this.sta=this.tabList[this.activeTabIndex].sta}},f=p,y=(s("34a2"),s("2877")),v=Object(y["a"])(f,a,r,!1,null,"613d139d",null);e["default"]=v.exports},"5e58":function(t,e,s){},6762:function(t,e,s){"use strict";var a=s("5ca1"),r=s("c366")(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"67ee":function(t,e,s){"use strict";var a=s("5e58"),r=s.n(a);r.a},"6dc3":function(t,e,s){},"80a5":function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}];e["b"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},aaec:function(t,e,s){"use strict";var a=s("e8ac"),r=s.n(a);r.a},bfd2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.goodsList.length?s("div",t._l(t.goodsList,function(e){return s("div",{key:e.goods_id,staticClass:"suwis-goods-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:e.goods_img},on:{click:function(s){return t.onClick(e)}}}),s("div",{staticClass:"center"},[s("div",{staticClass:"title",on:{click:function(s){return t.onClick(e)}}},[t._v(t._s(e.goods_name))]),s("div",{staticClass:"desc-line"},[e.header_one?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_one))]):t._e(),e.header_two?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_two))]):t._e(),e.header_three?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_three))]):t._e()]),"true"===e.is7?s("div",{staticClass:"tag-line"},[s("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[t._v("￥"+t._s(e.goods_price))]),s("div",{staticClass:"num"},[t._v("×"+t._s(e.num))])])])}),0):t._e()},r=[],n={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},i=n,o=(s("cfe5"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"0eda75f3",null);e["a"]=c.exports},cd06:function(t,e,s){},cfe5:function(t,e,s){"use strict";var a=s("cd06"),r=s.n(a);r.a},e8ac:function(t,e,s){}}]);
//# sourceMappingURL=chunk-25efd2f4.7f4d0bf3.js.map