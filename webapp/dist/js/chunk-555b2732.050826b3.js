(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-555b2732"],{"034f":function(t,e,a){"use strict";var s=a("840e"),r=a.n(s);r.a},"0cce":function(t,e,a){},"292a":function(t,e,a){"use strict";var s=a("0cce"),r=a.n(s);r.a},"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),r=a("d2c8"),i="includes";s(s.P+s.F*a("5147")(i),"String",{includes:function(t){return!!~r(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3fdb":function(t,e,a){"use strict";var s=a("4904"),r=a.n(s);r.a},4904:function(t,e,a){},5090:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,(function(e){return a("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(a){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])})),1)},r=[],i=(a("c5f6"),{props:{buttonList:Array,orderData:Object,orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){console.log(t,"key"),this.$emit("on-click",t,this.orderId,this.orderNumer,this.orderData)}}}),n=i,o=(a("3fdb"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"5f4c50ca",null);e["a"]=c.exports},"539b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-order-shop"},[s("div",{staticClass:"header"},[s("div",{staticClass:"shop-info",on:{click:t.onClick}},[s("img",{staticClass:"shop-logo",attrs:{src:a("724c"),alt:"店铺头像",width:"20",height:"20"}}),s("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),s("van-icon",{attrs:{name:"arrow"}})],1),s("span",{staticClass:"shop-status"},[t._v(t._s(t.statusText))])]),t._t("default"),t.showPrice?s("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],i=(a("c5f6"),a("bfd2"),{0:"等待付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"已确认收货",5:"交易成功",6:"交易关闭"}),n={0:"正在竞拍",1:"已成功",2:"已关闭"},o={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}},orderType:{type:String,default:"normal"}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},statusText:function(){var t=this.resultData.sta;return"normal"===this.orderType?i[t]:"auction"===this.orderType?n[t]:void 0},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,e){return t+e.num}),0):t.num},totalSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,e){return t+Number(e.start_sum)}),0):Number(t.start_sum)}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},c=o,d=(a("e19c"),a("2877")),u=Object(d["a"])(c,s,r,!1,null,"0f0e5c70",null);e["a"]=u.exports},5404:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-order-list"},[a("van-tabs",{attrs:{animated:""},on:{click:t.onClickTab},model:{value:t.activeTabIndex,callback:function(e){t.activeTabIndex=e},expression:"activeTabIndex"}},t._l(t.tabList,(function(e){return a("van-tab",{key:e.key,attrs:{title:e.name}},[a("van-list",{attrs:{"finished-text":"没有订单记录了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(e){t.error=e},load:function(e){return t.getList("add")}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,(function(e){return a("OrderCard",{key:e[0].id,attrs:{"order-data":e},on:{click:t.onClickStore},scopedSlots:t._u([{key:"footer",fn:function(){return[a("ButtonLine",{attrs:{"button-list":t._f("buttonList")(e[0].sta),"order-id":e[0].id,"order-numer":e[0].number},on:{"on-click":t.onButtonClick}})]},proxy:!0}],null,!0)},[a("GoodsItem",{attrs:{"goods-list":e},on:{click:t.onClickGoods}})],1)})):t._e()],2)],1)})),1),a("PayType",{attrs:{show:t.payTypeShow,"balance-sum":t.balance_sum,"order-id":t.currentOrderId},on:{close:function(e){t.payTypeShow=!1},pay:t.confirmPay}}),a("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:t.closePasswordModal},model:{value:t.passwordModalShow,callback:function(e){t.passwordModalShow=e},expression:"passwordModalShow"}},[a("van-password-input",{attrs:{value:t.password}}),a("div",{staticClass:"link-line"},[a("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[t._v("忘记支付密码？")])],1),a("van-number-keyboard",{attrs:{show:!0},on:{input:t.onPasswordInput,delete:t.onPasswordDelete}})],1)],1)},r=[],i=(a("96cf"),a("3b8d")),n=(a("8615"),a("ac4d"),a("8a81"),a("ac6a"),a("7514"),a("6762"),a("2fdb"),a("539b")),o=a("bfd2"),c=a("5090"),d=a("2916"),u=a("80a5"),l=a("a04d"),h=a("6821f"),p=a.n(h),f={name:"OrderList",components:{ButtonLine:c["a"],GoodsItem:o["a"],OrderCard:n["a"],PayType:d["a"]},filters:{buttonList:function(t){return u["c"].filter((function(e){return e.sta.includes(t)}))}},data:function(){return{activeTabIndex:0,balance_sum:0,currentOrderId:"",currentOrderNumber:"",error:!1,finished:!1,loading:!1,list:[],num:5,page:1,sta:void 0,payTypeShow:!1,password:"",passwordModalShow:!1,passwordModalType:"receive",flay:!1,tabList:[{key:"all",name:"全部订单",sta:void 0},{key:"toPay",name:"待付款",sta:0},{key:"toSend",name:"待发货",sta:1},{key:"toReceive",name:"待收货",sta:2},{key:"toEvaluate",name:"待评价",sta:4}]}},methods:{closePasswordModal:function(){this.password=""},confirmPay:function(t){this.passwordModalShow=!0,this.currentPayType=l["a"].find((function(e){return e.key===t}))},getBalance:function(){var t=this;this.$axios.post("/mine/mycommission").then((function(e){var a=e.data;1===a.code?a.data&&(t.balance_sum=a.data):t.$toast(a.msg)}))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset";this.flay=!0,"reset"===e&&(this.list=[],this.page=1);var a=this.num,s=this.page,r=this.sta;this.$axios.post("/order/index",{sta:r,num:a,page:s}).then((function(e){var r=e.data;if(1===r.code){if(!r.data||!r.data.order)return void(t.finished=!0);var i=t.handleOrderData(r.data.order);t.list=t.list.concat(i),s*a>r.data.total&&(t.finished=!0)}else t.error=!0,t.$toast(r.msg);t.page++,t.loading=!1})).catch((function(){t.error=!0}))},handleOrderData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){if(Array.isArray(e)){var a={},s=!0,r=!1,i=void 0;try{for(var n,o=e[Symbol.iterator]();!(s=(n=o.next()).done);s=!0){var c=n.value;a[c.store_id]?a[c.store_id].push(c):a[c.store_id]=[c]}}catch(h){r=!0,i=h}finally{try{s||null==o.return||o.return()}finally{if(r)throw i}}for(var d=0,u=Object.values(a);d<u.length;d++){var l=u[d];t.push(l)}}else t.push([e]);return t}),[])},onClickGoods:function(t){this.$router.push({path:"/uc/orders/details",query:{id:t.id,sts:this.sta}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onClickTab:function(t){this.sta=this.tabList[t].sta,this.loading=!0,this.finished=!1,this.error=!1,this.getList()},onClickOrder:function(t){this.$router.push({path:"/uc/orders/details",query:{id:t.id}})},onButtonClick:function(t,e,a){switch(t){case"cancel":this.cancelOrder(a);break;case"pay":this.payOrder(e,a);break;case"logistics":this.checkLogistics(e);break;case"refund":this.refundOrder(e);break;case"return":this.returnOrder(e);break;case"receive":this.confirmReceive(e);break;case"evaluate":this.evaluateOrder(e);break;case"delete":this.deleteOrder(e,a);break;case"viewProgress":this.viewProgress(e);break}},onPasswordInput:function(t){var e=this;this.password=this.password+t,6===this.password.length&&("receive"===this.passwordModalType?this.$axios.post("/order/receiving",{order_id:this.currentOrderId,paypass:p()(this.password)}).then((function(t){var a=t.data;1===a.code?(e.$toast("确认收货成功"),e.password="",e.currentOrderId="",e.passwordModalShow=!1,e.activeTabIndex=4,e.sta=e.tabList[e.activeTabIndex].sta,e.getList()):(e.password="",e.$toast(a.msg))})):"pay"===this.passwordModalType&&this.$axios.post("/pay/pay",{order:this.currentOrderNumber,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?p()(this.password):void 0}).then((function(t){var a=t.data;1===a.code?(e.password="",e.currentOrderNumber="",e.passwordModalShow=!1,e.payTypeShow=!1,e.$toast("支付成功"),e.activeTabIndex=2,e.sta=e.tabList[e.activeTabIndex].sta,e.getList()):(e.password="",e.$toast(a.msg))})))},viewProgress:function(t){this.$router.push({path:"/uc/orders/refund-details",query:{id:t}})},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},cancelOrder:function(t){var e=this;this.$dialog.confirm({title:"取消订单",message:"该订单还未付款，您确定要取消吗？"}).then((function(){e.$axios.post("/order/cancel",{number:t}).then((function(t){var a=t.data;1===a.code?(e.$toast("取消订单成功"),e.getList()):e.$toast(a.msg)}))}))},checkLogistics:function(t){this.$router.push({path:"/uc/orders/logistics-details",query:{id:t}})},payOrder:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var s,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(a,e,555),t.next=3,this.$axios.post("/order/combination",{order:a});case 3:s=t.sent,r=s.data,this.currentOrderId=a,1===r.data?this.$dialog.confirm({title:"订单支付确认",message:"该订单是组合订单,确认一起支付吗?"}).then((function(){i.$router.push({path:"/uc/orders/details",query:{id:e}})})):2===r.data&&(this.getBalance(),this.payTypeShow=!0,this.passwordModalType="pay",this.currentOrderNumber=a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),refundOrder:function(t){this.$router.push({path:"/uc/orders/apply",query:{id:t,type:"refund"}})},returnOrder:function(t){this.$router.push({path:"/uc/orders/servicetype",query:{id:t}})},selectPayType:function(t){this.payTypeShow=!1},confirmReceive:function(t){this.passwordModalShow=!0,this.passwordModalType="receive",this.currentOrderId=t},evaluateOrder:function(t){this.$router.push({path:"/uc/orders/comment",query:{id:t}})},deleteOrder:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var s,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("/order/combination",{order:a});case 2:s=t.sent,r=s.data,this.$dialog.confirm({title:"删除订单",message:"2"==r.data?"您确定要删除该订单吗？":"该订单为组合订单，你确定要删除该订单吗？"}).then((function(){i.$axios.post("/order/delete",{id:e}).then((function(t){var e=t.data;1===e.code?(i.$toast("删除订单成功"),i.getList()):i.$toast(e.msg)}))}));case 5:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},created:function(){},activated:function(){this.activeTabIndex=this.$route.query.activeTabIndex||0,this.sta=this.tabList[this.activeTabIndex].sta,console.log(this.$route.path,"55"),this.$route.query&&this.$route.query.type&&"0000"==this.$route.query.type&&this.flay&&(this.loading=!0,this.finished=!1,this.getList())}},y=f,v=(a("292a"),a("2877")),m=Object(v["a"])(y,s,r,!1,null,"7fb0a13a",null);e["default"]=m.exports},"5a0d":function(t,e,a){},6762:function(t,e,a){"use strict";var s=a("5ca1"),r=a("c366")(!0);s(s.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"80a5":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return r}));var s=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}],r=[{key:"bid",name:"立即出价",type:"warning",sta:[0]},{key:"logistics",name:"查看物流",type:"default",sta:[1]},{key:"delete",name:"删除",type:"default",sta:[1,2]}];e["c"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2,4]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},"840e":function(t,e,a){},bfd2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.goodsList.length?a("div",t._l(t.goodsList,(function(e){return a("div",{key:e.goods_id,staticClass:"suwis-goods-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:e.goods_img},on:{click:function(a){return t.onClick(e)}}}),a("div",{staticClass:"center"},[a("div",{staticClass:"title",on:{click:function(a){return t.onClick(e)}}},[t._v(t._s(e.goods_name))]),a("div",{staticClass:"desc-line"},[e.header_one?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_one))]):t._e(),e.header_two?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_two))]):t._e(),e.header_three?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_three))]):t._e()]),"true"===e.is7?a("div",{staticClass:"tag-line"},[a("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),a("div",{staticClass:"right"},[e.goods_price?a("div",{staticClass:"price"},[t._v("￥"+t._s(e.goods_price))]):t._e(),e.num?a("div",{staticClass:"num"},[t._v("×"+t._s(e.num))]):t._e()])])})),0):t._e()},r=[],i={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},n=i,o=(a("034f"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"64b5afc1",null);e["a"]=c.exports},e19c:function(t,e,a){"use strict";var s=a("5a0d"),r=a.n(s);r.a}}]);