(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1c4acc6"],{"2afc":function(t,e,i){},"70e1":function(t,e,i){},b930:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"auction"}},[a("div",{staticClass:"suwis-news-ban",staticStyle:{height:"27vw",overflow:"hidden"}},[a("van-swipe",{staticStyle:{width:"100vw","text-align":"center"},attrs:{autoplay:3e3,"indicator-color":"#E83F44"}},t._l(t.banner,function(t){return a("van-swipe-item",[a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}]},[a("router-link",{attrs:{tag:"div",to:{path:"/goods/details",query:{id:t.goods_id,type:"auction"}}}},[a("img",{staticStyle:{width:"100%"},attrs:{"data-src":t.img,"data-error":i("dee0"),"data-loading":i("f015")}})])],1)])}),1)],1),a("div",{staticStyle:{"padding-bottom":"60px"}},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","error-text":"请求失败，点击重新加载",error:t.error},on:{"update:error":function(e){t.error=e},load:t.loadlist},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,i){return a("div",{staticClass:"suwis-news-list"},[a("div",{staticClass:"suwis-news-right"},[a("router-link",{attrs:{tag:"div",to:{path:"/goods/details",query:{id:e.id,type:"auction"}}}},[a("img",{attrs:{src:e.img,width:"100%"}})])],1),a("div",{staticClass:"suwis-news-left"},[a("router-link",{attrs:{tag:"div",to:{path:"/goods/details",query:{id:e.id,type:"auction"}}}},[a("div",[t._v(t._s(e.title))]),a("div",{staticClass:"suwis-news-tips"},[a("div",[a("span",{staticClass:"suwis-current-price"},[t._v("当前价 : ")]),a("span",{staticClass:"suwis-current-pri"},[t._v("￥"+t._s(e.price_max))])]),a("div",[a("span",{staticClass:"suwis-current-price"},[t._v("距离结束仅剩下 ")]),"结束"==e.endTime?a("span",[t._v(t._s(e.endTime))]):a("span",{staticClass:"suwis-auction-date"},[t._v("\n                    "+t._s(e.endTime)+"\n                    ")])]),a("div",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("span",{staticStyle:{color:"#E83F44"}},[t._v(t._s(e.price_count))]),a("span",{staticClass:"suwis-current-price"},[t._v("次出价")])])])])],1)])}),0)],1)])},n=[];i("c5f6");function s(t){var e,i,a=null,n=parseInt(1e3*t)-(new Date).getTime();if(Number(n)<=0)return"结束";if(e=Math.floor(n/60/60/24),Math.floor(n/60/60%24),i=Math.floor(n/60%60),a=Math.floor(n%60),i<10&&a<10)var s=e+"0"+i+"0"+a;else if(i<10)s=e+"0"+i+a;else if(a<10)s=e+i+"0"+a;else s=e+i+""+a;return s}var r={data:function(){return{flashList:[],active:"tab-container1",pinkFont:!0,allLoaded:!1,autoFill:!1,list:[],banner:[],page:1,loading:!1,finished:!1,error:!1}},methods:{loadlist:function(){var t=this;this.$axios.post("goods/lists",{type:2,page:1,num:10}).then(function(e){if(1===e.data.code){if(e.data.data&&e.data.data.goods){var i=e.data.data.goods;i.map(function(e,i){t.$set(e,"endTime",s(e.activity_end_time))}),t.list=t.list.concat(i),10*t.page>e.data.data.total&&(t.finished=!0)}}else t.$toast(e.data.msg);t.page++,t.loading=!1}).catch(function(){t.error=!0})},getBanner:function(){var t=this;this.$axios.post("goods/goodsbanner",{type:2}).then(function(e){t.banner=e.data.data})}},created:function(){var t=this;this.getBanner(),this.$store.commit("core/header",{title:"竞拍捡漏",buttons:{right:{text:"竞拍规则",width:"96",onclick:function(){t.$router.push({path:"/special/auctionrlue"})}}}})},mounted:function(){var t=this;setInterval(function(){for(var e in t.list){var i=parseInt(t.list[e]["activity_end_time"]),a=(new Date).getTime(),n=1e3*i-a;if(n>0){var s=Math.floor(n/1e3/60/60/24),r=Math.floor(n/1e3/60/60%24),c=Math.floor(n/1e3/60%60),l=Math.floor(n/1e3%60);t.list[e]["endTime"]=c<10&&l<10?s+"天 "+r+"时:0"+c+"分:0"+l+"秒":c<10?s+"天 "+r+"时:0"+c+"分:"+l+"秒":l<10?s+"天 "+r+"时:"+c+"分:0"+l+"秒":s+"天 "+r+"时:"+c+"分:"+l+"秒"}else t.list[e]["endTime"]="结束"}},1e3)}},c=r,l=(i("bd38"),i("ea92"),i("2877")),o=Object(l["a"])(c,a,n,!1,null,"2843e0dc",null);e["default"]=o.exports},bd38:function(t,e,i){"use strict";var a=i("70e1"),n=i.n(a);n.a},dee0:function(t,e,i){t.exports=i.p+"img/more.39f0ec22.jpg"},ea92:function(t,e,i){"use strict";var a=i("2afc"),n=i.n(a);n.a},f015:function(t,e){t.exports="data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4MkVDOTdBODYwMjExRTk4MjY0Q0M1M0YwQzVGQTNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4MkVDOTdCODYwMjExRTk4MjY0Q0M1M0YwQzVGQTNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyRUM5Nzg4NjAyMTFFOTgyNjRDQzUzRjBDNUZBM0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjgyRUM5Nzk4NjAyMTFFOTgyNjRDQzUzRjBDNUZBM0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Uk9U4AAAAF0lEQVR42mL8//8/AzpgYsACKBQECDAANlADByyfnVcAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-e1c4acc6.abd4e63f.js.map