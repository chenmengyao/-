(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-340b3128"],{c87a:function(s,e,t){},dfa3:function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"suwis-confirm-order"},[t("van-cell-group",{staticClass:"address"},[t("div"),t("van-cell",[t("div",{attrs:{slot:"title"},slot:"title"},[s._v("收货人："+s._s(s.address&&s.address.name||"")+" "+s._s(s.address&&s.address.tel?"（"+s.address.tel+"）":""))])]),t("van-cell",{attrs:{"title-class":"cell-flex",clickable:""},on:{click:s.selectAddress}},[t("template",{slot:"title"},[s._v("\r\n        收货地址："+s._s(s._f("location")(s.address))+"\r\n        "),t("van-icon",{staticStyle:{"margin-left":"28px"},attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)],2)],1),s.shopList&&s.shopList.length?s._l(s.shopList,(function(e){return t("div",{key:e.id,staticClass:"goods-box"},[t("div",{staticClass:"shop-info",on:{click:function(t){return s.onClickStore(e[0])}}},[t("img",{staticClass:"shop-logo",attrs:{src:e[0].logo||s.defaultShopLogo,alt:"店铺头像",width:"20",height:"20"}}),t("span",{staticClass:"shop-name"},[s._v(s._s(e[0].name))])]),s._l(e,(function(e){return t("van-card",{key:e.goods_id,attrs:{num:"single"===s.orderFrom?s.num:e.num,price:e.price,title:e.title,thumb:e.img},on:{click:function(t){return s.onClick(e)}},scopedSlots:s._u([{key:"desc",fn:function(){return[t("div",{staticClass:"desc-line"},[e.header_one?t("div",{staticClass:"desc-item"},[s._v(s._s(e.header_one))]):s._e(),e.header_two?t("div",{staticClass:"desc-item"},[s._v(s._s(e.header_two))]):s._e(),e.header_three?t("div",{staticClass:"desc-item"},[s._v(s._s(e.header_three))]):s._e()])]},proxy:!0}],null,!0)})}))],2)})):s._e(),t("van-cell-group",{staticClass:"personal-box"},["single"===s.orderFrom?t("van-cell",{attrs:{title:"购买数量",center:"","value-class":"cell-content"}},[[t("van-stepper",{on:{change:s.getData},model:{value:s.num,callback:function(e){s.num=e},expression:"num"}})]],2):s._e(),t("van-cell",{attrs:{title:"配送方式",center:"","value-class":"content"}},[[s._v("\r\n        普通快递 "),t("span",{staticStyle:{"font-size":"10px"}},[s._v("（运费：￥"+s._s(s.postage)+"）")])]],2),t("van-field",{attrs:{maxlength:"100",clearable:"",label:"买家留言",placeholder:"请填写备注信息"},model:{value:s.express_remark,callback:function(e){s.express_remark="string"===typeof e?e.trim():e},expression:"express_remark"}})],1),t("van-cell-group",{staticClass:"discount-box"},[t("van-cell",{attrs:{center:"","value-class":"cell-content"}},[t("template",{slot:"title"},[s.couponList.length?t("van-checkbox",{on:{change:s.getData},model:{value:s.useCoupon,callback:function(e){s.useCoupon=e},expression:"useCoupon"}},[s._v("\r\n          卖家优惠券\r\n        ")]):t("div",[s._v("暂无可用优惠券")])],1),s.couponList.length?[t("div",{on:{click:s.selectCoupon}},[t("span",[s._v(s._s(s.coupon.coupon_id?s.coupon.title:"去使用"))]),t("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)]:s._e()],2),1===s.user_type||2===s.user_type?t("van-cell",{attrs:{center:"","value-class":"cell-content short-content"}},[t("template",{slot:"title"},[t("van-checkbox",{on:{change:function(e){s.useDiscount=!0}},model:{value:s.useDiscount,callback:function(e){s.useDiscount=e},expression:"useDiscount"}},[s._v("会员优惠 "),1===s.shopList.length?t("span",{staticStyle:{color:"#b4b4b4","font-size":"12px","line-height":"24px"}},[s._v("（会员折扣"+s._s(s.shopList[0][0].vipdiscount)+"折）")]):s._e()])],1),[s._v("\r\n        -"+s._s(s.discount)+"\r\n      ")]],2):s._e(),t("van-cell",{attrs:{center:"","value-class":"cell-content short-content"}},[t("template",{slot:"title"},[t("van-checkbox",{on:{change:s.getData},model:{value:s.useScore,callback:function(e){s.useScore=e},expression:"useScore"}},[s._v("\r\n          积分抵扣 "),t("span",{staticStyle:{color:"#b4b4b4","font-size":"12px","line-height":"24px"}},[s._v("（可用积分："+s._s(s.score_need)+"）")]),t("div",{directives:[{name:"show",rawName:"v-show",value:s.score,expression:"score"}]},[s._v("使用"+s._s(s.score)+"分")])])],1),[t("div",{on:{click:s.setScore}},[s._v("\r\n          去使用\r\n          "),t("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1)]],2)],1),t("van-cell-group",{staticClass:"result-box"},[t("van-cell",{attrs:{title:"还需支付",center:"","value-class":"cell-content"}},[[t("span",{staticStyle:{color:"#e83f44"}},[s._v("￥"+s._s(s.total))])]],2)],1),t("div",{staticClass:"submit-box"},[t("span",[s._v("合计："),t("span",{staticStyle:{color:"#e83f44"}},[s._v(s._s(s.total))])]),t("button",{staticClass:"submit",on:{click:s.toPay}},[s._v("提交订单")])]),t("PayType",{attrs:{show:s.payTypeShow,"balance-sum":s.balance_sum,"order-id":s.orderId},on:{close:s.paySuccess,fail:s.payFail,pay:s.confirmPay}}),t("CouponList",{attrs:{title:"选择优惠券"},model:{value:s.couponShow,callback:function(e){s.couponShow=e},expression:"couponShow"}},s._l(s.couponList,(function(e){return t("couponItem",{key:e.id,attrs:{title:e.title,desc:"满"+e.total+"元即可使用",price:e.sum,time:e.end_time,type:"1","btn-text":"使用"},on:{click:function(t){return s.onCouponClick(e)}}})})),1),t("van-actionsheet",{attrs:{title:"请输入支付密码","close-on-click-overlay":!1},on:{cancel:s.closePasswordModal},model:{value:s.passwordModalShow,callback:function(e){s.passwordModalShow=e},expression:"passwordModalShow"}},[t("van-password-input",{attrs:{value:s.password}}),t("div",{staticClass:"link-line"},[t("router-link",{staticClass:"forget-password",attrs:{to:"/resetpaypwd"}},[s._v("忘记支付密码？")])],1),t("van-number-keyboard",{attrs:{show:!0},on:{input:s.onPasswordInput,delete:s.onPasswordDelete}})],1)],2)},a=[],r=(t("96cf"),t("3b8d")),i=(t("a481"),t("8615"),t("7514"),t("c5f6"),t("ac4d"),t("8a81"),t("ac6a"),t("724c")),n=t.n(i),c=t("2916"),d=t("cb92"),u=t("b8f2"),l=t("a04d"),p=t("6821f"),h=t.n(p),_=t("b970"),v={components:{CouponList:d["a"],CouponItem:u["a"],PayType:c["a"]},filters:{location:function(s){if(s){var e=s.province||"",t=s.city||"",o=s.area||"",a=s.address||"";return e+t+o+a||"---"}return"---"}},computed:{postage:function(){return this.shopList.reduce((function(s,e){var t=!0,o=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var n=r.value;s+=Number(n.postage)}}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return s}),0)}},data:function(){return{address_id:"",address:{name:"",tel:""},balance_sum:0,car_id:"",couponList:[],coupon:{},currentPayType:null,couponShow:!1,discount:0,useDiscount:!0,defaultShopLogo:n.a,express_remark:"",num:0,password:"",passwordModalShow:!1,score_balance:0,score_need:0,score:0,stand_id:"",shopList:[],total:0,useCoupon:!0,useScore:!0,orderFrom:"",payTypeShow:!1,orderId:"",user_type:0}},methods:{closePasswordModal:function(){this.password=""},getBalance:function(){var s=this;this.$axios.post("/mine/mycommission").then((function(e){var t=e.data;1===t.code?t.data&&(s.balance_sum=t.data):s.$toast(t.msg)}))},getData:function(){var s,e,t=this;"single"===this.orderFrom?(s="/goods/makesureorder",e={stand_id:this.stand_id,num:this.num,coupon_sum:this.useCoupon?this.coupon.sum:void 0,is_vip:this.useDiscount?1:void 0,score_sum:this.useScore?this.score:void 0}):"car"===this.orderFrom&&(s="/car/makesureorder",e={car_id:this.car_id,coupon_sum:this.useCoupon?this.coupon.sum:void 0,is_vip:this.useDiscount?1:void 0,score_sum:this.useScore?this.score:void 0}),this.$axios.post(s,e).then((function(s){var e=s.data;1===e.code?e.data&&(t.handleData("single"===t.orderFrom?[e.data.goods]:e.data.car),t.total=e.data.total,t.discount=e.data.use_vipdiscount,t.couponList=e.data.coupon,t.score_need=e.data.score_need||0,t.user_type=e.data.user_type,t.address_id?t.address=e.data.address.find((function(s){return t.address_id?s.id===+t.address_id:1===s.sta})):t.address=e.data.address[0],t.address_id||(t.address_id=t.address.id)):t.$toast(e.msg)}))},handleData:function(s){var e=s.reduce((function(s,e){return s[e.id]?s[e.id].push(e):s[e.id]=[e],s}),{});this.shopList=Object.values(e)},onClick:function(s){this.$router.push({path:"/goods/details",query:{id:s.goods_id}})},onClickStore:function(s){this.$router.push({path:"/shop",query:{id:s.store_id}})},onCouponClick:function(s){this.coupon=s,this.getData(),this.couponShow=!1},onPasswordInput:function(s){var e=this;this.password.length<6&&(this.password=this.password+s),6===this.password.length&&this.$axios.post("/pay/pay",{order:this.orderId,pay_type:this.currentPayType.key,paypass:"balancepay"===this.currentPayType.key?h()(this.password):void 0}).then((function(s){var t=s.data;if(1===t.code){e.$toast("支付成功"),e.passwordModalShow=!1;var o=e;setTimeout((function(){o.$router.replace({path:"/uc/orders",query:{activeTabIndex:2,type:"0000"}})}),699)}else e.password="",e.$toast(t.msg)}))},onPasswordDelete:function(){this.password=this.password.slice(0,this.password.length-1)},selectAddress:function(){this.$router.push({path:"/uc/setting/address",query:{from:this.$route.path,car_id:"single"===this.orderFrom?void 0:this.car_id,express_remark:this.express_remark,stand_id:"single"===this.orderFrom?this.stand_id:void 0,num:"single"===this.orderFrom?this.num:void 0,score:this.score}})},selectCoupon:function(){this.couponList.length?this.couponShow=!0:this.$toast("抱歉，暂无可用优惠券")},confirmPay:function(s){this.passwordModalShow=!0,this.currentPayType=l["a"].find((function(e){return e.key===s}))},paySuccess:function(){this.payTypeShow=!1,this.$router.replace({path:"/uc/orders",query:{activeTabIndex:2,type:"0000"}})},payFail:function(){this.payTypeShow=!1,this.$router.replace({path:"/uc/orders",query:{activeTabIndex:1,type:"0000"}})},setScore:function(){this.$router.push({path:"/uc/orders/score-discount",query:{address_id:this.address_id,car_id:"single"===this.orderFrom?void 0:this.car_id,express_remark:this.express_remark,score_need:this.score_need,stand_id:"single"===this.orderFrom?this.stand_id:void 0,num:"single"===this.orderFrom?this.num:void 0}})},toPay:function(){var s=Object(r["a"])(regeneratorRuntime.mark((function s(){var e,t,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(this.payTypeShow=!0,this.address_id){s.next=4;break}return Object(_["i"])("请填写地址！"),s.abrupt("return");case 4:return"single"===this.orderFrom?(e="/goods/topay",t={stand_id:this.stand_id,num:this.num,coupon_id:this.useCoupon?this.coupon.id:void 0,is_vip:this.useDiscount?1:void 0,is_score:this.useScore?this.score:void 0,address_id:this.address_id,express_remark:this.express_remark||""}):"car"===this.orderFrom&&(e="/car/topay",t={car_id:this.car_id,coupon_id:this.useCoupon?this.coupon.id:void 0,is_vip:this.useDiscount?1:void 0,is_score:this.useScore?this.score:void 0,address_id:this.address_id,express_remark:this.express_remark||""}),s.next=8,this.$axios.post(e,t);case 8:o=s.sent,this.orderId=o.data.data;case 10:case"end":return s.stop()}}),s,this)})));function e(){return s.apply(this,arguments)}return e}()},watch:{$route:function(s,e){this.$route.path===s.path&&this.$router.go(-1)}},created:function(){var s=this;this.$route.query.stand_id?(this.orderFrom="single",this.stand_id=this.$route.query.stand_id,this.num=this.$route.query.num):this.$route.query.car_id&&(this.orderFrom="car",this.car_id=this.$route.query.car_id),this.$axios.post("/mine/myscore").then((function(e){var t=e.data;1===t.code?t.data&&(s.score_balance=t.data.score_balance):s.$toast(t.msg)})).catch((function(){s.error=!0})),this.getBalance(),this.score=this.$route.query.score,this.address_id=this.$route.query.address_id||"",this.express_remark=this.$route.query.express_remark,this.getData()}},m=v,f=(t("e70f"),t("2877")),y=Object(f["a"])(m,o,a,!1,null,"b7ca5d14",null);e["default"]=y.exports},e70f:function(s,e,t){"use strict";var o=t("c87a"),a=t.n(o);a.a}}]);