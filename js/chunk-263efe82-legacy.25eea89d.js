(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-263efe82"],{"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],o=0;o<e.rangeCount;o++)s.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},"16f5":function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder,readonly:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary bg-h-main-color inputHasCopy",staticStyle:{border:"1px solid #ced4da"},attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.$t("text.clickToCopy")},on:{click:e.copy}},[s("font-awesome-icon",{attrs:{icon:"copy"}})],1)])])},i=[],r=s("f904"),n=s.n(r),a={props:["placeholder","value"],data:function(){return{}},methods:{copy:function(){n()(this.value),$(".inputHasCopy").attr("title",this.$i18n.t("text.copied")).tooltip("_fixTitle").tooltip("show")}},computed:{},watch:{},components:{},mounted:function(){var e=this;$('[data-toggle="tooltip"]').tooltip(),$(".inputHasCopy").on("hidden.bs.tooltip",function(){$(".inputHasCopy").attr("title",e.$i18n.t("text.clickToCopy")).tooltip("_fixTitle")})}},l=a,c=s("2877"),u=Object(c["a"])(l,o,i,!1,null,"8bfad630",null);t["a"]=u.exports},"522c":function(e,t,s){"use strict";e.exports=i;var o=[""," ","  ","   ","    ","     ","      ","       ","        ","         "];function i(e,t,s){if(e+="",t-=e.length,t<=0)return e;if(s||0===s||(s=" "),s+=""," "===s&&t<10)return o[t]+e;var i="";while(1){if(1&t&&(i+=s),t>>=1,!t)break;s+=s}return i+e}},"7c5c":function(e,t,s){(function(e,s){s(t)})(0,function(e){"use strict";var t=new WeakMap,s=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=function(e,s){return t.set(e,s),s},i=function(e){var i=t.get(e),r=void 0===i?e.size:i>2147483648?0:i+1;if(!e.has(r))return o(e,r);if(e.size<1073741824){while(e.has(r))r=Math.floor(2147483648*Math.random());return o(e,r)}if(e.size>s)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");while(e.has(r))r=Math.floor(Math.random()*s);return o(e,r)},r=function(e){var t=i(e);return e.add(t),t};e.addUniqueNumber=r,e.generateUniqueNumber=i,Object.defineProperty(e,"__esModule",{value:!0})})},"93bf":function(e,t,s){
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},s=e.exports,o="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=0,i=s.length,r={};o<i;o++)if(e=s[o],e&&e[1]in t){for(o=0;o<e.length;o++)r[s[0][o]]=e[o];return r}return!1}(),r={change:i.fullscreenchange,error:i.fullscreenerror},n={request:function(e){return new Promise(function(s){var r=i.requestFullscreen,n=function(){this.off("change",n),s()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[r]():e[r](o?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",n)}.bind(this))},exit:function(){return new Promise(function(e){var s=function(){this.off("change",s),e()}.bind(this);t[i.exitFullscreen](),this.on("change",s)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,s){var o=r[e];o&&t.addEventListener(o,s,!1)},off:function(e,s){var o=r[e];o&&t.removeEventListener(o,s,!1)},raw:i};i?(Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),s?e.exports=n:window.screenfull=n):s?e.exports=!1:window.screenfull=!1})()},bbad:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[s("div",[s("h1",[e._v(e._s(e.$t("title.timer")))]),s("p",{staticClass:"lead"},[e._v("\n                "+e._s(e.$t("description.timer"))+"\n            ")])]),s("div",{staticClass:"m-0 text-right"},[s("button",{staticClass:"btn btn-link btn-lg",attrs:{type:"button"},on:{click:e.fullscreen}},[s("font-awesome-icon",{attrs:{icon:"expand"}})],1),s("button",{staticClass:"btn btn-link btn-lg",attrs:{type:"button","data-toggle":"collapse","data-target":"#timerSetting","aria-expanded":"false","aria-controls":"timerSetting"}},[s("font-awesome-icon",{attrs:{icon:"sliders-h"}})],1)]),s("div",{staticClass:"collapse bg-light pb-3 pt-3 mb-2",attrs:{id:"timerSetting"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-3"},[s("div",{staticClass:"btn-group btn-group-toggle"},[s("label",{staticClass:"btn btn-outline-secondary",class:{active:"timer"===e.timerType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timerType,expression:"timerType"}],attrs:{type:"radio",name:"timerType",autocomplete:"off",value:"timer"},domProps:{checked:e._q(e.timerType,"timer")},on:{change:function(t){e.timerType="timer"}}}),e._v(e._s(e.$t("text.timerMode"))+"\n                            ")]),s("label",{staticClass:"btn btn-outline-secondary",class:{active:"countDown"===e.timerType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timerType,expression:"timerType"}],attrs:{type:"radio",name:"timerType",autocomplete:"off",value:"countDown"},domProps:{checked:e._q(e.timerType,"countDown")},on:{change:function(t){e.timerType="countDown"}}}),e._v(e._s(e.$t("text.countDownMode"))+"\n                            ")]),s("label",{staticClass:"btn btn-outline-secondary",class:{active:"now"===e.timerType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.timerType,expression:"timerType"}],attrs:{type:"radio",name:"timerType",autocomplete:"off",value:"now"},domProps:{checked:e._q(e.timerType,"now")},on:{change:function(t){e.timerType="now"}}}),e._v(e._s(e.$t("text.nowTimeMode"))+"\n                            ")])])]),s("div",{staticClass:"col-12 col-md-4 mt-1"},[s("label",{attrs:{for:"change-font-size"}},[e._v(e._s(e.$t("text.fontSize")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.fontSize,expression:"style.fontSize"}],staticClass:"custom-range",attrs:{type:"range",min:"1",max:"20",step:"0.5",id:"change-font-size"},domProps:{value:e.style.fontSize},on:{__r:function(t){return e.$set(e.style,"fontSize",t.target.value)}}})]),s("div",{staticClass:"col-12 col-md-4 mt-1"},[s("label",{attrs:{for:"choose-bg-color"}},[e._v(e._s(e.$t("text.bgColor")))]),s("div",{staticClass:"input-group-sm row"},[s("div",{staticClass:"col-8 pr-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.bgColor,expression:"style.bgColor"}],staticClass:"form-control",attrs:{type:"input",id:"choose-bg-color"},domProps:{value:e.style.bgColor},on:{input:function(t){t.target.composing||e.$set(e.style,"bgColor",t.target.value)}}})]),s("div",{staticClass:"col-2 pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.bgColor,expression:"style.bgColor"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:e.style.bgColor},on:{input:function(t){t.target.composing||e.$set(e.style,"bgColor",t.target.value)}}})])])]),s("div",{staticClass:"col-12 col-md-4 mt-1"},[s("label",{attrs:{for:"choose-font-color"}},[e._v(e._s(e.$t("text.fontColor")))]),s("div",{staticClass:"input-group-sm row"},[s("div",{staticClass:"col-8 pr-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.fontColor,expression:"style.fontColor"}],staticClass:"form-control",attrs:{type:"input",id:"choose-font-color"},domProps:{value:e.style.fontColor},on:{input:function(t){t.target.composing||e.$set(e.style,"fontColor",t.target.value)}}})]),s("div",{staticClass:"col-2 pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.fontColor,expression:"style.fontColor"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:e.style.fontColor},on:{input:function(t){t.target.composing||e.$set(e.style,"fontColor",t.target.value)}}})])])]),s("div",{staticClass:"col-12 col-md-6 mt-1"},[s("label",[e._v(e._s(e.$t("text.charStyle")))]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"btn-group btn-group-toggle",staticStyle:{"overflow-x":"auto"}},[s("label",{staticClass:"btn btn-outline-info",class:{active:"0"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"0",checked:""},domProps:{checked:e._q(e.style.charId,"0")},on:{change:function(t){return e.$set(e.style,"charId","0")}}}),e._v(e._s(e.$t("text.none"))+"\n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"{"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"{"},domProps:{checked:e._q(e.style.charId,"{")},on:{change:function(t){return e.$set(e.style,"charId","{")}}}),e._v(" {  } \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"{{"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"{{"},domProps:{checked:e._q(e.style.charId,"{{")},on:{change:function(t){return e.$set(e.style,"charId","{{")}}}),e._v(" "),s("span",{pre:!0},[e._v("{{  }}")]),e._v(" \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"["===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"["},domProps:{checked:e._q(e.style.charId,"[")},on:{change:function(t){return e.$set(e.style,"charId","[")}}}),e._v(" [   ] \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"<"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"<"},domProps:{checked:e._q(e.style.charId,"<")},on:{change:function(t){return e.$set(e.style,"charId","<")}}}),e._v(" <  > \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"/"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"/"},domProps:{checked:e._q(e.style.charId,"/")},on:{change:function(t){return e.$set(e.style,"charId","/")}}}),e._v(" /  / \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"//"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"//"},domProps:{checked:e._q(e.style.charId,"//")},on:{change:function(t){return e.$set(e.style,"charId","//")}}}),e._v(" //  // \n                                ")]),s("label",{staticClass:"btn btn-outline-info",class:{active:"\\/"===e.style.charId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.charId,expression:"style.charId"}],attrs:{type:"radio",name:"char",autocomplete:"off",value:"\\/"},domProps:{checked:e._q(e.style.charId,"\\/")},on:{change:function(t){return e.$set(e.style,"charId","\\/")}}}),e._v(" \\  / \n                                ")])])])]),s("div",{staticClass:"col-12 col-md-6 mt-1"},[s("label",[e._v(e._s(e.$t("text.theme")))]),s("div",{staticClass:"input-group",staticStyle:{"overflow-x":"auto"}},e._l(e.supportStyleList,function(t,o){return s("div",[s("button",{staticClass:"btn btn-outline-dark mr-1",style:{color:t.color,backgroundColor:t.bgColor},attrs:{type:"button"},on:{click:function(t){return e.setColor(o)}}},[e._v("\n                                    "+e._s(e.getChar[0])+" "+e._s(e.getChar[1])+"\n                                ")])])}),0)]),s("div",{staticClass:"col-12 col-md-5 mt-1"},[s("label",{attrs:{for:"title-input"}},[e._v(e._s(e.$t("text.title")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.title,expression:"style.title"}],staticClass:"form-control",attrs:{type:"input",id:"title-input"},domProps:{value:e.style.title},on:{input:function(t){t.target.composing||e.$set(e.style,"title",t.target.value)}}})]),s("div",{staticClass:"col-12 offset-md-1 col-md-5 mt-1"},[s("label",{attrs:{for:"subtitle-input"}},[e._v(e._s(e.$t("text.subTitle")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.subTitle,expression:"style.subTitle"}],staticClass:"form-control",attrs:{type:"input",id:"subtitle-input"},domProps:{value:e.style.subTitle},on:{input:function(t){t.target.composing||e.$set(e.style,"subTitle",t.target.value)}}})]),"countDown"===e.timerType?s("div",{staticClass:"form-group col-12 col-md-3 mt-1"},[s("label",{attrs:{for:"dayInput"}},[e._v(e._s(e.$t("text.day")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.countDown.day,expression:"countDown.day"}],staticClass:"form-control",attrs:{id:"dayInput"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.countDown,"day",t.target.multiple?s:s[0])},e.renderInitTime]}},e._l(366,function(t){return s("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])}),0)]):e._e(),"countDown"===e.timerType?s("div",{staticClass:"form-group col-12 col-md-3 mt-1"},[s("label",{attrs:{for:"hourInput"}},[e._v(e._s(e.$t("text.hour")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.countDown.hour,expression:"countDown.hour"}],staticClass:"form-control",attrs:{id:"hourInput"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.countDown,"hour",t.target.multiple?s:s[0])},e.renderInitTime]}},e._l(24,function(t){return s("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])}),0)]):e._e(),"countDown"===e.timerType?s("div",{staticClass:"form-group col-12 col-md-3 mt-1"},[s("label",{attrs:{for:"minInput"}},[e._v(e._s(e.$t("text.min")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.countDown.min,expression:"countDown.min"}],staticClass:"form-control",attrs:{id:"minInput"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.countDown,"min",t.target.multiple?s:s[0])},e.renderInitTime]}},e._l(60,function(t){return s("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])}),0)]):e._e(),"countDown"===e.timerType?s("div",{staticClass:"form-group col-12 col-md-3 mt-1"},[s("label",{attrs:{for:"secInput"}},[e._v(e._s(e.$t("text.sec")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.countDown.sec,expression:"countDown.sec"}],staticClass:"form-control",attrs:{id:"secInput"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.countDown,"sec",t.target.multiple?s:s[0])},e.renderInitTime]}},e._l(60,function(t){return s("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])}),0)]):e._e(),s("div",{staticClass:"col-12 col-md-6 mt-1"},[s("label",[e._v(e._s(e.$t("text.displayControl")))]),s("div",[s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.day,expression:"display.day"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"displayDay"},domProps:{checked:Array.isArray(e.display.day)?e._i(e.display.day,"true")>-1:e.display.day},on:{change:function(t){var s=e.display.day,o=t.target,i=!!o.checked;if(Array.isArray(s)){var r="true",n=e._i(s,r);o.checked?n<0&&e.$set(e.display,"day",s.concat([r])):n>-1&&e.$set(e.display,"day",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.display,"day",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"displayDay"}},[e._v("\n                                    "+e._s(e.$t("text.day"))+"\n                                ")])]),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.hour,expression:"display.hour"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"displayHour"},domProps:{checked:Array.isArray(e.display.hour)?e._i(e.display.hour,"true")>-1:e.display.hour},on:{change:function(t){var s=e.display.hour,o=t.target,i=!!o.checked;if(Array.isArray(s)){var r="true",n=e._i(s,r);o.checked?n<0&&e.$set(e.display,"hour",s.concat([r])):n>-1&&e.$set(e.display,"hour",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.display,"hour",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"displayHour"}},[e._v("\n                                    "+e._s(e.$t("text.hour"))+"\n                                ")])]),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.min,expression:"display.min"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"displayMin"},domProps:{checked:Array.isArray(e.display.min)?e._i(e.display.min,"true")>-1:e.display.min},on:{change:function(t){var s=e.display.min,o=t.target,i=!!o.checked;if(Array.isArray(s)){var r="true",n=e._i(s,r);o.checked?n<0&&e.$set(e.display,"min",s.concat([r])):n>-1&&e.$set(e.display,"min",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.display,"min",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"displayMin"}},[e._v("\n                                    "+e._s(e.$t("text.min"))+"\n                                ")])]),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.sec,expression:"display.sec"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"displaySec"},domProps:{checked:Array.isArray(e.display.sec)?e._i(e.display.sec,"true")>-1:e.display.sec},on:{change:function(t){var s=e.display.sec,o=t.target,i=!!o.checked;if(Array.isArray(s)){var r="true",n=e._i(s,r);o.checked?n<0&&e.$set(e.display,"sec",s.concat([r])):n>-1&&e.$set(e.display,"sec",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.display,"sec",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"displaySec"}},[e._v("\n                                    "+e._s(e.$t("text.sec"))+"\n                                ")])]),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.microSec,expression:"display.microSec"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"displaymicrosec"},domProps:{checked:Array.isArray(e.display.microSec)?e._i(e.display.microSec,"true")>-1:e.display.microSec},on:{change:function(t){var s=e.display.microSec,o=t.target,i=!!o.checked;if(Array.isArray(s)){var r="true",n=e._i(s,r);o.checked?n<0&&e.$set(e.display,"microSec",s.concat([r])):n>-1&&e.$set(e.display,"microSec",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.display,"microSec",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"displaymicrosec"}},[e._v("\n                                    "+e._s(e.$t("text.microSec"))+"\n                                ")])])])]),s("div",{staticClass:"col-12 col-md-6 mt-1"},[s("label",[e._v(e._s(e.$t("text.separatorSymbol")))]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"btn-group btn-group-toggle",staticStyle:{"overflow-x":"auto"}},e._l(e.separatorSymbol,function(t,o){return s("label",{staticClass:"btn btn-outline-success",class:{active:e.style.separatorSymbolId===o}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.style.separatorSymbolId,expression:"style.separatorSymbolId"}],attrs:{type:"radio",name:"char",autocomplete:"off",checked:""},domProps:{value:o,checked:e._q(e.style.separatorSymbolId,o)},on:{change:function(t){return e.$set(e.style,"separatorSymbolId",o)}}}),e._v(e._s(t.hour)+" "+e._s(t.min)+" "+e._s(t.sec)+"\n                                ")])}),0)])]),s("div",{staticClass:"col-12 mt-4"},[s("label",[e._v(e._s(e.$t("text.shareUrl")))]),s("InputHasCopy",{attrs:{value:e.getShareUrl}})],1)])])])]),s("div",{staticClass:"d-flex justify-content-center align-items-center",style:{backgroundColor:e.style.bgColor,color:e.style.fontColor},attrs:{id:"timerBody"}},[s("div",{staticClass:"flex-column align-items-center"},[s("div",{staticClass:"display-1 d-flex align-items-stretch"},[s("div",{staticClass:"align-self-center",staticStyle:{"font-weight":"lighter"},style:{fontSize:2.2*e.style.fontSize+"vw"}},[e._v("\n                    "+e._s(e.getChar[0])+" \n                ")]),s("div",{staticClass:"align-self-center flex-column"},[s("div",{staticClass:"text-center",style:{fontSize:.3*e.style.fontSize+"vw"}},[e._v("\n                        "+e._s(e.style.title)+"\n                    ")]),s("div",{staticClass:"text-center text-monospace"},[e.display.day&&"now"!==e.timerType?s("span",{style:{fontSize:e.style.fontSize+"vw"}},[e._v(e._s(e.time.day))]):e._e(),e.display.day&&(e.display.hour||e.display.min||e.display.sec)&&"now"!==e.timerType?s("span",{staticStyle:{opacity:"0.5"},style:{fontSize:.5*e.style.fontSize+"vw"}},[e._v(e._s(e.separatorSymbol[e.style.separatorSymbolId].day))]):e._e(),e.display.hour?s("span",{style:{fontSize:e.style.fontSize+"vw"}},[e._v(e._s(e.getHour))]):e._e(),e.display.hour&&(e.display.min||e.display.sec)?s("span",{staticStyle:{opacity:"0.5"},style:{fontSize:.5*e.style.fontSize+"vw"}},[e._v(e._s(e.separatorSymbol[e.style.separatorSymbolId].hour))]):e._e(),e.display.min?s("span",{style:{fontSize:e.style.fontSize+"vw"}},[e._v(e._s(e.getMin))]):e._e(),e.display.min&&e.display.sec?s("span",{staticStyle:{opacity:"0.5"},style:{fontSize:.5*e.style.fontSize+"vw"}},[e._v(e._s(e.separatorSymbol[e.style.separatorSymbolId].min))]):e._e(),e.display.sec?s("span",{style:{fontSize:e.style.fontSize+"vw"}},[e._v(e._s(e.getSec))]):e._e(),e.display.min&&e.display.sec?s("span",{staticStyle:{opacity:"0.5"},style:{fontSize:.5*e.style.fontSize+"vw"}},[e._v(e._s(e.separatorSymbol[e.style.separatorSymbolId].sec))]):e._e(),e.display.microSec?s("span",{staticStyle:{opacity:"0.5"},style:{fontSize:.5*e.style.fontSize+"vw"}},[e._v(e._s(e.separatorSymbol[e.style.separatorSymbolId].microSec)+e._s(e.getMicroSec))]):e._e()]),s("div",{staticClass:"text-center",staticStyle:{opacity:"0.5"},style:{fontSize:.15*e.style.fontSize+"vw"}},[e._v("\n                        "+e._s(e.style.subTitle)+"\n                    ")]),s("div",{staticClass:"text-center mt-3",style:{fontSize:"40px"}},[this.isPause?s("font-awesome-icon",{staticClass:"btn-icon fa-1x",attrs:{icon:"play"},on:{click:e.play}}):e._e(),this.isPause?e._e():s("font-awesome-icon",{staticClass:"btn-icon fa-1x",attrs:{icon:"pause"},on:{click:e.pause}}),e._v("\n                          \n                        "),s("font-awesome-icon",{staticClass:"btn-icon fa-1x",attrs:{icon:"flag"},on:{click:e.fetch}}),e._v("\n                          \n                        "),"now"!==e.timerType?s("font-awesome-icon",{staticClass:"btn-icon fa-1x",attrs:{icon:"undo"},on:{click:e.reset}}):e._e()],1)]),s("div",{staticClass:"align-self-center",staticStyle:{"font-weight":"lighter"},style:{fontSize:2.2*e.style.fontSize+"vw"}},[e._v("\n                     "+e._s(e.getChar[1])+"\n                ")])]),s("div",{staticClass:"m-auto col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-2 offset-xl-5",staticStyle:{"overflow-y":"auto",height:"20vh","min-width":"max-content"}},[s("div",{staticClass:"list-group list-group-flush text-center"},e._l(e.timeLog,function(t,o){return s("button",{staticClass:"list-group-item list-group-item-action",style:{fontSize:.2*e.style.fontSize+"vw",backgroundColor:e.style.bgColor,color:e.style.fontColor},attrs:{type:"button"}},[e._v("\n                        "+e._s("#"+o+" - "+t)+"\n                    ")])}),0)])])])])},i=[],r=s("93bf"),n=s.n(r),a=s("522c"),l=s.n(a),c=s("7c5c");const u=e=>{return void 0!==e.method&&"call"===e.method},m=e=>{return null===e.error&&"number"===typeof e.id},d=e=>{const t=new Map,s=new Map,o=new Map,i=new Worker(e);i.addEventListener("message",({data:e})=>{if(u(e)){const{params:{timerId:i,timerType:r}}=e;if("interval"===r){const e=t.get(i);if("number"===typeof e){const t=o.get(e);if(void 0===t||t.timerId!==i||t.timerType!==r)throw new Error("The timer is in an undefined state.")}else{if("undefined"===typeof e)throw new Error("The timer is in an undefined state.");e()}}else if("timeout"===r){const e=s.get(i);if("number"===typeof e){const t=o.get(e);if(void 0===t||t.timerId!==i||t.timerType!==r)throw new Error("The timer is in an undefined state.")}else{if("undefined"===typeof e)throw new Error("The timer is in an undefined state.");e(),s.delete(i)}}}else{if(!m(e)){const{error:{message:t}}=e;throw new Error(t)}{const{id:i}=e,r=o.get(i);if(void 0===r)throw new Error("The timer is in an undefined state.");{const{timerId:e,timerType:n}=r;o.delete(i),"interval"===n?t.delete(e):s.delete(e)}}}});const r=e=>{const s=Object(c["generateUniqueNumber"])(o);o.set(s,{timerId:e,timerType:"interval"}),t.set(e,s),i.postMessage({id:s,method:"clear",params:{timerId:e,timerType:"interval"}})},n=e=>{const t=Object(c["generateUniqueNumber"])(o);o.set(t,{timerId:e,timerType:"timeout"}),s.set(e,t),i.postMessage({id:t,method:"clear",params:{timerId:e,timerType:"timeout"}})},a=(e,s)=>{const o=Object(c["generateUniqueNumber"])(t);return t.set(o,()=>{e(),"function"===typeof t.get(o)&&i.postMessage({id:null,method:"set",params:{delay:s,now:performance.now(),timerId:o,timerType:"interval"}})}),i.postMessage({id:null,method:"set",params:{delay:s,now:performance.now(),timerId:o,timerType:"interval"}}),o},l=(e,t)=>{const o=Object(c["generateUniqueNumber"])(s);return s.set(o,e),i.postMessage({id:null,method:"set",params:{delay:t,now:performance.now(),timerId:o,timerType:"timeout"}}),o};return{clearInterval:r,clearTimeout:n,setInterval:a,setTimeout:l}},p='!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=new Map,o=new Map,i=(e,t)=>{let r,n;if("performance"in self){const o=performance.now();r=o,n=e-Math.max(0,o-t)}else r=Date.now(),n=e;return{expected:r+n,remainingDelay:n}},s=(e,t,r,n)=>{const o="performance"in self?performance.now():Date.now();o>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:n}}):e.set(t,setTimeout(s,r-o,e,t,r,n))};addEventListener("message",e=>{let t=e.data;try{if("clear"===t.method){const e=t.id,r=t.params,i=r.timerId,s=r.timerType;if("interval"===s)(e=>{const t=n.get(e);if(void 0===t)throw new Error(\'There is no interval scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),n.delete(e)})(i),postMessage({error:null,id:e});else{if("timeout"!==s)throw new Error(\'The given type "\'.concat(s,\'" is not supported\'));(e=>{const t=o.get(e);if(void 0===t)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),o.delete(e)})(i),postMessage({error:null,id:e})}}else{if("set"!==t.method)throw new Error(\'The given method "\'.concat(t.method,\'" is not supported\'));{const e=t.params,r=e.delay,a=e.now,l=e.timerId,c=e.timerType;if("interval"===c)((e,t,r)=>{const o=i(e,r),a=o.expected,l=o.remainingDelay;n.set(t,setTimeout(s,l,n,t,a,"interval"))})(r,l,a);else{if("timeout"!==c)throw new Error(\'The given type "\'.concat(c,\'" is not supported\'));((e,t,r)=>{const n=i(e,r),a=n.expected,l=n.remainingDelay;o.set(t,setTimeout(s,l,o,t,a,"timeout"))})(r,l,a)}}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}]);',y=new Blob([p],{type:"application/javascript; charset=utf-8"}),f=URL.createObjectURL(y),h=d(f),v=h.clearInterval,g=(h.clearTimeout,h.setInterval);h.setTimeout;URL.revokeObjectURL(f);var b=s("16f5"),w={metaInfo:function(){return{title:this.$i18n.t("title.timer"),meta:[]}},data:function(){return{timerType:"timer",supportStyleList:[{color:"#000000",bgColor:"#FFFFFF"},{color:"#FFFFFF",bgColor:"#000000"},{color:"#2fff5a",bgColor:"#000000"},{color:"#FFF700",bgColor:"#2980B9"},{color:"#E19C23",bgColor:"#2368E1"},{color:"#E12F23",bgColor:"#23D5E1"},{color:"#8223E1",bgColor:"#82E123"},{color:"#2EA064",bgColor:"#A02E6A"},{color:"#a02427",bgColor:"#96a051"}],separatorSymbol:[{day:":",hour:":",min:":",sec:"",microSec:"."},{day:"D",hour:"H",min:"M",sec:"S ",microSec:""},{day:"天",hour:"時",min:"分",sec:"秒 ",microSec:""},{day:"Day",hour:"Hour",min:"Min",sec:"Sec ",microSec:""}],style:{fontSize:10,bgColor:"#FFFFFF",fontColor:"#000000",charId:"{",title:"",subTitle:"",separatorSymbolId:0},time:{day:0,hour:0,min:0,sec:0,microsec:0},countDown:{day:0,hour:0,min:0,sec:0},display:{day:!0,hour:!0,min:!0,sec:!0,microSec:!0},timeLog:[],startTime:0,countDownTime:0,pauseStartTime:0,pauseTotalTime:0,refreshTime:10,requestId:null,isPause:!0,ignoreResetTime:0}},methods:{fullscreen:function(){n.a.request($("#timerBody")[0])},setColor:function(e){this.style.fontColor=this.supportStyleList[e].color,this.style.bgColor=this.supportStyleList[e].bgColor},calculationCountDownTime:function(){this.countDownTime=864e5*this.countDown.day+36e5*this.countDown.hour+6e4*this.countDown.min+1e3*this.countDown.sec},play:function(){var e=Date.now();0===this.startTime&&(this.startTime=e,"countDown"===this.timerType&&this.calculationCountDownTime()),this.pauseStartTime&&(this.pauseTotalTime+=e-this.pauseStartTime,this.pauseStartTime=0),this.isPause=!1,this.requestId=g(this.render,this.refreshTime),this.render()},pause:function(){this.pauseStartTime=Date.now(),null!==this.requestId&&v(this.requestId),this.requestId=null,this.isPause=!0},reset:function(){null!==this.requestId&&v(this.requestId),this.requestId=null,this.pauseStartTime=0,this.pauseTotalTime=0,this.startTime=0,this.time.day=0,this.time.hour=0,this.time.min=0,this.time.sec=0,this.time.microsec=0,this.isPause=!0,this.timeLog=[],"countDown"===this.timerType&&this.renderInitTime()},timeup:function(){null!==this.requestId&&v(this.requestId),this.requestId=null,this.startTime=0,this.time.microsec=0,this.isPause=!0},renderInitTime:function(){this.time.day=parseInt(this.countDown.day),this.time.hour=parseInt(this.countDown.hour),this.time.min=parseInt(this.countDown.min),this.time.sec=parseInt(this.countDown.sec)},fetch:function(){this.timeLog.push(this.time.day+":"+l()(this.time.hour,2,0)+":"+l()(this.time.min,2,0)+":"+l()(this.time.sec,2,0)+"."+l()(Math.floor(this.time.microsec/10),2,0))},render:function(){var e,t=new Date;switch(this.timerType){case"timer":e=t.getTime()-this.startTime-this.pauseTotalTime;break;case"countDown":if(e=this.countDownTime-(t.getTime()-this.startTime)+this.pauseTotalTime,e<=0)return void this.timeup();break;case"now":return this.time.hour=t.getHours(),this.time.min=t.getMinutes(),this.time.sec=t.getSeconds(),void(this.time.microsec=t.getTime()%1e3)}e>=864e5?(this.time.day=Math.floor(e/864e5),e-=864e5*this.time.day):this.time.day=0,e>=36e5?(this.time.hour=Math.floor(e/36e5),e-=36e5*this.time.hour):this.time.hour=0,e>=6e4?(this.time.min=Math.floor(e/6e4),e-=6e4*this.time.min):this.time.min=0,e>=1e3?(this.time.sec=Math.floor(e/1e3),e-=1e3*this.time.sec):this.time.sec=0,this.time.microsec=e}},computed:{getChar:function(){switch(this.style.charId){case"0":return["",""];case"{":return["{","}"];case"{{":return["{{","}}"];case"[":return["[","]"];case"<":return["<",">"];case"/":return["/","/"];case"//":return["//","//"];case"\\/":return["\\","/"]}},getHour:function(){return l()(this.time.hour,2,0)},getMin:function(){return l()(this.time.min,2,0)},getSec:function(){return l()(this.time.sec,2,0)},getMicroSec:function(){return l()(Math.floor(this.time.microsec/10),2,0)},getShareUrl:function(){var e="https://tool.puckwang.com"+this.$route.path+"?type=".concat(this.timerType);return this.startTime>0&&(e+="&st=".concat(this.startTime)),this.pauseTotalTime>0&&(e+="&pt=".concat(this.pauseTotalTime)),"countDown"===this.timerType&&(e+="&cd=".concat(JSON.stringify(this.countDown))),e}},watch:{timerType:function(e){0===this.ignoreResetTime?(this.reset(),"now"===e&&this.play()):this.ignoreResetTime--}},components:{InputHasCopy:b["a"]},mounted:function(){var e=!1;this.$route.query.type&&(this.timerType=this.$route.query.type,this.ignoreResetTime=1),this.$route.query.st&&(this.startTime=parseInt(this.$route.query.st),e=!0),this.$route.query.pt&&(this.pauseTotalTime=parseInt(this.$route.query.pt)),this.$route.query.cd&&(this.countDown=JSON.parse(this.$route.query.cd),this.calculationCountDownTime(),e=!0),e&&this.play()}},_=w,C=s("2877"),T=Object(C["a"])(_,o,i,!1,null,"3a72b8ce",null);t["default"]=T.exports},f904:function(e,t,s){"use strict";var o=s("13d9"),i="Copy to clipboard: #{key}, Enter";function r(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function n(e,t){var s,n,a,l,c,u,m=!1;t||(t={}),s=t.debug||!1;try{a=o(),l=document.createRange(),c=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",document.body.appendChild(u),l.selectNode(u),c.addRange(l);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");m=!0}catch(p){s&&console.error("unable to copy using execCommand: ",p),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),m=!0}catch(p){s&&console.error("unable to copy using clipboardData: ",p),s&&console.error("falling back to prompt"),n=r("message"in t?t.message:i),window.prompt(n,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),u&&document.body.removeChild(u),a()}return m}e.exports=n}}]);
//# sourceMappingURL=chunk-263efe82-legacy.25eea89d.js.map