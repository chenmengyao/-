(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7629453f"],{"00a1":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suwis-simple-good"},[s("ul",{staticClass:"list"},[s("li",{staticClass:"item",on:{click:t.toggleCheck}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.storeLogo,expression:"storeLogo"}],staticClass:"image",attrs:{src:t.storeLogo,alt:"商品"}}),s("div",{staticClass:"info",style:t.infoStyle},[s("div",{staticClass:"name"},[t._v(t._s(t.name))]),t.desc&&t.desc.length?[s("div",{staticClass:"desc"},t._l(t.desc,function(e){return s("span",{key:e,staticClass:"desc-item"},[t._v(t._s(e))])}),0)]:t._e()],2),t.hasCheckbox?s("div",{staticClass:"checkbox"},[s("van-checkbox",{attrs:{"checked-color":"#e83f44"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1):t._e()])])])},a=[],c={props:{name:name,desc:{type:Array,default:function(t){return[""]}},storeLogo:{type:String},hasCheckbox:{type:Boolean,default:!1}},data:function(){return{checked:!0,infoStyle:this.hasCheckbox?{width:"calc(100% - 88px)"}:{width:"calc(100% - 48px)"}}},methods:{toggleCheck:function(){this.hasCheckbox&&(this.checked=!this.checked)}}},o=c,n=(s("07e4"),s("2877")),l=Object(n["a"])(o,i,a,!1,null,"1b410c96",null);e["a"]=l.exports},"07e4":function(t,e,s){"use strict";var i=s("277c"),a=s.n(i);a.a},"15f6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAz1BMVEVHcEzjHhvnKyHwSzPiGxrkIx3xSTHrOR/rNyTqOSjxUDXtQC3pKyHtQCzsOir1WzvlJh70VjjlHxryUDXrNyjsPCrnKyHzVjn2XDzlJx/yUTXxTjTxTDT1XTzmKCDxTTToLyTyTzTuQi7lIh3iGhn0WDnmKSHlJR7uQi7vSDHqNSftPSz0VjjjHBrhGBfoLSPhFhb1Xjv0VTjrNyjhFBToLCLyUDXpMiXwTDPzVTjuQy7nLiPtPyzvSDHmKiHqNyjhFhfkIh31XTzmJh/sPCpgwd/IAAAANnRSTlMAdUyx9zYuBRAdN9EkoYF2i5k+hPZuXerRrcJFPu7r993T3cnA3/WDdu7WxfrR58PaYljoabrZ6vAlAAAB/0lEQVQ4y82U23aqMBCGowgCKkgFtYh4qOKx1WoLiHII+v7PtGfAQ9T2cq9VLrJC+Jh/8mcmhPz1R6h/9+3Ifh9N+F+IsjH3vP3esR1KabL+Kv/AFIdxPFd4EaYiP3lPkvXLE6McTpUi+w9ghQepWhAYD78VSkmded1IWjizcNapr7y9s8rzfiklXzeo1/N7Mm5uEceYexQdX6WcuuU1dv3ZhpBpcDqdqePRacKHZrK+7tF03d4UmOBw2upA2TZQFLcxuiWvjVWRWCFAB0HYxnOpCYLUqRLCJx+XUGWcDEKkFqKwkKp9FKSvsPqWsL50fD+jKiKpbvO0KIQq3NmguQDNFEUpkqaiTBwULKDeiIEGLlALSZJEAgMKgg9wQskHA7V2rg+KQcCR+cWHN1gvle4hcKtWqxlEgTH2INQT1N4BZV7exD7EilCOsnLaboeCYciRyuFsPCZO2cQ7CCGVQTmFFlDWAtTLKIRyKjOTsmYSK80pjgzheADS8Vgi+1pyGxVGNc3TGqDxEApDrKLrAYvdtIPU8pwWUnpWKvv+rR0+066ARWdmVAgUh0XH6x7bDFpOEauBtWUqcrZh3buve6A2D41g6HH9YamRppzM+gZGTJ8az2qnaVuVMVFRblSCYGj91Oaf4xSeVmuJOxwa5d8uDJUbd5etgdmQ/8+N9A/HMVlRAL2+IAAAAABJRU5ErkJggg=="},"277c":function(t,e,s){},"360e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAzFBMVEVHcEzlJB7iGxnvRS/mMh/wQCv3QCHsPynvGADkIx3yVDXxSzLpMCTwPizsPCvkIh31WjvxUTXwTDLkIRzrOCjuQy7hFhbyTzXpNSbrOCjkIRzlJR3mJx/hFxfkHxzzUTbsPSvqNijoLiP1XDv1XDzzVznuPCvmKSH3Xj3yUDXyTzXxTDPvRzDoLiPoMCThGhj2Xj3vSjLzUTXjHBrkIBzoLyTmKiHxTzTwSzLvRjDlJR7yUjbtQi7rOSnpNCbsPSvkIBz2XTzzVjjgFRZn7rbFAAAANXRSTlMAKP7fChAFIAFRLFR/F+Ru6W0+6d++vqB2qtthOfJIRMfy1NHGYDGGktrotPLEu7fy9n6hlxM4Vj0AAAIZSURBVDjLtZTZlqIwEEBLdkQExRYQ3Pe9N1ZZ5f//aRJQTHc7/TDnTD2BXqpuqpIA/J9orE8DLdRmHxb/N0Q8Oo7jalqYZRR1Hj1DmpM4OVkNDkC2lT5FFf3GD0aapibxa+OTKobiN6YTtcfVv6LSsjBtD4pCIYguJwUTGT0wxgxruaG2ZoDtFwWR67J9o1kMt+MkwZAbhpoNXL8YPla58/w9gkZRGt+oEK3QAlkrzjW09Txfgm6Eobg3vVMjGBEFFxe9CRyNoDSesIZzozQWzkW/bhGW7gQBoiasPb1rZWuciuyWQPuIemHG04eWJghaYZAN93w/2HOM0ariiKkGfFBnIpGE5IMlMUicywKFGpAtv+BUQSlfd0sBkRp+hTz/QKPolTF1SmiUUeSAr4iSiHI4lwhiRmQS5Ovl4u1eqjAZuRwiD0pGOsEcU5VWm+d7WOsI8BmeSWh5xQUxRSOmlEcjGYQtEhLmd+qdb5crPAGs3NCuCbRpgVdxQa/uQxttE9OtlfjFpmy6+tBKU8zYjmvdC7FqXu5deX/XiiITDZ2ZOTPuIZ2/NquNrO8wResr/LGZJDZhvcnVkhJQ7e6KrTzNOFG+LE3PXztC9SjcRCdpvP52pt7zfDF+vLLGIUqNH6dzrCJs2RTwiCT9LYjo7pNzznXmOQpVLZd46HDPbwyhu0EcavxWl5jfbh+O5Xmmtv8lhH+52/4AoHtenn5GDJsAAAAASUVORK5CYII="},b1b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAw1BMVEVHcEznJyDrOCfySC/zVDjuQy73PCHxTTPwHwDkJB3uQi3xTzPxTjTlJR/lJB71XDzxTzXrPijhGRjjGxjuPSvuQy7vRTDmKSDjHhrzUzbkIx30WjrlNSbwUjbmJh/2XDv1WzvpMiXhFxfrOSntPizxTTPpMybiGRjuQS3hFxfqMyXpMCXlJx7uRzDqNCb0WDnnLCLnLCLsOyrpNCbtQC3xTzToMSXuRS/qOCjgFRbmKSH2XjznLSPyUjbwSjL0VzniHBoQYWvPAAAAMnRSTlMAKRgQu3cFKgJwVkTbnv3snyC5U03J9t5I+etlCzo3ks2Jxb7p5dbdrPJ/tWRubX31wRAYrCYAAAH+SURBVDjLtZTZmqIwEIUDCkRkl0XEfd+7G0R25P2faorNAXXmrnMF+f6cqpycBKHfGcTiZIyE0ZI/k/9C1J97HIejkZDBUIYfVVa+szoTNEI00VOyLFgSbwyr2/vGLMFnwWHwwlxu6357ZroLgl7jf0KznvbW6lgJgoaWyelc571Lehkc5Offxk27NYRZXsXVN7kLlCfEuW7KliWuW+d+N3rVkmGjYNeUmGLlYm37vgNuffPlTpVgWUNM0TQj6bebbftOToXhzwAXUi23JpzneUD5NSUsMMKjlg3oMlH3XiEFBe+x0SMHcDJ8pjShrqux8nFdUqcheTQEEOlluzaUphuKZFf2+igT/DcUBGiQHdqQy6WeLjEyra7ygnEODbOsBSVup9+F3hmqauuTUpLMWWx5HkCVWx96eiSJu9mnANVuAcQL7d09HgkcTwHdyoIAGcLxBSqpAiqoK5qGwvRvKsDxXCqnGKr0dMtixIfG8+y6s/LwTKByCCgtD8w0js811BGjMrvkzHTdHNLUIjjb+xY/q1mRyFT814ahtHIJPjnOtNH17EkhelwlDu99/9rcGpYi0cKthMuabS9eUv8VRfPGpepQkEDq7W70RcAsBuQwqUq653H9D/ectrgIhiiauVv6hf74YGA0mc2j3HhOYsf/e31wR5bHCP/S2/YHSQdMv4LPTroAAAAASUVORK5CYII="},cadb:function(t,e,s){},f2a5:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"suwis-service-type"},[i("main",{staticClass:"content"},[i("SimpleGood",{attrs:{name:t.goodInfo.goods_name,desc:[t.goodInfo.header_one,t.goodInfo.header_two,t.goodInfo.header_three],"store-logo":t.goodInfo.goods_img}}),i("ul",{staticClass:"type-list"},[i("router-link",{staticClass:"type-item",attrs:{to:"/uc/orders/apply?id="+t.id+"&type=refund",tag:"li"}},[i("div",{staticClass:"title-line"},[i("img",{staticClass:"type-icon",attrs:{src:s("15f6"),alt:"退款"}}),t._v("\n                    仅退款\n                ")]),i("div",{staticClass:"desc"},[t._v("未收到货（含未签收）或卖家协商同意的前提下")])]),i("router-link",{staticClass:"type-item",attrs:{to:"/uc/orders/apply?id="+t.id+"&type=return",tag:"li"}},[i("div",{staticClass:"title-line"},[i("img",{staticClass:"type-icon",attrs:{src:s("360e"),alt:"退货退款"}}),t._v("\n                    退货退款\n                ")]),i("div",{staticClass:"desc"},[t._v("已收到货，需要退换已收到的货物")])]),i("router-link",{staticClass:"type-item",attrs:{to:"/uc/orders/apply?id="+t.id+"&type=exchange",tag:"li"}},[i("div",{staticClass:"title-line"},[i("img",{staticClass:"type-icon",attrs:{src:s("b1b0"),alt:"换货"}}),t._v("\n                    换货\n                ")]),i("div",{staticClass:"desc"},[t._v("已收到货，需要更换已收到的货物")])])],1)],1)])},a=[],c=s("00a1"),o={components:{SimpleGood:c["a"]},data:function(){return{goodInfo:{},id:""}},created:function(){var t=this;this.id=this.$route.query.id,this.$axios.post("/order/detail",{id:this.id}).then(function(e){var s=e.data;1===s.code?s.data&&(t.goodInfo=s.data):t.$toast(s.msg)})}},n=o,l=(s("f74d"),s("2877")),r=Object(l["a"])(n,i,a,!1,null,"23f837c9",null);e["default"]=r.exports},f74d:function(t,e,s){"use strict";var i=s("cadb"),a=s.n(i);a.a}}]);