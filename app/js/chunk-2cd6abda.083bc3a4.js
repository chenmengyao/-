(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd6abda"],{"034f":function(t,e,s){"use strict";var n=s("7f21"),r=s.n(n);r.a},"1c24":function(t,e,s){"use strict";var n=s("1d7e"),r=s.n(n);r.a},"1d7e":function(t,e,s){},"2fdb":function(t,e,s){"use strict";var n=s("5ca1"),r=s("d2c8"),a="includes";n(n.P+n.F*s("5147")(a),"String",{includes:function(t){return!!~r(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3331:function(t,e,s){"use strict";var n=s("e680"),r=s.n(n);r.a},5090:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,function(e){return s("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(s){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])}),1)},r=[],a=(s("c5f6"),{props:{buttonList:Array,orderData:[Object,Array],orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){console.log(t,"key"),this.$emit("on-click",t,this.orderId,this.orderNumer,this.orderData)}}}),i=a,o=(s("1c24"),s("2877")),c=Object(o["a"])(i,n,r,!1,null,"585c73d3",null);e["a"]=c.exports},"539b":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suwis-order-shop"},[n("div",{staticClass:"header"},[n("div",{staticClass:"shop-info",on:{click:t.onClick}},[n("img",{staticClass:"shop-logo",attrs:{src:s("724c"),alt:"店铺头像",width:"20",height:"20"}}),n("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),n("van-icon",{attrs:{name:"arrow"}})],1),n("span",{staticClass:"shop-status"},[t._v(t._s(t.statusText))])]),t._t("default"),t.showPrice?n("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],a=(s("c5f6"),s("bfd2"),{0:"等待付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"已确认收货",5:"交易成功",6:"交易关闭"}),i={0:"正在竞拍",1:"已成功",2:"已关闭"},o={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}},orderType:{type:String,default:"normal"}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},statusText:function(){var t=this.resultData.sta;return"normal"===this.orderType?a[t]:"auction"===this.orderType?i[t]:void 0},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,e){return t+e.num},0):t.num},totalSum:function(){var t=this.orderData,e=1e7;return Array.isArray(t)?this.orderData.reduce(function(t,s){return(t*e+Number(s.start_sum)*e)/e},0):Number(t.start_sum)}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},c=o,u=(s("3331"),s("2877")),d=Object(u["a"])(c,n,r,!1,null,"00c82500",null);e["a"]=d.exports},6762:function(t,e,s){"use strict";var n=s("5ca1"),r=s("c366")(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"724c":function(t,e,s){t.exports=s.p+"img/shop-logo.837e28c8.png"},"7f21":function(t,e,s){},"80a5":function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return r});var n=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}],r=[{key:"bid",name:"立即出价",type:"warning",sta:[0]},{key:"logistics",name:"查看物流",type:"default",sta:[1]},{key:"delete",name:"删除",type:"default",sta:[1,2]}];e["c"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2,4]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},babb:function(t,e,s){},bfd2:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.goodsList.length?s("div",t._l(t.goodsList,function(e){return s("div",{key:e.goods_id,staticClass:"suwis-goods-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:e.goods_img},on:{click:function(s){return t.onClick(e)}}}),s("div",{staticClass:"center"},[s("div",{staticClass:"title",on:{click:function(s){return t.onClick(e)}}},[t._v(t._s(e.goods_name))]),s("div",{staticClass:"desc-line"},[e.header_one?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_one))]):t._e(),e.header_two?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_two))]):t._e(),e.header_three?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_three))]):t._e()]),"true"===e.is7?s("div",{staticClass:"tag-line"},[s("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),s("div",{staticClass:"right"},[e.goods_price?s("div",{staticClass:"price"},[t._v("￥"+t._s(e.goods_price))]):t._e(),e.num?s("div",{staticClass:"num"},[t._v("×"+t._s(e.num))]):t._e()])])}),0):t._e()},r=[],a={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},i=a,o=(s("034f"),s("2877")),c=Object(o["a"])(i,n,r,!1,null,"64b5afc1",null);e["a"]=c.exports},e680:function(t,e,s){},ec6d:function(t,e,s){"use strict";var n=s("babb"),r=s.n(n);r.a},ffd9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-refund-list"},[s("van-list",{attrs:{"finished-text":"没有订单记录了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(e){t.error=e},load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,function(e){return s("OrderCard",{key:e.id,attrs:{"order-data":e},on:{click:t.onClickStore},scopedSlots:t._u([{key:"footer",fn:function(){return[s("ButtonLine",{attrs:{"button-list":t._f("buttonList")(e.sta),"order-id":e.id},on:{"on-click":t.onButtonClick}})]},proxy:!0}],null,!0)},[s("GoodsItem",{attrs:{"goods-list":[e]},on:{click:t.onClickGoods}})],1)}):t._e()],2)],1)},r=[],a=(s("6762"),s("2fdb"),s("539b")),i=s("bfd2"),o=s("5090"),c=s("80a5"),u={components:{ButtonLine:o["a"],GoodsItem:i["a"],OrderCard:a["a"]},filters:{buttonList:function(t){return c["c"].filter(function(e){return e.sta.includes(t)})}},data:function(){return{error:!1,finished:!1,list:[],loading:!1,num:20,page:1}},methods:{getList:function(){var t=this,e=this.num,s=this.page;this.$axios.post("/order/index",{sta:3,num:e,page:s}).then(function(n){var r=n.data;1===r.code?r.data&&r.data.order?(t.list=t.list.concat(r.data.order),s*e>r.data.total&&(t.finished=!0)):t.finished=!0:(t.error=!0,t.$toast(r.msg)),t.page++,t.loading=!1}).catch(function(){t.error=!0})},onClickGoods:function(t){this.$router.push({path:"/uc/orders/refund-details",query:{id:t.id}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onButtonClick:function(t,e){this.$router.push({path:"/uc/orders/refund-details",query:{id:e}})}}},d=u,l=(s("ec6d"),s("2877")),f=Object(l["a"])(d,n,r,!1,null,"4047d644",null);e["default"]=f.exports}}]);