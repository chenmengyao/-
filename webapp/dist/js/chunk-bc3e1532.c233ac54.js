(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc3e1532"],{"06db":function(t,n,s){t.exports=s.p+"img/news@3x.10349bcb.png"},"12d5":function(t,n,s){t.exports=s.p+"img/auction@3x.9bf7553e.png"},"1b6c":function(t,n,s){t.exports=s.p+"img/service@3x.bcce395f.png"},2806:function(t,n,s){t.exports=s.p+"img/clearance@3x.2d7eb266.png"},"5cdd":function(t,n,s){"use strict";var e=s("ee7f"),o=s.n(e);o.a},9261:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"suwis-index"},[e("van-swipe",{staticClass:"banner",attrs:{autoplay:3e3,"indicator-color":"#E83F44"}},t._l(t.banners,(function(t){return e("van-swipe-item",[e("router-link",{attrs:{to:{path:"/goods/details",query:{id:t.goods_id}}}},[e("img",{attrs:{src:t.img}})])],1)})),1),e("div",{staticClass:"menus"},[e("router-link",{staticClass:"col",attrs:{to:"/special/flash"}},[e("img",{attrs:{src:s("9fb6"),alt:""}}),e("span",[t._v("限时抢购")])]),e("router-link",{staticClass:"col",attrs:{to:"/special/clearance"}},[e("img",{attrs:{src:s("2806"),alt:""}}),e("span",[t._v("底价清仓")])]),e("router-link",{staticClass:"col",attrs:{to:"/special/auction"}},[e("img",{attrs:{src:s("12d5"),alt:""}}),e("span",[t._v("竞拍捡漏")])]),e("router-link",{staticClass:"col",attrs:{to:"/special/recommend"}},[e("img",{attrs:{src:s("bf9e"),alt:""}}),e("span",[t._v("好物推荐")])]),e("router-link",{staticClass:"col",attrs:{to:"/service"}},[e("img",{attrs:{src:s("1b6c"),alt:""}}),e("span",[t._v("便民服务")])])],1),e("dl",{staticClass:"news"},[e("dt",[e("router-link",{attrs:{to:"/news"}},[e("img",{attrs:{src:s("06db"),alt:""}})])],1),e("dd",[e("van-row",t._l(t.news,(function(n,o){return o<2?e("van-col",{attrs:{span:"24"}},[e("router-link",{attrs:{to:{path:"/news/details",query:{id:n.id}}}},[e("img",{attrs:{src:s("a5c8")}}),t._v(t._s(n.title)+"\r\n          ")])],1):t._e()})),1)],1)]),e("h3",{staticClass:"title"},[t._v("猜你喜欢")]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[e("good-list",t._l(t.goods,(function(n){return e("good-item",{attrs:{img:n.img,title:n.title,price:n.price_min,sell:n.sell},nativeOn:{click:function(s){return t.$router.push({path:"/goods/details",query:{id:n.id}})}}})})),1)],1),e("bar-code",{attrs:{show:t.scanShow},on:{close:function(n){t.scanShow=!1},success:t.scanSuccess}})],1)},o=[],a=(s("ac4d"),s("8a81"),s("ac6a"),s("96cf"),s("3b8d")),i=s("2ef0"),r=s.n(i),c={data:function(){return{banners:[],goods:[],goodsIds:[],finished:!1,loading:!1,news:[],scanShow:!1}},components:{},created:function(){var t=this;this.getBanner(),this.getGoods(),this.getNews(),this.onPlusReady((function(){t.resetNav()}))},watch:{$route:function(t,n){"/"==t.path&&this.resetNav()}},methods:{resetNav:function(){var t=this;this.$store.commit("core/header",{title:"惠回来",buttons:{left:{float:"left",fontSize:"27px",fontSrc:"_www/fonts/iconfont.ttf",text:"",onclick:function(){t.scanShow=!0}},right:{float:"right",fontSize:"27px",fontSrc:"_www/fonts/iconfont.ttf",text:"",onclick:function(){t.scanShow||t.$router.push("/mine/information")}}}})},getBanner:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("index/index");case 2:n=t.sent,n=n.data.data||{},this.banners=n.banner||[];case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),getGoods:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$axios.post("index/goods",{goods_ids:this.goodsIds.join(",")});case 3:n=t.sent,n=n.data||{},s=n.data||[],this.finished=0==s.length,this.cacheids(s),this.goods=this.goods.concat(s),this.loading=!1;case 10:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),cacheids:function(t){var n=!0,s=!1,e=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var i=o.value;this.goodsIds.push(i.id)}}catch(c){s=!0,e=c}finally{try{n||null==a.return||a.return()}finally{if(s)throw e}}this.goodsIds=r.a.uniq(this.goodsIds)},onLoad:function(){this.finished||this.getGoods()},getNews:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("index/news");case 2:n=t.sent,n=n.data||{},this.news=n.data||[];case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),scanSuccess:function(t){this.$toast(t)}}},d=c,l=(s("5cdd"),s("2877")),u=Object(l["a"])(d,e,o,!1,null,"897874fc",null);n["default"]=u.exports},"9fb6":function(t,n,s){t.exports=s.p+"img/flash@3x.3be2cde6.png"},a5c8:function(t,n){t.exports="data:image/png;base64,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"},bf9e:function(t,n,s){t.exports=s.p+"img/recommend@3x.67f68c78.png"},ee7f:function(t,n,s){}}]);