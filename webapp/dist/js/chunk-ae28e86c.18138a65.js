(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae28e86c"],{"034f":function(t,e,a){"use strict";var s=a("840e"),r=a.n(s);r.a},"1c24":function(t,e,a){"use strict";var s=a("8bd1"),r=a.n(s);r.a},"2b52":function(t,e,a){},"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),r=a("d2c8"),n="includes";s(s.P+s.F*a("5147")(n),"String",{includes:function(t){return!!~r(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3331:function(t,e,a){"use strict";var s=a("2b52"),r=a.n(s);r.a},"4b8a":function(t,e,a){"use strict";var s=a("4e83"),r=a.n(s);r.a},"4e83":function(t,e,a){},5090:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,(function(e){return a("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(a){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])})),1)},r=[],n=(a("c5f6"),{props:{buttonList:Array,orderData:[Object,Array],orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){console.log(t,"key"),this.$emit("on-click",t,this.orderId,this.orderNumer,this.orderData)}}}),i=n,o=(a("1c24"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"585c73d3",null);e["a"]=c.exports},"539b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-order-shop"},[s("div",{staticClass:"header"},[s("div",{staticClass:"shop-info",on:{click:t.onClick}},[s("img",{staticClass:"shop-logo",attrs:{src:a("724c"),alt:"店铺头像",width:"20",height:"20"}}),s("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),s("van-icon",{attrs:{name:"arrow"}})],1),s("span",{staticClass:"shop-status"},[t._v(t._s(t.statusText))])]),t._t("default"),t.showPrice?s("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],n=(a("c5f6"),a("bfd2"),{0:"等待付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"已确认收货",5:"交易成功",6:"交易关闭"}),i={0:"正在竞拍",1:"已成功",2:"已关闭"},o={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}},orderType:{type:String,default:"normal"}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},statusText:function(){var t=this.resultData.sta;return"normal"===this.orderType?n[t]:"auction"===this.orderType?i[t]:void 0},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce((function(t,e){return t+e.num}),0):t.num},totalSum:function(){var t=this.orderData,e=1e7;return Array.isArray(t)?this.orderData.reduce((function(t,a){return(t*e+Number(a.start_sum)*e)/e}),0):Number(t.start_sum)}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},c=o,d=(a("3331"),a("2877")),u=Object(d["a"])(c,s,r,!1,null,"00c82500",null);e["a"]=u.exports},6762:function(t,e,a){"use strict";var s=a("5ca1"),r=a("c366")(!0);s(s.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"80a5":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return r}));var s=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}],r=[{key:"bid",name:"立即出价",type:"warning",sta:[0]},{key:"logistics",name:"查看物流",type:"default",sta:[1]},{key:"delete",name:"删除",type:"default",sta:[1,2]}];e["c"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2,4]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},"840e":function(t,e,a){},"8bd1":function(t,e,a){},b46a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-uc-auction"},[a("van-tabs",{attrs:{animated:""},on:{change:t.onClickTab},model:{value:t.activeTabIndex,callback:function(e){t.activeTabIndex=e},expression:"activeTabIndex"}},t._l(t.tabList,(function(e){return a("van-tab",{key:e.key,attrs:{title:e.name}},[a("van-list",{attrs:{"finished-text":"没有记录了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(e){t.error=e},load:function(e){return t.getList("add")}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,(function(e){return a("OrderCard",{key:e[0].id,attrs:{orderType:"auction",showPrice:!1,"order-data":e},on:{click:t.onClickStore},scopedSlots:t._u([{key:"footer",fn:function(){return[0===e[0].sta?a("div",{staticClass:"info-line"},[a("span",[t._v("我的出价："),a("span",{staticClass:"color-red"},[t._v("￥"+t._s(e[0].price_me))])]),a("span",[t._v("最高出价："),a("span",{staticClass:"color-red"},[t._v("￥"+t._s(e[0].price_max))])])]):2===e[0].sta?a("div",{staticClass:"info-line"},[a("span",[t._v("结束日期："+t._s(t._f("dateFmt")(e[0].activity_end_time)))]),a("span",[t._v("最高出价："),a("span",{staticClass:"color-red"},[t._v("￥"+t._s(e[0].price_max))])])]):t._e(),a("ButtonLine",{attrs:{"button-list":t._f("buttonList")(e[0].sta),"order-id":e[0].id,"order-numer":e[0].number,"order-data":e[0]},on:{"on-click":t.onButtonClick}})]},proxy:!0}],null,!0)},[a("GoodsItem",{attrs:{"goods-list":e},on:{click:t.onClickGoods}})],1)})):t._e()],2)],1)})),1),a("PayType",{attrs:{show:t.payTypeShow,"balance-sum":t.balance_sum},on:{close:function(e){t.payTypeShow=!1},pay:t.confirmPay}}),a("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:t.closePasswordModal},model:{value:t.passwordModalShow,callback:function(e){t.passwordModalShow=e},expression:"passwordModalShow"}},[a("van-password-input",{attrs:{value:t.password}}),a("div",{staticClass:"link-line"},[a("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[t._v("忘记支付密码？")])],1),a("van-number-keyboard",{attrs:{show:!0},on:{input:t.onPasswordInput,delete:t.onPasswordDelete}})],1),a("van-actionsheet",{staticClass:"number-keyword",attrs:{title:"请输入出价价格","close-on-click-overlay":!1},on:{cancel:t.closeNumberKeyword},model:{value:t.keyboardShow,callback:function(e){t.keyboardShow=e},expression:"keyboardShow"}},[a("div",{staticClass:"keyboard-text",on:{click:function(t){t.stopPropagation()}}},[a("van-field",{attrs:{"input-align":"center",placeholder:"当前出价"+t.sumPrice(t.currentOrderStandData.price_max,t.currentOrderStandData.lowest_price)+"元起",readonly:""},model:{value:t.keyboardText,callback:function(e){t.keyboardText=e},expression:"keyboardText"}})],1),a("van-number-keyboard",{attrs:{show:!0,"extra-key":".",theme:"custom","close-button-text":"确定"},on:{input:t.keyboardInput,delete:t.keyboardDelete,close:t.addprice}})],1)],1)},r=[],n=(a("8615"),a("ac4d"),a("8a81"),a("ac6a"),a("7514"),a("96cf"),a("3b8d")),i=(a("6762"),a("2fdb"),a("539b")),o=a("bfd2"),c=a("5090"),d=a("2916"),u=a("80a5"),l=a("a04d"),p=a("6821f"),h=a.n(p),y={name:"Auction",components:{ButtonLine:c["a"],GoodsItem:o["a"],OrderCard:i["a"],PayType:d["a"]},filters:{buttonList:function(t){return u["a"].filter((function(e){return e.sta.includes(t)}))}},data:function(){return{activeTabIndex:0,balance_sum:0,currentOrderId:"",currentOrderNumber:"",currentOrderStandId:"",currentOrderStandData:{},error:!1,finished:!1,loading:!1,keyboardArray:[],keyboardShow:!1,keyboardText:"",list:[],num:20,page:1,sta:0,payTypeShow:!1,password:"",passwordModalShow:!1,passwordModalType:"receive",tabList:[{key:"auctioning",name:"正在竞拍",sta:0},{key:"auctionFail",name:"已关闭",sta:2},{key:"auction",name:"已成功",sta:1}]}},methods:{sumPrice:function(t,e){if(!t&&!e)return 0;if(!t)return e;if(!e)return t;var a=1e10;return Math.abs((t*a+e*a)/a)},addprice:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("goods/auction_addprice",{stand_id:this.currentOrderStandId,price:this.keyboardText});case 2:e=t.sent,1==e.data.code?(this.$toast("加价成功"),this.getList(),this.closeNumberKeyword()):this.$toast(e.data.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),bidOrder:function(t,e){this.keyboardShow=!0,this.currentOrderStandData=e,this.currentOrderStandId=t},closeNumberKeyword:function(){this.keyboardShow=!1,this.keyboardArray=[]},closePasswordModal:function(){this.password=""},confirmPay:function(t){this.passwordModalShow=!0,this.currentPayType=l["a"].find((function(e){return e.key===t}))},getBalance:function(){var t=this;this.$axios.post("/mine/mycommission").then((function(e){var a=e.data;1===a.code?a.data&&(t.balance_sum=a.data):t.$toast(a.msg)}))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset";"reset"===e&&(this.list=[],this.page=1);var a,s=this.num,r=this.page,n=this.sta,i={num:s,page:r};switch(n){case 0:a="mine/auctioning";break;case 1:a="order/index",i.sta=0;break;case 2:a="mine/auctionfail"}this.$axios.post(a,i).then((function(e){var a=e.data;if(1===a.code)if(a.data&&(a.data.order||a.data.list)){var n=t.handleOrderData(a.data.order||a.data.list);t.list=t.list.concat(n),r*s>a.data.total&&(t.finished=!0)}else t.finished=!0;else t.error=!0,t.$toast(a.msg);t.page++,t.loading=!1})).catch((function(){t.error=!0}))},handleOrderData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){if(Array.isArray(e)){var a={},s=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done);s=!0){var c=i.value;a[c.store_id]?a[c.store_id].push(c):a[c.store_id]=[c]}}catch(p){r=!0,n=p}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}for(var d=0,u=Object.values(a);d<u.length;d++){var l=u[d];t.push(l)}}else t.push([e]);return t}),[])},keyboardInput:function(t){this.keyboardArray.push(t)},keyboardDelete:function(){this.keyboardArray.pop()},onClickGoods:function(t){this.$router.push({path:"/goods/details",query:{id:t.goods_id,type:"auction"}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onClickTab:function(t){this.sta=this.tabList[t].sta,1===this.sta&&this.$router.push({path:"/uc/orders",query:{activeTabIndex:1}}),this.loading=!0,this.finished=!1,this.error=!1,this.getList()},onButtonClick:function(t,e,a,s){switch(t){case"bid":this.bidOrder(s.stand_id,s);break;case"delete":this.deleteOrder(e);break}},onPasswordInput:function(t){var e=this;this.password=this.password+t,6===this.password.length&&("receive"===this.passwordModalType?this.$axios.post("/order/receiving",{order_id:this.currentOrderId,paypass:h()(this.password)}).then((function(t){var a=t.data;1===a.code?(e.$toast("确认收货成功"),e.password="",e.currentOrderId="",e.passwordModalShow=!1,e.getList()):(e.password="",e.$toast(a.msg))})):"pay"===this.passwordModalType&&this.$axios.post("/pay/pay",{order:this.currentOrderNumber,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?h()(this.password):void 0}).then((function(t){var a=t.data;1===a.code?(e.password="",e.currentOrderNumber="",e.passwordModalShow=!1,e.payTypeShow=!1,e.$toast("支付成功"),e.getList()):(e.password="",e.$toast(a.msg))})))},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},selectPayType:function(t){this.payTypeShow=!1},deleteOrder:function(t){var e=this;this.$dialog.confirm({title:"删除",message:"您确定要删除吗？"}).then((function(){e.$axios.post("/mine/deleteauction",{id:t}).then((function(t){var a=t.data;1===a.code?(e.$toast("删除成功"),e.getList()):e.$toast(a.msg)}))}))}},watch:{keyboardArray:function(t){this.keyboardText=t.join("")}},created:function(){this.sta=this.tabList[this.activeTabIndex].sta}},f=y,m=(a("4b8a"),a("2877")),v=Object(m["a"])(f,s,r,!1,null,"960da234",null);e["default"]=v.exports},bfd2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.goodsList.length?a("div",t._l(t.goodsList,(function(e){return a("div",{key:e.goods_id,staticClass:"suwis-goods-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:e.goods_img},on:{click:function(a){return t.onClick(e)}}}),a("div",{staticClass:"center"},[a("div",{staticClass:"title",on:{click:function(a){return t.onClick(e)}}},[t._v(t._s(e.goods_name))]),a("div",{staticClass:"desc-line"},[e.header_one?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_one))]):t._e(),e.header_two?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_two))]):t._e(),e.header_three?a("div",{staticClass:"desc-item"},[t._v(t._s(e.header_three))]):t._e()]),"true"===e.is7?a("div",{staticClass:"tag-line"},[a("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),a("div",{staticClass:"right"},[e.goods_price?a("div",{staticClass:"price"},[t._v("￥"+t._s(e.goods_price))]):t._e(),e.num?a("div",{staticClass:"num"},[t._v("×"+t._s(e.num))]):t._e()])])})),0):t._e()},r=[],n={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},i=n,o=(a("034f"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"64b5afc1",null);e["a"]=c.exports}}]);