(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0e93e6"],{"19f3":function(t,s,a){"use strict";var i=a("fb90"),e=a.n(i);e.a},"61cf":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAMAAACylgF9AAAAY1BMVEVHcEz3lTH1hCz1iSj4ky/6ojX2ii7ycCb2hiz2kDD0gyv6oTXzfCn6oDTydSX1hyzwbiT1giv6ozX1hy3yeCn2jS/1ii7zfirxbSXxcyf2kTD3ljL0hCz4mjPzgSv6pDb5nzQfZ2iKAAAAE3RSTlMAz6MaQOrenmXtv9DjjjeRjFL5RFBSzQAAAWRJREFUOMud0+uSgjAMBeBgBalcXcpVuvL+T7lJmoIV2NnZoz8Y5pvTtFUAzm0Yx5Ie0q6dUnooXq/XFd7zNzOIabr2XyZJkqgiM5Rwj5xRWQbFQiajQNe17UVMpCGdmy5VyyImxrYYTXdiltU0bB51XSsyZVVVV2UXeBRFobxBdJHZ0HCUtfLGG0Q0VDthIhdrI542+2Izz04Jmp4Y+7SYhSLmAD0ZiYrhe4emFbFZ0ASoDZH1ZkPdIYqhX1FzgtAI+hgq2oYiQ2g3udoQm77fI7wYj2IwDs35NQjdjCA0htV3DrsI0mh6c2IEcY9xKE8+o/kMNJve9Cfbm3it0fimo+2RQkOoTvfRvokMolztB9b+itmgOkCJX08MI3UPsv4ONOAflJMrJYfwecVkBmkqt90F2+Me33RyBtzjm04OypnxVyQ9osym3lBoHOpD1HhzsN6KNrOfXA5q1nA7yIU+9OVUP2mNXsBWO5YQAAAAAElFTkSuQmCC"},a04d:function(t,s,a){"use strict";s["a"]=[{name:"微信",key:"wxpay",taypeKey:0},{name:"支付宝",key:"alipay",taypeKey:1},{name:"银联",key:"",taypeKey:2},{name:"佣金",key:"balancepay",taypeKey:3}]},a584:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"suwis-popularize-details"},[i("div",{staticClass:"top-box"},[i("div",{staticClass:"info-box"},[i("img",{staticClass:"profile",attrs:{src:t.user.photo||a("c8c1"),alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v(t._s(t.user.nickname))]),t.location||t.user.name?i("div",{staticClass:"location"},[t._v(t._s(t.location||"---")+" / "+t._s(t.user.name))]):t._e()]),t._m(0)]),i("div",{staticClass:"sum-box"},[i("dl",{staticClass:"sum"},[i("dt",{staticClass:"title"},[t._v("可用额度（元）")]),i("dd",{staticClass:"available"},[t._v(t._s(t.user.vip_sum_use||0))])]),i("dl",{staticClass:"sum"},[i("dt",{staticClass:"title"},[t._v("VIP额度（元）")]),i("dd",{staticClass:"total"},[t._v(t._s(t.user.vip_sum||0))])])])]),i("div",{staticClass:"list-box"},[i("div",{staticClass:"top-bar"},[t._m(1),i("div",{staticClass:"button-item",on:{click:t.changeSort}},[i("span",[t._v("消费时间")]),i("van-icon",{attrs:{size:"14px",name:"up"===t.timeSort?"arrow-up":"arrow-down"}})],1)]),i("van-list",{attrs:{"finished-text":"没有消费明细了","error-text":"请求失败，点击重新加载",error:t.error,finished:t.finished},on:{"update:error":function(s){t.error=s},load:t.getList},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[t.list&&t.list.length?t._l(t.list,(function(s){return i("div",{staticClass:"cost-item"},[i("div",{staticClass:"line"},[i("span",{staticClass:"time"},[t._v(t._s(t._f("dateFmt")(s.time)))]),i("span",{staticClass:"amount"},[t._v(t._s(s.sum))])]),i("div",{staticClass:"line"},[i("span",{staticClass:"pay-type"},[t._v(t._s(t._f("payType")(s.pay_type)))]),i("span",{staticClass:"status"},[t._v(t._s(t._f("orderStatus")(s.sta)))])])])})):t._e()],2)],1)])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"level"},[i("img",{staticClass:"vip",attrs:{src:a("f507")}}),t._v("\n                VIP\n            ")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title"},[i("img",{staticClass:"cost-img",attrs:{src:a("61cf"),alt:""}}),t._v("\n                消费明细\n            ")])}],r=(a("7f7f"),a("a04d")),n=["待付款","待发货","待收货","退款/售后","待评价","已完成","已关闭"],o={filters:{orderStatus:function(t){return n[t]},payType:function(t){return r["a"][t].name}},computed:{location:function(){var t=this.user,s=t.province||"",a=t.city||"",i=t.area||"";return s+a+i}},data:function(){return{user:{},error:!1,finished:!1,loading:!1,list:[],num:20,page:1,timeSort:"up"}},methods:{changeSort:function(){this.timeSort="up"===this.timeSort?"":"up",this.getList()},getList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset";"reset"===s&&(this.list=[],this.page=1);var a=this.num,i=this.page;this.$axios.post("/mine/generalize_detail",{id:this.id,page:i,num:a,time:this.timeSort}).then((function(s){var e=s.data;1===e.code?e.data&&e.data.user?(t.user=e.data.user,t.list=t.list.concat(e.data.order),i*a>e.data.total&&(t.finished=!0)):t.finished=!0:(t.error=!0,t.$toast(e.msg)),t.page++,t.loading=!1})).catch((function(){t.error=!0}))}},created:function(){this.id=this.$route.query.id}},c=o,d=(a("19f3"),a("2877")),l=Object(d["a"])(c,i,e,!1,null,"16737414",null);s["default"]=l.exports},f507:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABICAYAAAC+2ghEAAAKz0lEQVR4nO1cC3BU1Rn+NyFvMQEJgSRAgCS8SRgNKNYH1Y7OqG19dvrQGarSMlZbnWqr7UiVaa1SS1FbHdup1s5UbKUVnNraDjajA8gjohWSSKIYQ4AkBMg7Sx70+/bsZvdudvee+9hk6fANO+y9e865//3vf/7/+/9zbjynATkLLSSNtQBnEsY5HsHbKrL1fJG+RhfEiSPSJous2COSOc32EM4sa6BTZP+PEl9RhLdF5MP7RPrbbQ/hTFlH3hA5tNHREKOKo38XOfw32909th18V71I5XKRU622Lz4mSMkRuaRSJKfMcld7ltV3VOSDu888RRH9J0X2rhLpabDc1bqyTg+JHHxepGWr5a4Jg5NVInVPigx6LXWzrqwTu0Xq10Np/Za7JgxOD4p8+ns88H9b6mZNWR3VInu+rkz5TMdgt8j731YPXxP6yhrA4NUPw7F/bEe0xERvE+jEA3j4J7Sa6yvr0Csq9P6/oW0bfPDvtJrqKev4LpGaNSJDfU7ESkzQ99atE2l9y7SpOc8iTXh7BaZfrVviJSbS8kQu3y6SNStqk9i54dApkQNPiHTX6180KV2/bTj4lBmpTOHBddL0xtSdDeSMNY+KlD8DrZwTsUlsZTX9VaThBdzAgN4FiQv+gHtJ1m8fis9eQgq1xbxdVrHIwsf0xtz1VT2aQ/54eJPIhAqR2XdFbBJdWUxn9n4LUbBDT6gACm6AsmwWM46/q9cu9Txc50a9tnxwupxwoEtk3/0iky4VyV404ufId+U9JvLeKuuKItr3QUDEjSSY8vjo838YfKLHqtX/HZgKgVnDWeaJ0occqf2/6vs5pSLJYVO/HamM119d6MO4+Cc09hQN+Qd7YSSrRZZuFMksNPwU2cEfWKc4lZ3oN36u+O7Si4T1yjdE0nNit6eSNt8q0rwXN9aMfsfVeeo5WqymX8yaCYVOFVn+Oh55ZvC3/h6Rjdcg92tWxx0ITLzF8fiep3kP9IfF946Y6iPFOfm+qlHZpQmdEK6zBqnEDhC+l8zb0wqLr0XoZj8oCjHF94kFysZr5F5mVBTx0Wvws5UYr0Z9vKfVeBbcrgx5VWBr/Y/htFFZ9FM7b3Qn76PJN4DIetvM2xZehKderpzCeP/HDOn5IvlfMp7rQxq27+XgsSdkPMtBGhb/7k3B6S6hyuqHf6pdC5rwqdVRIyMLnxRY6fGd5m3PhW8o/aL6jpkl08ScLuddBSXMM547UiXS+E7wONs/Fj/nacodin5YevWPVencINJR+JfGP4nyhi5hEP7jk6fN2yXBpMpXqqmiG1NKf4B+qcZzVc8FHTsd+gQLskYDUzyfXkKVdWSzuKqoAJrfxAX/ad4ue4bIxQ8qZZn5l+L7YFVzjOcO7VD+KgBadpgubYHB4eg/fF+Dypr3E0XIosZr21fD9AYz7u80b3rh9zF1MSV7Y7TJgFJnrTaeG4DD3/ZzI3nmFLTJjQ3gVJ+/1vc1qCw+qYW/gLDZLlwhDHSSLW+qpxQLGRMhw20irJhEbIoHWQCnmzkjeIpjNm6DZW0LGUf0goQZOM0XPi4ysUIdGn6c9DmRJc+rNTY3QRLZtEn5MDOUgEZ48iNbF5l74c2QOoRdDsGaapGW9fr5GSfGFBdk5sJG2VMIONcOnxoZcyjMgp/ChLNcuGII6Cg7aszbTVmC6HUJOI6MdKH5oDU55xvPdTYhYoGiBEyRFpXhUNZkDFD6Q5GZqwynIwfo6bep3Mvj4uo+F2Q/WqsYeyyMAyGquBtRLUlZV2A68uEtWKsiZwAc6x2c6/VzOYrr2IvANKdchyByj4T778ja4FylCRbcHLWJLRx5fQQrjojC5XiqSFmGYwKELoHzT8sNG6/KmCXQosIIvTV4FH8r/7WyrjBE1wQd/aInRSavEPciJMykfoNKVmPBg+stAz3ozVI0ImOacuyhGESWUfWs8lkBkFfZjoC45oQLRBavx0OZFLFFbLPJKEA0WGeMPk7BMgzzTzPklUFByP04w3I/70/QQ8epEzkYsnbJdOZcB3IxeCxaN/I6ITCfYzlwuEvAjNMLHEgSAlYkm141b8dqxZzrRXqggdnfMfoq4sAWBAz/hhQafmRj0AOnNyukky6L2Ux/rwOrpu9909EulGGMgwKurIbFmjwAJsYfvCiy9B5jsCFNeBYW0OPfPkA/xdKTnZpjEnxTOfxz0R3mTbUHzUeiO+N2+yXjULCoWP2Qeb2d1rXse0ZFMQJufzyoKILTz46iOG7hLYj+t2o111cWS8XzH4HC7nBHYSSpJ/ZY73esFhHwj8Fj8lM7voqKYrRf/EvtxQ9rvICrHqweTmU5xWGEJJtvfFmtIOliaFCx9e6W4DmyCctW5VH+idE+daJ2L+skKhXxecHPQP6s728ygtk8eFf3Qf0uPVBSzV+C05cR0KRqHRGZM/HQn1DR3gLsMU6GV0YPp5Si+xNrOwdrXwOp3ae+07Dt1KtYYaXs5FQWYX/nH8E6zx44x1MapeNoSMbUvqoeN2GymtB3QuSZEvzvvxZrVXxWOis2AYxD4lgBxj/1y7ZEdZbLTP6CKsTZXSckBrsUq48VGRkBd/8mqCiCCbMVRTEoFd0JsnuNXUkdKotEsRihveR+ZwrjSnBXXfTffZWFkIUIBmN9vyy+2ySPmrfGWN6xCOdZMpeiKMT0b4jtCNn9sUhzjF14LO61HQgek61r37NH1aRYxEtxkg+5VVJIBk+Zu0at49mBb9vibyMn2IOgFrvhkIf8y3P0VVbKMDnliN6PuVIBdq/+klUE3rJeLafbQQeiXMOLI89zEaJpR/CYxqHLiVmtKHsafebbkykMzqJhJHCP5vbrRLzN1vsyT7u6AZHRX7fyIi16bgF81iF1TCUxAuosmLIsvBR+Lu9q63JEE8+1kQJg2ZcrRck2qnBDmIafvaCmJSNgzavwZyFK111ZZrApRdDJvcK6DDHgvrKYcxWthMIesRchmTP2HsYHvGr/K0FfRavKjdnTjyRVVZ39XUeRLxKcvxUWCUxMS+7FNMJN1/1KoqxrRQY39LfBR3kmw8oqg+fJ1k3vHZFv2tdUrd4JlYmC+CiLIAkseUCkfb9Iy7/0+3EK1iHMe+DJ0xAJe/xS6gQzRuP5j8ZFUYT7Dj4c3Bq08yuIdh9a6ORRnzb4LbosKoobRmI5jazZIhduciHBj474v8nK5e/lWxDGC83bDoPPb0hVFAJsPZakqWCpy/4cV0WJiQjugdUJLgakWCwTUFHUcaxFU9INTr04K8p3qbhfwQePWk2mwjwWI1SshXH6RV/1dqU71VsTjN4L5QzjRbfj5h4Wd9YhMcbM1YpPhW/AjRNG/+37WXf5V7odguWhuQ85H8cCRl9Z9FusAORU2B+DQaNsA9j8VPfk0kD8qUM0sLpaebFIF0svuiJ4VFS99C31lsUoY+z+CAaXy8vWW7MOlllolZkaLyPEAWP7F0Ny4XcWbxi5kTYiktWKjNtboSxgbJXFsnThTWrPZqykl7RgzoOIfndqKjY+SIy/RVO0SnGlaMi/QSXmY4yxc/Dh4Hs7u24ROfa28Xx2uchFm+Gnpo+NXCFIHGURfGeGEbJ9r//lpDmIfJXqLdMEQGJMwwBYByN/YrRLn6L2IiSIoojEsiyC5eTWrWofWP71o5Lz6SLxlJXASKxpmOA4qywLOKssCzirLAs4qywL+B96rulZDttVpAAAAABJRU5ErkJggg=="},fb90:function(t,s,a){}}]);