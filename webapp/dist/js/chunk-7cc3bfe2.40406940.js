(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cc3bfe2"],{"2cbc":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"suwis-address"},[i("div",{staticClass:"button-line"},[i("router-link",{staticClass:"link",attrs:{to:"/uc/setting/handleAddress"}},[t._v("新增地址")])],1),i("ul",{staticClass:"address-list"},t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"address-item"},[i("img",{staticClass:"address-icon",attrs:{src:a("5b29"),alt:"地址"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-title"},[i("div",{staticClass:"title-left"},[i("span",{staticClass:"name"},[t._v(t._s(s.name))]),i("span",{staticClass:"tel"},[t._v(t._s(s.tel))]),1===s.sta?i("span",{staticClass:"default"},[t._v("默认")]):t._e()]),i("div",{staticClass:"edit",on:{click:function(a){return t.edit(s.id)}}},[t._v("编辑")])]),i("div",{staticClass:"info-address"},[t._v("\n                    "+t._s(t._f("address")(s))+"\n                ")])])])}),0)])},n=[],e={filters:{address:function(t){return t.province+t.city+t.area+t.address}},data:function(){return{list:[]}},methods:{edit:function(t){this.$router.push({path:"/uc/setting/handleAddress",query:{id:t}})},getAddresses:function(){var t=this;this.$axios.post("/user/alladdress").then(function(s){var a=s.data;1===a.code?a.data&&(t.list=a.data):t.$toast(a.msg)})}},created:function(){this.getAddresses()}},r=e,c=(a("a81b"),a("2877")),d=Object(c["a"])(r,i,n,!1,null,"3c533552",null);s["default"]=d.exports},"5b29":function(t,s){t.exports="data:image/png;base64,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"},a81b:function(t,s,a){"use strict";var i=a("bf7e"),n=a.n(i);n.a},bf7e:function(t,s,a){}}]);
//# sourceMappingURL=chunk-7cc3bfe2.40406940.js.map