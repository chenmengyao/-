(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f084f670"],{"00a1":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"suwis-simple-good"},[e("ul",{staticClass:"list"},[e("li",{staticClass:"item",on:{click:t.toggleCheck}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:t.storeLogo,alt:"商品"}}),e("div",{staticClass:"info",style:t.infoStyle},[e("div",{staticClass:"name"},[t._v(t._s(t.name))]),t.desc&&t.desc.length?[e("div",{staticClass:"desc"},t._l(t.desc,function(a){return e("span",{staticClass:"desc-item"},[t._v(t._s(a))])}),0)]:t._e()],2),t.hasCheckbox?e("div",{staticClass:"checkbox"},[e("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}})],1):t._e()])])])},n=[],i={props:{name:name,desc:{type:Array,default:function(t){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},o=i,r=(e("30aa"),e("2877")),c=Object(r["a"])(o,s,n,!1,null,"239a985b",null);a["a"]=c.exports},"0a49":function(t,a,e){var s=e("9b43"),n=e("626a"),i=e("4bf8"),o=e("9def"),r=e("cd1c");t.exports=function(t,a){var e=1==t,c=2==t,l=3==t,d=4==t,u=6==t,h=5==t||u,v=a||r;return function(a,r,f){for(var m,p,g=i(a),k=n(g),_=s(r,f,3),C=o(k.length),x=0,y=e?v(a,C):c?v(a,0):void 0;C>x;x++)if((h||x in k)&&(m=k[x],p=_(m,x,g),t))if(e)y[x]=p;else if(p)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:y.push(m)}else if(d)return!1;return u?-1:l||d?d:y}}},"294d":function(t,a,e){},"30aa":function(t,a,e){"use strict";var s=e("66fcd"),n=e.n(s);n.a},"4ede":function(t,a,e){"use strict";var s=e("294d"),n=e.n(s);n.a},"66fcd":function(t,a,e){},"70cc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"suwis-apply-refund"},[e("main",{staticClass:"content"},[e("SimpleGood",{attrs:{name:t.goodInfo.goods_name,desc:[t.goodInfo.header_one,t.goodInfo.header_two,t.goodInfo.header_three],"store-logo":t.goodInfo.goods_img}}),e("ul",{staticClass:"list"},["refund"===t.type?e("li",{staticClass:"item",on:{click:t.showStatus}},[e("div",{staticClass:"name"},[t._v("货物状态")]),e("div",{staticClass:"value"},[t._v("\n                    "+t._s(t._f("goodsStatus")(t.status))+"\n                    "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"rgb(180, 180, 180)"}})],1)]):t._e(),e("li",{staticClass:"item",on:{click:t.showReason}},[e("div",{staticClass:"name"},[t._v(t._s("exchange"===t.type?"换货":"退款")+"原因：")]),e("div",{staticClass:"value"},[t._v("\n                    "+t._s(t._f("reason")(t.reason))+"\n                    "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"rgb(180, 180, 180)"}})],1)]),"refund"===t.type||"return"===t.type?e("li",{staticClass:"item"},[e("div",{staticClass:"name"},[t._v("退款金额")]),e("div",{staticClass:"value"},[e("span",{staticClass:"color-red price"},[t._v("￥"+t._s(t.goodInfo.sum))])])]):t._e(),"exchange"===t.type?e("li",{staticClass:"item address",on:{click:t.selectAddress}},[e("div",{staticClass:"name"},[t._v("换货地址")]),e("div",{staticClass:"address-box"},[e("div",{staticClass:"address-top"},[e("span",{staticClass:"address-name"},[t._v(t._s(t.address.name))]),e("span",{staticClass:"address-tel"},[t._v(t._s(t.address.tel))])]),e("div",{staticClass:"address"},[t._v(t._s(t._f("location")(t.address)))])]),e("div",{staticClass:"value"},[e("van-icon",{attrs:{name:"arrow",size:"10px",color:"rgb(180, 180, 180)"}})],1)]):t._e(),e("li",{staticClass:"item remark"},[e("div",{staticClass:"name"},[t._v(t._s("exchange"===t.type?"换货":"退款")+"说明：")]),e("van-field",{attrs:{placeholder:"exchange"===t.type?"请输入换货说明（选填）":"请输入退款说明（选填）"},model:{value:t.remark,callback:function(a){t.remark=a},expression:"remark"}})],1)]),e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"upload-line"},[t._l(t.imgList,function(a,s){return e("img",{key:a,staticClass:"image-item",attrs:{src:a},on:{click:function(a){return t.removeImg(s)}}})}),e("van-uploader",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length<3,expression:"imgList.length < 3"}],attrs:{"after-read":t.onRead,accept:"image/gif, image/jpeg","max-size":t.maxSize},on:{oversize:t.oversize}},[e("div",{staticClass:"icon-line"},[e("van-icon",{attrs:{name:"photograph",size:"24px",color:"rgb(180, 180, 180)"}})],1),e("div",{staticClass:"upload-text"},[t._v("添加图片")])])],2)]),e("div",{staticClass:"button-line"},[e("div",{staticClass:"deploy",on:{click:t.submit}},[t._v("提交")])])],1),e("van-actionsheet",{attrs:{title:"货物状态"},model:{value:t.statusShow,callback:function(a){t.statusShow=a},expression:"statusShow"}},[e("van-radio-group",{model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"已收到货",clickable:""},nativeOn:{click:function(a){return t.changeStatus("1")}}},[e("van-radio",{attrs:{name:"1"},nativeOn:{click:function(a){return t.changeStatus("1")}}})],1),e("van-cell",{attrs:{title:"未收到货",clickable:""},nativeOn:{click:function(a){return t.changeStatus("2")}}},[e("van-radio",{attrs:{name:"2"},nativeOn:{click:function(a){return t.changeStatus("2")}}})],1)],1)],1)],1),e("van-actionsheet",{attrs:{title:"退款原因"},model:{value:t.reasonShow,callback:function(a){t.reasonShow=a},expression:"reasonShow"}},[e("van-radio-group",{model:{value:t.reason,callback:function(a){t.reason=a},expression:"reason"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"7天无理由退款",clickable:""},nativeOn:{click:function(a){return t.changeReason("1")}}},[e("van-radio",{attrs:{name:"1"},nativeOn:{click:function(a){return t.changeReason("1")}}})],1),e("van-cell",{attrs:{title:"地址、商品信息填写错误",clickable:""},nativeOn:{click:function(a){return t.changeReason("2")}}},[e("van-radio",{attrs:{name:"2"},nativeOn:{click:function(a){return t.changeReason("2")}}})],1),e("van-cell",{attrs:{title:"商家缺货",clickable:""},nativeOn:{click:function(a){return t.changeReason("3")}}},[e("van-radio",{attrs:{name:"3"},nativeOn:{click:function(a){return t.changeReason("3")}}})],1),e("van-cell",{attrs:{title:"其他",clickable:""},nativeOn:{click:function(a){return t.changeReason("4")}}},[e("van-radio",{attrs:{name:"4"},nativeOn:{click:function(a){return t.changeReason("4")}}})],1)],1)],1)],1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[t._v("\n                上传凭证\n                "),e("span",{staticClass:"subtitle"},[t._v("（最多3张）")])])}],i=(e("7514"),e("00a1")),o={refund:"退款",return:"退货退款",exchange:"换货"},r={1:"7天无理由退款",2:"地址、商品信息填写错误",3:"商家缺货",4:"其他"},c={components:{SimpleGood:i["a"]},filters:{goodsStatus:function(t){var a={1:"已收到货",2:"未收到货"};return t?a[t]:"请选择"},location:function(t){return t.province+t.city+t.area+t.address||"---"},reason:function(t){return t?r[t]:"请选择"}},data:function(){return{address:{},address_id:"",goodInfo:{},id:"",maxSize:512e3,imgList:[],remark:"",reason:"",status:"",type:"",reasonShow:!1,statusShow:!1}},methods:{changeReason:function(t){this.reason=t,this.reasonShow=!1},changeStatus:function(t){this.status=t,this.statusShow=!1},selectAddress:function(){var t=this.id,a=this.type;this.$router.push({path:"/uc/setting/address",query:{from:this.$route.path,id:t,type:a}})},showReason:function(){this.reasonShow=!0},showStatus:function(){this.statusShow=!0},onRead:function(t){var a=this;if(this.imgList>=5)this.$toast("最多只能上传5张图片");else{var e=new FormData;e.append("file",t.file),this.$axios.post("/index/upload",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var e=t.data;1===e.code?e.data&&a.imgList.push(e.data):a.$toast(e.msg)})}},oversize:function(){var t=Math.floor(this.maxSize/1024);this.$toast("上传图片最大不能超过".concat(t,"KB"))},removeImg:function(t){var a=this;this.$dialog.confirm({title:"移除图片",message:"确定移除该图片吗"}).then(function(){a.imgList.splice(t,1)})},submit:function(){var t=this;this.imgList.length||this.$toast("请至少上传一张图片凭证"),this.reason||this.$toast("请选择原因"),this.$axios.post("/order/aftersale",{order_id:this.id,type:o[this.type],reason:r[this.reason],remark:this.remark,address_id:"exchange"===this.type?this.address.id:void 0,imgs:this.imgList}).then(function(a){var e=a.data;1===e.code?(t.$router.push("/uc/orders"),t.$toast("已提交售后申请")):t.$toast(e.msg)})}},created:function(){var t=this;this.id=this.$route.query.id,this.type=this.$route.query.type,this.address_id=this.$route.query.address_id,this.$axios.post("/order/detail",{id:this.id}).then(function(a){var e=a.data;1===e.code?e.data&&(t.goodInfo=e.data):t.$toast(e.msg)}),this.$axios.post("/user/alladdress").then(function(a){var e=a.data;1===e.code?e.data&&(t.address=e.data.find(function(a){return t.address_id?a.id===+t.address_id:1===a.sta})):t.$toast(e.msg)})}},l=c,d=(e("4ede"),e("2877")),u=Object(d["a"])(l,s,n,!1,null,"a680dcf6",null);a["default"]=u.exports},7514:function(t,a,e){"use strict";var s=e("5ca1"),n=e("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i](function(){o=!1}),s(s.P+s.F*o,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(i)},cd1c:function(t,a,e){var s=e("e853");t.exports=function(t,a){return new(s(t))(a)}},e853:function(t,a,e){var s=e("d3f4"),n=e("1169"),i=e("2b4c")("species");t.exports=function(t){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)||(a=void 0),s(a)&&(a=a[i],null===a&&(a=void 0))),void 0===a?Array:a}}}]);
//# sourceMappingURL=chunk-f084f670.dd24eb2d.js.map