(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],c=0,f=[];c<i.length;c++)o=i[c],s[o]&&f.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);v&&v(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec1e39f7"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=s[e]=[t,a]});t.push(r[2]=a);var n,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e),n=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");o.type=a,o.request=n,r[1](o)}s[e]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:u})},12e4);u.onerror=u.onload=n,l.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var v=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d"),r("fb98"),r("4989");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-wrapper chiller-theme toggled",attrs:{id:"app"}},[r("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[r("div",{staticClass:"sidebar-content"},[e._m(0),r("div",{staticClass:"sidebar-brand"},[e._m(1),r("router-link",{attrs:{to:"/"}},[e._v("Puck Toolbox")])],1),r("div",{staticClass:"sidebar-menu"},[r("ul",[e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),r("li",[r("router-link",{attrs:{to:"/about"}},[r("i",{staticClass:"fa fa-calendar"}),r("span",[e._v("About me")])])],1)])])])]),r("main",{staticClass:"page-content"},[r("div",{staticClass:"container-fluid"},[r("router-view")],1)])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"toggle-sidebar"}},[r("div"),r("div"),r("div")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{staticClass:"img-responsive img-rounded",attrs:{src:r("cf05"),alt:"Logo"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"header-menu"},[r("span",[e._v("Tools")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-dropdown"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-tachometer-alt"}),r("span",[e._v("Dashboard")]),r("span",{staticClass:"badge badge-pill badge-danger"},[e._v("New")])]),r("div",{staticClass:"sidebar-submenu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("Dashboard 1\n                                        "),r("span",{staticClass:"badge badge-pill badge-success"},[e._v("Pro")])])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Dashboard 2")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Dashboard 3")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-dropdown"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-shopping-cart"}),r("span",[e._v("E-commerce")]),r("span",{staticClass:"badge badge-pill badge-primary"},[e._v("3")])]),r("div",{staticClass:"sidebar-submenu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("Products\n\n                                    ")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Orders")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Credit cart")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-dropdown"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"far fa-gem"}),r("span",[e._v("Components")])]),r("div",{staticClass:"sidebar-submenu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("General")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Panels")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Tables")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Icons")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Forms")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-dropdown"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-chart-line"}),r("span",[e._v("Charts")])]),r("div",{staticClass:"sidebar-submenu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("Pie chart")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Line chart")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Bar chart")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Histogram")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-dropdown"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-globe"}),r("span",[e._v("Maps")])]),r("div",{staticClass:"sidebar-submenu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("Google maps")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("Open street map")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"header-menu"},[r("span",[e._v("About")])])}],o={mounted:function(){$(".sidebar-dropdown > a").click(function(){$(".sidebar-submenu").slideUp(200),$(this).parent().hasClass("active")?($(".sidebar-dropdown").removeClass("active"),$(this).parent().removeClass("active")):($(".sidebar-dropdown").removeClass("active"),$(this).next(".sidebar-submenu").slideDown(200),$(this).parent().addClass("active"))}),$("#toggle-sidebar").click(function(){$(".page-wrapper").toggleClass("toggled")})}},i=o,l=r("2877"),u=Object(l["a"])(i,s,n,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,v=r("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js AppWelcome to Your Vue.js AppWelcome to Your Vue.js AppWelcome to Your Vue.js AppWelcome to Your Vue.js App"}}),a("input",{staticClass:"btn btn-danger",attrs:{type:"button",value:"Test Button"}})],1)},p=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},m=_,b=(r("b0df"),Object(l["a"])(m,d,h,!1,null,"0495e2ba",null));b.options.__file="HelloWorld.vue";var g=b.exports,C={name:"home",components:{HelloWorld:g}},w=C,j=Object(l["a"])(w,f,p,!1,null,null,null);j.options.__file="Home.vue";var y=j.exports;a["a"].use(v["a"]);var k=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),E=r("2f62");a["a"].use(E["a"]);var x=new E["a"].Store({state:{},mutations:{},actions:{}}),O=r("1157"),P=r.n(O);window.$=window.jQuery=P.a,a["a"].config.productionTip=!1,new a["a"]({router:k,store:x,render:function(e){return e(c)}}).$mount("#app")},a183:function(e,t,r){},b0df:function(e,t,r){"use strict";var a=r("a183"),s=r.n(a);s.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.7d9d485d.png"},fb98:function(e,t,r){}});
//# sourceMappingURL=app.9a9da0fb.js.map