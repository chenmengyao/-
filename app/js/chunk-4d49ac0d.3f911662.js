(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d49ac0d"],{"186f":function(t,e,s){},"2fdb":function(t,e,s){"use strict";var n=s("5ca1"),a=s("d2c8"),r="includes";n(n.P+n.F*s("5147")(r),"String",{includes:function(t){return!!~a(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"39a1":function(t,e,s){"use strict";var n=s("186f"),a=s.n(n);a.a},5090:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,function(e){return s("van-button",{key:e.key,attrs:{plain:"",round:"",size:"small",type:e.type},on:{click:function(s){return t.onClick(e.key)}}},[t._v(t._s(e.name)+"\n    ")])}),1)},a=[],r=(s("c5f6"),{props:{buttonList:Array,orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){this.$emit("on-click",t,this.orderId,this.orderNumer)}}}),i=r,o=(s("ed88"),s("2877")),c=Object(o["a"])(i,n,a,!1,null,"b070057e",null);e["a"]=c.exports},"539b":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suwis-order-shop"},[n("div",{staticClass:"header"},[n("div",{staticClass:"shop-info",on:{click:t.onClick}},[n("img",{staticClass:"shop-logo",attrs:{src:s("724c"),alt:"店铺头像",width:"20",height:"20"}}),n("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),n("van-icon",{attrs:{name:"arrow"}})],1),n("span",{staticClass:"shop-status"},[t._v(t._s(t._f("status")(t.resultData.sta)))])]),t._t("default"),t.showPrice?n("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},a=[],r=(s("c5f6"),s("bfd2"),{0:"等待买家付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"买家已确认收货",5:"交易成功",6:"交易关闭"}),i={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}}},filters:{status:function(t){return r[t]}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,e){return t+e.num},0):t.num},totalSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,e){return t+Number(e.start_sum)},0):Number(t.start_sum)}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},o=i,c=(s("abe3"),s("2877")),u=Object(c["a"])(o,n,a,!1,null,"bc0ba006",null);e["a"]=u.exports},6762:function(t,e,s){"use strict";var n=s("5ca1"),a=s("c366")(!0);n(n.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"6ee1":function(t,e,s){},"724c":function(t,e,s){t.exports=s.p+"img/shop-logo.837e28c8.png"},"80a5":function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}];e["b"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4,5]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},abe3:function(t,e,s){"use strict";var n=s("6ee1"),a=s.n(n);a.a},ace2:function(t,e,s){},bfd2:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.goodsList.length?s("div",t._l(t.goodsList,function(e){return s("div",{key:e.goods_id,staticClass:"suwis-goods-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:e.goods_img},on:{click:function(s){return t.onClick(e)}}}),s("div",{staticClass:"center"},[s("div",{staticClass:"title",on:{click:function(s){return t.onClick(e)}}},[t._v(t._s(e.goods_name))]),s("div",{staticClass:"desc-line"},[e.header_one?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_one))]):t._e(),e.header_two?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_two))]):t._e(),e.header_three?s("div",{staticClass:"desc-item"},[t._v(t._s(e.header_three))]):t._e()]),"true"===e.is7?s("div",{staticClass:"tag-line"},[s("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[t._v("￥"+t._s(e.goods_price))]),s("div",{staticClass:"num"},[t._v("×"+t._s(e.num))])])])}),0):t._e()},a=[],r={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},i=r,o=(s("cfe5"),s("2877")),c=Object(o["a"])(i,n,a,!1,null,"0eda75f3",null);e["a"]=c.exports},cd06:function(t,e,s){},cfe5:function(t,e,s){"use strict";var n=s("cd06"),a=s.n(n);a.a},ed88:function(t,e,s){"use strict";var n=s("ace2"),a=s.n(n);a.a},ffd9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-refund-list"},[s("van-list",{attrs:{"finished-text":"没有订单记录了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(e){t.error=e},load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,function(e){return s("OrderCard",{key:e.id,attrs:{"order-data":e},on:{click:t.onClickStore},scopedSlots:t._u([{key:"footer",fn:function(){return[s("ButtonLine",{attrs:{"button-list":t._f("buttonList")(e.sta),"order-id":e.id},on:{"on-click":t.onButtonClick}})]},proxy:!0}],null,!0)},[s("GoodsItem",{attrs:{"goods-list":[e]},on:{click:t.onClickGoods}})],1)}):t._e()],2)],1)},a=[],r=(s("6762"),s("2fdb"),s("539b")),i=s("bfd2"),o=s("5090"),c=s("80a5"),u={components:{ButtonLine:o["a"],GoodsItem:i["a"],OrderCard:r["a"]},filters:{buttonList:function(t){return c["b"].filter(function(e){return e.sta.includes(t)})}},data:function(){return{error:!1,finished:!1,list:[],loading:!1,num:20,page:1}},methods:{getList:function(){var t=this,e=this.num,s=this.page;this.$axios.post("/order/index",{sta:3,num:e,page:s}).then(function(n){var a=n.data;1===a.code?a.data&&a.data.order&&(t.list=t.list.concat(a.data.order),s*e>a.data.total&&(t.finished=!0)):(t.error=!0,t.$toast(a.msg)),t.page++,t.loading=!1}).catch(function(){t.error=!0})},onClickGoods:function(t){this.$router.push({path:"/uc/orders/refund-details",query:{id:t.id}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onButtonClick:function(t,e){this.$router.push({path:"/uc/orders/refund-details",query:{id:e}})}}},d=u,l=(s("39a1"),s("2877")),f=Object(l["a"])(d,n,a,!1,null,"0ba84504",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4d49ac0d.3f911662.js.map