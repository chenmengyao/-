(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222d0c"],{cfe8:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("van-address-edit",{ref:"address",attrs:{"show-postal":"","address-info":e.addressInfo,"area-list":e.areaList,"show-set-default":"",validator:e.validate},on:{save:e.onSave}})},d=[],i=(t("ac6a"),t("456d"),t("7514"),t("7f7f"),t("0edf")),o={data:function(){return{areaList:i["a"],addressInfo:{name:"",tel:"",province:"",city:"",content:"",postalCode:"",areaCode:"",addressDetail:"",isDefault:!0},id:""}},methods:{onSave:function(e){var a=this,t=e.name,s=e.tel,d=e.province,i=e.city,o=e.county,n=e.addressDetail,r=e.postalCode,c=e.isDefault;this.$axios.post("/user/saveaddress",{id:this.id,name:t,tel:s,province:d,city:i,area:o,address:n,postcode:r,sta:+c}).then((function(e){var t=e.data;if(1===t.code){var s=a.id?"创建成功":"修改成功";a.$toast(s),a.$router.push("/uc/setting/address")}else a.$toast(t.msg)}))},validate:function(e,a){if("postalCode"===e&&!a)return"请填写邮政编码"}},created:function(){var e=this;this.id=this.$route.query.id,this.id&&this.$axios.post("/user/address",{id:this.id}).then((function(a){var t=a.data;if(1===t.code){var s=t.data;if(s){var d=e.addressInfo,o=i["a"].county_list,n=Object.keys(o).find((function(e){return o[e]===s.area}));d.name=s.name,d.tel=s.tel,d.areaCode=n,d.addressDetail=s.address,d.postalCode=s.postcode,d.isDefault=Boolean(s.sta)}}else e.$toast(t.msg)}))}},n=o,r=t("2877"),c=Object(r["a"])(n,s,d,!1,null,"d32001e2",null);a["default"]=c.exports}}]);