(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a191701"],{4706:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex",padding:"0 16px","padding-bottom":"60px"}},[a("div",{staticStyle:{flex:"1"}},[a("div",{staticStyle:{padding:"15px 0 9px 0"}},[t._v(t._s(t.newDateils.title))]),a("div",{staticStyle:{color:"#999","font-size":"12px"}},[t._v(t._s(t._f("dateFmt")(t.newDateils.time))+"\n           "),a("span",[a("img",{staticStyle:{width:"15px",margin:"0 5px 0 17px"},attrs:{src:i("c6b0")}}),t._v(t._s(t.newDateils.clicks))])]),t._l(t.text,function(e,i){return a("div",[a("p",{staticStyle:{"line-height":"26px","font-size":"14px",color:"#666"}},[t._v(t._s(e.textContent))]),a("div",{staticStyle:{display:"flex",padding:"0 12px"}},[a("img",{attrs:{src:t.good[i].img,width:"100%"}})])])})],2)])])},n=[],d={data:function(){return{newDateils:[],text:[],good:[]}},methods:{getDetail:function(t){var e=this;this.$axios.post("news/find",{id:t}).then(function(t){e.newDateils=t.data.data,e.text=t.data.data.content.text,e.good=t.data.data.content.good;try{plus.webview.currentWebview().setStyle({titleNView:{titleText:t.data.data.title}})}catch(i){}})}},created:function(){var t=this.$route.query.id;this.getDetail(t)}},c=d,A=i("2877"),p=Object(A["a"])(c,a,n,!1,null,null,null);e["default"]=p.exports},c6b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAVCAYAAAC+NTVfAAAEmklEQVRIS41WW2hcVRRd+8zLONp20hozsUJtrehHEUSwrVUr6Y9VilSYqqTiJOaecxPqRxA/tOKF1ErBRhiT3HsTTQq2WPPTD5GKWnzUitSACMGKRfFFUGybmnRiSNKzZYeZkMedpPvrwl37cc7ea+1DuAbzPC9eW1v7CBFtY+YtRLSBmVcQUZqZx4hoFMAPAL4GcMpxnDNExMuFpqUA/f39qyYnJ5uZeR8R3bpcsPJ/Zh5SSr3JzO9qracq+UUm9zwvWVdX9zwztwO4ruR8gZlPA/gUwCfj4+MXR0dHL2ez2WpmrlFKbbbWPkBEjwFYU/I5J4UbY05FFbAoeXd3dyYWi/UBeByAXN2gFGGM+eBaTx4EQRMRvQjgjpJPezKZPJjP5yfmxpiX3Pf9GiL6iog2MrP00THGvB+VVG6npqZmLYCRlpaWkShMEAT7iWg/gBSADwHktNbjZexs8jAM1zDzt0S0DsBvyWRycz6f/2th0DAM7wRwCMCuOT0+G4vFnmhubv5zIb6np2crM0viVcz8UXV19e5cLvef4GaSh2GYkD4CeAjA+WKxeHdbW9sMYK6FYbgNgPRdTK5Qbuemchxr7SbXdYcW+vX29t5mrR0EIPMRaK1bhA3l5AcAvAzgYjqdXt/Q0CBB55nv+7copeRkFsDbWmtdKnwlM58koi0yI/F4fGVTU9NYROGbZH4AJJl5rzHmKPX19a2fmpr6WYIy88PGmC+j+heG4TEATwM4rrV+KiL4TwA2AnhBa324wgwIZQsAxorF4s0UhuEJmWxmPmKMyUc5dXR0VKXTaRmUCa11VRSmUCisTaVSfwD4W2tdW4kZQRDIQN+vlHpNkhcBXA/gLq31j1FOnZ2dqxOJxAUAl7TWq5cIPEFEqUwmE8/lclejcL7vP6mUeg/Ad+T7vqeUepWITjuO82CUQ1dX1w3xeFz6eEVrfWMURqiXzWZlCEcqFcjMcthhIqq11u6m0pX+A0B0+iVjzOsV+vUNEd0HQGatJ6LnnwtbmPmAMeaVCjH6iehZAJ85jlM/M+1BEOwhouMApqanp7e3trbKglhIM+H3OQDT1trtruueKQOCIOgkohahXDKZzFbQBxdAp/grpTaIJpRFhoIgeIOI2pj5CjPXu657dkF+aVGbUkpwzMxCu0nhLoCMYIlop+M4JyMKd4joLWYWmu0qS/WswhUKhVQqleoFsBfAOBHtcxxHNH7WpGe+79fHYrGPy8JS+lkkokcdx/kiIrFoiOh8wlqbd133SBkzT9sHBgaSIyMjXQCeA3CViI4NDw9rz/PmLQQpNJ1Or5uYmFgRj8cvZTKZXxdOt+yJWCx2FMAOKdpau8d13YG5xS3aap7nqbq6umeY+R0AqiSh4tSutf69Es3m9L9eKdXKzDtLC+VfZt5hjBF1m2cVHxNhGMpr5SAR5UoewltZr+cBfC9SzMyXiahaqENEW62198j3nAyHE4nEocbGRmHTIlvyJVNigjybpA1CEbmJ5Uykup+ZB4wxUmhFWzZ52TMMQ1kgIov3MvPtpTdcFTMPy8Kx1g4R0aDW+pfSI2S5IvE/NZUC6TfSCQYAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-5a191701.f7e4ac37.js.map