(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53db72cd"],{"005a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suwis-refund-detail"},[n("div",{staticClass:"top-tip"},[t._v(t._s(t._f("refundStatus")(t.refundInfo.sta)))]),n("div",{staticClass:"main-content"},[n("SimpleGood",{attrs:{name:t.goodInfo.title,desc:[t.goodInfo.header_one,t.goodInfo.header_two,t.goodInfo.header_three],"store-logo":t.goodInfo.img}})],1),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            换货原因 "),n("span",{staticClass:"value"},[t._v(t._s(t.refundInfo.reason))])]},proxy:!0}])}),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            退款金额 "),n("span",{staticClass:"value"},[t._v("￥"+t._s(t.refundInfo.price))])]},proxy:!0}])}),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            申请件数 "),n("span",{staticClass:"value"},[t._v(t._s(t.refundInfo.num))])]},proxy:!0}])}),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            申请时间 "),n("span",{staticClass:"value"},[t._v(t._s(t._f("dateFmt")(t.refundInfo.time)))])]},proxy:!0}])}),n("van-cell-group",[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                卖家处理意见 "),n("span",{staticClass:"value"},[t._v(t._s(t._f("refundStatus")(t.refundInfo.sta)))])]},proxy:!0}])}),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"address-info"},[n("span",[t._v("退货地址")]),n("div",{staticClass:"value"},[n("div",[t._v(t._s(t.refundInfo.express_address))]),n("div",[t._v(t._s(t.refundInfo.express_name)+" "),t.refundInfo.express_tel?n("span",[t._v("（"+t._s(t.refundInfo.express_tel)+"）")]):t._e()])])])]},proxy:!0}])})],1),n("div",{staticClass:"button-line"},[n("ButtonLine",{attrs:{"button-list":t._f("buttonList")(t.refundInfo.sta),"order-id":+t.refundInfo.id},on:{"on-click":t.onButtonClick}})],1)],1)},a=[],o=(n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("00a1")),i=n("5090"),r=["未处理","同意","拒绝"],c=n("80a5"),u={refund:"退款",return:"退货退款",exchange:"换货"},d={components:{ButtonLine:i["a"],SimpleGood:o["a"]},filters:{buttonList:function(t){return c["b"].filter((function(e){return e.sta.includes(t)}))},refundStatus:function(t){return r[t]}},data:function(){return{goodInfo:{},refundInfo:{},order_id:""}},methods:{onButtonClick:function(t,e){switch(t){case"contact":break;case"logistics":this.inputLogistics(e);break;case"modify":this.modifyApplyInfo(this.order_id);break;case"cancel":this.cancel(e);break}},inputLogistics:function(t){this.$router.push({path:"/uc/orders/logistics-input",query:{refund_id:t,order_id:this.order_id}})},modifyApplyInfo:function(t){for(var e,n=0,s=Object.keys(u);n<s.length;n++){var a=s[n];u[a]===this.refundInfo.type&&(e=a)}this.$router.push({path:"/uc/orders/apply",query:{from:this.$route.path,id:t,type:e}})},cancel:function(t){var e=this;this.$dialog.confirm({title:"撤销售后申请",message:"确定撤销售后申请吗"}).then((function(){e.$axios.post("/order/aftercancel",{id:t}).then((function(t){var n=t.data;1===n.code?(e.$toast("撤销申请成功"),e.$router.push("/uc/orders/refund")):e.$toast(n.msg)}))}))}},created:function(){var t=this;this.order_id=this.$route.query.id,this.$axios.post("/order/goodsintor",{order_id:this.order_id}).then((function(e){var n=e.data;1===n.code?n.data&&(t.goodInfo=n.data):t.$toast(n.msg)})),this.$axios.post("/order/afterdetail",{order_id:this.order_id}).then((function(e){var n=e.data;1===n.code?n.data&&(t.refundInfo=n.data):t.$toast(n.msg)}))}},l=d,f=(n("cdf6"),n("2877")),p=Object(f["a"])(l,s,a,!1,null,"2ff24fe6",null);e["default"]=p.exports},"00a1":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suwis-simple-good"},[n("ul",{staticClass:"list"},[n("li",{staticClass:"item",on:{click:t.toggleCheck}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:t.storeLogo,alt:"商品"}}),n("div",{staticClass:"info",style:t.infoStyle},[n("div",{staticClass:"name"},[t._v(t._s(t.name))]),t.desc&&t.desc.length?[n("div",{staticClass:"desc"},t._l(t.desc,(function(e,s){return n("span",{key:s,staticClass:"desc-item"},[t._v(t._s(e))])})),0)]:t._e()],2),t.hasCheckbox?n("div",{staticClass:"checkbox"},[n("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1):t._e()])])])},a=[],o={props:{name:{type:String},desc:{type:Array,default:function(){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},i=o,r=(n("4364"),n("2877")),c=Object(r["a"])(i,s,a,!1,null,"2ffaf7b7",null);e["a"]=c.exports},2901:function(t,e,n){},"2fdb":function(t,e,n){"use strict";var s=n("5ca1"),a=n("d2c8"),o="includes";s(s.P+s.F*n("5147")(o),"String",{includes:function(t){return!!~a(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3fdb":function(t,e,n){"use strict";var s=n("4904"),a=n.n(s);a.a},4364:function(t,e,n){"use strict";var s=n("2901"),a=n.n(s);a.a},4904:function(t,e,n){},5090:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,(function(e){return n("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(n){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])})),1)},a=[],o=(n("c5f6"),{props:{buttonList:Array,orderData:Object,orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){console.log(t,"key"),this.$emit("on-click",t,this.orderId,this.orderNumer,this.orderData)}}}),i=o,r=(n("3fdb"),n("2877")),c=Object(r["a"])(i,s,a,!1,null,"5f4c50ca",null);e["a"]=c.exports},6762:function(t,e,n){"use strict";var s=n("5ca1"),a=n("c366")(!0);s(s.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6c90":function(t,e,n){},"80a5":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var s=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}],a=[{key:"bid",name:"立即出价",type:"warning",sta:[0]},{key:"logistics",name:"查看物流",type:"default",sta:[1]},{key:"delete",name:"删除",type:"default",sta:[1,2]}];e["c"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2,4]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},cdf6:function(t,e,n){"use strict";var s=n("6c90"),a=n.n(s);a.a}}]);