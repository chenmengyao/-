(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ceb43d"],{"63e7":function(t,a,e){},9768:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"suwis-news-ban"},[i("van-swipe",{staticStyle:{width:"100vw"},attrs:{autoplay:3e3,"indicator-color":"white",height:200}},t._l(t.banner,function(t){return i("van-swipe-item",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.img}})])}),1)],1),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","error-text":"请求失败，点击重新加载",error:t.error},on:{"update:error":function(a){t.error=a},load:t.loadlist},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[i("div",t._l(t.newsList,function(a){return i("div",{staticClass:"suwis-news-list"},[i("div",{staticClass:"suwis-news-left"},[i("router-link",{attrs:{tag:"li",to:{path:"/news/details",query:{id:a.id}}}},[i("span",[t._v(t._s(a.title))])]),i("p",{staticClass:"suwis-news-tips"},[i("span",{staticClass:"suwis-news-date"},[t._v(t._s(t._f("dateFmt")(a.time)))]),i("span",{staticClass:"suwis-news-num"},[i("img",{staticStyle:{width:"15px"},attrs:{src:e("c6b0")}}),t._v(" "+t._s(a.clicks))])])],1),i("div",{staticClass:"suwis-news-right"},[i("router-link",{attrs:{tag:"li",to:"{path: '/news/details', query: {id: item.id}}"}},[i("img",{attrs:{src:a.content.good[0].img,width:"100%"}})])],1)])}),0)])],1)},s=[],n={data:function(){return{newsList:[],banner:[],loading:!1,finished:!1,error:!1,page:1,total:null}},methods:{loadlist:function(){var t=this;this.$axios.post("news/index",{page:this.page,num:10}).then(function(a){if(1===a.data.code){if(a.data&&a.data.data){t.banner=a.data.data.banner,t.total=a.data.data.total,delete a.data.data.total,delete a.data.data.banner;var e=[];for(var i in a.data.data)e.push(a.data.data[i]);t.newsList=t.newsList.concat(e),10*t.page>t.total&&(t.finished=!0)}}else t.$toast(a.data.msg);t.page++,t.loading=!1}).catch(function(){t.error=!0})}},created:function(){}},r=n,d=(e("e880"),e("2877")),c=Object(d["a"])(r,i,s,!1,null,null,null);a["default"]=c.exports},c6b0:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAVCAYAAAC+NTVfAAAEmklEQVRIS41WW2hcVRRd+8zLONp20hozsUJtrehHEUSwrVUr6Y9VilSYqqTiJOaecxPqRxA/tOKF1ErBRhiT3HsTTQq2WPPTD5GKWnzUitSACMGKRfFFUGybmnRiSNKzZYeZkMedpPvrwl37cc7ea+1DuAbzPC9eW1v7CBFtY+YtRLSBmVcQUZqZx4hoFMAPAL4GcMpxnDNExMuFpqUA/f39qyYnJ5uZeR8R3bpcsPJ/Zh5SSr3JzO9qracq+UUm9zwvWVdX9zwztwO4ruR8gZlPA/gUwCfj4+MXR0dHL2ez2WpmrlFKbbbWPkBEjwFYU/I5J4UbY05FFbAoeXd3dyYWi/UBeByAXN2gFGGM+eBaTx4EQRMRvQjgjpJPezKZPJjP5yfmxpiX3Pf9GiL6iog2MrP00THGvB+VVG6npqZmLYCRlpaWkShMEAT7iWg/gBSADwHktNbjZexs8jAM1zDzt0S0DsBvyWRycz6f/2th0DAM7wRwCMCuOT0+G4vFnmhubv5zIb6np2crM0viVcz8UXV19e5cLvef4GaSh2GYkD4CeAjA+WKxeHdbW9sMYK6FYbgNgPRdTK5Qbuemchxr7SbXdYcW+vX29t5mrR0EIPMRaK1bhA3l5AcAvAzgYjqdXt/Q0CBB55nv+7copeRkFsDbWmtdKnwlM58koi0yI/F4fGVTU9NYROGbZH4AJJl5rzHmKPX19a2fmpr6WYIy88PGmC+j+heG4TEATwM4rrV+KiL4TwA2AnhBa324wgwIZQsAxorF4s0UhuEJmWxmPmKMyUc5dXR0VKXTaRmUCa11VRSmUCisTaVSfwD4W2tdW4kZQRDIQN+vlHpNkhcBXA/gLq31j1FOnZ2dqxOJxAUAl7TWq5cIPEFEqUwmE8/lclejcL7vP6mUeg/Ad+T7vqeUepWITjuO82CUQ1dX1w3xeFz6eEVrfWMURqiXzWZlCEcqFcjMcthhIqq11u6m0pX+A0B0+iVjzOsV+vUNEd0HQGatJ6LnnwtbmPmAMeaVCjH6iehZAJ85jlM/M+1BEOwhouMApqanp7e3trbKglhIM+H3OQDT1trtruueKQOCIOgkohahXDKZzFbQBxdAp/grpTaIJpRFhoIgeIOI2pj5CjPXu657dkF+aVGbUkpwzMxCu0nhLoCMYIlop+M4JyMKd4joLWYWmu0qS/WswhUKhVQqleoFsBfAOBHtcxxHNH7WpGe+79fHYrGPy8JS+lkkokcdx/kiIrFoiOh8wlqbd133SBkzT9sHBgaSIyMjXQCeA3CViI4NDw9rz/PmLQQpNJ1Or5uYmFgRj8cvZTKZXxdOt+yJWCx2FMAOKdpau8d13YG5xS3aap7nqbq6umeY+R0AqiSh4tSutf69Es3m9L9eKdXKzDtLC+VfZt5hjBF1m2cVHxNhGMpr5SAR5UoewltZr+cBfC9SzMyXiahaqENEW62198j3nAyHE4nEocbGRmHTIlvyJVNigjybpA1CEbmJ5Uykup+ZB4wxUmhFWzZ52TMMQ1kgIov3MvPtpTdcFTMPy8Kx1g4R0aDW+pfSI2S5IvE/NZUC6TfSCQYAAAAASUVORK5CYII="},e880:function(t,a,e){"use strict";var i=e("63e7"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-33ceb43d.6ded5bc6.js.map