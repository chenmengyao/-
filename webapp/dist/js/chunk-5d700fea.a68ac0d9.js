(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d700fea"],{5324:function(t,s,e){"use strict";var i=e("7c2b"),n=e.n(i);n.a},"760b":function(t,s,e){t.exports=e.p+"img/infor3.f54fb5c9.png"},"7c2b":function(t,s,e){},db01:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"suwis-wrapper"},t._l(t.list,(function(s){return i("div",{staticClass:"suwis-kefu-list"},[i("div",[i("img",{attrs:{src:s.store_logo||e("760b")}})]),i("div",{staticStyle:{"margin-left":"13px"}},[i("div",[i("router-link",{attrs:{to:{path:"/mine/message/getsm",query:{store_id:s.message.store_id}}}},[i("div",{staticClass:"d-merchant"},[t._v(t._s(s.store_name))]),i("div",{staticClass:"d-content"},[t._v(t._s(t._f("dateFmt2")(s.message.time)))]),i("div",{staticStyle:{clear:"both"}})])],1),i("div",{staticClass:"d-infor"},[t._v(t._s(s.message.content))])])])})),0)},n=[],a={data:function(){return{list:[]}},methods:{getList:function(){var t=this;this.$axios.post("message/servicesm",{}).then((function(s){t.list=s.data.data}))}},mounted:function(){this.getList()}},c=a,r=(e("5324"),e("2877")),o=Object(r["a"])(c,i,n,!1,null,"41f454a2",null);s["default"]=o.exports}}]);