(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-004983ed":"c8e5d179","chunk-274e1eb6":"2d5c95c8","chunk-2d21a3d2":"56eab2b6","chunk-2d22d746":"d587bc54","chunk-457cfa1a":"41252bcc","chunk-47f3ddb0":"f86a1224","chunk-7771474f":"ce112470","chunk-c3ac7a6e":"68f4cf6a"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-004983ed":1,"chunk-274e1eb6":1,"chunk-457cfa1a":1,"chunk-47f3ddb0":1,"chunk-7771474f":1,"chunk-c3ac7a6e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-004983ed":"eba8a964","chunk-274e1eb6":"621d80d7","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-457cfa1a":"28a0ee29","chunk-47f3ddb0":"0e433876","chunk-7771474f":"0b646a66","chunk-c3ac7a6e":"0e433876"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),l=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49f8":function(e,t,n){var o={"./en.json":"edd4","./tw.json":"d904"};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("fb98"),n("4989");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg sticky-top navbar-dark mb-3",staticStyle:{"background-color":"#39b366"}},[e._m(0),e._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[n("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarToolsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                        Tools\n                    ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarToolsMenu"}},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/codecs"}},[e._v(e._s(e.$t("title.codecs")))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/hash"}},[e._v(e._s(e.$t("title.hashGenerator")))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/luckyDraw"}},[e._v("抽獎程式")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/passwordGenerator"}},[e._v(e._s(e.$t("title.passwordGenerator")))])],1)])]),n("form",{staticClass:"form-inline"},[n("ChangeLanguage")],1)])]),n("div",{staticClass:"main container-fluid mb-5"},[n("router-view")],1),n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("span",{staticClass:"text-muted"},[e._v("\n                Copyright © 2018-"+e._s((new Date).getFullYear())+", Puck Wang & Yuuna Chang; all rights reserved.\n                "),n("a",{attrs:{href:"/disclaimer"}},[e._v("Disclaimer")])])])])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[o("div",{staticClass:"border border-white rounded d-inline-block align-top mr-1",staticStyle:{padding:"1px"}},[o("img",{attrs:{src:n("cf05"),width:"30",height:"30"}})]),e._v("\n            Puck Toolbox\n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],staticClass:"form-control form-control-sm",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,function(t,o){return n("option",{key:"Lang"+o,domProps:{value:t.value}},[e._v(e._s(t.text))])}))])}),s=[],c={name:"locale-changer",data:function(){return{langs:[{text:"中文",value:"tw"},{text:"English",value:"en"}]}}},l=c,u=n("2877"),d=Object(u["a"])(l,i,s,!1,null,null,null);d.options.__file="ChangeLanguage.vue";var p=d.exports,h=n("b0f1"),m=n.n(h),f={metaInfo:function(){return{titleTemplate:"%s | Puck Toolbox",meta:[{property:"og:title",content:this.$i18n.t("title."+this.$route.name),template:"%s - Puck Toolbox",vmid:"og:title"},{property:"og:description",content:this.$i18n.t("description."+this.$route.name),vmid:"og:description"},{property:"og:type",content:"website"},{property:"og:image",content:"https://tool.puckwang.com"+m.a,vmid:"og:image"},{property:"og:updated_time",content:new Date},{property:"og:url",content:"https://tool.puckwang.com"+this.$route.fullPath,vmid:"og:url"},{property:"twitter:title",content:this.$i18n.t("title."+this.$route.name),template:"%s - Puck Toolbox",vmid:"twitter:title"},{property:"twitter:description",content:this.$i18n.t("description."+this.$route.name),vmid:"twitter:description"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image",content:"https://tool.puckwang.com"+m.a,vmid:"twitter:image"}]}},components:{ChangeLanguage:p},mounted:function(){}},g=f,v=Object(u["a"])(g,a,r,!1,null,null,null);v.options.__file="App.vue";var b=v.exports,w=n("8c4f"),y=n("0a89"),k=n.n(y);o["a"].use(w["a"]),o["a"].use(k.a);var C=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/disclaimer",name:"disclaimer",component:function(){return n.e("chunk-47f3ddb0").then(n.bind(null,"2f05"))}},{path:"/tools/codecs",name:"codecs",component:function(){return n.e("chunk-274e1eb6").then(n.bind(null,"8d96"))}},{path:"/tools/hash",name:"hashGenerator",component:function(){return n.e("chunk-004983ed").then(n.bind(null,"158e"))}},{path:"/tools/luckyDraw",name:"luckyDraw",component:function(){return n.e("chunk-457cfa1a").then(n.bind(null,"6d0b"))}},{path:"/tools/passwordGenerator",name:"passwordGenerator",component:function(){return n.e("chunk-7771474f").then(n.bind(null,"1247"))}},{path:"/tools/timer",name:"timer",component:function(){return n.e("chunk-c3ac7a6e").then(n.bind(null,"bbad"))}}]}),_=C,x=n("2f62");o["a"].use(x["a"]);var T=new x["a"].Store({state:{},mutations:{},actions:{}}),E=n("1157"),S=n.n(E),$=(n("4917"),n("ac6a"),n("a925"));function O(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(n)}}),t}o["a"].use($["a"]);var P=new $["a"]({locale:"tw",fallbackLocale:"tw",messages:O()}),D=n("ecee"),A=n("c074"),G=n("ad3d");window.$=window.jQuery=S.a,o["a"].config.productionTip=!1,D["c"].add(A["a"]),o["a"].component("font-awesome-icon",G["a"]),new o["a"]({router:_,store:T,i18n:P,render:function(e){return e(b)}}).$mount("#app")},b0f1:function(e,t,n){e.exports=n.p+"img/logo-200x200.4d606c70.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.4d606c70.png"},d904:function(e){e.exports={title:{home:"Puck Toolbox",hashGenerator:"Hash 產生器",codecs:"資料編碼與解碼",passwordGenerator:"密碼產生器",timer:"線上倒數/碼錶工具",disclaimer:"免責聲明"},description:{home:"一個免費的線上工具平台",hashGenerator:"一個線上的產生器，用於產生 MD5、sha1、sha256 等雜湊值。",codecs:"一個支援多種格式的編碼與解碼工具，支援 Base32、Base64、Punycode。",passwordGenerator:"一個產生客製化密碼的工具。",timer:"一個免費的線上時間工具，支援倒數、碼表、顯示當前時間的功能。",disclaimer:"免責聲明"},text:{text:"文字",file:"檔案",length:"長度",generate:"產生",encode:"編碼",decode:"解碼",autoRun:"自動執行",choose:"請選擇",hash:"雜湊值",ciphertext:"密文",clickToCopy:"點擊複製",copied:"已複製",upEnglish:"大寫英文(A..Z)",lowEnglish:"小寫英文(a..z)",digital:"數字(0..9)",symbol:"符號(!@#)",noConfusingWords:"不使用容易混淆的字(0Oo..)",optionAtLeastOne:"選項 (至少選擇一項)",timerMode:"碼表模式",countDownMode:"倒數模式",nowTimeMode:"顯示時間",fontSize:"字體大小",fontColor:"字體顏色",bgColor:"背景顏色",charStyle:"字元樣式",none:"無",theme:"主題",title:"標題",subTitle:"子標題",day:"天",hour:"時",min:"分",sec:"秒",microSec:"毫秒",displayControl:"顯示控制",separatorSymbol:"分隔符號"},message:{decodeError:"解碼失敗，輸入的資料格式不正確。"}}},edd4:function(e){e.exports={title:{home:"Puck Toolbox",hashGenerator:"Hash Generator",codecs:"Encode and Decode",passwordGenerator:"Password Generator",timer:"Online count down / stopwatch tool",disclaimer:"Disclaimer"},description:{home:"An online free tool web.",hashGenerator:"An online generator, Use to generate MD5, sha1,sha256 or other hash value.",codecs:"A multi-format encoding and decoding tool that supports Base32, Base64, and Punycode.",passwordGenerator:"A tool for generating customized passwords.",timer:"A free online time tool that supports countdown, stopwatch, and display of current time.",disclaimer:"Disclaimer"},text:{text:"Text",file:"File",length:"Length",generate:"Generate",encode:"Encode",decode:"Decode",autoRun:"Auto run",choose:"Choose",hash:"Hash value",ciphertext:"Ciphertext",clickToCopy:"Click to copy!",copied:"Copied!",upEnglish:"Capitalized English(A..Z)",lowEnglish:"Lowercase English(a..z)",digital:"Digital(0..9)",symbol:"Symbol(!@#)",noConfusingWords:"Don't use confusing words(0Oo..)",optionAtLeastOne:"Option (select at least one item)",timerMode:"Stopwatch",countDownMode:"Count Down",nowTimeMode:"Show Now",fontSize:"Font Size",fontColor:"Font Color",bgColor:"Background Color",charStyle:"Char Style",none:"None",theme:"Theme",title:"Title",subTitle:"Subtitle",day:"天",hour:"hour",min:"minute",sec:"second",microSec:"microsecond",displayControl:"Display Control",separatorSymbol:"Separator Symbol"},message:{decodeError:"The decoding failed and the input data format is incorrect."}}},fb98:function(e,t,n){}});
//# sourceMappingURL=app.8dacc387.js.map