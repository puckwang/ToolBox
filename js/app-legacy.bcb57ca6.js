(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)o=s[d],a[o]&&u.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-0226d7b2":"c14ed8a0","chunk-2196de7a":"8d751ed5","chunk-2d0be06f":"cc62aca9","chunk-2d21a3d2":"dea1d65f","chunk-2d22d746":"0c45f3e9","chunk-4799dfe8":"6f496996","chunk-5a7e51b7":"4593f7e2","chunk-648f5bfc":"1f28d4ab","chunk-655746c2":"0bd7a100","chunk-9fe31b40":"e51459fc"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0226d7b2":1,"chunk-648f5bfc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0226d7b2":"4b641296","chunk-2196de7a":"31d6cfe0","chunk-2d0be06f":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-4799dfe8":"31d6cfe0","chunk-5a7e51b7":"31d6cfe0","chunk-648f5bfc":"4b641296","chunk-655746c2":"31d6cfe0","chunk-9fe31b40":"31d6cfe0"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===r||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e),c=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49f8":function(e,t,n){var r={"./en.json":"edd4","./tw.json":"d904"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("fb98"),n("4989");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg sticky-top navbar-dark mb-3",staticStyle:{"background-color":"#39b366"}},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("div",{staticClass:"border border-white rounded d-inline-block align-top mr-1",staticStyle:{padding:"1px"}},[r("img",{attrs:{src:n("cf05"),width:"30",height:"30"}})]),e._v("\n            "+e._s(e.$t("title.name"))+"\n        ")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[r("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(e._s(e.$t("title.home")))])],1),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarToolsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                        "+e._s(e.$t("title.tools"))+"\n                    ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarToolsMenu"}},e._l(e.$router.options.routes.slice(3),function(t,n){return t.name?r("router-link",{key:n,staticClass:"dropdown-item",attrs:{to:t.path.replace("*",""),title:e.$t("description."+t.name)}},[e._v(e._s(e.$t("title."+t.name)))]):e._e()}),1)])]),r("form",{staticClass:"form-inline"},[r("ChangeLanguage")],1)])],1),r("div",{staticClass:"main container-fluid mb-5"},[r("router-view")],1),r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("span",{staticClass:"text-muted"},[e._v("\n                Copyright © 2018-"+e._s((new Date).getFullYear())+", Puck Wang & Yuuna Chang; all rights reserved.\n                "),r("a",{attrs:{href:"/disclaimer"}},[e._v("Disclaimer")])])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"form-control form-control-sm",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lang=t.target.multiple?n:n[0]},e.onChangeLocale]}},e._l(e.langs,function(t,r){return n("option",{key:"Lang"+r,domProps:{value:t.value}},[e._v(e._s(t.text))])}),0)])}),s=[],l={name:"locale-changer",data:function(){return{lang:this.$i18n.locale,langs:[{text:"中文",value:"tw"},{text:"English",value:"en"}]}},methods:{onChangeLocale:function(){location.href=("tw"===this.lang?"":"/"+this.lang)+this.$route.fullPath}}},c=l,d=n("2877"),u=Object(d["a"])(c,i,s,!1,null,null,null),p=u.exports,h=n("b0f1"),m=n.n(h),f={metaInfo:function(){return{titleTemplate:"%s - Puck 線上工具平台",meta:[{property:"og:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"og:title"},{property:"og:description",content:this.$i18n.t("description."+this.$route.name),vmid:"og:description"},{property:"og:type",content:"website"},{property:"og:image",content:"https://tool.puckwang.com/"+m.a,vmid:"og:image"},{property:"og:updated_time",content:new Date},{property:"og:url",content:"https://tool.puckwang.com/"+this.$route.fullPath,vmid:"og:url"},{property:"twitter:title",content:this.$i18n.t("title."+this.$route.name)+" | "+this.$i18n.t("description."+this.$route.name),template:"%s - Puck 線上工具平台",vmid:"twitter:title"},{property:"twitter:description",content:this.$i18n.t("description."+this.$route.name),vmid:"twitter:description"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image",content:"https://tool.puckwang.com/"+m.a,vmid:"twitter:image"}]}},components:{ChangeLanguage:p},mounted:function(){}},w=f,g=Object(d["a"])(w,o,a,!1,null,null,null),b=g.exports,y=(n("4f37"),n("a481"),n("8c4f")),v=n("0a89"),k=n.n(v);r["default"].use(y["a"]),r["default"].use(k.a);var C=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1"),D=new y["a"]({mode:"history",base:2===C.trim().length&&"/"!=C?"/"+C:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/disclaimer",name:"disclaimer",component:function(){return n.e("chunk-2d0be06f").then(n.bind(null,"2f05"))}},{path:"/tools/codecs",name:"codecs",component:function(){return n.e("chunk-648f5bfc").then(n.bind(null,"8d96"))}},{path:"/tools/hash",name:"hashGenerator",component:function(){return n.e("chunk-0226d7b2").then(n.bind(null,"158e"))}},{path:"/tools/luckyDraw",name:"luckyDraw",component:function(){return n.e("chunk-655746c2").then(n.bind(null,"6d0b"))}},{path:"/tools/passwordGenerator",name:"passwordGenerator",component:function(){return n.e("chunk-2196de7a").then(n.bind(null,"1247"))}},{path:"/tools/timer",name:"timer",component:function(){return n.e("chunk-4799dfe8").then(n.bind(null,"bbad"))}},{path:"/tools/qrCode",name:"qrCode",component:function(){return n.e("chunk-9fe31b40").then(n.bind(null,"935e"))}},{path:"*",component:function(){return n.e("chunk-5a7e51b7").then(n.bind(null,"9703"))}}]}),A=D,P=n("2f62");r["default"].use(P["a"]);var x=new P["a"].Store({state:{},mutations:{},actions:{}}),S=n("1157"),_=n.n(S),T=(n("4917"),n("ac6a"),n("f3e2"),n("a925"));function L(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}}),t}r["default"].use(T["a"]);var E=window.location.pathname.replace(/^\/([^\/]+).*/i,"$1"),O=new T["a"]({locale:2===E.trim().length&&"/"!=E?E:"tw",fallbackLocale:"tw",messages:L()}),$=n("ecee"),N=n("c074"),F=n("ad3d"),B=n("7f16"),j=n.n(B);window.$=window.jQuery=_.a,r["default"].config.productionTip=!1,$["c"].add(N["a"]),r["default"].use(j.a),r["default"].component("font-awesome-icon",F["a"]),new r["default"]({router:A,store:x,i18n:O,render:function(e){return e(b)}}).$mount("#app")},b0f1:function(e,t,n){e.exports=n.p+"img/logo-200x200.4d606c70.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.4d606c70.png"},d904:function(e){e.exports={title:{name:"Puck 線上工具平台",tools:"工具清單",home:"首頁",hashGenerator:"雜湊值產生器",codecs:"資料編碼與解碼",passwordGenerator:"密碼產生器",timer:"線上倒數/碼錶工具",disclaimer:"免責聲明",luckyDraw:"線上抽獎程式",qrCode:"QRCode 產生器",notFound:"404 Not Found Page"},summary:{home:"一個免費的線上工具平台",luckyDraw:"免費，支援客製化抽獎畫面",timer:"可客製化面試畫面，支援倒數、碼表、顯示當前時間的功能",qrCode:"支援多種顏色、圖案、樣式"},description:{home:"一個免費的線上工具平台",hashGenerator:"一個線上的產生器，用於產生 MD5、sha1、sha256 等雜湊值。",codecs:"一個支援多種格式的編碼與解碼工具，支援 Base32、Base64、Punycode。",passwordGenerator:"一個產生客製化密碼的工具。",timer:"一個免費的線上時間工具，支援倒數、碼表、顯示當前時間的功能，且可客製化面試畫面。",disclaimer:"免責聲明",luckyDraw:"一個免費的線上抽獎程式，支援多種資料輸入方式，可客製化抽獎畫面，非常適合各式場合抽獎使用。",qrCode:"一個免費的線上 QRCode 產生器，高度自由的客製化樣式，可改變顏色、樣式、大小，來製作屬於自己的 QRCode。",notFound:"在網際網路的旅途中難免會有偶爾 404 的時候，也必然會有 500 的時刻，但網站不會因為你的這些行為，而停止服務。"},text:{notFoundBack:"請回吧",text:"文字",file:"檔案",length:"長度",generate:"產生",encode:"編碼",decode:"解碼",autoRun:"自動執行",choose:"請選擇",hash:"雜湊值",ciphertext:"密文",clickToCopy:"點擊複製",copied:"已複製",upEnglish:"大寫英文(A..Z)",lowEnglish:"小寫英文(a..z)",digital:"數字(0..9)",symbol:"符號(!@#)",noConfusingWords:"不使用容易混淆的字(0Oo..)",optionAtLeastOne:"選項 (至少選擇一項)",timerMode:"碼表模式",countDownMode:"倒數模式",nowTimeMode:"顯示時間",fontSize:"字體大小",fontColor:"字體顏色",bgColor:"背景顏色",charStyle:"字元樣式",none:"無",theme:"主題",title:"標題",subTitle:"子標題",day:"天",hour:"時",min:"分",sec:"秒",microSec:"毫秒",displayControl:"顯示控制",separatorSymbol:"分隔符號",drawType:"設定抽獎類型",personList:"候選名單",awardList:"獎品名單",settingStyle:"設定樣式",luckyDraw:"抽獎",lookDrawInfo:"查看抽獎資訊",personListPreview:"候選名單預覽",name:"名稱",dataInput:"資料輸入",artificialInput:"手動輸入",fromFileImport:"從檔案匯入",autoGenerate:"自動產生",input:"輸入",numberRange:"數字範圍",excludeNumber:"排除數字",prefix:"前綴",suffix:"後綴",zeroPadding:"數字補零",awardListPreview:"獎品名單預覽",amount:"數量",startDraw:"開始抽獎",currentAward:"目前抽出",remainingAmount:"剩餘數量",winner:"中獎人",prepareNextDraw:"準備下一抽",endOfDraw:"抽獎結束",whetherWin:"是否已中獎",hasWon:"已中獎",drawLog:"抽獎紀錄",orderByTime:"依時間排序",orderByAward:"依獎品排序",award:"獎品",time:"時間",shareUrl:"分享連結"},message:{decodeError:"解碼失敗，輸入的資料格式不正確。",drawPersonForAwardDescription:"每次執行，程式將依照獎品填寫的順序，從候選名單中抽出對應的中獎人，並會紀錄各獎品的中獎人。",needPersonAndAward:"需填寫候選名單及獎品",drawPersonDescription:"每次將從候選清單中隨機抽出一位中獎者，直到所有中獎者被抽出或使用者自己停止為止。",needPerson:"需填寫候選名單",oneDataOneLine:"格式：一行一筆資料，不限中英文數字符號皆可，也不限資料筆數。",oneDataOneLineAndAwardNumber:" 格式：一行一筆資料，獎品名稱與數量以,分隔，不限資料筆數。",eachNumberSeparatedByBlank:"格式：每個數字以','分隔。",startDrawAfterCantEditData:"注意：開始抽獎後，將無法再更改任何抽獎資料，僅可查看。",selectDrawType:"請選擇抽獎類型",drawPersonForAward:"依照獎品順序抽出中獎者",drawPerson:"只抽中獎者"}}},edd4:function(e){e.exports={title:{name:"Puck Toolbox",tools:"Tools",home:"Home",hashGenerator:"Hash Generator",codecs:"Encode and Decode",passwordGenerator:"Password Generator",timer:"Online count down / stopwatch tool",disclaimer:"Disclaimer",luckyDraw:"Online Lucky Draw",qrCode:"QR Code Generator",notFound:"404 Not Found Page"},summary:{home:"An online free tool web.",luckyDraw:"An online free tool web.",timer:"An online free tool web.",qrCode:"Support multiple colors, patterns, styles"},description:{home:"An online free tool web.",hashGenerator:"An online generator, Use to generate MD5, sha1,sha256 or other hash value.",codecs:"A multi-format encoding and decoding tool that supports Base32, Base64, and Punycode.",passwordGenerator:"A tool for generating customized passwords.",timer:"A free online time tool that supports countdown, stopwatch, and display of current time.",disclaimer:"Disclaimer",luckyDraw:"An online lottery program that supports a variety of data input methods, suitable for all kinds of occasions.",qrCode:"A free online QRCode generator with a highly free custom style that changes color, style, and size to create your own QRCode.",notFound:"During the Internet journey, there will inevitably be see 404, or 500, but the website will not stop serving because of your actions."},text:{notFoundBack:"Back",text:"Text",file:"File",length:"Length",generate:"Generate",encode:"Encode",decode:"Decode",autoRun:"Auto run",choose:"Choose",hash:"Hash value",ciphertext:"Ciphertext",clickToCopy:"Click to copy!",copied:"Copied!",upEnglish:"Capitalized English(A..Z)",lowEnglish:"Lowercase English(a..z)",digital:"Digital(0..9)",symbol:"Symbol(!@#)",noConfusingWords:"Don't use confusing words(0Oo..)",optionAtLeastOne:"Option (select at least one item)",timerMode:"Stopwatch",countDownMode:"Count Down",nowTimeMode:"Show Now",fontSize:"Font Size",fontColor:"Font Color",bgColor:"Background Color",charStyle:"Char Style",none:"None",theme:"Theme",title:"Title",subTitle:"Subtitle",day:"Day",hour:"Hour",min:"Minute",sec:"Second",microSec:"Microsecond",displayControl:"Display Control",separatorSymbol:"Separator Symbol",drawType:"Setting Draw Type",personList:"Person List",awardList:"Award List",settingStyle:"Setting Style",luckyDraw:"Lucky Draw",lookDrawInfo:"Look Draw Info",personListPreview:"Person List Preview",name:"Name",dataInput:"Input Data",artificialInput:"Artificial Input",fromFileImport:"From file import",autoGenerate:"Auto generate",input:"Enter",numberRange:"Number Range",excludeNumber:"Exclude Number",prefix:"Prefix",suffix:"Suffix",zeroPadding:"Zero padding",awardListPreview:"Award List Preview",amount:"Amount",startDraw:"Start",currentAward:"Current Award",remainingAmount:"Remaining Amount",winner:"Winner",prepareNextDraw:"Prepare Next Draw",endOfDraw:"End of Draw",whetherWin:"Whether Win",hasWon:"Has Won",drawLog:"Draw Log",orderByTime:"Order by time",orderByAward:"Order by award",award:"Award",time:"Time",shareUrl:"Share Url"},message:{decodeError:"The decoding failed and the input data format is incorrect.",drawPersonForAwardDescription:"Each time the program is executed, the program will draw the corresponding winners from the candidate list in the order in which the prizes are filled out, and the winners of each prize will be recorded.",needPersonAndAward:"Need to fill out the shortlist and prizes.",drawPersonDescription:"Each time a winner will be randomly selected from the candidate list until all winners are drawn or the user stops himself.",needPerson:"Need to fill out the shortlist.",oneDataOneLine:"Format: One data one line, not limited to Chinese and English numbers, not limited to the number of data.",oneDataOneLineAndAwardNumber:"Format: One line of information, the name and quantity of the prize are separated by ',' , not limited to the number of data.",eachNumberSeparatedByBlank:"Format: Each number is separated by ','.",startDrawAfterCantEditData:"Note: After you start the draw, you will not be able to change any of the sweepstakes and only view info.",selectDrawType:"Please select draw type.",drawPersonForAward:"Extracted in order of draw.",drawPerson:"Only Draw winner."}}},fb98:function(e,t,n){}});
//# sourceMappingURL=app-legacy.bcb57ca6.js.map