(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d5f9c70"],{"41a7":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[s("div",{attrs:{id:"d-content-scroll"}},[s("div",{staticStyle:{"padding-bottom":"50px"}},e._l(e.messageList,function(t){return s("div",[null!==t.pid?s("div",{staticStyle:{"margin-top":"14px"}},[s("div",{staticStyle:{display:"flex","font-size":"12px",color:"#333"}},[s("div",{staticStyle:{flex:"1","max-width":"55px","max-height":"30px"}},[s("img",{staticStyle:{"max-width":"30px","border-radius":"50%",overflow:"hidden",margin:"0 10px 0 15px"},attrs:{src:e.store_logo}})]),s("div",{staticStyle:{flex:"1","padding-right":"45px"}},[s("div",{staticStyle:{background:"#fff",display:"inline-block",padding:"3px 11px 3px 9px","border-radius":"4px"}},[s("span",{staticStyle:{"line-height":"24px"}},[e._v("\n                                 "+e._s(t.content)+"\n                             ")])])])])]):e._e(),null==t.pid?s("div",{staticStyle:{"margin-top":"14px",float:"right"}},[s("div",{staticStyle:{display:"flex","font-size":"12px",color:"#333"}},[s("div",{staticStyle:{flex:"1","padding-left":"45px"}},[s("div",{staticStyle:{background:"#fff",display:"inline-block",padding:"3px 11px 3px 9px","border-radius":"4px"}},[s("span",{staticStyle:{"line-height":"24px",float:"right"}},[e._v("\n                                 "+e._s(t.content)+"\n                             ")])])]),s("div",{staticStyle:{flex:"1","max-width":"55px","max-height":"30px"}},[s("img",{staticStyle:{"max-width":"30px","border-radius":"50%",overflow:"hidden",margin:"0 10px 0 15px"},attrs:{src:e.user_photo}})])])]):e._e(),s("div",{staticStyle:{clear:"both"}})])}),0)])]),s("div",{staticStyle:{position:"fixed",bottom:"0",width:"100%"}},[s("div",{staticStyle:{display:"flex",padding:"6px 15px 4px 0",background:"#fff"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sendMessage,expression:"sendMessage"}],staticStyle:{flex:"1",margin:"0 15px",background:"#efefef",border:"none",height:"30px",padding:"0 10px","font-size":"14px",color:"#333","border-radius":"4px"},attrs:{type:"text"},domProps:{value:e.sendMessage},on:{input:function(t){t.target.composing||(e.sendMessage=t.target.value)}}}),s("div",{staticStyle:{flex:"1","max-width":"45px","line-height":"30px","font-size":"14px",color:"#333",background:"#EFEFEF","border-radius":"4px"},on:{click:e.getList}},[s("div",{staticStyle:{height:"30px","text-align":"center"}},[e._v("发送")])])])])],1)},a=[],n=(s("c5f6"),s("2b0e")),o=s("b970");n["default"].use(o["h"]);var r={data:function(){return{list:[],sendMessage:"",setInter:null,messageList:[],count:0,isLoading:!1,store_logo:"",user_photo:""}},methods:{onRefresh:function(){var e=this;sessionStorage.getItem("message")&&(this.messageList=JSON.parse(sessionStorage.getItem("message")),this.$axios.post("message/getsm",{store_id:this.$route.query.store_id,id:this.messageList[0].id}).then(function(t){e.isLoading=!1;for(var s in t.data.data.msg)e.messageList.unshift(t.data.data.msg[s]);sessionStorage.setItem("message",JSON.stringify(e.messageList))}))},randomNum:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}},getList:function(){var e=this,t=this.randomNum(1e3,9999)+""+this.randomNum(1e3,9999);this.$axios.post("message/sendsm",{store_id:this.$route.query.store_id,uuid:t,content:this.sendMessage}).then(function(s){Object(o["h"])(s.data.msg);document.getElementById("d-content-scroll");var i={content:e.sendMessage,uuid:t,pid:null};e.messageList.push(i),sessionStorage.setItem("message",JSON.stringify(e.messageList)),e.sendMessage=""})},getMessage:function(){var e=this;sessionStorage.getItem("message")?(this.messageList=JSON.parse(sessionStorage.getItem("message")),this.$axios.post("message/getsm",{store_id:this.$route.query.store_id}).then(function(t){e.store_logo=t.data.data.store_logo,e.user_photo=t.data.data.user_photo;var s=JSON.parse(sessionStorage.getItem("message")),i=s.map(function(e){return e.uuid}),a=t.data.data.msg.map(function(e){return e.uuid});for(var n in a){var o=a[n];if(i.indexOf(o)>-1);else if(a.indexOf(Number(o))){var r=t.data.data.msg[a.indexOf(a[n])];s.push(r)}}sessionStorage.setItem("message",JSON.stringify(s))})):this.$axios.post("message/getsm",{store_id:this.$route.query.store_id}).then(function(t){e.messageList=t.data.data.msg.reverse(),sessionStorage.setItem("message",JSON.stringify(t.data.data.msg))})}},mounted:function(){var e=this;document.querySelector("body").setAttribute("style","background-color:#f5f5f5"),this.setInter=setInterval(function(){e.getMessage()},2e3)},destroyed:function(){clearInterval(this.setInter),sessionStorage.removeItem("message")}},d=r,g=(s("86d0"),s("2877")),l=Object(g["a"])(d,i,a,!1,null,"d72ffc96",null);t["default"]=l.exports},5515:function(e,t,s){},"86d0":function(e,t,s){"use strict";var i=s("5515"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-3d5f9c70.0dfb8021.js.map