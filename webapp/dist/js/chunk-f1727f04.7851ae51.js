(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1727f04"],{"00a1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"suwis-simple-good"},[a("ul",{staticClass:"list"},[a("li",{staticClass:"item",on:{click:e.toggleCheck}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:e.storeLogo,alt:"商品"}}),a("div",{staticClass:"info",style:e.infoStyle},[a("div",{staticClass:"name"},[e._v(e._s(e.name))]),e.desc&&e.desc.length?[a("div",{staticClass:"desc"},e._l(e.desc,(function(t,s){return a("span",{key:s,staticClass:"desc-item"},[e._v(e._s(t))])})),0)]:e._e()],2),e.hasCheckbox?a("div",{staticClass:"checkbox"},[a("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1):e._e()])])])},i=[],o={props:{name:{type:String},desc:{type:Array,default:function(){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},c=o,l=(a("4364"),a("2877")),n=Object(l["a"])(c,s,i,!1,null,"2ffaf7b7",null);t["a"]=n.exports},"117e":function(e,t,a){"use strict";var s=a("7055"),i=a.n(s);i.a},2901:function(e,t,a){},"3fd4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"heig",staticClass:"suwis-comment"},[a("div",{staticClass:"content-div"},[a("main",{staticClass:"content"},[a("SimpleGood",{attrs:{name:e.detail.goods_name,desc:[e.detail.header_one,e.detail.header_two,e.detail.header_three],"store-logo":e.detail.goods_img}}),a("ul",{staticClass:"comment-list"},[a("li",{staticClass:"comment-item"},[a("div",{staticClass:"name"},[e._v("商品品质")]),a("van-rate",{staticClass:"comment",attrs:{size:24,color:"#f0914b","void-icon":"star","void-color":"#c9c8c8"},model:{value:e.evaluate_quality,callback:function(t){e.evaluate_quality=t},expression:"evaluate_quality"}})],1),a("li",{staticClass:"comment-item"},[a("div",{staticClass:"name"},[e._v("商家服务")]),a("van-rate",{staticClass:"comment",attrs:{size:24,color:"#f0914b","void-icon":"star","void-color":"#c9c8c8"},model:{value:e.evaluate_serve,callback:function(t){e.evaluate_serve=t},expression:"evaluate_serve"}})],1),a("li",{staticClass:"comment-item"},[a("div",{staticClass:"name"},[e._v("快递评价")]),a("van-rate",{staticClass:"comment",attrs:{size:24,color:"#f0914b","void-icon":"star","void-color":"#c9c8c8"},model:{value:e.evaluate_express,callback:function(t){e.evaluate_express=t},expression:"evaluate_express"}})],1)]),a("van-field",{attrs:{type:"textarea",placeholder:"商品满足您的期待吗？说说你的使用心得，分享给想买的他们吧～",rows:"3",autosize:""},model:{value:e.evaluate,callback:function(t){e.evaluate="string"===typeof t?t.trim():t},expression:"evaluate"}}),a("div",{staticClass:"upload-line"},[e._l(e.imgList,(function(t,s){return a("img",{key:t,staticClass:"image-item",attrs:{src:t},on:{click:function(t){return e.removeImg(s)}}})})),a("van-uploader",{directives:[{name:"show",rawName:"v-show",value:e.imgList.length<5,expression:"imgList.length < 5"}],attrs:{"after-read":e.onRead,accept:"image/gif, image/jpeg","max-size":e.maxSize},on:{oversize:e.oversize}},[a("div",{staticClass:"icon-line"},[a("van-icon",{attrs:{name:"photograph",size:"24px",color:"rgb(180, 180, 180)"}})],1),a("div",{staticClass:"upload-text"},[e._v("添加图片")])])],2)],1)]),a("footer",{staticClass:"button-line"},[a("div",{staticClass:"deploy",on:{click:e.submit}},[e._v("发布")])])])},i=[],o=a("00a1"),c={components:{SimpleGood:o["a"]},data:function(){return{detail:{},evaluate:"",evaluate_quality:5,evaluate_serve:5,evaluate_express:5,maxSize:5242880,imgList:[],orderId:"",clientHeight:"0px"}},mounted:function(){this.$refs.heig.style.height="".concat(document.documentElement.clientHeight,"px")},methods:{onRead:function(e){var t=this;if(this.imgList>=5)this.$toast("最多只能上传5张图片");else{var a=new FormData;a.append("file",e.file),this.$axios.post("/index/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var a=e.data;1===a.code?a.data&&t.imgList.push(a.data):t.$toast(a.msg)}))}},oversize:function(){var e=Math.floor(this.maxSize/1024/1024);this.$toast("上传图片最大不能超过".concat(e,"MB"))},removeImg:function(e){var t=this;this.$dialog.confirm({title:"移除图片",message:"确定移除该图片吗"}).then((function(){t.imgList.splice(e,1)}))},submit:function(){var e=this,t=this.orderId,a=this.evaluate,s=this.evaluate_quality,i=this.evaluate_serve,o=this.evaluate_express,c=this.imgList;this.$axios.post("/order/evaluate",{order_id:t,evaluate:a,evaluate_quality:s,evaluate_serve:i,evaluate_express:o,evaluate_img:c}).then((function(t){var a=t.data;1===a.code?(e.$toast("发布成功"),e.$router.push({path:"/uc/orders",query:{activeTabIndex:2,type:"0000"}})):e.$toast(a.msg)}))}},created:function(){var e=this;this.orderId=this.$route.query.id,console.log(this.$refs),this.$axios.post("/order/detail",{id:this.orderId}).then((function(t){var a=t.data;1===a.code?a.data&&(e.detail=a.data):e.$toast(a.msg)}))}},l=c,n=(a("117e"),a("2877")),r=Object(n["a"])(l,s,i,!1,null,"a5a202f4",null);t["default"]=r.exports},4364:function(e,t,a){"use strict";var s=a("2901"),i=a.n(s);i.a},7055:function(e,t,a){}}]);