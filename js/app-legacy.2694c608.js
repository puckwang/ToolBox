(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)i=l[u],a[i]&&p.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r=[];function i(e){return l.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-04d76974":"80032052","chunk-0c1114b8":"a2a43111","chunk-16ea8ef0":"d3a90690","chunk-2d0be06f":"5005a90b","chunk-2d21a3d2":"18b11791","chunk-2d22d746":"e6ecd7ba","chunk-48e34991":"8e23c77d","chunk-4c10c19a":"02825f12","chunk-5a7e51b7":"92ca78b0","chunk-9fe31b40":"c56430a5","chunk-da7a6c82":"64310c20"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e),r=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},a=[],r=(n("cadf"),n("551c"),n("f751"),n("097d"),{props:{},data:function(){return{}},methods:{},computed:{},watch:{},components:{},mounted:function(){}}),i=r,l=n("2877"),s=Object(l["a"])(i,o,a,!1,null,"d4501202",null);t["default"]=s.exports},3642:function(e,t,n){},"478b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"form-control form-control-sm",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lang=t.target.multiple?n:n[0]},e.onChangeLocale]}},e._l(e.langs,function(t,o){return n("option",{key:"Lang"+o,domProps:{value:t.value}},[e._v(e._s(t.text))])}),0)])},a=[],r={name:"locale-changer",data:function(){return{lang:this.$i18n.locale,langs:[{text:"中文",value:"tw"},{text:"English",value:"en"}]}},methods:{onChangeLocale:function(){location.href=("tw"===this.lang?"":"/"+this.lang)+this.$route.fullPath}}},i=r,l=n("2877"),s=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=s.exports},"49f8":function(e,t,n){var o={"./en.json":"edd4","./tw.json":"d904"};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="49f8"},"50a9":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-group"},[e._t("default"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder,readonly:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary bg-h-main-color inputHasCopy",staticStyle:{border:"1px solid #ced4da"},attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[n("font-awesome-icon",{attrs:{icon:"copy"}})],1)])],2)},a=[],r=n("f904"),i=n.n(r),l={props:["placeholder","value"],data:function(){return{}},methods:{copy:function(){i()(this.value),$(".inputHasCopy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted:function(){var e=this;$('[data-toggle="tooltip"]').tooltip(),$(".inputHasCopy").on("hidden.bs.tooltip",function(){$(".inputHasCopy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},s=l,c=n("2877"),u=Object(c["a"])(s,o,a,!1,null,"62cd4981",null);t["default"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("28a5"),n("ac6a"),n("f3e2"),n("cadf"),n("551c"),n("f751"),n("097d"),n("fb98"),n("4989");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("nav",{staticClass:"navbar navbar-expand-lg sticky-top navbar-dark mb-3",staticStyle:{"background-color":"#39b366"}},[o("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[o("div",{staticClass:"border border-white rounded d-inline-block align-top mr-1",staticStyle:{padding:"1px"}},[o("img",{attrs:{src:n("cf05"),width:"30",height:"30"}})]),e._v("\n            "+e._s(e.$t("title.name"))+"\n        ")]),e._m(0),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[o("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(e._s(e.$t("title.home")))])],1),o("li",{staticClass:"nav-item dropdown"},[o("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarToolsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                        "+e._s(e.$t("title.tools"))+"\n                    ")]),o("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarToolsMenu"}},e._l(e.$router.options.routes,function(t,n){return t.meta.showIndex?o("router-link",{key:n,staticClass:"dropdown-item",attrs:{to:t.path,title:e.$t("description."+t.name)}},[o("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:t.meta.icon}}),e._v(" "+e._s(e.$t("title."+t.name))+"\n                        ")],1):e._e()}),1)])]),o("form",{staticClass:"form-inline"},[o("ChangeLanguage")],1)])],1),o("div",{staticClass:"main container-fluid mb-5"},[o("router-view")],1),o("footer",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("span",{staticClass:"text-muted"},[e._v("\n                Copyright © "+e._s((new Date).getFullYear())+", Puck Wang & Yuuna Chang; all rights reserved.\n                "),o("a",{attrs:{href:"/disclaimer"}},[e._v("Disclaimer")])])])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i=(n("7f7f"),n("478b")),l=n("cf05"),s=n.n(l),c={metaInfo:function(){return{titleTemplate:"%s - Puck 線上工具平台",meta:[{property:"og:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"og:title"},{property:"og:description",content:this.$i18n.t("description."+this.$route.name),vmid:"og:description"},{property:"og:type",content:"website"},{property:"og:image",content:"https://tool.puckwang.com/"+s.a,vmid:"og:image"},{property:"og:updated_time",content:new Date},{property:"og:url",content:"https://tool.puckwang.com/"+this.$route.fullPath,vmid:"og:url"},{property:"twitter:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"twitter:title"},{property:"twitter:description",content:this.$i18n.t("description."+this.$route.name),vmid:"twitter:description"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image",content:"https://tool.puckwang.com/"+s.a,vmid:"twitter:image"}]}},data:function(){return{}},components:{ChangeLanguage:i["default"]},updated:function(){gtag("config","UA-44442837-9",{page_title:this.$i18n.t("title."+this.$route.name),page_path:this.$route.fullPath})},mounted:function(){}},u=c,d=n("2877"),p=Object(d["a"])(u,a,r,!1,null,null,null),h=p.exports,m=(n("4f37"),n("a481"),n("8c4f")),f=n("0a89"),w=n.n(f);o["default"].use(m["a"]),o["default"].use(w.a);var g=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1"),y=new m["a"]({mode:"history",base:2===g.trim().length&&"/"!=g?"/"+g:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{showIndex:!1}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{showIndex:!1}},{path:"/disclaimer",name:"disclaimer",component:function(){return n.e("chunk-2d0be06f").then(n.bind(null,"2f05"))},meta:{showIndex:!1}},{path:"/tools/codecs",name:"codecs",component:function(){return n.e("chunk-4c10c19a").then(n.bind(null,"8d96"))},meta:{showIndex:!0,icon:"exchange-alt"}},{path:"/tools/hash",name:"hashGenerator",component:function(){return n.e("chunk-04d76974").then(n.bind(null,"158e"))},meta:{showIndex:!0,icon:"hashtag"}},{path:"/tools/luckyDraw",name:"luckyDraw",component:function(){return n.e("chunk-0c1114b8").then(n.bind(null,"6d0b"))},meta:{showIndex:!0,icon:"dice"}},{path:"/tools/passwordGenerator",name:"passwordGenerator",component:function(){return n.e("chunk-da7a6c82").then(n.bind(null,"1247"))},meta:{showIndex:!0,icon:"key"}},{path:"/tools/timer",name:"timer",component:function(){return n.e("chunk-48e34991").then(n.bind(null,"bbad"))},meta:{showIndex:!0,icon:"clock"}},{path:"/tools/qrCode",name:"qrCode",component:function(){return n.e("chunk-9fe31b40").then(n.bind(null,"935e"))},meta:{showIndex:!0,icon:"qrcode"}},{path:"/tools/linearEquationsSystem",name:"linearEquationsSystem",component:function(){return n.e("chunk-16ea8ef0").then(n.bind(null,"b74e"))},meta:{showIndex:!0,icon:"subscript"}},{path:"*",component:function(){return n.e("chunk-5a7e51b7").then(n.bind(null,"9703"))},meta:{showIndex:!1}}]}),b=y,v=n("2f62");o["default"].use(v["a"]);var C=new v["a"].Store({state:{},mutations:{},actions:{}}),k=n("1157"),x=n.n(k),D=(n("4917"),n("a925"));function _(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(n)}}),t}o["default"].use(D["a"]);var A=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1"),P=new D["a"]({locale:2===A.trim().length&&"/"!=A?A:"tw",fallbackLocale:"tw",messages:_()}),T=n("ecee"),$=n("f2d1"),E=n("c074"),S=n("ad3d"),O=n("7f16"),L=n.n(O);window.$=window.jQuery=x.a,o["default"].config.productionTip=!1,T["c"].add(E["a"],$["a"]),o["default"].use(L.a),o["default"].component("font-awesome-icon",S["a"]);var N=n("6ae9");N.keys().forEach(function(e){o["default"].component(e.split("/").pop().split(".")[0],N(e).default)}),new o["default"]({router:b,store:C,i18n:P,render:function(e){return e(h)}}).$mount("#app")},"6ae9":function(e,t,n){var o={"./ChangeLanguage.vue":"478b","./InputHasCopy.vue":"50a9","./Template.vue":"0b0e","./TextAreaHasCopy.vue":"dd02"};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="6ae9"},a3e1:function(e,t,n){"use strict";var o=n("3642"),a=n.n(o);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.68c427dd.png"},d904:function(e){e.exports={title:{name:"Puck 線上工具平台",tools:"工具清單",home:"首頁",hashGenerator:"雜湊值產生器",codecs:"資料編碼與解碼",passwordGenerator:"密碼產生器",timer:"線上倒數/碼錶工具",disclaimer:"免責聲明",luckyDraw:"線上抽獎程式",qrCode:"QRCode 產生器",linearEquationsSystem:"解 N 元一次方程式",FbDraw:"FB 抽獎程式",notFound:"404 Not Found Page"},summary:{home:"一個免費的線上工具平台",luckyDraw:"免費，支援客製化抽獎畫面",timer:"可客製化面試畫面，支援倒數、碼表、顯示當前時間的功能",qrCode:"支援多種顏色、圖案、樣式"},description:{home:"一個免費的線上工具平台",hashGenerator:"一個線上的產生器，用於產生 MD5、sha1、sha256 等雜湊值。",codecs:"一個支援多種格式的編碼與解碼工具，支援 Base32、Base64、Punycode。",passwordGenerator:"一個產生客製化密碼的工具。",timer:"一個免費的線上時間工具，支援倒數、碼表、顯示當前時間的功能，且可客製化面試畫面。",disclaimer:"免責聲明",luckyDraw:"一個免費的線上抽獎程式，支援多種資料輸入方式，可客製化抽獎畫面，非常適合各式場合抽獎使用。",qrCode:"一個免費的線上 QRCode 產生器，高度自由的客製化樣式，可改變顏色、樣式、大小，來製作屬於自己的 QRCode。",linearEquationsSystem:"利用程式並使用 Cramer's rule 來快速解出 N 元一次方程式。",FbDraw:"貼文、粉絲團抽獎，可設定不同條件。",notFound:"在網際網路的旅途中難免會有偶爾 404 的時候，也必然會有 500 的時刻，但網站不會因為你的這些行為，而停止服務。"},text:{notFoundBack:"請回吧",text:"文字",file:"檔案",length:"長度",generate:"產生",encode:"編碼",decode:"解碼",autoRun:"自動執行",choose:"請選擇",hash:"雜湊值",ciphertext:"密文",clickToCopy:"點擊複製",copied:"已複製",upEnglish:"大寫英文(A..Z)",lowEnglish:"小寫英文(a..z)",digital:"數字(0..9)",symbol:"符號(!@#)",noConfusingWords:"不使用容易混淆的字(0Oo..)",optionAtLeastOne:"選項 (至少選擇一項)",timerMode:"碼表模式",countDownMode:"倒數模式",nowTimeMode:"顯示時間",fontSize:"字體大小",fontColor:"字體顏色",bgColor:"背景顏色",charStyle:"字元樣式",none:"無",theme:"主題",title:"標題",subTitle:"子標題",day:"天",hour:"時",min:"分",sec:"秒",microSec:"毫秒",displayControl:"顯示控制",separatorSymbol:"分隔符號",drawType:"設定抽獎類型",personList:"候選名單",awardList:"獎品名單",settingStyle:"設定樣式",luckyDraw:"抽獎",lookDrawInfo:"查看抽獎資訊",personListPreview:"候選名單預覽",name:"名稱",dataInputType:"資料輸入方式",dataInput:"資料輸入",artificialInput:"手動輸入",textInput:"文字輸入",fromFileImport:"從檔案匯入",fromJsonImport:"從 JSON 匯入",autoGenerate:"自動產生",input:"輸入",numberRange:"數字範圍",excludeNumber:"排除數字",prefix:"前綴",suffix:"後綴",zeroPadding:"數字補零",awardListPreview:"獎品名單預覽",amount:"數量",startDraw:"開始抽獎",currentAward:"目前抽出",remainingAmount:"剩餘數量",winner:"中獎人",prepareNextDraw:"準備下一抽",endOfDraw:"抽獎結束",whetherWin:"是否已中獎",hasWon:"已中獎",drawLog:"抽獎紀錄",orderByTime:"依時間排序",orderByAward:"依獎品排序",award:"獎品",time:"時間",shareUrl:"分享連結",variableNumber:"變數數量",equation:"方程式",calculate:"計算",edit:"編輯",export:"匯出資料",plainText:"純文字",solution:"解答",checkCalculation:"驗算"},message:{decodeError:"解碼失敗，輸入的資料格式不正確。",drawPersonForAwardDescription:"每次執行，程式將依照獎品填寫的順序，從候選名單中抽出對應的中獎人，並會紀錄各獎品的中獎人。",needPersonAndAward:"需填寫候選名單及獎品",drawPersonDescription:"每次將從候選清單中隨機抽出一位中獎者，直到所有中獎者被抽出或使用者自己停止為止。",needPerson:"需填寫候選名單",oneDataOneLine:"格式：一行一筆資料，不限中英文數字符號皆可，也不限資料筆數。",oneDataOneLineEquation:"格式：一行一組線性方程，僅輸入係數的部分，算幾元就要輸入幾組。",oneDataOneLineAndAwardNumber:" 格式：一行一筆資料，獎品名稱與數量以,分隔，不限資料筆數。",eachNumberSeparatedByBlank:"格式：每個數字以','分隔。",startDrawAfterCantEditData:"注意：開始抽獎後，將無法再更改任何抽獎資料，僅可查看。",selectDrawType:"請選擇抽獎類型",drawPersonForAward:"依照獎品順序抽出中獎者",drawPerson:"只抽中獎者"}}},dd02:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bd-clipboard"},[n("h4",[n("a",{staticClass:"btn-clipboard badge badge-pill badge-primary bg-main-color text-area-has-copy",attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[n("font-awesome-icon",{attrs:{icon:"copy"}})],1)])]),n("textarea",{staticClass:"form-control",style:{minHeight:e.minHeight},attrs:{placeholder:e.placeholder,readonly:""}},[e._v(e._s(e.value))])])},a=[],r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("f904")),i=n.n(r),l={props:["placeholder","minHeight","value"],data:function(){return{}},methods:{copy:function(){i()(this.value),$(".text-area-has-copy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted:function(){var e=this;$('[data-toggle="tooltip"]').tooltip(),$(".text-area-has-copy").on("hidden.bs.tooltip",function(){$(".text-area-has-copy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},s=l,c=(n("a3e1"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,"50cc62c3",null);t["default"]=u.exports},edd4:function(e){e.exports={title:{name:"Puck Toolbox",tools:"Tools",home:"Home",hashGenerator:"Hash Generator",codecs:"Encode and Decode",passwordGenerator:"Password Generator",timer:"Online count down / stopwatch tool",disclaimer:"Disclaimer",luckyDraw:"Online Lucky Draw",qrCode:"QR Code Generator",linearEquationsSystem:"N-ary Equation",notFound:"404 Not Found Page"},summary:{home:"An online free tool web.",luckyDraw:"An online free tool web.",timer:"An online free tool web.",qrCode:"Support multiple colors, patterns, styles"},description:{home:"An online free tool web.",hashGenerator:"An online generator, Use to generate MD5, sha1,sha256 or other hash value.",codecs:"A multi-format encoding and decoding tool that supports Base32, Base64, and Punycode.",passwordGenerator:"A tool for generating customized passwords.",timer:"A free online time tool that supports countdown, stopwatch, and display of current time.",disclaimer:"Disclaimer",luckyDraw:"An online lottery program that supports a variety of data input methods, suitable for all kinds of occasions.",qrCode:"A free online QRCode generator with a highly free custom style that changes color, style, and size to create your own QRCode.",linearEquationsSystem:"Use the program and use Cramer's rule to quickly solve the N-ary equation.",notFound:"During the Internet journey, there will inevitably be see 404, or 500, but the website will not stop serving because of your actions."},text:{notFoundBack:"Back",text:"Text",file:"File",length:"Length",generate:"Generate",encode:"Encode",decode:"Decode",autoRun:"Auto run",choose:"Choose",hash:"Hash value",ciphertext:"Ciphertext",clickToCopy:"Click to copy!",copied:"Copied!",upEnglish:"Capitalized English(A..Z)",lowEnglish:"Lowercase English(a..z)",digital:"Digital(0..9)",symbol:"Symbol(!@#)",noConfusingWords:"Don't use confusing words(0Oo..)",optionAtLeastOne:"Option (select at least one item)",timerMode:"Stopwatch",countDownMode:"Count Down",nowTimeMode:"Show Now",fontSize:"Font Size",fontColor:"Font Color",bgColor:"Background Color",charStyle:"Char Style",none:"None",theme:"Theme",title:"Title",subTitle:"Subtitle",day:"Day",hour:"Hour",min:"Minute",sec:"Second",microSec:"Microsecond",displayControl:"Display Control",separatorSymbol:"Separator Symbol",drawType:"Setting Draw Type",personList:"Person List",awardList:"Award List",settingStyle:"Setting Style",luckyDraw:"Lucky Draw",lookDrawInfo:"Look Draw Info",personListPreview:"Person List Preview",name:"Name",dataInputType:"Data input method",dataInput:"Input Data",artificialInput:"Artificial Input",textInput:"Text",fromFileImport:"From file import",fromJsonImport:"From JSON import",autoGenerate:"Auto generate",input:"Enter",numberRange:"Number Range",excludeNumber:"Exclude Number",prefix:"Prefix",suffix:"Suffix",zeroPadding:"Zero padding",awardListPreview:"Award List Preview",amount:"Amount",startDraw:"Start",currentAward:"Current Award",remainingAmount:"Remaining Amount",winner:"Winner",prepareNextDraw:"Prepare Next Draw",endOfDraw:"End of Draw",whetherWin:"Whether Win",hasWon:"Has Won",drawLog:"Draw Log",orderByTime:"Order by time",orderByAward:"Order by award",award:"Award",time:"Time",shareUrl:"Share Url",variableNumber:"Number of variables",equation:"Equation",calculate:"Calculate",edit:"Edit",export:"Export",plainText:"Plain Text",solution:"Solution",checkCalculation:"Check Calculation"},message:{decodeError:"The decoding failed and the input data format is incorrect.",drawPersonForAwardDescription:"Each time the program is executed, the program will draw the corresponding winners from the candidate list in the order in which the prizes are filled out, and the winners of each prize will be recorded.",needPersonAndAward:"Need to fill out the shortlist and prizes.",drawPersonDescription:"Each time a winner will be randomly selected from the candidate list until all winners are drawn or the user stops himself.",needPerson:"Need to fill out the shortlist.",oneDataOneLine:"Format: One data one line, not limited to Chinese and English numbers, not limited to the number of data.",oneDataOneLineEquation:"Format: A set of linear equations in a row, only the part of the coefficient is input, and several groups are input when counting a few yuan.",oneDataOneLineAndAwardNumber:"Format: One line of information, the name and quantity of the prize are separated by ',' , not limited to the number of data.",eachNumberSeparatedByBlank:"Format: Each number is separated by ','.",startDrawAfterCantEditData:"Note: After you start the draw, you will not be able to change any of the sweepstakes and only view info.",selectDrawType:"Please select draw type.",drawPersonForAward:"Extracted in order of draw.",drawPerson:"Only Draw winner."}}},fb98:function(e,t,n){}});