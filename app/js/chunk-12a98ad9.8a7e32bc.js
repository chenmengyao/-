(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12a98ad9"],{"0382":function(t,s,a){},"2fdb":function(t,s,a){"use strict";var e=a("5ca1"),r=a("d2c8"),i="includes";e(e.P+e.F*a("5147")(i),"String",{includes:function(t){return!!~r(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},4347:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"suwis-order-detail"},[t._l(t.orderlist,function(s){return e("OrderCard",{key:s[0].id,attrs:{"order-data":s,"show-price":!1},on:{click:t.onClickStore}},[e("GoodsItem",{attrs:{"goods-list":s},on:{click:t.onClickGoods}})],1)}),e("div",{staticClass:"card card-address"},[e("img",{staticClass:"image-address",attrs:{src:a("80a6"),alt:"地址"}}),e("div",{staticClass:"info"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(t.shopData.express_name))]),e("span",{staticClass:"tel"},[t._v(t._s(t.shopData.express_tel))])]),e("div",{staticClass:"address"},[t._v(t._s(t.shopData.express_address))])])]),e("div",{staticClass:"card card-price"},[e("div",{staticClass:"card-row row-light-grey"},[e("span",{staticClass:"row-key"},[t._v("商品总价")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.goodsSum))])]),e("div",{staticClass:"card-row row-light-grey"},[e("span",{staticClass:"row-key"},[t._v("运费")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.shopData.carriage))])]),e("div",{staticClass:"card-row thick-row"},[e("span",{staticClass:"row-key"},[t._v("订单总价")]),e("span",{staticClass:"row-value text-right"},[t._v("￥ "+t._s(t.orderSum))])]),e("div",{staticClass:"card-row thick-row"},[e("span",{staticClass:"row-key"},[t._v("实际付款")]),e("span",{staticClass:"row-value text-right color-red"},[t._v("￥ "+t._s(t.startSum))])])]),e("div",{staticClass:"card card-order"},[e("h5",{staticClass:"card-title"},[t._v("订单信息")]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("订单编号")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.number))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("交易编号")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.number+t.shopData.id))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("获得积分")]),e("span",{staticClass:"row-value"},[t._v(t._s(t.shopData.get_score))])]),e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("下单时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.time)))])]),t.shopData.sta>0?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("付款时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.pay_time)))])]):t._e(),t.shopData.sta>1?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("发货时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.shipments_time)))])]):t._e(),t.shopData.sta>4?e("div",{staticClass:"card-row"},[e("span",{staticClass:"row-key"},[t._v("成交时间")]),e("span",{staticClass:"row-value"},[t._v(t._s(t._f("dateFmt")(t.shopData.success_time)))])]):t._e(),t._m(0)]),e("div",{staticClass:"card card-button"},[e("ButtonLine",{attrs:{"button-list":t._f("buttonList")(t.shopData.sta),"order-id":t.shopData.id,"order-numer":+t.shopData.number},on:{"on-click":t.onButtonClick}})],1),e("PayType",{attrs:{show:t.payTypeShow,"balance-sum":t.balance_sum},on:{close:function(s){t.payTypeShow=!1},pay:t.confirmPay}}),e("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:t.closePasswordModal},model:{value:t.passwordModalShow,callback:function(s){t.passwordModalShow=s},expression:"passwordModalShow"}},[e("van-password-input",{attrs:{value:t.password}}),e("div",{staticClass:"link-line"},[e("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[t._v("忘记支付密码？")])],1),e("van-number-keyboard",{attrs:{show:!0},on:{input:t.onPasswordInput,delete:t.onPasswordDelete}})],1)],2)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-row row-button"},[e("div",{staticClass:"button-item"},[e("img",{staticClass:"image-button",attrs:{src:a("34bf"),alt:"联系商家"}}),t._v("\n                联系商家\n            ")]),e("div",{staticClass:"button-item"},[e("img",{staticClass:"image-button",attrs:{src:a("61f3"),alt:"联系平台"}}),t._v("\n                联系平台\n            ")])])}],i=(a("8615"),a("ac6a"),a("7514"),a("6762"),a("2fdb"),a("539b")),o=a("bfd2"),n=a("2916"),c=a("5090"),d=a("80a5"),u=a("a04d"),l=a("6821f"),p=a.n(l),h={components:{OrderCard:i["a"],ButtonLine:c["a"],GoodsItem:o["a"],PayType:n["a"]},filters:{buttonList:function(t){return d["b"].filter(function(s){return s.sta.includes(t)})}},computed:{goodsSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,s){return t+s.num*s.goods_price},0):t.num*t.goods_price},orderSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,s){return t+ +s.old_price},0):t.old_price},startSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,s){return t+ +s.start_sum},0):t.start_sum}},data:function(){return{tempList:[[]],balance_sum:0,currentOrderId:"",currentOrderNumber:"",orderlist:[],orderData:{},payTypeShow:!1,password:"",passwordModalShow:!1,passwordModalType:"receive",shopData:{}}},methods:{closePasswordModal:function(){this.password=""},confirmPay:function(t){this.passwordModalShow=!0,this.currentPayType=u["a"].find(function(s){return s.key===t})},getBalance:function(){var t=this;this.$axios.post("/mine/mycommission").then(function(s){var a=s.data;1===a.code?a.data&&(t.balance_sum=a.data):t.$toast(a.msg)})},onButtonClick:function(t,s,a){switch(t){case"cancel":this.cancelOrder(s);break;case"pay":this.payOrder(a);break;case"logistics":this.checkLogistics(s);break;case"refund":this.refundOrder(s);break;case"return":this.returnOrder(s);break;case"receive":this.confirmReceive(s);break;case"evaluate":this.evaluateOrder(s);break;case"delete":this.deleteOrder(s);break}},onClickGoods:function(t){this.$router.push({path:"/goods/details",query:{id:t.goods_id}})},onClickStore:function(t){this.$router.push({path:"/shop",query:{id:t.store_id}})},onPasswordInput:function(t){var s=this;this.password=this.password+t,6===this.password.length&&("receive"===this.passwordModalType?this.$axios.post("/order/receiving",{order_id:this.currentOrderId,paypass:p()(this.password)}).then(function(t){var a=t.data;1===a.code?(s.$toast("确认收货成功"),s.password="",s.currentOrderId="",s.passwordModalShow=!1):(s.password="",s.$toast(a.msg))}):"pay"===this.passwordModalType&&this.$axios.post("/pay/pay",{order:this.currentOrderNumber,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?p()(this.password):void 0}).then(function(t){var a=t.data;1===a.code?(s.$toast("支付成功"),s.$router.push("/uc/orders")):(s.password="",s.$toast(a.msg))}))},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},cancelOrder:function(t){var s=this;this.$dialog.confirm({title:"取消订单",message:"该订单还未付款，您确定要取消吗？"}).then(function(){s.$axios.post("/order/cancel",{number:t}).then(function(t){var a=t.data;1===a.code?s.$toast("取消订单成功"):s.$toast(a.msg)})})},payOrder:function(t){this.getBalance(),this.payTypeShow=!0,this.passwordModalType="pay",this.currentOrderNumber=t},checkLogistics:function(t){this.$router.push({path:"/uc/orders/logistics-details",query:{id:t}})},refundOrder:function(t){this.$router.push({path:"/uc/orders/apply",query:{id:t,type:"refund"}})},returnOrder:function(t){this.$router.push({path:"/uc/orders/servicetype",query:{id:t}})},confirmReceive:function(t){this.passwordModalShow=!0,this.passwordModalType="receive",this.currentOrderId=t},evaluateOrder:function(t){this.$router.push({path:"/uc/orders/comment",query:{id:t}})},deleteOrder:function(t){var s=this;this.$dialog.confirm({title:"删除订单",message:"您确定要删除该订单吗？"}).then(function(){s.$axios.post("/order/delete",{id:t}).then(function(t){var a=t.data;1===a.code?(s.$toast("删除订单成功"),s.$router.push("/uc/orders")):s.$toast(a.msg)})})},handleOrderData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce(function(t,s){if(Array.isArray(s)){var a={};s.forEach(function(t){a[t.store_id]?a[t.store_id].push(t):a[t.store_id]=[t]}),Object.values(a).forEach(function(s){return t.push(s)})}else t.push([s]);return t},[])}},created:function(){var t=this;this.id=this.$route.query.id,this.$axios.post("/order/detail",{id:this.id}).then(function(s){var a=s.data;1===a.code?a.data&&(t.orderData=a.data,t.shopData=Array.isArray(a.data)?a.data[0]:a.data,t.orderlist=t.handleOrderData(Array.isArray(a.data)?a.data:[a.data])):t.$toast(a.msg)})}},v=h,f=(a("b4ff"),a("2877")),y=Object(f["a"])(v,e,r,!1,null,"7f3d0e66",null);s["default"]=y.exports},5090:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"suwis-button-line"},t._l(t.buttonList,function(s){return a("van-button",{key:s.key,attrs:{plain:"",round:"",size:"small",type:s.type},on:{click:function(a){return t.onClick(s.key)}}},[t._v(t._s(s.name)+"\n    ")])}),1)},r=[],i=(a("c5f6"),{props:{buttonList:Array,orderId:Number,orderNumer:[String,Number]},methods:{onClick:function(t){this.$emit("on-click",t,this.orderId,this.orderNumer)}}}),o=i,n=(a("ed88"),a("2877")),c=Object(n["a"])(o,e,r,!1,null,"b070057e",null);s["a"]=c.exports},"539b":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"suwis-order-shop"},[e("div",{staticClass:"header"},[e("div",{staticClass:"shop-info",on:{click:t.onClick}},[e("img",{staticClass:"shop-logo",attrs:{src:a("724c"),alt:"店铺头像",width:"20",height:"20"}}),e("span",{staticClass:"shop-name"},[t._v(t._s(t.resultData.store_name))]),e("van-icon",{attrs:{name:"arrow"}})],1),e("span",{staticClass:"shop-status"},[t._v(t._s(t._f("status")(t.resultData.sta)))])]),t._t("default"),t.showPrice?e("div",{staticClass:"total-price"},[t._v("共"+t._s(t.totalNum)+"件商品 合计: ￥"+t._s(t.totalSum))]):t._e(),t._t("footer")],2)},r=[],i=(a("bfd2"),{0:"等待买家付款",1:"等待卖家发货",2:"卖家已发货",3:"等待卖家处理",4:"买家已确认收货",5:"交易成功",6:"交易关闭"}),o={props:{goodsList:{type:Array,default:function(){return[]}},orderData:{type:[Object,Array],required:!0},showPrice:{type:Boolean,default:!0},order:{type:[Array,Object],default:function(){return[]}}},filters:{status:function(t){return i[t]}},computed:{resultData:function(){var t=this.orderData;return Array.isArray(t)?t[0]:t},totalNum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,s){return t+s.num},0):t.num},totalSum:function(){var t=this.orderData;return Array.isArray(t)?this.orderData.reduce(function(t,s){return t+s.num*s.goods_price},0):t.num*t.goods_price}},methods:{onClick:function(){this.$emit("click",this.resultData)}}},n=o,c=(a("67ee"),a("2877")),d=Object(c["a"])(n,e,r,!1,null,"4b507ddb",null);s["a"]=d.exports},"5e58":function(t,s,a){},6762:function(t,s,a){"use strict";var e=a("5ca1"),r=a("c366")(!0);e(e.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"67ee":function(t,s,a){"use strict";var e=a("5e58"),r=a.n(e);r.a},"80a5":function(t,s,a){"use strict";a.d(s,"a",function(){return e});var e=[{key:"contact",name:"联系卖家",type:"default",sta:[0,1,2]},{key:"logistics",name:"填写物流",type:"default",sta:[1]},{key:"modify",name:"修改申请",type:"default",sta:[0,2]},{key:"cancel",name:"撤销申请",type:"warning",sta:[0,1,2]}];s["b"]=[{key:"cancel",name:"取消订单",type:"default",sta:[0]},{key:"pay",name:"付款",type:"warning",sta:[0]},{key:"refund",name:"退款",type:"default",sta:[1]},{key:"return",name:"退/换货",type:"default",sta:[2]},{key:"logistics",name:"查看物流",type:"default",sta:[2,4]},{key:"receive",name:"确认收货",type:"warning",sta:[2]},{key:"viewProgress",name:"查看进度",type:"warning",sta:[3]},{key:"evaluate",name:"评价",type:"warning",sta:[4]},{key:"delete",name:"删除订单",type:"default",sta:[5,6]}]},ace2:function(t,s,a){},b4ff:function(t,s,a){"use strict";var e=a("0382"),r=a.n(e);r.a},bfd2:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.goodsList.length?a("div",t._l(t.goodsList,function(s){return a("div",{key:s.goods_id,staticClass:"suwis-goods-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.goods_img,expression:"goods.goods_img"}],staticClass:"img",attrs:{src:s.goods_img},on:{click:function(a){return t.onClick(s)}}}),a("div",{staticClass:"center"},[a("div",{staticClass:"title",on:{click:function(a){return t.onClick(s)}}},[t._v(t._s(s.goods_name))]),a("div",{staticClass:"desc-line"},[s.header_one?a("div",{staticClass:"desc-item"},[t._v(t._s(s.header_one))]):t._e(),s.header_two?a("div",{staticClass:"desc-item"},[t._v(t._s(s.header_two))]):t._e(),s.header_three?a("div",{staticClass:"desc-item"},[t._v(t._s(s.header_three))]):t._e()]),"true"===s.is7?a("div",{staticClass:"tag-line"},[a("span",{staticClass:"tag"},[t._v("7天无理由退款")])]):t._e()]),a("div",{staticClass:"right"},[a("div",{staticClass:"price"},[t._v("￥"+t._s(s.goods_price))]),a("div",{staticClass:"num"},[t._v("×"+t._s(s.num))])])])}),0):t._e()},r=[],i={props:{goodsList:{type:Array,default:function(){return[]}}},methods:{onClick:function(t){this.$emit("click",t)}}},o=i,n=(a("cfe5"),a("2877")),c=Object(n["a"])(o,e,r,!1,null,"0eda75f3",null);s["a"]=c.exports},cd06:function(t,s,a){},cfe5:function(t,s,a){"use strict";var e=a("cd06"),r=a.n(e);r.a},ed88:function(t,s,a){"use strict";var e=a("ace2"),r=a.n(e);r.a}}]);
//# sourceMappingURL=chunk-12a98ad9.8a7e32bc.js.map