(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68219370"],{"0213":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"suwis-feedback-con"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"suwis-feedback-txt",attrs:{id:"wenti",placeholder:"请输入您遇到的问题和建议～"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("div",{staticClass:"suwis-feedback-con"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_way,expression:"contact_way"}],staticClass:"suwis-feedback-inp",attrs:{id:"dianhua",type:"text",placeholder:"请输入您的联系电话／邮箱"},domProps:{value:t.contact_way},on:{input:function(e){e.target.composing||(t.contact_way=e.target.value)}}})]),n("div",{staticClass:"suwis-feedback-con"},[n("van-button",{attrs:{round:"",type:"danger"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)])},c=[],i=n("2b0e"),o=n("b970");i["default"].use(o["i"]);var s={data:function(){return{token:"",contact_way:"",content:"",code:"",msg:""}},methods:{submit:function(){var t=this;null!=this.content&&""!=this.content?null!=this.contact_way&&""!=this.contact_way?this.$axios.post("message/feedback",{contact_way:this.contact_way,content:this.content}).then(function(e){1==e.data.code&&(t.contact_way="",t.content="",t.$router.push({path:"/mine/details"})),Object(o["i"])(e.data.msg)}):Object(o["i"])("联系方式不能为空！！"):Object(o["i"])("详情内容不能为空！！")}},created:function(){var t=this;this.$store.commit("core/header",{title:"意见反馈",buttons:{right:{text:"历史纪录",width:"96",onclick:function(){t.$router.push({path:"/mine/details"})}}}})}},u=s,r=(n("5ba4"),n("2877")),d=Object(r["a"])(u,a,c,!1,null,"eea25006",null);e["default"]=d.exports},"5ba4":function(t,e,n){"use strict";var a=n("8b34"),c=n.n(a);c.a},"8b34":function(t,e,n){}}]);