(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a782d70"],{"4ac4":function(t,s,i){"use strict";var a=i("ff3b"),e=i.n(a);e.a},bf4b:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"suwis-wrapper"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","error-text":"请求失败，点击重新加载",error:t.error},on:{"update:error":function(s){t.error=s},load:t.loadlist},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.list,(function(s,a){return i("div",{staticClass:"suwis-logistics"},[i("div",{staticClass:"suwis-logistics-title"},[i("div",[t._v(t._s(s.title))]),i("div",[t._v(t._s(t._f("dateFmt3")(s.time)))])]),i("div",{staticClass:"suwis-logistics-title"},[i("div",{staticClass:"suwis-logistics-img"},[i("router-link",{attrs:{tag:"div",to:{path:"/uc/orders/logistics-details",query:{id:s.order_id}}}},[i("img",{attrs:{src:s.goods_img}})])],1),i("div",{staticClass:"suwis-logistics-con"},[i("div",[i("router-link",{attrs:{tag:"div",to:{path:"/uc/orders/logistics-details",query:{id:s.order_id}}}},[t._v("\n              "+t._s(s.goods_name)+"\n            ")])],1),i("div",[t._v("物流单号："+t._s(s.express)+" "+t._s(s.express_number))])])])])})),0)],1)},e=[],o={data:function(){return{list:[],loading:!1,finished:!1,error:!1,page:1}},mounted:function(){},methods:{loadlist:function(){var t=this;this.$axios.post("message/logistics",{page:this.page,num:10}).then((function(s){1===s.data.code?s.data.data&&s.data.data.logistics&&(t.list=t.list.concat(s.data.data.logistics||[]),10*t.page>s.data.data.total&&(t.finished=!0)):t.$toast(s.data.msg),t.page++,t.loading=!1})).catch((function(){t.error=!0}))}}},r=o,n=(i("4ac4"),i("2877")),d=Object(n["a"])(r,a,e,!1,null,"67410670",null);s["default"]=d.exports},ff3b:function(t,s,i){}}]);