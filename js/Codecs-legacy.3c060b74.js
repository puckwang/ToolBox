(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Codecs"],{1985:function(t,r,e){(function(t,n){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */(function(i){r&&r.nodeType,t&&t.nodeType;var u="object"==typeof n&&n;u.global!==u&&u.window!==u&&u.self;var a,f=2147483647,s=36,c=1,h=26,l=38,p=700,d=72,g=128,b="-",y=/^xn--/,v=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=s-c,A=Math.floor,E=String.fromCharCode;function C(t){throw new RangeError(_[t])}function R(t,r){var e=t.length,n=[];while(e--)n[e]=r(t[e]);return n}function B(t,r){var e=t.split("@"),n="";e.length>1&&(n=e[0]+"@",t=e[1]),t=t.replace(w,".");var o=t.split("."),i=R(o,r).join(".");return n+i}function T(t){var r,e,n=[],o=0,i=t.length;while(o<i)r=t.charCodeAt(o++),r>=55296&&r<=56319&&o<i?(e=t.charCodeAt(o++),56320==(64512&e)?n.push(((1023&r)<<10)+(1023&e)+65536):(n.push(r),o--)):n.push(r);return n}function P(t){return R(t,function(t){var r="";return t>65535&&(t-=65536,r+=E(t>>>10&1023|55296),t=56320|1023&t),r+=E(t),r}).join("")}function x(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:s}function S(t,r){return t+22+75*(t<26)-((0!=r)<<5)}function U(t,r,e){var n=0;for(t=e?A(t/p):t>>1,t+=A(t/r);t>m*h>>1;n+=s)t=A(t/m);return A(n+(m+1)*t/(t+l))}function I(t){var r,e,n,o,i,u,a,l,p,y,v=[],w=t.length,_=0,m=g,E=d;for(e=t.lastIndexOf(b),e<0&&(e=0),n=0;n<e;++n)t.charCodeAt(n)>=128&&C("not-basic"),v.push(t.charCodeAt(n));for(o=e>0?e+1:0;o<w;){for(i=_,u=1,a=s;;a+=s){if(o>=w&&C("invalid-input"),l=x(t.charCodeAt(o++)),(l>=s||l>A((f-_)/u))&&C("overflow"),_+=l*u,p=a<=E?c:a>=E+h?h:a-E,l<p)break;y=s-p,u>A(f/y)&&C("overflow"),u*=y}r=v.length+1,E=U(_-i,r,0==i),A(_/r)>f-m&&C("overflow"),m+=A(_/r),_%=r,v.splice(_++,0,m)}return P(v)}function Y(t){var r,e,n,o,i,u,a,l,p,y,v,w,_,m,R,B=[];for(t=T(t),w=t.length,r=g,e=0,i=d,u=0;u<w;++u)v=t[u],v<128&&B.push(E(v));n=o=B.length,o&&B.push(b);while(n<w){for(a=f,u=0;u<w;++u)v=t[u],v>=r&&v<a&&(a=v);for(_=n+1,a-r>A((f-e)/_)&&C("overflow"),e+=(a-r)*_,r=a,u=0;u<w;++u)if(v=t[u],v<r&&++e>f&&C("overflow"),v==r){for(l=e,p=s;;p+=s){if(y=p<=i?c:p>=i+h?h:p-i,l<y)break;R=l-y,m=s-y,B.push(E(S(y+R%m,0))),l=A(R/m)}B.push(E(S(l,0))),i=U(e,_,n==o),e=0,++n}++e,++r}return B.join("")}function D(t){return B(t,function(t){return y.test(t)?I(t.slice(4).toLowerCase()):t})}function M(t){return B(t,function(t){return v.test(t)?"xn--"+Y(t):t})}a={version:"1.4.1",ucs2:{decode:T,encode:P},decode:I,encode:Y,toASCII:M,toUnicode:D},o=function(){return a}.call(r,e,r,t),void 0===o||(t.exports=o)})()}).call(this,e("62e4")(t),e("c8ba"))},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(t,r){module.exports=r(t)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var r={},e=0,n=t.length;e<n;e++)r[t.charAt(e)]=e;return r}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2){var r=t.charCodeAt(0);return r<128?t:r<2048?fromCharCode(192|r>>>6)+fromCharCode(128|63&r):fromCharCode(224|r>>>12&15)+fromCharCode(128|r>>>6&63)+fromCharCode(128|63&r)}r=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|r>>>18&7)+fromCharCode(128|r>>>12&63)+fromCharCode(128|r>>>6&63)+fromCharCode(128|63&r)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var r=[0,2,1][t.length%3],e=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),n=[b64chars.charAt(e>>>18),b64chars.charAt(e>>>12&63),r>=2?"=":b64chars.charAt(e>>>6&63),r>=1?"=":b64chars.charAt(63&e)];return n.join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,r){return r?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var r=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),e=r-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var r=t.length,e=r%4,n=(r>0?b64tab[t.charAt(0)]<<18:0)|(r>1?b64tab[t.charAt(1)]<<12:0)|(r>2?b64tab[t.charAt(2)]<<6:0)|(r>3?b64tab[t.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][e],o.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__("c8ba"))},"8d96":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.$t("title.codecs")))]),e("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.$t("description.codecs"))+"\n    ")]),t.isError?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.$t("message.decodeError"))+"\n    ")]):t._e(),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topText,expression:"topText"}],staticClass:"form-control",staticStyle:{"min-height":"250px"},attrs:{placeholder:t.$t("text.text")},domProps:{value:t.topText},on:{input:function(r){r.target.composing||(t.topText=r.target.value)}}})]),e("div",{staticClass:"form-group row justify-content-md-center"},[e("div",{staticClass:"form-group col-12 col-md-4 col-lg-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.codecsType,expression:"codecsType"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){var r="_value"in t?t._value:t.value;return r});t.codecsType=r.target.multiple?e:e[0]}}},t._l(t.codecsTypes,function(r){return e("option",[t._v(t._s(r))])}),0)]),e("div",{staticClass:"form-group col-12 col-md-3 col-lg-2"},[e("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.encode}},[t._v(t._s(t.$t("text.encode"))+"\n            ")])]),e("div",{staticClass:"form-group col-12 col-md-3 col-lg-2"},[e("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.decode}},[t._v(t._s(t.$t("text.decode"))+"\n            ")])])]),e("div",{staticClass:"form-group"},[e("TextAreaHasCopy",{attrs:{placeholder:t.$t("text.ciphertext"),minHeight:"250px",value:t.bottomText}})],1)])},o=[],i=e("27ae"),u=e("bd04"),a=e.n(u),f=e("1985"),s=e.n(f),c={components:{},metaInfo:function(){return{title:this.$i18n.t("title.codecs"),meta:[]}},data:function(){return{codecsTypes:["base64","base64url","base32","Punycode","Punycode (Domain)"],codecsType:"base64",topText:"",bottomText:"",isError:!1}},methods:{decode:function(){var t="";this.isError=!1;try{switch(this.codecsType){case"base64":t=i["Base64"].decode(this.topText);break;case"base64url":t=i["Base64"].decode(this.topText);break;case"base32":t=a.a.decode(this.topText);break;case"Punycode":t=s.a.decode(this.topText);break;case"Punycode (Domain)":t=s.a.toUnicode(this.topText);break}}catch(r){this.isError=!0}this.bottomText=t},encode:function(){var t="";switch(this.codecsType){case"base64":t=i["Base64"].encode(this.topText);break;case"base64url":t=i["Base64"].encodeURI(this.topText);break;case"base32":t=a.a.encode(this.topText);break;case"Punycode":t=s.a.encode(this.topText);break;case"Punycode (Domain)":t=s.a.toASCII(this.topText);break}this.bottomText=t}}},h=c,l=e("2877"),p=Object(l["a"])(h,n,o,!1,null,"4d1e86ea",null);r["default"]=p.exports},bd04:function(t,r,e){!function(r,e){t.exports=e()}(0,function(){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=1)}([function(t,r,e){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(n()<r)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=i.prototype):(null===t&&(t=new i(r)),t.length=r),t}function i(t,r,e){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return u(this,t,r,e)}function u(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?c(t,r,e):p(t,r)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,r,e,n){return a(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function s(t,r){if(a(r),t=o(t,r<0?0:0|d(r)),!i.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!i.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|b(r,e);t=o(t,n);var u=t.write(r,e);return u!==n&&(t=t.slice(0,u)),t}function h(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),i.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=i.prototype):t=h(t,r),t}function p(t,r){if(i.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Z(r.length)?o(t,0):h(t,r);if("Buffer"===r.type&&G(r.data))return h(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function b(t,r){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return J(t).length;default:if(n)return W(t).length;r=(""+r).toLowerCase(),n=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return P(this,r,e);case"ascii":return S(this,r,e);case"latin1":case"binary":return U(this,r,e);case"base64":return T(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=i.from(r,n)),i.isBuffer(r))return 0===r.length?-1:_(t,r,e,n,o);if("number"==typeof r)return r&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):_(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function _(t,r,e,n,o){function i(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}var u,a=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,f/=2,s/=2,e/=2}if(o){var c=-1;for(u=e;u<f;u++)if(i(t,u)===i(r,-1===c?0:u-c)){if(-1===c&&(c=u),u-c+1===s)return c*a}else-1!==c&&(u-=u-c),c=-1}else for(e+s>f&&(e=f-s),u=e;u>=0;u--){for(var h=!0,l=0;l<s;l++)if(i(t,u+l)!==i(r,l)){h=!1;break}if(h)return u}return-1}function m(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(r.substr(2*u,2),16);if(isNaN(a))return u;t[e+u]=a}return u}function A(t,r,e,n){return V(W(r,t.length-e),t,e,n)}function E(t,r,e,n){return V($(r),t,e,n)}function C(t,r,e,n){return E(t,r,e,n)}function R(t,r,e,n){return V(J(r),t,e,n)}function B(t,r,e,n){return V(q(r,t.length-e),t,e,n)}function T(t,r,e){return 0===r&&e===t.length?H.fromByteArray(t):H.fromByteArray(t.slice(r,e))}function P(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,a,f,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:i=t[o+1],128==(192&i)&&(f=(31&s)<<6|63&i)>127&&(c=f);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(f=(15&s)<<12|(63&i)<<6|63&u)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return x(n)}function x(t){var r=t.length;if(r<=Q)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Q));return e}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function U(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=K(t[i]);return o}function Y(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function D(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,o,u){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<u)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function L(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function k(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function F(t,r,e,n,o){return o||k(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(t,r,e,n,23,4),e+4}function N(t,r,e,n,o){return o||k(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(t,r,e,n,52,8),e+8}function j(t){if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function K(t){return t<16?"0"+t.toString(16):t.toString(16)}function W(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function $(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function q(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function J(t){return H.toByteArray(j(t))}function V(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function Z(t){return t!==t}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */var H=e(2),X=e(3),G=e(4);r.Buffer=i,r.SlowBuffer=g,r.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,r,e){return u(null,t,r,e)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,r,e){return f(null,t,r,e)},i.allocUnsafe=function(t){return s(null,t)},i.allocUnsafeSlow=function(t){return s(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,r){if(!i.isBuffer(t)||!i.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,u=Math.min(e,n);o<u;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,r){if(!G(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=i.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!i.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},i.byteLength=b,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)v(this,r,r+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)v(this,r,r+3),v(this,r+1,r+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)v(this,r,r+7),v(this,r+1,r+6),v(this,r+2,r+5),v(this,r+3,r+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):y.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,r,e,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var u=o-n,a=e-r,f=Math.min(u,a),s=this.slice(n,o),c=t.slice(r,e),h=0;h<f;++h)if(s[h]!==c[h]){u=s[h],a=c[h];break}return u<a?-1:a<u?1:0},i.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},i.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},i.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},i.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return m(this,t,r,e);case"utf8":case"utf-8":return A(this,t,r,e);case"ascii":return E(this,t,r,e);case"latin1":case"binary":return C(this,t,r,e);case"base64":return R(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;i.prototype.slice=function(t,r){var e,n=this.length;if(t=~~t,r=void 0===r?n:~~r,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),r<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),i.TYPED_ARRAY_SUPPORT)e=this.subarray(t,r),e.__proto__=i.prototype;else{var o=r-t;e=new i(o,void 0);for(var u=0;u<o;++u)e[u]=this[u+t]}return e},i.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},i.prototype.readUInt8=function(t,r){return r||D(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,r){return r||D(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,r){return r||D(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,r){return r||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,r){return r||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*r)),n},i.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i},i.prototype.readInt8=function(t,r){return r||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,r){r||D(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt16BE=function(t,r){r||D(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt32LE=function(t,r){return r||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,r){return r||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,r){return r||D(t,4,this.length),X.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,r){return r||D(t,4,this.length),X.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,r){return r||D(t,8,this.length),X.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,r){return r||D(t,8,this.length),X.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,r,e,n){t=+t,r|=0,e|=0,n||M(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},i.prototype.writeUIntBE=function(t,r,e,n){t=+t,r|=0,e|=0,n||M(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},i.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},i.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},i.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},i.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):L(this,t,r,!0),r+4},i.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},i.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);M(this,t,r,e,o-1,-o)}var i=0,u=1,a=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===a&&0!==this[r+i-1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},i.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);M(this,t,r,e,o-1,-o)}var i=e-1,u=1,a=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[r+i+1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},i.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},i.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},i.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},i.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):L(this,t,r,!0),r+4},i.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},i.prototype.writeFloatLE=function(t,r,e){return F(this,t,r,!0,e)},i.prototype.writeFloatBE=function(t,r,e){return F(this,t,r,!1,e)},i.prototype.writeDoubleLE=function(t,r,e){return N(this,t,r,!0,e)},i.prototype.writeDoubleBE=function(t,r,e){return N(this,t,r,!1,e)},i.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,u=n-e;if(this===t&&e<r&&r<n)for(o=u-1;o>=0;--o)t[o+r]=this[o+e];else if(u<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<u;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+u),r);return u},i.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var u;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(u=r;u<e;++u)this[u]=t;else{var a=i.isBuffer(t)?t:W(new i(t,n).toString()),f=a.length;for(u=0;u<e-r;++u)this[u+r]=a[u%f]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(5))},function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){function r(r){t.isBuffer(r)||(r=t.from(r));var e=i(r,5),a="";if(e){var s=void 0;for(s=0;s<e.length;s++){var h=e[s],p=void 0,d=void 0,g=void 0;for(p=0;p<8;p++){if(d=u(p),g=f(p),d>=h.length){a+=o(l,d);break}var b=h[d],y=b&n(g-5,g);if(g-5<0){var v=8-Math.abs(g-5);y=y<<5-g|(h[d+1]&n(v,8))>>v}else y>>>=g-5;a+=c[y]}}}return a}function e(r){t.isBuffer(r)||(r=t.from(r));var e=i(r,8),o="";if(e){var u=void 0;for(u=0;u<e.length;u++){var f=e[u],c=void 0,l=void 0,d=void 0;for(c=0;c<5;c++){l=a(c),d=s(c);for(var g=8-d,b=h[f[l]],y=b<<g&n(g,8);g>0;){if(l+=1,f[l]===p)return o;var v=h[f[l]];y|=g<5?v>>>5-g:v<<g-5,g-=5}o+=String.fromCharCode(y)}}}return o}function n(t,r){var e=0,n=void 0;for(t=t<0?0:t,n=t;n<r;n++)e|=1<<n;return e}function o(t,r){var e=void 0;return e=1==r?6:2==r?4:3==r?3:1,t.repeat(e)}function i(t,r){var e=[],n=Math.ceil(t.byteLength/r),o=void 0,i=void 0;for(o=0;o<n;o++)i=r*o,e.push(t.slice(i,i+r));return e}function u(t){return Math.floor(5*t/8)}function a(t){return Math.floor(8*t/5)}function f(t){return 8-5*t%8}function s(t){return 5-8*t%5}var c="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",h=function(){var t={},r=void 0;for(r=0;r<c.length;r++)t[c.charCodeAt(r)]=r;return t}(),l="=",p=61;return{encode:r,decode:e}}()}).call(r,e(0).Buffer)},function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function o(t){return 3*t.length/4-n(t)}function i(t){var r,e,o,i,u,a=t.length;i=n(t),u=new h(3*a/4-i),e=i>0?a-4:a;var f=0;for(r=0;r<e;r+=4)o=c[t.charCodeAt(r)]<<18|c[t.charCodeAt(r+1)]<<12|c[t.charCodeAt(r+2)]<<6|c[t.charCodeAt(r+3)],u[f++]=o>>16&255,u[f++]=o>>8&255,u[f++]=255&o;return 2===i?(o=c[t.charCodeAt(r)]<<2|c[t.charCodeAt(r+1)]>>4,u[f++]=255&o):1===i&&(o=c[t.charCodeAt(r)]<<10|c[t.charCodeAt(r+1)]<<4|c[t.charCodeAt(r+2)]>>2,u[f++]=o>>8&255,u[f++]=255&o),u}function u(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function a(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(u(n));return o.join("")}function f(t){for(var r,e=t.length,n=e%3,o="",i=[],u=0,f=e-n;u<f;u+=16383)i.push(a(t,u,u+16383>f?f:u+16383));return 1===n?(r=t[e-1],o+=s[r>>2],o+=s[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=s[r>>10],o+=s[r>>4&63],o+=s[r<<2&63],o+="="),i.push(o),i.join("")}r.byteLength=o,r.toByteArray=i,r.fromByteArray=f;for(var s=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)s[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),r+=u+h>=1?l/f:l*Math.pow(2,1-h),r*f>=2&&(u++,f/=2),u+h>=c?(a=0,u=c):u+h>=1?(a=(r*f-1)*Math.pow(2,o),u+=h):(a=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&a,p+=d,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;t[e+p]=255&u,p+=d,u/=256,s-=8);t[e+p-d]|=128*g}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e}])})}}]);