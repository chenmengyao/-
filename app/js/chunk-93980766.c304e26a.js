(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93980766"],{"0b93":function(t,e,a){},"6b8e":function(t,e,a){"use strict";var i=a("0b93"),s=a.n(i);s.a},b595:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-footprint"},[a("ul",{staticClass:"date-list"},t._l(t.week,function(e){return a("li",{key:e.day,staticClass:"date-item"},[a("div",{staticClass:"day"},[t._v(t._s(e.day))]),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#goo"+e.date,offset:-100},expression:"{element:`#goo${item.date}`,offset:-100}"}],staticClass:"date",class:{today:e.isToday},on:{click:function(a){return t.onChangeDay(e)}}},[t._v(t._s(e.date))])])}),0),t._l(t.list,function(e,i){return[e.length?a("div",{key:i,staticClass:"footprint-item",attrs:{id:t._f("date2")(e[0].time)}},[a("div",{staticClass:"title"},[t._v(t._s(t._f("date")(e[0].time)))]),a("ul",{staticClass:"goods-list"},t._l(e,function(e){return a("li",{key:e.time,staticClass:"goods-item",on:{click:function(a){return t.onClick(e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"goods.img"}],staticClass:"img",attrs:{src:e.img}}),a("div",{staticClass:"bottom-line"},[a("span",{staticClass:"price"},[t._v("￥"+t._s(e.price_min))]),a("span",{staticClass:"button"},[t._v("···")])])])}),0)]):t._e()]})],2)},s=[],n=(a("ac6a"),a("c1df")),o=a.n(n),c=["日","一","二","三","四","五","六"],d={filters:{date:function(t){return o()(1e3*t).format("M月D日")},date2:function(t){return"goo"+o()(1e3*t).format("D")}},data:function(){return{list:[],week:[]}},methods:{calculateWeek:function(){for(var t=o()(),e=t.get("day"),a=t.add(0-t.get("day"),"d"),i=0;i<7;i++)this.week.push({day:c[i],date:a.get("date"),isToday:i===e,index:i}),a.add(1,"d")},getFootprint:function(){var t=this;this.$axios.post("/mine/footprint").then(function(e){var a=e.data;1===a.code?a.data&&(t.list=a.data):t.$toast(a.msg)})},onChangeDay:function(t){var e=o()(),a=e.get("day");a<t.index||this.week.forEach(function(e){e.isToday=!1,e.date===t.date&&(e.isToday=!0)})},onClick:function(t){this.$router.push({path:"/goods/details",query:{id:t.goods_id}})}},created:function(){this.getFootprint(),this.calculateWeek()}},r=d,l=(a("6b8e"),a("2877")),u=Object(l["a"])(r,i,s,!1,null,"1aff3526",null);e["default"]=u.exports}}]);