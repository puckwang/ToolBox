(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12cc3756"],{3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},6275:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});n("6b54"),n("a481"),n("ac6a");const o=t=>{let e="";return Object.keys(t).map((n,o)=>{let r=n.replace(/[A-Z]+/g,t=>"-".concat(t.toLowerCase()));e+=`${r}: ${t[n]};`}),e},r={random:t=>{return Math.floor(Math.random()*t)}}},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),r=n("0bfb"),c=n("9e1e"),a="toString",s=/./[a],i=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?i(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?r.call(t):void 0)}):s.name!=a&&i(function(){return s.call(this)})},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("img",{staticClass:"img-fluid rounded mx-auto d-block",attrs:{src:n("cf05")}}),o("h1",{staticClass:"mt-2 text-center"},[t._v(t._s(t.$t("title.home")))]),o("p",{staticClass:"lead text-center"},[t._v("\n        "+t._s(t.$t("description.home"))+"\n    ")]),o("div",{staticClass:"row justify-content-center"},t._l(t.$router.options.routes,function(e,n){return e.meta.showIndex?o("router-link",{key:n,staticClass:"col-6 col-sm-2 text-center p-1 text-decoration-none m-2 custom-btn",attrs:{to:e.path,title:t.$t("description."+e.name)}},[o("font-awesome-icon",{staticClass:"mt-1",style:{color:t.getColor()},attrs:{icon:e.meta.icon,size:"3x"}}),o("br"),o("h6",{staticClass:"mt-1 text-dark"},[t._v(t._s(t.$t("title."+e.name)))])],1):t._e()}),1)])},r=[],c=n("be94"),a=n("2f62"),s=n("6275"),i={metaInfo(){return{title:this.$i18n.t("title.home")+" | "+this.$i18n.t("summary.home"),meta:[]}},methods:{getColor(){return this.colors[s["a"].random(this.colors.length)]}},computed:Object(c["a"])({},Object(a["c"])("Colors",["colors"]))},l=i,u=n("2877"),f=Object(u["a"])(l,o,r,!1,null,null,null);e["default"]=f.exports},be94:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}n.d(e,"a",function(){return r})}}]);