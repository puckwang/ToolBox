(function(e){function t(t){for(var a,n,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)n=s[d],r[n]&&u.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},n={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({About:"About",Codecs:"Codecs","ConsoleTextColor~slotMachineDrawNumber":"ConsoleTextColor~slotMachineDrawNumber",ConsoleTextColor:"ConsoleTextColor",slotMachineDrawNumber:"slotMachineDrawNumber",Disclaimer:"Disclaimer",EatSomething:"EatSomething",HashGenerator:"HashGenerator",Home:"Home",LinearEquationsSystem:"LinearEquationsSystem",LuckyDraw:"LuckyDraw",NotFound:"NotFound",PasswordGenerator:"PasswordGenerator",QrCode:"QrCode",Timer:"Timer"}[e]||e)+"."+{About:"038e7f82",Codecs:"bb668231","ConsoleTextColor~slotMachineDrawNumber":"11c16f67",ConsoleTextColor:"b83f1e86",slotMachineDrawNumber:"700497b6",Disclaimer:"5a91ec8c",EatSomething:"a96bb7c6",HashGenerator:"195b11e1",Home:"032553b1",LinearEquationsSystem:"9585abe4",LuckyDraw:"c33079cc",NotFound:"cc6feb3c",PasswordGenerator:"1c188dda",QrCode:"b304f548",Timer:"eec6b553"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={ConsoleTextColor:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise(function(t,o){for(var a="css/"+({About:"About",Codecs:"Codecs","ConsoleTextColor~slotMachineDrawNumber":"ConsoleTextColor~slotMachineDrawNumber",ConsoleTextColor:"ConsoleTextColor",slotMachineDrawNumber:"slotMachineDrawNumber",Disclaimer:"Disclaimer",EatSomething:"EatSomething",HashGenerator:"HashGenerator",Home:"Home",LinearEquationsSystem:"LinearEquationsSystem",LuckyDraw:"LuckyDraw",NotFound:"NotFound",PasswordGenerator:"PasswordGenerator",QrCode:"QrCode",Timer:"Timer"}[e]||e)+"."+{About:"31d6cfe0",Codecs:"31d6cfe0","ConsoleTextColor~slotMachineDrawNumber":"31d6cfe0",ConsoleTextColor:"5cd4bd8c",slotMachineDrawNumber:"31d6cfe0",Disclaimer:"31d6cfe0",EatSomething:"31d6cfe0",HashGenerator:"31d6cfe0",Home:"31d6cfe0",LinearEquationsSystem:"31d6cfe0",LuckyDraw:"31d6cfe0",NotFound:"31d6cfe0",PasswordGenerator:"31d6cfe0",QrCode:"31d6cfe0",Timer:"31d6cfe0"}[e]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===a||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],m.parentNode.removeChild(m),o(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){n[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,o){a=r[e]=[t,o]});t.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e),c=function(t){d.onerror=d.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,o[1](i)}r[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0b0e":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._t("default")],2)},n=[],r={props:{config:{type:Object,required:!0}},data(){return{}},methods:{},computed:{},watch:{},components:{},mounted(){}},i=r,s=o("2877"),l=Object(s["a"])(i,a,n,!1,null,"5667a679",null);t["default"]=l.exports},3642:function(e,t,o){},"478b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"locale-changer"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"form-control form-control-sm",on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lang=t.target.multiple?o:o[0]},e.onChangeLocale]}},e._l(e.langs,function(t,a){return o("option",{key:"Lang"+a,domProps:{value:t.value}},[e._v(e._s(t.text))])}),0)])},n=[],r={name:"locale-changer",data(){return{lang:this.$i18n.locale,langs:[{text:"中文",value:"tw"},{text:"English",value:"en"}]}},methods:{onChangeLocale(){location.href=("tw"===this.lang?"":"/"+this.lang)+this.$route.fullPath}}},i=r,s=o("2877"),l=Object(s["a"])(i,a,n,!1,null,null,null);t["default"]=l.exports},"49f8":function(e,t,o){var a={"./en.json":"edd4","./tw.json":"d904"};function n(e){var t=r(e);return o(t)}function r(e){var t=a[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="49f8"},"50a9":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"input-group"},[e._t("default"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder,readonly:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-secondary bg-h-main-color inputHasCopy",staticStyle:{border:"1px solid #ced4da"},attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[o("font-awesome-icon",{attrs:{icon:"copy"}})],1)])],2)},n=[],r=o("f904"),i=o.n(r),s={props:["placeholder","value"],data(){return{}},methods:{copy(){i()(this.value),$(".inputHasCopy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted(){let e=this;$('[data-toggle="tooltip"]').tooltip(),$(".inputHasCopy").on("hidden.bs.tooltip",function(){$(".inputHasCopy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},l=s,c=o("2877"),d=Object(c["a"])(l,a,n,!1,null,"62cd4981",null);t["default"]=d.exports},"56d7":function(e,t,o){"use strict";o.r(t);o("28a5"),o("ac6a"),o("fb98"),o("4989");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg sticky-top navbar-dark mb-3",staticStyle:{"background-color":"#39b366"}},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("div",{staticClass:"border border-white rounded d-inline-block align-top mr-1",staticStyle:{padding:"1px"}},[a("img",{attrs:{src:o("cf05"),width:"30",height:"30"}})]),e._v("\n            "+e._s(e.$t("title.name"))+"\n        ")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[a("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(e._s(e.$t("title.home")))])],1),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarToolsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                        "+e._s(e.$t("title.tools"))+"\n                    ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarToolsMenu"}},e._l(e.$router.options.routes,function(t,o){return t.meta.showIndex?a("router-link",{key:o,staticClass:"dropdown-item",attrs:{to:t.path,title:e.$t("description."+t.name)}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:t.meta.icon}}),e._v(e._s(e.$t("title."+t.name))+"\n                        ")],1):e._e()}),1)])]),a("form",{staticClass:"form-inline"},[a("ChangeLanguage")],1)])],1),a("div",{staticClass:"main container-fluid mb-5"},[a("router-view")],1),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("span",{staticClass:"text-muted"},[e._v("\n                Copyright © "+e._s((new Date).getFullYear())+", Puck Wang & Yuuna Chang; all rights reserved.\n                "),a("a",{attrs:{href:"/disclaimer"}},[e._v("Disclaimer")])])])])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],i=o("478b"),s=o("cf05"),l=o.n(s),c={metaInfo(){return{titleTemplate:"%s - Puck 線上工具平台",meta:[{property:"og:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"og:title"},{property:"og:description",content:this.$i18n.t("description."+this.$route.name),vmid:"og:description"},{property:"og:type",content:"website"},{property:"og:image",content:"https://tool.puckwang.com/"+l.a,vmid:"og:image"},{property:"og:updated_time",content:new Date},{property:"og:url",content:"https://tool.puckwang.com/"+this.$route.fullPath,vmid:"og:url"},{property:"twitter:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"twitter:title"},{property:"twitter:description",content:this.$i18n.t("description."+this.$route.name),vmid:"twitter:description"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image",content:"https://tool.puckwang.com/"+l.a,vmid:"twitter:image"}]}},data(){return{}},components:{ChangeLanguage:i["default"]},updated(){gtag("config","UA-44442837-9",{page_title:this.$i18n.t("title."+this.$route.name),page_path:this.$route.fullPath})},mounted(){}},d=c,u=o("2877"),m=Object(u["a"])(d,n,r,!1,null,null,null),p=m.exports,h=(o("a481"),o("8c4f")),f=o("0a89"),w=o.n(f);a["default"].use(h["a"]),a["default"].use(w.a);let g=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1");const b=new h["a"]({mode:"history",base:2===g.trim().length&&"/"!=g?"/"+g:"/",routes:[{path:"/",name:"home",component:()=>o.e("Home").then(o.bind(null,"bb51")),meta:{showIndex:!1}},{path:"/about",name:"about",component:()=>o.e("About").then(o.bind(null,"f820")),meta:{showIndex:!1}},{path:"/disclaimer",name:"disclaimer",component:()=>o.e("Disclaimer").then(o.bind(null,"2f05")),meta:{showIndex:!1}},{path:"/tools/codecs",name:"codecs",component:()=>o.e("Codecs").then(o.bind(null,"8d96")),meta:{showIndex:!0,icon:"exchange-alt"}},{path:"/tools/hash",name:"hashGenerator",component:()=>o.e("HashGenerator").then(o.bind(null,"158e")),meta:{showIndex:!0,icon:"hashtag"}},{path:"/tools/luckyDraw",name:"luckyDraw",component:()=>o.e("LuckyDraw").then(o.bind(null,"6d0b")),meta:{showIndex:!0,icon:"dice"}},{path:"/tools/passwordGenerator",name:"passwordGenerator",component:()=>o.e("PasswordGenerator").then(o.bind(null,"1247")),meta:{showIndex:!0,icon:"key"}},{path:"/tools/timer",name:"timer",component:()=>o.e("Timer").then(o.bind(null,"bbad")),meta:{showIndex:!0,icon:"clock"}},{path:"/tools/qrCode",name:"qrCode",component:()=>o.e("QrCode").then(o.bind(null,"935e")),meta:{showIndex:!0,icon:"qrcode"}},{path:"/tools/linearEquationsSystem",name:"linearEquationsSystem",component:()=>o.e("LinearEquationsSystem").then(o.bind(null,"b74e")),meta:{showIndex:!0,icon:"subscript"}},{path:"/tools/consoleTextColor",name:"consoleTextColor",component:()=>Promise.all([o.e("ConsoleTextColor~slotMachineDrawNumber"),o.e("ConsoleTextColor")]).then(o.bind(null,"10fc")),meta:{showIndex:!0,icon:"terminal"}},{path:"/tools/eatSomething",name:"eatSomething",component:()=>o.e("EatSomething").then(o.bind(null,"f63c")),meta:{showIndex:!0,icon:"utensils"}},{path:"/tools/slotMachineDrawNumber",name:"slotMachineDrawNumber",component:()=>Promise.all([o.e("ConsoleTextColor~slotMachineDrawNumber"),o.e("slotMachineDrawNumber")]).then(o.bind(null,"c469")),meta:{showIndex:!0,icon:"gem"}},{path:"*",component:()=>o.e("NotFound").then(o.bind(null,"9703")),meta:{showIndex:!1}}]});var y=b,C=o("2f62");const v={name:"未命名",foods:[{name:"炒飯",remarks:""},{name:"鍋燒意麵",remarks:""},{name:"牛肉麵",remarks:""},{name:"肉燥飯",remarks:""},{name:"壽司",remarks:""},{name:"定食",remarks:""},{name:"速食",remarks:""},{name:"拉麵",remarks:""},{name:"咖哩飯",remarks:""},{name:"雞肉飯",remarks:""},{name:"涼麵",remarks:""},{name:"水餃",remarks:""},{name:"雞肉飯",remarks:""},{name:"鍋貼",remarks:""},{name:"豬排飯",remarks:""},{name:"牛排",remarks:""},{name:"火鍋",remarks:""}]},x={importFoods(e,t){e.commit("importFoods",t)},setName(e,t){e.commit("setName",t)},addFood(e,t){e.commit("addFood",JSON.parse(JSON.stringify(t)))},editFood(e,t){e.commit("editFood",t)},removeFood(e,t){e.commit("removeFood",t)}},D={importFoods(e,t){e.foods=t},setName(e,t){e.name=t},addFood(e,t){e.foods.unshift(t)},editFood(e,t){e.foods[t.index][t.field]=t.value,e.foods.push(e.foods.pop())},removeFood(e,t){e.foods.splice(t,1)}},k={};var T={namespaced:!0,state:v,actions:x,getters:k,mutations:D};const S={colors:["#FF6666","#FFD966","#B3FF66","#66FF8C","#66FFFF","#668CFF","#B366FF","#FF66D9"]},N={},E={},F={};var A={namespaced:!0,state:S,actions:N,getters:F,mutations:E};a["default"].use(C["a"]);const P=!1,_=new C["a"].Store({modules:{EatSomething:T,Colors:A},strict:P});var L=_,O=o("1157"),$=o.n(O),M=(o("4917"),o("a925"));function I(){const e=o("49f8"),t={};return e.keys().forEach(o=>{const a=o.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const n=a[1];t[n]=e(o)}}),t}a["default"].use(M["a"]);let q=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1");var G=new M["a"]({locale:2===q.trim().length&&"/"!=q?q:"tw",fallbackLocale:"tw",messages:I()}),H=o("ecee"),j=o("f2d1"),B=o("c074"),z=o("ad3d"),Q=o("7591"),R=o.n(Q),U=o("a8b4");window.$=window.jQuery=$.a,a["default"].config.productionTip=!1,H["c"].add(B["a"],j["a"]),a["default"].use(R.a),a["default"].use(U["a"]),a["default"].component("font-awesome-icon",z["a"]);const W=o("6ae9");W.keys().forEach(e=>{a["default"].component(e.split("/").pop().split(".")[0],W(e).default)}),new a["default"]({router:y,store:L,i18n:G,render:e=>e(p)}).$mount("#app")},"6ae9":function(e,t,o){var a={"./ChangeLanguage.vue":"478b","./InputHasCopy.vue":"50a9","./Template.vue":"0b0e","./TextAreaHasCopy.vue":"dd02"};function n(e){var t=r(e);return o(t)}function r(e){var t=a[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="6ae9"},a3e1:function(e,t,o){"use strict";var a=o("3642"),n=o.n(a);n.a},cf05:function(e,t,o){e.exports=o.p+"img/logo.68c427dd.png"},d904:function(e){e.exports={title:{name:"Puck 線上工具平台",tools:"工具清單",home:"首頁",hashGenerator:"雜湊值產生器",codecs:"資料編碼與解碼",passwordGenerator:"密碼產生器",timer:"線上倒數/碼錶工具",disclaimer:"免責聲明",luckyDraw:"線上抽獎程式",qrCode:"QRCode 產生器",linearEquationsSystem:"解 N 元一次方程式",consoleTextColor:"Console 文字顏色產生器",eatSomething:"吃些什麼？",slotMachineDrawNumber:"拉霸機抽數字",notFound:"404 Not Found Page"},summary:{home:"一個免費的線上工具平台",luckyDraw:"免費，支援客製化抽獎畫面",timer:"可客製化畫面，支援倒數、碼表、顯示當前時間的功能",qrCode:"支援多種顏色、圖案、樣式"},description:{home:"一個免費的線上工具平台，提供各式各樣千奇百怪的工具，致力於讓更多人更懶惰。",hashGenerator:"一個線上的產生器，用於產生 MD5、sha1、sha256 等雜湊值。",codecs:"一個支援多種格式的編碼與解碼工具，支援 Base32、Base64、Punycode。",passwordGenerator:"一個產生客製化密碼的工具。",timer:"一個免費的線上時間工具，支援倒數、碼表、顯示當前時間的功能，且可客製化面試畫面。",disclaimer:"免責聲明",luckyDraw:"一個免費的線上抽獎程式，支援多種資料輸入方式，可客製化抽獎畫面，非常適合各式場合抽獎使用。",qrCode:"一個免費的線上 QRCode 產生器，高度自由的客製化樣式，可改變顏色、樣式、大小，來製作屬於自己的 QRCode。",linearEquationsSystem:"利用程式並使用 Cramer's rule 來快速解出 N 元一次方程式。",consoleTextColor:"讓你快速的產生各式樣式的 Console 文字",eatSomething:"不知道該吃什麼嗎？ 那就用抽的吧！\n輸入想吃的，讓命運來覺得待會吃什麼。",slotMachineDrawNumber:"使用拉霸機來抽數字，視覺效果絕佳。",notFound:"在網際網路的旅途中難免會有偶爾 404 的時候，也必然會有 500 的時刻，但網站不會因為你的這些行為，而停止服務。"},text:{notFoundBack:"請回吧",text:"文字",file:"檔案",length:"長度",generate:"產生",encode:"編碼",decode:"解碼",autoRun:"自動執行",choose:"請選擇",hash:"雜湊值",ciphertext:"密文",clickToCopy:"點擊複製",copied:"已複製",upEnglish:"大寫英文(A..Z)",lowEnglish:"小寫英文(a..z)",digital:"數字(0..9)",symbol:"符號(!@#)",noConfusingWords:"不使用容易混淆的字(0Oo..)",optionAtLeastOne:"選項 (至少選擇一項)",timerMode:"碼表模式",countDownMode:"倒數模式",nowTimeMode:"顯示時間",fontSize:"字體大小",fontColor:"字體顏色",bgColor:"背景顏色",charStyle:"字元樣式",none:"無",theme:"主題",title:"標題",subTitle:"子標題",day:"天",hour:"時",min:"分",sec:"秒",microSec:"毫秒",displayControl:"顯示控制",separatorSymbol:"分隔符號",drawType:"設定抽獎類型",personList:"候選名單",awardList:"獎品名單",settingStyle:"設定樣式",luckyDraw:"抽獎",lookDrawInfo:"查看抽獎資訊",personListPreview:"候選名單預覽",name:"名稱",dataInputType:"資料輸入方式",dataInput:"資料輸入",artificialInput:"手動輸入",textInput:"文字輸入",fromFileImport:"從檔案匯入",fromJsonImport:"從 JSON 匯入",autoGenerate:"自動產生",input:"輸入",numberRange:"數字範圍",excludeNumber:"排除數字",prefix:"前綴",suffix:"後綴",zeroPadding:"數字補零",awardListPreview:"獎品名單預覽",amount:"數量",startDraw:"開始抽獎",currentAward:"目前抽出",remainingAmount:"剩餘數量",winner:"中獎人",prepareNextDraw:"準備下一抽",endOfDraw:"抽獎結束",whetherWin:"是否已中獎",hasWon:"已中獎",drawLog:"抽獎紀錄",orderByTime:"依時間排序",orderByAward:"依獎品排序",award:"獎品",time:"時間",shareUrl:"分享連結",variableNumber:"變數數量",equation:"方程式",calculate:"計算",edit:"編輯",export:"匯出資料",plainText:"純文字",solution:"解答",checkCalculation:"驗算",remarks:"備註",start:"開始",settingFoods:"設定食物",randomChoose:"隨機選擇"},message:{decodeError:"解碼失敗，輸入的資料格式不正確。",drawPersonForAwardDescription:"每次執行，程式將依照獎品填寫的順序，從候選名單中抽出對應的中獎人，並會紀錄各獎品的中獎人。",needPersonAndAward:"需填寫候選名單及獎品",drawPersonDescription:"每次將從候選清單中隨機抽出一位中獎者，直到所有中獎者被抽出或使用者自己停止為止。",needPerson:"需填寫候選名單",oneDataOneLine:"格式：一行一筆資料，不限中英文數字符號皆可，也不限資料筆數。",oneDataOneLineEquation:"格式：一行一組線性方程，僅輸入係數的部分，算幾元就要輸入幾組。",oneDataOneLineAndAwardNumber:" 格式：一行一筆資料，獎品名稱與數量以,分隔，不限資料筆數。",eachNumberSeparatedByBlank:"格式：每個數字以','分隔。",startDrawAfterCantEditData:"注意：開始抽獎後，將無法再更改任何抽獎資料，僅可查看。",selectDrawType:"請選擇抽獎類型",drawPersonForAward:"依照獎品順序抽出中獎者",drawPerson:"只抽中獎者"}}},dd02:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"bd-clipboard"},[o("h4",[o("a",{staticClass:"btn-clipboard badge badge-pill badge-primary bg-main-color text-area-has-copy",attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[o("font-awesome-icon",{attrs:{icon:"copy"}})],1)])]),o("textarea",{staticClass:"form-control",style:{minHeight:e.minHeight},attrs:{placeholder:e.placeholder,readonly:""}},[e._v(e._s(e.value))])])},n=[],r=o("f904"),i=o.n(r),s={props:["placeholder","minHeight","value"],data(){return{}},methods:{copy(){i()(this.value),$(".text-area-has-copy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted(){let e=this;$('[data-toggle="tooltip"]').tooltip(),$(".text-area-has-copy").on("hidden.bs.tooltip",function(){$(".text-area-has-copy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},l=s,c=(o("a3e1"),o("2877")),d=Object(c["a"])(l,a,n,!1,null,"50cc62c3",null);t["default"]=d.exports},edd4:function(e){e.exports={title:{name:"Puck Toolbox",tools:"Tools",home:"Home",hashGenerator:"Hash Generator",codecs:"Encode and Decode",passwordGenerator:"Password Generator",timer:"Online count down / stopwatch tool",disclaimer:"Disclaimer",luckyDraw:"Online Lucky Draw",qrCode:"QR Code Generator",linearEquationsSystem:"N-ary Equation",consoleTextColor:"Console Text Color Generator",eatSomething:"Eat Something？",slotMachineDrawNumber:"Number Slot Machine",notFound:"404 Not Found Page"},summary:{home:"A free online tool platform.",luckyDraw:"Free, support customized screen.",timer:"Customizable screen, support for countdown, code table, display current time function.",qrCode:"Support multiple colors, patterns, styles"},description:{home:"A free online tool platform that offers a wide range of tools, target is make everyone more lazy.",hashGenerator:"An online generator, Use to generate MD5, sha1,sha256 or other hash value.",codecs:"A multi-format encoding and decoding tool that supports Base32, Base64, and Punycode.",passwordGenerator:"A tool for generating customized passwords.",timer:"A free online time tool that supports countdown, stopwatch, and display of current time.",disclaimer:"Disclaimer",luckyDraw:"An online lottery program that supports a variety of data input methods, suitable for all kinds of occasions.",qrCode:"A free online QRCode generator with a highly free custom style that changes color, style, and size to create your own QRCode.",linearEquationsSystem:"Use the program and use Cramer's rule to quickly solve the N-ary equation.",consoleTextColor:"Quickly generate a variety of styles of Console text.",eatSomething:"Don't know what to eat? Then use it!\nEnter what you want to eat, let fate choose what you will eat.",slotMachineDrawNumber:"Using a slot machine to draw numbers, the visual effect is excellent.",notFound:"During the Internet journey, there will inevitably be see 404, or 500, but the website will not stop serving because of your actions."},text:{notFoundBack:"Back",text:"Text",file:"File",length:"Length",generate:"Generate",encode:"Encode",decode:"Decode",autoRun:"Auto run",choose:"Choose",hash:"Hash value",ciphertext:"Ciphertext",clickToCopy:"Click to copy!",copied:"Copied!",upEnglish:"Capitalized English(A..Z)",lowEnglish:"Lowercase English(a..z)",digital:"Digital(0..9)",symbol:"Symbol(!@#)",noConfusingWords:"Don't use confusing words(0Oo..)",optionAtLeastOne:"Option (select at least one item)",timerMode:"Stopwatch",countDownMode:"Count Down",nowTimeMode:"Show Now",fontSize:"Font Size",fontColor:"Font Color",bgColor:"Background Color",charStyle:"Char Style",none:"None",theme:"Theme",title:"Title",subTitle:"Subtitle",day:"Day",hour:"Hour",min:"Minute",sec:"Second",microSec:"Microsecond",displayControl:"Display Control",separatorSymbol:"Separator Symbol",drawType:"Setting Draw Type",personList:"Person List",awardList:"Award List",settingStyle:"Setting Style",luckyDraw:"Lucky Draw",lookDrawInfo:"Look Draw Info",personListPreview:"Person List Preview",name:"Name",dataInputType:"Data input method",dataInput:"Input Data",artificialInput:"Artificial Input",textInput:"Text",fromFileImport:"From file import",fromJsonImport:"From JSON import",autoGenerate:"Auto generate",input:"Enter",numberRange:"Number Range",excludeNumber:"Exclude Number",prefix:"Prefix",suffix:"Suffix",zeroPadding:"Zero padding",awardListPreview:"Award List Preview",amount:"Amount",startDraw:"Start",currentAward:"Current Award",remainingAmount:"Remaining Amount",winner:"Winner",prepareNextDraw:"Prepare Next Draw",endOfDraw:"End of Draw",whetherWin:"Whether Win",hasWon:"Has Won",drawLog:"Draw Log",orderByTime:"Order by time",orderByAward:"Order by award",award:"Award",time:"Time",shareUrl:"Share Url",variableNumber:"Number of variables",equation:"Equation",calculate:"Calculate",edit:"Edit",export:"Export",plainText:"Plain Text",solution:"Solution",checkCalculation:"Check Calculation",remarks:"Remarks",start:"Start",settingFoods:"Setting Foods",randomChoose:"Random Choose"},message:{decodeError:"The decoding failed and the input data format is incorrect.",drawPersonForAwardDescription:"Each time the program is executed, the program will draw the corresponding winners from the candidate list in the order in which the prizes are filled out, and the winners of each prize will be recorded.",needPersonAndAward:"Need to fill out the shortlist and prizes.",drawPersonDescription:"Each time a winner will be randomly selected from the candidate list until all winners are drawn or the user stops himself.",needPerson:"Need to fill out the shortlist.",oneDataOneLine:"Format: One data one line, not limited to Chinese and English numbers, not limited to the number of data.",oneDataOneLineEquation:"Format: A set of linear equations in a row, only the part of the coefficient is input, and several groups are input when counting a few yuan.",oneDataOneLineAndAwardNumber:"Format: One line of information, the name and quantity of the prize are separated by ',' , not limited to the number of data.",eachNumberSeparatedByBlank:"Format: Each number is separated by ','.",startDrawAfterCantEditData:"Note: After you start the draw, you will not be able to change any of the sweepstakes and only view info.",selectDrawType:"Please select draw type.",drawPersonForAward:"Extracted in order of draw.",drawPerson:"Only Draw winner."}}},fb98:function(e,t,o){}});