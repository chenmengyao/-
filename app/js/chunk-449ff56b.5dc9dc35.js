(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-449ff56b"],{"30ce":function(t,o,a){},"33aa":function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"suwis-setting"},[e("van-cell",{attrs:{title:"会员头像",clickable:!0,center:!0,"value-class":"content"},on:{click:t.modifyProfile}},[[e("img",{staticClass:"profile",attrs:{src:t.user.photo||a("c8c1"),alt:"头像"}}),e("van-icon",{staticStyle:{"margin-left":"28px"},attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2),e("van-cell",{attrs:{title:"用户昵称",clickable:!0,center:!0,"value-class":"content"},on:{click:t.modifyNickname}},[[t._v("\n            "+t._s(t.user.name)+"\n            "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2),0===t.user_type||2===t.user_type?e("van-cell",{attrs:{title:"我的二维码名片",clickable:!0,center:!0,"value-class":"content"},on:{click:t.barCodeScan}},[[e("img",{staticClass:"qr-code",attrs:{src:a("4df5"),alt:"二维码"}}),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2):t._e(),e("van-cell",{attrs:{title:"我的位置",clickable:!0,center:!0,"value-class":"content"},on:{click:t.modifyLocation}},[[t._v("\n            "+t._s(t._f("address")(t.user))+"\n            "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2),e("van-cell",{attrs:{title:"我的收货地址",center:!0,"value-class":"content",to:"/uc/setting/address"}},[e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})],1),e("van-cell",{attrs:{title:"登录密码",center:!0,"value-class":"content",to:"/resetpwd"}},[[t._v("\n            修改\n            "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2),e("van-cell",{attrs:{title:"支付密码",center:!0,"value-class":"content",to:"/resetpwd"}},[[t._v("\n            修改\n            "),e("van-icon",{attrs:{name:"arrow",size:"10px",color:"#b4b4b4"}})]],2),e("div",{staticClass:"login-out",on:{click:t.logout}},[t._v("退出当前账户")]),e("van-popup",{staticClass:"popup-custom popup-profile",attrs:{"close-on-click-overlay":!1},model:{value:t.profileShow,callback:function(o){t.profileShow=o},expression:"profileShow"}},[e("div",{staticClass:"popup-content"},[e("img",{staticClass:"popup-profile",attrs:{src:t.profileUrl,alt:""}}),e("van-uploader",{attrs:{"after-read":t.onRead,accept:"image/gif, image/jpeg","max-size":t.maxSize},on:{oversize:t.oversize}},[e("div",{staticClass:"upload-text"},[t._v("更换头像")])])],1),e("div",{staticClass:"button-line"},[e("button",{staticClass:"cancel",on:{click:t.closePopup}},[t._v("取消")]),e("button",{staticClass:"confirm",on:{click:function(o){return t.confirmPopup("profile")}}},[t._v("确定")])])]),e("van-popup",{staticClass:"popup-custom popup-name",attrs:{"close-on-click-overlay":!1},model:{value:t.nameShow,callback:function(o){t.nameShow=o},expression:"nameShow"}},[e("div",{staticClass:"popup-content"},[e("van-field",{attrs:{placeholder:"请输入昵称"},model:{value:t.name,callback:function(o){t.name=o},expression:"name"}})],1),e("div",{staticClass:"button-line"},[e("button",{staticClass:"cancel",on:{click:t.closePopup}},[t._v("取消")]),e("button",{staticClass:"confirm",on:{click:function(o){return t.confirmPopup("name")}}},[t._v("确定")])])]),e("BarCode",{attrs:{show:t.qrCodeShow},on:{close:t.closeBarCode,success:t.scanSuccess}}),e("van-popup",{attrs:{position:"bottom","close-on-click-overlay":!1},model:{value:t.locationShow,callback:function(o){t.locationShow=o},expression:"locationShow"}},[e("van-area",{attrs:{"area-list":t.areaList,value:t.locationValue},on:{confirm:t.confirmLocation,cancel:t.closePopup}})],1)],1)},n=[],s=(a("ac6a"),a("456d"),a("7514"),a("7f7f"),a("0edf")),i=a("c8c1"),c=a.n(i),r=a("f0b6"),l={name:"setting",components:{BarCode:r["a"]},filters:{address:function(t){return t.area?t.province+t.city+t.area:"---"}},data:function(){return{areaList:s["a"],name:"",maxSize:512e3,profileUrl:"",locationValue:"",profileShow:!1,nameShow:!1,locationShow:!1,qrCodeShow:!1,user:{}}},methods:{barCodeScan:function(){var t=this.user_type;0===t?this.qrCodeShow=!0:2===t&&this.$router.push({path:"/uc/setting/card"})},closeBarCode:function(){this.qrCodeShow=!1},closePopup:function(){this.profileUrl="",this.name="",this.province="",this.city="",this.area="",this.locationValue="",this.profileShow=!1,this.nameShow=!1,this.locationShow=!1},confirmPopup:function(t){var o=this,a=null;switch(t){case"profile":a={photo:this.profileUrl};break;case"name":a={name:this.name};break;case"location":a={province:this.province,city:this.city,area:this.area};break}this.$axios.post("/user/usersave",a).then(function(t){var a=t.data;1===a.code?(a&&Object.assign(o,a.data),o.closePopup(),o.getUserInfo(),o.$toast("修改成功")):o.$toast(a.msg)})},confirmLocation:function(t){t&&(this.province=t[0].name,this.city=t[1].name,this.area=t[2].name),this.confirmPopup("location"),console.log({data:t})},getUserInfo:function(){var t=this;this.$axios.post("/mine/index").then(function(o){var a=o.data;1===a.code?a&&Object.assign(t,a.data):t.$toast(a.msg)})},logout:function(){var t=this;this.$axios.post("/login/outlogin").then(function(o){var a=o.data;1===a.code?(t.$toast("退出成功"),t.$store.commit("core/exit"),t.$router.push("/login")):t.$toast(a.msg)})},modifyLocation:function(){var t=this.user;if(t.area){var o=s["a"].county_list;this.locationValue=Object.keys(o).find(function(a){return o[a]===t.area})}this.locationShow=!0},modifyNickname:function(){this.name=this.user.name,this.nameShow=!0},modifyProfile:function(){this.profileUrl=this.user.photo||c.a,this.profileShow=!0},onRead:function(t){var o=this,a=new FormData;a.append("file",t.file),this.$axios.post("/index/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data;1===a.code?a.data&&(o.profileUrl=a.data):o.$toast(a.msg)})},oversize:function(){var t=Math.floor(this.maxSize/1024);this.$toast("上传图片最大不能超过".concat(t,"KB"))},scanSuccess:function(t){var o=this;this.qrCodeShow=!1,this.$axios.post("/user/captainqrcode",{region_id:t}).then(function(t){var a=t.data;1===a.code?o.$toast("绑定成功"):o.$toast(a.msg)})}},created:function(){this.getUserInfo()}},p=l,u=(a("6c92"),a("2877")),d=Object(u["a"])(p,e,n,!1,null,"19acf06d",null);o["default"]=d.exports},"422d":function(t,o,a){},"4df5":function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEWZmZlHcEyampqYmJiXl5eQkJCZmZmYmJiZmZnmt8deAAAACHRSTlOBAL9AJwpfwA0sv3YAAACWSURBVBjTXdAxDsIwDAXQb1gyxmoRzBlQ1qonqJSBla0jGzNbRzORY2MnpbT18vUky3aCbEW+BD4AHHnRiBBmvpB/azjIqR8MbX9XNPllOOdujzaQwYfB7QassVlaqmtq8qq2qG0z6gA+hCuekJTSjTgGCXXPSBy4QM/5Qw9VxCxY8MBxftxo0wjLgIr6IdoGTL+lk8UXG0U240Yb79wAAAAASUVORK5CYII="},"6c92":function(t,o,a){"use strict";var e=a("30ce"),n=a.n(e);n.a},ac41:function(t,o,a){"use strict";var e=a("422d"),n=a.n(e);n.a},f0b6:function(t,o,a){"use strict";var e,n=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("van-popup",{attrs:{position:"right"},on:{opened:t.openPopup},model:{value:t.popupShow,callback:function(o){t.popupShow=o},expression:"popupShow"}},[a("div",{staticClass:"suwis-bar-code"},[a("div",{attrs:{id:"bcid"}}),a("div",{staticClass:"footer"},[a("van-button",{attrs:{type:"danger",size:"small",round:""},on:{click:t.closePopup}},[t._v("取消")])],1)])])},s=[],i=(a("a481"),{name:"bar-code",props:{activity:String,show:{type:Boolean,default:!1}},data:function(){return{codeUrl:"",popupShow:!1}},methods:{closePopup:function(){window.plus&&(e.close(),this.popupShow=!1,this.$emit("close"))},onMarked:function(t,o,a){switch(t){case plus.barcode.QR:t="QR";break;case plus.barcode.EAN13:t="EAN13";break;case plus.barcode.EAN8:t="EAN8";break;default:t="其它"+t;break}o=o.replace(/\n/g,""),this.codeUrl=o,this.$emit("success",this.codeUrl),this.closePopup()},openPopup:function(){window.plus&&(e=new plus.barcode.Barcode("bcid"),e.onmarked=this.onMarked,e.start())}},watch:{show:function(){this.popupShow=this.show}}}),c=i,r=(a("ac41"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"1ddac91e",null);o["a"]=l.exports}}]);
//# sourceMappingURL=chunk-449ff56b.5dc9dc35.js.map