(function(e){function t(t){for(var o,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"8e0cbe6e","chunk-2d22d746":"d39e4c8c","chunk-52e72434":"b69f9c31","chunk-73c9992d":"39766556","chunk-a6e2c058":"42ddce1b"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-52e72434":1,"chunk-73c9992d":1,"chunk-a6e2c058":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-52e72434":"28a0ee29","chunk-73c9992d":"1fcd36ce","chunk-a6e2c058":"052edc84"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),l=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49f8":function(e,t,n){var o={"./en.json":"edd4","./tw.json":"d904"};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("fb98"),n("4989");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg sticky-top navbar-dark mb-3",staticStyle:{"background-color":"#39b366"}},[e._m(0),e._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[n("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarToolsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                        Tools\n                    ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarToolsMenu"}},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/codecs"}},[e._v(e._s(e.$t("title.codecs")))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/hash"}},[e._v(e._s(e.$t("title.hashGenerator")))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/tools/luckyDraw"}},[e._v("抽獎程式")])],1)])]),n("form",{staticClass:"form-inline"},[n("ChangeLanguage")],1)])]),n("div",{staticClass:"container-fluid"},[n("router-view")],1)])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[o("div",{staticClass:"border border-white rounded d-inline-block align-top mr-1",staticStyle:{padding:"1px"}},[o("img",{attrs:{src:n("cf05"),width:"30",height:"30"}})]),e._v("\n            Puck Toolbox\n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],staticClass:"form-control form-control-sm",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,function(t,o){return n("option",{key:"Lang"+o,domProps:{value:t.value}},[e._v(e._s(t.text))])}))])}),c=[],s={name:"locale-changer",data:function(){return{langs:[{text:"中文",value:"tw"},{text:"English",value:"en"}]}}},l=s,u=n("2877"),d=Object(u["a"])(l,i,c,!1,null,null,null);d.options.__file="ChangeLanguage.vue";var p=d.exports,h=n("b0f1"),f=n.n(h),m={metaInfo:function(){return{titleTemplate:"%s | Puck Toolbox",meta:[{property:"og:title",content:this.$i18n.t("title."+this.$route.name),template:"%s - Puck Toolbox",vmid:"og:title"},{property:"og:description",content:this.$i18n.t("description."+this.$route.name),vmid:"og:description"},{property:"og:type",content:"website"},{property:"og:image",content:"https://tool.puckwang.com"+f.a,vmid:"og:image"},{property:"og:updated_time",content:new Date},{property:"og:url",content:"https://tool.puckwang.com"+this.$route.fullPath,vmid:"og:url"},{property:"twitter:title",content:this.$i18n.t("title."+this.$route.name),template:"%s - Puck Toolbox",vmid:"twitter:title"},{property:"twitter:description",content:this.$i18n.t("description."+this.$route.name),vmid:"twitter:description"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image",content:"https://tool.puckwang.com"+f.a,vmid:"twitter:image"}]}},components:{ChangeLanguage:p},mounted:function(){}},g=m,v=Object(u["a"])(g,a,r,!1,null,null,null);v.options.__file="App.vue";var b=v.exports,y=n("8c4f"),w=n("0a89"),k=n.n(w);o["a"].use(y["a"]),o["a"].use(k.a);var _=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/tools/codecs",name:"codecs",component:function(){return n.e("chunk-a6e2c058").then(n.bind(null,"8d96"))}},{path:"/tools/hash",name:"hashGenerator",component:function(){return n.e("chunk-73c9992d").then(n.bind(null,"158e"))}},{path:"/tools/luckyDraw",name:"luckyDraw",component:function(){return n.e("chunk-52e72434").then(n.bind(null,"6d0b"))}}]}),x=_,C=n("2f62");o["a"].use(C["a"]);var T=new C["a"].Store({state:{},mutations:{},actions:{}}),$=n("1157"),E=n.n($),P=(n("4917"),n("ac6a"),n("a925"));function j(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(n)}}),t}o["a"].use(P["a"]);var O=new P["a"]({locale:"tw",fallbackLocale:"tw",messages:j()});window.$=window.jQuery=E.a,o["a"].config.productionTip=!1,new o["a"]({router:x,store:T,i18n:O,render:function(e){return e(b)}}).$mount("#app")},b0f1:function(e,t,n){e.exports=n.p+"img/logo-200x200.4d606c70.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.4d606c70.png"},d904:function(e){e.exports={title:{home:"Puck Toolbox",hashGenerator:"Hash 產生器",codecs:"資料編碼與解碼"},description:{home:"一個免費的線上工具平台",hashGenerator:"一個線上的產生器，用於產生 MD5、sha1、sha256 等雜湊值。",codecs:"一個支援多種格式的編碼與解碼工具，支援 Base32、Base64、Punycode。"},text:{text:"文字",file:"檔案",generate:"產生",encode:"編碼",decode:"解碼",autoRun:"自動執行",choose:"請選擇",hash:"雜湊值"},message:{decodeError:"解碼失敗，輸入的資料格式不正確。"}}},edd4:function(e){e.exports={title:{home:"Puck Toolbox",hashGenerator:"Hash Generator",codecs:"Encode and Decode"},description:{home:"An online free tool web.",hashGenerator:"An online generator, Use to generate MD5, sha1,sha256 or other hash value.",codecs:"A multi-format encoding and decoding tool that supports Base32, Base64, and Punycode."},text:{text:"Text",file:"File",generate:"Generate",encode:"Encode",decode:"Decode",autoRun:"Auto run",choose:"Choose",hash:"hash value"},message:{decodeError:"The decoding failed and the input data format is incorrect."}}},fb98:function(e,t,n){}});
//# sourceMappingURL=app.1f8e1238.js.map