(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e6a9eb0"],{"00a1":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"suwis-simple-good"},[i("ul",{staticClass:"list"},[i("li",{staticClass:"item",on:{click:t.toggleCheck}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:t.storeLogo,alt:"商品"}}),i("div",{staticClass:"info",style:t.infoStyle},[i("div",{staticClass:"name"},[t._v(t._s(t.name))]),t.desc&&t.desc.length?[i("div",{staticClass:"desc"},t._l(t.desc,function(e,s){return i("span",{key:s,staticClass:"desc-item"},[t._v(t._s(e))])}),0)]:t._e()],2),t.hasCheckbox?i("div",{staticClass:"checkbox"},[i("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1):t._e()])])])},n=[],c={props:{name:{type:String},desc:{type:Array,default:function(){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},a=c,o=(i("b064"),i("2877")),r=Object(o["a"])(a,s,n,!1,null,"30879eed",null);e["a"]=r.exports},"18e8":function(t,e,i){"use strict";var s=i("e70e"),n=i.n(s);n.a},"386d":function(t,e,i){"use strict";var s=i("cb7c"),n=i("83a1"),c=i("5f1b");i("214f")("search",1,function(t,e,i,a){return[function(i){var s=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,s):new RegExp(i)[e](String(s))},function(t){var e=a(i,t,this);if(e.done)return e.value;var o=s(t),r=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var u=c(o,r);return n(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]})},"413b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAMAAAC8RHExAAAAsVBMVEVHcEzsPivhFRbyUjbrOCjzVDfjHxvvSTDsHBXlKB/lHxvgEhP0WDrxMhzoLyPoMCLiHRjtQCz1WjvtQC3kHxvhGRjtQCflIx30VDfjHxvjHRryUTX2Xj31WDnkIRz2Wzz1XDvhGRf1WjrgFBXfEBP1XTzpMCTlIRziFhb2XjzvRjD1XTzlJB7mKSDiGxnjHxveDxLpNSfxUDXrOintQS3gFRbzVDfoLiPvRzD0WDnwTDP6N3ZBAAAAK3RSTlMAYN1gf39eIBU+cG/mBsIsH7/Nw/G2D7Y6o4W++VjLrYROlZP4SeppdHLFNjpvGAAAAfhJREFUOMulk3mTojAQxbPMAjKCsJYiMt6jc2ySTuTy+P4fbHOBUWecP/YVVVR1/VJ5/dKNkNCwKYrz+Xg8VlVVlvv9/nA4UEoIe0Z3GjYGVqyGqYS/Yk/Ni9CfTgOlb9jwvoh69H/YzHXdsCh+G3k2S29YwZ27AERLwQN22ZgENDvq2ezUk7KO+52SJIksDzo3xliAflLMOSgWRslPbMK58jBm4Ghn6fxJ6peRdV2P8778RwuAhfI2xKfGbi++sLVmUeoATA17aqzcvmBRMgJ4lRXtoXVhe6hrw6JgBPX7o94U26+5TGENAOtHLGiWOylCHwBjhPxrJf4V6zlC0qtkl1hIttdGUQ46FvqXW5hgh1jBVm5ly7Jb1v90O+mxjC/s8zV7pfRpnl16Y3I3e56nDjOm2VRPV7SaCedhZrFRLpKtnaBjs1ko4Ui32RQG7omdnxAGUPNtgAibyKKLsbwmwzjc+XPx4C1LppQsgsTbcicy7Abjv5PJeIBnInQ0b5cvp2REiRzdD85fCVHsCuNqT+ENq21Om6LSq0cJpY6ZZDH12sPsdCwPzLC+ZA0sPnnVmnNmWKMdxkuxOWFTBK3exXpGKHbq7ToIYouNxBPOQhHE5lJbCM+OSC2/HazoRYW2sh9nIHcT8uh+DHerzca/LgX5NDdr/A/LulnLRDEy/wAAAABJRU5ErkJggg=="},4835:function(t,e,i){},"6fd5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMS0wM1QwMDo0ODo1MiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTEtMDNUMDA6NTErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTEtMDNUMDA6NTErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk2NjAzNzgtZjg3NS01NTRhLThlMTUt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"},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},b064:function(t,e,i){"use strict";var s=i("4835"),n=i.n(s);n.a},bf58:function(t,e,i){},e70e:function(t,e,i){},f080:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"suwis-logistics-details",staticStyle:{"padding-top":"45px"}},[i("SimpleGood",{attrs:{name:t.goodInfo.title,desc:[t.goodInfo.header_one,t.goodInfo.header_two,t.goodInfo.header_three],"store-logo":t.goodInfo.img}}),i("div",{staticClass:"logistics-box"},[i("div",{staticClass:"order-info"},[t._m(0),i("ul",{staticClass:"logistics-info"},[i("li",{staticClass:"logistics-item"},[t._v("订单编号："+t._s(t.logisticsInfo.order_number))]),i("li",{staticClass:"logistics-item"},[t._v("物流单号："+t._s(t.logisticsInfo.LogisticCode))])])]),i("van-steps",{attrs:{direction:"vertical",active:0}},[i("van-icon",{attrs:{slot:"inactive-icon",name:"success"},slot:"inactive-icon"}),t._l(t.logisticsInfo.Traces,function(e,s){return i("van-step",{directives:[{name:"show",rawName:"v-show",value:t.checkTraceShow(s),expression:"checkTraceShow(index)"}]},[i("div",{staticClass:"step-box"},[i("div",{staticClass:"top-bar"},[i("span",{staticClass:"status"},[t._v(t._s(e.status))]),i("span",[t._v(t._s(e.AcceptTime))])]),i("div",{staticClass:"detail"},[t._v(t._s(e.AcceptStation))])])])})],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.viewMoreVisilbe,expression:"viewMoreVisilbe"}],staticClass:"show-more",on:{click:function(e){t.viewMoreVisilbe=!1}}},[t._v("查看更多物流状态")])],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("img",{staticClass:"icon",attrs:{src:i("413b")}}),t._v("\n        物流动态\n      ")])}],c=(i("386d"),i("75fc")),a=i("cebc"),o=(i("ac4d"),i("8a81"),i("ac6a"),i("96cf"),i("3b8d")),r=i("2ef0"),l=i.n(r),u=i("00a1"),d=i("8f9b"),h={components:{SimpleGood:u["a"]},computed:{traces:function(){var t=this.logisticsInfo.Traces||[];return t.revers()}},data:function(){return{am:new d["AMapManager"],goodInfo:{},logisticsInfo:[],order_id:"",viewMoreVisilbe:!1,zoom:6,center:[116.46,39.92],points:[],maploaed:!1}},mounted:function(){var t=this;this.order_id=this.$route.query.id,this.checkthelogistics().then(function(){t.getTraces().then(function(){setTimeout(function(){t.getLines().then(function(){})},2e3)})}),setTimeout(function(){t.maploaed=!0},1e3)},methods:{checkTraceShow:function(t){return!this.viewMoreVisilbe||t<4},checkthelogistics:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("/order/checkthelogistics",{order_id:this.order_id});case 2:return e=t.sent,e=e.data,1===e.code?e.data&&(this.goodInfo=e.data.goods,this.logisticsInfo=e.data.logistics,this.logisticsInfo.Traces&&this.logisticsInfo.Traces.length>4&&(this.viewMoreVisilbe=!0)):this.$toast(e.msg),t.abrupt("return",this.logisticsInfo);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getTraces:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i,s,n,c,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(e=[],i=!0,s=!1,n=void 0,t.prev=4,c=(this.logisticsInfo.Traces||[])[Symbol.iterator]();!(i=(o=c.next()).done);i=!0)r=o.value,e.push(Object(a["a"])({},r,{city:r.AcceptStation.substring(1,r.AcceptStation.lastIndexOf("】")),pois:[]}));t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](4),s=!0,n=t.t0;case 12:t.prev=12,t.prev=13,i||null==c.return||c.return();case 15:if(t.prev=15,!s){t.next=18;break}throw n;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return this.points=l.a.unionBy(e,"city"),t.abrupt("return",!0);case 22:case"end":return t.stop()}},t,this,[[4,8,12,20],[13,,15,19]])}));function e(){return t.apply(this,arguments)}return e}(),getLines:function(){var t=this;return new Promise(function(e,i){window.AMap.plugin("AMap.PlaceSearch",function(){var i=new window.AMap.PlaceSearch({city:"中国"}),s=Object(c["a"])(t.points),n=function n(c){i.search(s[c].city,function(i,a){var o=a.poiList||{};s[c].pois=o.pois||[],c<t.points.length-1?n(c+1):(console.log(s,"points"),t.$set(t,"points",s),e(t.points))})};n(0)})})},drawLines:function(){var t=[],e=!0,s=!1,n=void 0;try{for(var c,a=this.points[Symbol.iterator]();!(e=(c=a.next()).done);e=!0){var o=c.value;t.push([o.pois[0].location.lng,o.pois[0].location.lat])}}catch(u){s=!0,n=u}finally{try{e||null==a.return||a.return()}finally{if(s)throw n}}this.center=t[t.length-1];var r=new window.AMap.Polyline({path:t});this.am._map.add(r);var l=new AMap.Marker({icon:i("6fd5"),position:this.center,alpha:.6,anchor:[50,50]});this.am._map.add(l)}}},p=h,v=(i("f57e"),i("18e8"),i("2877")),A=Object(v["a"])(p,s,n,!1,null,"5363d806",null);e["default"]=A.exports},f57e:function(t,e,i){"use strict";var s=i("bf58"),n=i.n(s);n.a}}]);