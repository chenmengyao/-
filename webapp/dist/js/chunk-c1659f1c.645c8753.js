(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1659f1c"],{"00a1":function(s,e,t){"use strict";var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"suwis-simple-good"},[t("ul",{staticClass:"list"},[t("li",{staticClass:"item",on:{click:s.toggleCheck}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:s.storeLogo,alt:"商品"}}),t("div",{staticClass:"info",style:s.infoStyle},[t("div",{staticClass:"name"},[s._v(s._s(s.name))]),s.desc&&s.desc.length?[t("div",{staticClass:"desc"},s._l(s.desc,(function(e){return t("span",{key:e,staticClass:"desc-item"},[s._v(s._s(e))])})),0)]:s._e()],2),s.hasCheckbox?t("div",{staticClass:"checkbox"},[t("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:s.checked,callback:function(e){s.checked=e},expression:"checked"}})],1):s._e()])])])},o=[],c={props:{name:name,desc:{type:Array,default:function(s){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},a=c,n=(t("33e4"),t("2877")),r=Object(n["a"])(a,i,o,!1,null,"e01f8aee",null);e["a"]=r.exports},1350:function(s,e,t){"use strict";var i=t("d92d"),o=t.n(i);o.a},"33e4":function(s,e,t){"use strict";var i=t("96c1"),o=t.n(i);o.a},"413b":function(s,e){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAMAAAC8RHExAAAAsVBMVEVHcEzsPivhFRbyUjbrOCjzVDfjHxvvSTDsHBXlKB/lHxvgEhP0WDrxMhzoLyPoMCLiHRjtQCz1WjvtQC3kHxvhGRjtQCflIx30VDfjHxvjHRryUTX2Xj31WDnkIRz2Wzz1XDvhGRf1WjrgFBXfEBP1XTzpMCTlIRziFhb2XjzvRjD1XTzlJB7mKSDiGxnjHxveDxLpNSfxUDXrOintQS3gFRbzVDfoLiPvRzD0WDnwTDP6N3ZBAAAAK3RSTlMAYN1gf39eIBU+cG/mBsIsH7/Nw/G2D7Y6o4W++VjLrYROlZP4SeppdHLFNjpvGAAAAfhJREFUOMulk3mTojAQxbPMAjKCsJYiMt6jc2ySTuTy+P4fbHOBUWecP/YVVVR1/VJ5/dKNkNCwKYrz+Xg8VlVVlvv9/nA4UEoIe0Z3GjYGVqyGqYS/Yk/Ni9CfTgOlb9jwvoh69H/YzHXdsCh+G3k2S29YwZ27AERLwQN22ZgENDvq2ezUk7KO+52SJIksDzo3xliAflLMOSgWRslPbMK58jBm4Ghn6fxJ6peRdV2P8778RwuAhfI2xKfGbi++sLVmUeoATA17aqzcvmBRMgJ4lRXtoXVhe6hrw6JgBPX7o94U26+5TGENAOtHLGiWOylCHwBjhPxrJf4V6zlC0qtkl1hIttdGUQ46FvqXW5hgh1jBVm5ly7Jb1v90O+mxjC/s8zV7pfRpnl16Y3I3e56nDjOm2VRPV7SaCedhZrFRLpKtnaBjs1ko4Ui32RQG7omdnxAGUPNtgAibyKKLsbwmwzjc+XPx4C1LppQsgsTbcicy7Abjv5PJeIBnInQ0b5cvp2REiRzdD85fCVHsCuNqT+ENq21Om6LSq0cJpY6ZZDH12sPsdCwPzLC+ZA0sPnnVmnNmWKMdxkuxOWFTBK3exXpGKHbq7ToIYouNxBPOQhHE5lJbCM+OSC2/HazoRYW2sh9nIHcT8uh+DHerzca/LgX5NDdr/A/LulnLRDEy/wAAAABJRU5ErkJggg=="},"96c1":function(s,e,t){},cce1:function(s,e,t){},d92d:function(s,e,t){},f080:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"suwis-logistics-details"},[t("div",{staticClass:"map-box"}),t("SimpleGood",{attrs:{name:s.goodInfo.title,desc:[s.goodInfo.header_one,s.goodInfo.header_two,s.goodInfo.header_three],"store-logo":s.goodInfo.img}}),t("div",{staticClass:"logistics-box"},[t("div",{staticClass:"order-info"},[s._m(0),t("ul",{staticClass:"logistics-info"},[t("li",{staticClass:"logistics-item"},[s._v("订单编号："+s._s(s.logisticsInfo.order_number))]),t("li",{staticClass:"logistics-item"},[s._v("物流单号："+s._s(s.logisticsInfo.LogisticCode))])])]),t("van-steps",{attrs:{direction:"vertical",active:0}},[t("van-icon",{attrs:{slot:"inactive-icon",name:"success"},slot:"inactive-icon"}),s._l(s.logisticsInfo.Traces,(function(e,i){return t("van-step",{directives:[{name:"show",rawName:"v-show",value:s.checkTraceShow(i),expression:"checkTraceShow(index)"}]},[t("div",{staticClass:"step-box"},[t("div",{staticClass:"top-bar"},[t("span",{staticClass:"status"},[s._v(s._s(e.status))]),t("span",[s._v(s._s(e.AcceptTime))])]),t("div",{staticClass:"detail"},[s._v(s._s(e.AcceptStation))])])])}))],2),t("div",{directives:[{name:"show",rawName:"v-show",value:s.viewMoreVisilbe,expression:"viewMoreVisilbe"}],staticClass:"show-more",on:{click:function(e){s.viewMoreVisilbe=!1}}},[s._v("查看更多物流状态")])],1)],1)},o=[function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:t("413b")}}),s._v("\n                物流动态\n            ")])}],c=t("00a1"),a={components:{SimpleGood:c["a"]},computed:{traces:function(){var s=this.logisticsInfo.Traces||[];return s.revers()}},data:function(){return{goodInfo:{},logisticsInfo:[],order_id:"",viewMoreVisilbe:!1}},methods:{checkTraceShow:function(s){return!this.viewMoreVisilbe||s<4}},created:function(){var s=this;this.order_id=this.$route.query.id,this.$axios.post("/order/checkthelogistics",{order_id:this.order_id}).then((function(e){var t=e.data;1===t.code?t.data&&(s.goodInfo=t.data.goods,s.logisticsInfo=t.data.logistics,s.logisticsInfo.Traces&&s.logisticsInfo.Traces.length>4&&(s.viewMoreVisilbe=!0)):s.$toast(t.msg)}))}},n=a,r=(t("f57e"),t("1350"),t("2877")),l=Object(r["a"])(n,i,o,!1,null,"5b1192e6",null);e["default"]=l.exports},f57e:function(s,e,t){"use strict";var i=t("cce1"),o=t.n(i);o.a}}]);