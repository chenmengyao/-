(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14cfb549"],{9102:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suwis-comment-list"},[a("div",{staticClass:"wrapper"},[a("van-row",{staticClass:"title",attrs:{type:"flex",align:"center",justify:"between"}},[a("van-col",[t._v("\n        评价（"+t._s(t.evaluation.evaluate_count||0)+"）\n      ")]),a("van-col",[t._v("\n        好评率"+t._s(100*t.evaluation.feedback||0)+"%\n      ")])],1),a("van-row",{staticClass:"options"},[a("van-col",t._l(t.buttons,(function(e){return a("van-button",{class:{active:e.active},attrs:{type:"primary"},on:{click:function(a){t.current=e}}},[t._v(t._s(e.name))])})),1)],1)],1),t.list?a("comment-list",[t._l(t.list,(function(e,n){return a("comment-item",{attrs:{name:e.nickname,date:e.evaluate_time,avatar:e.photo,score:(e.evaluate_express+e.evaluate_serve+e.evaluate_quality)/15*5,content:e.evaluate,medias:t.getMedias(e)},on:{lookImg:t.lookImg}})})),0==t.list.length?a("van-row",{attrs:{type:"flex",align:"center",justify:"center"}},[a("van-col",{staticStyle:{color:"#999999"}},[t._v("\n        暂无评价~\n      ")])],1):t._e()],2):t._e()],1)},i=[],s=(a("96cf"),a("3b8d")),o=a("b970"),r={data:function(){return{list:[],evaluation:[],buttons:[{name:"全部订单",key:"",active:!0},{name:"好评",key:"good",val:1,active:!1},{name:"晒单",key:"show",val:1,active:!1}],current:{},params:{id:"",good:"",show:""}}},created:function(){this.current=this.buttons[0],this.$store.commit("core/hideTabbar")},watch:{current:function(t,e){t.active=!0,e.active=!1,t.key?(this.params[t.key]=t.val,this.params[e.key]=""):(this.params.good="",this.params.show=""),this.getList()}},methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.params.id=this.$route.query.id,t.next=3,this.$axios.post("goods/comment",this.params);case 3:e=t.sent,this.list=e.data.data.comment||[],this.evaluation=e.data.data||{};case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getMedias:function(t){if(!t.evaluate_img)return[];var e=JSON.parse(t.evaluate_img)||[];return e},lookImg:function(t,e){this.ImagePreviewDialog=Object(o["f"])({images:t||[],startPosition:e,onClose:function(){}})}},beforeRouteLeave:function(t,e,a){this.ImagePreviewDialog.close(),a()}},c=r,u=(a("ad46"),a("2877")),l=Object(u["a"])(c,n,i,!1,null,null,null);e["default"]=l.exports},9206:function(t,e,a){},ad46:function(t,e,a){"use strict";var n=a("9206"),i=a.n(n);i.a}}]);