(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f645025e"],{"05b2":function(s,t,e){"use strict";var o=e("1c10"),a=e.n(o);a.a},"1c10":function(s,t,e){},dfa3:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"suwis-confirm-order"},[e("van-cell-group",{staticClass:"address"},[e("van-cell",{attrs:{title:"收货人："+s.address.name+"（"+s.address.tel+"）"}}),e("van-cell",{attrs:{"title-class":"cell-flex",clickable:""},on:{click:s.selectAddress}},[e("template",{slot:"title"},[s._v("\r\n        收货地址："+s._s(s._f("location")(s.address))+"\r\n        "),e("van-icon",{staticStyle:{"margin-left":"28px"},attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)],2)],1),s.shopList&&s.shopList.length?s._l(s.shopList,function(t){return e("div",{key:t.id,staticClass:"goods-box"},[e("div",{staticClass:"shop-info"},[e("img",{staticClass:"shop-logo",attrs:{src:t[0].logo||s.defaultShopLogo,alt:"店铺头像",width:"20",height:"20"}}),e("span",{staticClass:"shop-name"},[s._v(s._s(t[0].name))])]),s._l(t,function(t){return e("van-card",{key:t.goods_id,attrs:{num:"single"===s.orderFrom?s.num:t.num,price:t.price,title:t.title,thumb:t.img},on:{click:function(e){return s.onClick(t)}},scopedSlots:s._u([{key:"desc",fn:function(){return[e("div",{staticClass:"desc-line"},[t.header_one?e("div",{staticClass:"desc-item"},[s._v(s._s(t.header_one))]):s._e(),t.header_two?e("div",{staticClass:"desc-item"},[s._v(s._s(t.header_two))]):s._e(),t.header_three?e("div",{staticClass:"desc-item"},[s._v(s._s(t.header_three))]):s._e()])]},proxy:!0}],null,!0)})})],2)}):s._e(),e("van-cell-group",{staticClass:"personal-box"},["single"===s.orderFrom?e("van-cell",{attrs:{title:"购买数量",center:"","value-class":"cell-content"}},[[e("van-stepper",{on:{change:s.getData},model:{value:s.num,callback:function(t){s.num=t},expression:"num"}})]],2):s._e(),e("van-cell",{attrs:{title:"配送方式",center:"","value-class":"content"}},[[s._v("\r\n        普通快递 "),e("span",{staticStyle:{"font-size":"10px"}},[s._v("（运费：￥"+s._s(s.postage)+"）")])]],2),e("van-field",{attrs:{clearable:"",label:"买家留言",placeholder:"请填写备注信息"},model:{value:s.express_remark,callback:function(t){s.express_remark=t},expression:"express_remark"}})],1),e("van-cell-group",{staticClass:"discount-box"},[e("van-cell",{attrs:{center:"","value-class":"cell-content"}},[e("template",{slot:"title"},[e("van-checkbox",{on:{change:s.getData},model:{value:s.useCoupon,callback:function(t){s.useCoupon=t},expression:"useCoupon"}},[s._v("\r\n          卖家优惠券\r\n          "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.coupon.sum,expression:"coupon.sum"}]},[s._v(" 可优惠"+s._s(s.coupon.sum)+"元")])])],1),[e("div",{on:{click:s.selectCoupon}},[s._v("\r\n          去使用\r\n          "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)]],2),e("van-cell",{attrs:{center:"","value-class":"cell-content short-content"}},[e("template",{slot:"title"},[e("van-checkbox",{on:{change:s.getData},model:{value:s.useDiscount,callback:function(t){s.useDiscount=t},expression:"useDiscount"}},[s._v("会员优惠 "),e("span",{staticStyle:{color:"#b4b4b4","font-size":"12px","line-height":"24px"}},[s._v("（会员折扣9.5折）")])])],1),[s._v("\r\n        -"+s._s(s.discount)+"\r\n      ")]],2),e("van-cell",{attrs:{center:"","value-class":"cell-content short-content"}},[e("template",{slot:"title"},[e("van-checkbox",{on:{change:s.getData},model:{value:s.useScore,callback:function(t){s.useScore=t},expression:"useScore"}},[s._v("\r\n          积分抵扣 "),e("span",{staticStyle:{color:"#b4b4b4","font-size":"12px","line-height":"24px"}},[s._v("（可用积分："+s._s(s.score_balance)+"）")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.score,expression:"score"}]},[s._v("使用"+s._s(s.score)+"分")])])],1),[e("div",{on:{click:s.setScore}},[s._v("\r\n          去使用\r\n          "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)]],2)],1),e("van-cell-group",{staticClass:"result-box"},[e("van-cell",{attrs:{title:"还需支付",center:"","value-class":"cell-content"}},[[e("span",{staticStyle:{color:"#e83f44"}},[s._v("￥"+s._s(s.total))])]],2)],1),e("div",{staticClass:"submit-box"},[e("span",[s._v("合计："),e("span",{staticStyle:{color:"#e83f44"}},[s._v(s._s(s.total))])]),e("button",{staticClass:"submit",on:{click:s.toPay}},[s._v("提交订单")])]),e("PayType",{attrs:{show:s.payTypeShow,"balance-sum":s.balance_sum,"order-id":s.orderId},on:{close:function(t){s.payTypeShow=!1},pay:s.confirmPay}}),e("CouponList",{attrs:{title:"选择优惠券"},model:{value:s.couponShow,callback:function(t){s.couponShow=t},expression:"couponShow"}},s._l(s.couponList,function(t){return e("couponItem",{key:t.id,attrs:{title:t.title,desc:"满"+t.total+"元即可使用",price:t.sum,time:s._f("dateFmt")(t.end_time),"btn-text":"使用"},on:{click:function(e){return s.onCouponClick(t)}}})}),1),e("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:s.closePasswordModal},model:{value:s.passwordModalShow,callback:function(t){s.passwordModalShow=t},expression:"passwordModalShow"}},[e("van-password-input",{attrs:{value:s.password}}),e("div",{staticClass:"link-line"},[e("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[s._v("忘记支付密码？")])],1),e("van-number-keyboard",{attrs:{show:!0},on:{input:s.onPasswordInput,delete:s.onPasswordDelete}})],1)],2)},a=[],n=(e("96cf"),e("3b8d")),i=(e("8615"),e("7514"),e("ac6a"),e("724c")),r=e.n(i),c=e("2916"),d=e("cb92"),u=e("b8f2"),l=e("a04d"),h=e("6821f"),p=e.n(h),v={components:{CouponList:d["a"],CouponItem:u["a"],PayType:c["a"]},filters:{location:function(s){return s.province+s.city+s.area+s.address||"---"}},computed:{postage:function(){return this.shopList.reduce(function(s,t){return t.forEach(function(t){return s+=t.postage}),s},0)}},data:function(){return{address_id:"",address:{},balance_sum:0,car_id:"",couponList:[],coupon:{},currentPayType:null,couponShow:!1,discount:0,useDiscount:!0,defaultShopLogo:r.a,express_remark:"",num:0,password:"",passwordModalShow:!1,score_balance:0,score:0,stand_id:"",shopList:[],total:0,useCoupon:!0,useScore:!0,orderFrom:"",payTypeShow:!1,orderId:""}},methods:{closePasswordModal:function(){this.password=""},getBalance:function(){var s=this;this.$axios.post("/mine/mycommission").then(function(t){var e=t.data;1===e.code?e.data&&(s.balance_sum=e.data):s.$toast(e.msg)})},getData:function(){var s,t,e=this;"single"===this.orderFrom?(s="/goods/makesureorder",t={stand_id:this.stand_id,num:this.num,coupon_sum:this.useCoupon?this.coupon.sum:void 0,is_vip:this.useDiscount?1:void 0,score_sum:this.useScore?this.score:void 0}):"car"===this.orderFrom&&(s="/car/makesureorder",t={car_id:this.car_id,coupon_sum:this.useCoupon?this.coupon.sum:void 0,is_vip:this.useDiscount?1:void 0,score_sum:this.useScore?this.score:void 0}),this.$axios.post(s,t).then(function(s){var t=s.data;1===t.code?t.data&&(e.handleData("single"===e.orderFrom?[t.data.goods]:t.data.car),e.total=t.data.total,e.discount=t.data.use_vipdiscount,e.couponList=t.data.coupon,e.address=t.data.address.find(function(s){return e.address_id?s.id===+e.address_id:1===s.sta}),e.address_id||(e.address_id=e.address.id)):e.$toast(t.msg)})},handleData:function(s){var t=s.reduce(function(s,t){return s[t.id]?s[t.id].push(t):s[t.id]=[t],s},{});this.shopList=Object.values(t)},onClick:function(s){this.$router.push({path:"/goods/details",query:{id:s.id}})},onCouponClick:function(s){this.coupon=s,this.couponShow=!1},onPasswordInput:function(s){var t=this;this.password.length<6&&(this.password=this.password+s),6===this.password.length&&this.$axios.post("/pay/pay",{order:this.orderId,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?p()(this.password):void 0}).then(function(s){var e=s.data;1===e.code?(t.$toast("支付成功"),t.$router.push("/uc/orders")):(t.password="",t.$toast(e.msg))})},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},selectAddress:function(){this.$router.push({path:"/uc/setting/address",query:{from:this.$route.path,car_id:"single"===this.orderFrom?void 0:this.car_id,stand_id:"single"===this.orderFrom?this.stand_id:void 0,num:"single"===this.orderFrom?this.num:void 0,score:this.score}})},selectCoupon:function(){this.couponList.length?this.couponShow=!0:this.$toast("抱歉，暂无可用优惠券")},confirmPay:function(s){this.passwordModalShow=!0,this.currentPayType=l["a"].find(function(t){return t.key===s})},setScore:function(){this.$router.push({path:"/uc/orders/score-discount",query:{address_id:this.address_id,car_id:"single"===this.orderFrom?void 0:this.car_id,stand_id:"single"===this.orderFrom?this.stand_id:void 0,num:"single"===this.orderFrom?this.num:void 0}})},toPay:function(){var s=Object(n["a"])(regeneratorRuntime.mark(function s(){var t;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return this.payTypeShow=!0,s.next=3,this.$axios.post("/goods/topay",{stand_id:this.stand_id,num:this.num,coupon_id:this.useCoupon?this.coupon.id:void 0,is_vip:this.useDiscount?1:void 0,score_sum:this.useScore?this.score:void 0,address_id:this.address_id,express_remark:"test"});case 3:t=s.sent,this.orderId=t.data.data;case 5:case"end":return s.stop()}},s,this)}));function t(){return s.apply(this,arguments)}return t}()},created:function(){var s=this;this.$route.query.stand_id?(this.orderFrom="single",this.stand_id=this.$route.query.stand_id,this.num=this.$route.query.num):this.$route.query.car_id&&(this.orderFrom="car",this.car_id=this.$route.query.car_id),this.$axios.post("/mine/myscore").then(function(t){var e=t.data;1===e.code?e.data&&(s.score_balance=e.data.score_balance):s.$toast(e.msg)}).catch(function(){s.error=!0}),this.getBalance(),this.score=this.$route.query.score,this.address_id=this.$route.query.address_id,this.getData()}},_=v,m=(e("05b2"),e("2877")),f=Object(m["a"])(_,o,a,!1,null,"080d9db7",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-f645025e.014f8146.js.map