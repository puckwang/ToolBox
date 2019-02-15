(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2196de7a"],{"07e3":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},1247:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.$t("title.passwordGenerator")))]),n("p",{staticClass:"lead"},[e._v(e._s(e.$t("description.passwordGenerator")))]),n("b",[e._v(e._s(e.$t("text.optionAtLeastOne")))]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType[0],expression:"inputType[0]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox1",value:"option1"},domProps:{checked:Array.isArray(e.inputType[0])?e._i(e.inputType[0],"option1")>-1:e.inputType[0]},on:{change:function(t){var n=e.inputType[0],o=t.target,r=!!o.checked;if(Array.isArray(n)){var i="option1",a=e._i(n,i);o.checked?a<0&&e.$set(e.inputType,0,n.concat([i])):a>-1&&e.$set(e.inputType,0,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.inputType,0,r)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox1"}},[e._v(e._s(e.$t("text.upEnglish")))])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType[1],expression:"inputType[1]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox2",value:"option2"},domProps:{checked:Array.isArray(e.inputType[1])?e._i(e.inputType[1],"option2")>-1:e.inputType[1]},on:{change:function(t){var n=e.inputType[1],o=t.target,r=!!o.checked;if(Array.isArray(n)){var i="option2",a=e._i(n,i);o.checked?a<0&&e.$set(e.inputType,1,n.concat([i])):a>-1&&e.$set(e.inputType,1,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.inputType,1,r)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox2"}},[e._v(e._s(e.$t("text.lowEnglish")))])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType[2],expression:"inputType[2]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox3",value:"option3"},domProps:{checked:Array.isArray(e.inputType[2])?e._i(e.inputType[2],"option3")>-1:e.inputType[2]},on:{change:function(t){var n=e.inputType[2],o=t.target,r=!!o.checked;if(Array.isArray(n)){var i="option3",a=e._i(n,i);o.checked?a<0&&e.$set(e.inputType,2,n.concat([i])):a>-1&&e.$set(e.inputType,2,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.inputType,2,r)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox3"}},[e._v(e._s(e.$t("text.digital")))])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType[3],expression:"inputType[3]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox4",value:"option4"},domProps:{checked:Array.isArray(e.inputType[3])?e._i(e.inputType[3],"option4")>-1:e.inputType[3]},on:{change:function(t){var n=e.inputType[3],o=t.target,r=!!o.checked;if(Array.isArray(n)){var i="option4",a=e._i(n,i);o.checked?a<0&&e.$set(e.inputType,3,n.concat([i])):a>-1&&e.$set(e.inputType,3,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.inputType,3,r)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox4"}},[e._v(e._s(e.$t("text.symbol")))])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.noConfuseType,expression:"noConfuseType"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox5",value:"option5"},domProps:{checked:Array.isArray(e.noConfuseType)?e._i(e.noConfuseType,"option5")>-1:e.noConfuseType},on:{change:function(t){var n=e.noConfuseType,o=t.target,r=!!o.checked;if(Array.isArray(n)){var i="option5",a=e._i(n,i);o.checked?a<0&&(e.noConfuseType=n.concat([i])):a>-1&&(e.noConfuseType=n.slice(0,a).concat(n.slice(a+1)))}else e.noConfuseType=r}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox5"}},[e._v(e._s(e.$t("text.noConfusingWords")))])])]),n("div",{staticClass:"form-group"},[n("div",{attrs:{for:"customRange1"}},[e._v(e._s(e.$t("text.length")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.length,expression:"length"}],staticStyle:{width:"100px"},attrs:{type:"number"},domProps:{value:e.length},on:{input:function(t){t.target.composing||(e.length=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.length,expression:"length"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"100",step:"1",id:"customRange1"},domProps:{value:e.length},on:{__r:function(t){e.length=t.target.value}}})]),n("div",{staticClass:"form-group col-12 col-md-3 col-lg-2"},[n("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:e.generatorPassword}},[e._v(e._s(e.$t("text.generate"))+"\n        ")])]),n("div",{staticClass:"form-group"},[n("InputHasCopy",{attrs:{value:e.answer}})],1)])},r=[],i=(n("57e7"),n("6b54"),n("87b3"),n("e814")),a=n.n(i),c=(n("a481"),n("cadf"),n("551c"),n("f751"),n("097d"),n("16f5")),s={components:{InputHasCopy:c["a"]},metaInfo:function(){return{title:this.$i18n.t("title.passwordGenerator"),meta:[]}},data:function(){return{length:20,inputType:[!0,!0,!0,!1],inputTypeWeight:[37,37,18,8],noConfuseType:!1,answer:""}},methods:{generatorPassword:function(){var e=this,t=["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijkLmnopqrstuvwxyz","1234567890","!@#$%^&*"],n=["OLVUI","ogqvu","01",""],o="",r="";if(e.noConfuseType)for(var i=0;i<4;i++)for(var c=0;c<n[i].length;c++)t[i]=t[i].replace(n[i].charAt(c),"");if(!isNaN(e.length)&&e.length>0){r=e.allocatedQuantity(t);for(var s=0;s<r.length;s++){var u=a()(r.charAt(s)),p=t[u],l=Math.floor(Math.random()*p.length);o+=p.charAt(l)}e.answer=o}},allocatedQuantity:function(){for(var e=this,t="",n="",o=0,r=[],i=0;i<e.inputTypeWeight.length;i++)r[i]=e.inputTypeWeight[i];for(var a=0;a<e.inputType.length;a++)e.inputType[a]?(t+=a.toString(),o+=r[a]):r[a]=0;while(n.length<e.length){for(var c=[],s=0;s<r.length;s++)for(var u=0;u<r[s];u++)c.push(s);var p=Math.floor(Math.random()*o);if(n+=c[p],n.length===e.length)for(var l=0;l<t.length;l++){var f=t.charAt(l);if(-1===n.indexOf(f)){n="";break}}}return n},copy:function(){var e=document.getElementById("passwordGenerator");e.select(),document.execCommand("Copy"),alert("已複製好，可貼粘。")}}},u=s,p=n("2877"),l=Object(p["a"])(u,o,r,!1,null,"a43a13d2",null);t["default"]=l.exports},"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},"16f5":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder,readonly:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary bg-h-main-color inputHasCopy",staticStyle:{border:"1px solid #ced4da"},attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[n("font-awesome-icon",{attrs:{icon:"copy"}})],1)])])},r=[],i=n("f904"),a=n.n(i),c={props:["placeholder","value"],data:function(){return{}},methods:{copy:function(){a()(this.value),$(".inputHasCopy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted:function(){var e=this;$('[data-toggle="tooltip"]').tooltip(),$(".inputHasCopy").on("hidden.bs.tooltip",function(){$(".inputHasCopy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},s=c,u=n("2877"),p=Object(u["a"])(s,o,r,!1,null,"8bfad630",null);t["a"]=p.exports},"1bc3":function(e,t,n){var o=n("f772");e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(e,t,n){var o=n("f772"),r=n("e53d").document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},"25eb":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"35e8":function(e,t,n){var o=n("d9f6"),r=n("aebd");e.exports=n("8e60")?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"57e7":function(e,t,n){"use strict";var o=n("5ca1"),r=n("c366")(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n("2f21")(i)),"Array",{indexOf:function(e){return a?i.apply(this,arguments)||0:r(this,e,arguments[1])}})},"584a":function(e,t){var n=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5d6b":function(e,t,n){var o=n("e53d").parseInt,r=n("a1ce").trim,i=n("e692"),a=/^[-+]?0[xX]/;e.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(e,t){var n=r(String(e),3);return o(n,t>>>0||(a.test(n)?16:10))}:o},"63b6":function(e,t,n){var o=n("e53d"),r=n("584a"),i=n("d864"),a=n("35e8"),c=n("07e3"),s="prototype",u=function(e,t,n){var p,l,f,d=e&u.F,y=e&u.G,h=e&u.S,v=e&u.P,m=e&u.B,g=e&u.W,b=y?r:r[t]||(r[t]={}),x=b[s],C=y?o:h?o[t]:(o[t]||{})[s];for(p in y&&(n=t),n)l=!d&&C&&void 0!==C[p],l&&c(b,p)||(f=l?C[p]:n[p],b[p]=y&&"function"!=typeof C[p]?n[p]:m&&l?i(f,o):g&&C[p]==f?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[s]=e[s],t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[p]=f,e&u.R&&x&&!x[p]&&a(x,p,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"6b54":function(e,t,n){"use strict";n("3846");var o=n("cb7c"),r=n("0bfb"),i=n("9e1e"),a="toString",c=/./[a],s=function(e){n("2aba")(RegExp.prototype,a,e,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):c.name!=a&&s(function(){return c.call(this)})},7445:function(e,t,n){var o=n("63b6"),r=n("5d6b");o(o.G+o.F*(parseInt!=r),{parseInt:r})},"794b":function(e,t,n){e.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"87b3":function(e,t,n){var o=Date.prototype,r="Invalid Date",i="toString",a=o[i],c=o.getTime;new Date(NaN)+""!=r&&n("2aba")(o,i,function(){var e=c.call(this);return e===e?a.call(this):r})},"8e60":function(e,t,n){e.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a1ce:function(e,t,n){var o=n("63b6"),r=n("25eb"),i=n("294c"),a=n("e692"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),l=function(e,t,n){var r={},c=i(function(){return!!a[e]()||s[e]()!=s}),u=r[e]=c?t(f):a[e];n&&(r[n]=u),o(o.P+o.F*c,"String",r)},f=l.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(p,"")),e};e.exports=l},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},b9e9:function(e,t,n){n("7445"),e.exports=n("584a").parseInt},d864:function(e,t,n){var o=n("79aa");e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},d9f6:function(e,t,n){var o=n("e4ae"),r=n("794b"),i=n("1bc3"),a=Object.defineProperty;t.f=n("8e60")?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},e4ae:function(e,t,n){var o=n("f772");e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},e53d:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,n){e.exports=n("b9e9")},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},f904:function(e,t,n){"use strict";var o=n("13d9"),r="Copy to clipboard: #{key}, Enter";function i(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function a(e,t){var n,a,c,s,u,p,l=!1;t||(t={}),n=t.debug||!1;try{c=o(),s=document.createRange(),u=document.getSelection(),p=document.createElement("span"),p.textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",document.body.appendChild(p),s.selectNode(p),u.addRange(s);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");l=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),l=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=i("message"in t?t.message:r),window.prompt(a,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),p&&document.body.removeChild(p),c()}return l}e.exports=a}}]);
//# sourceMappingURL=chunk-2196de7a-legacy.d2ff53be.js.map