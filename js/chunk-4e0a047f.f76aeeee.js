(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e0a047f"],{"28a5":function(t,e,a){a("214f")("split",2,function(t,e,s){"use strict";var n=a("aae3"),i=s,r=[].push,l="split",o="length",c="lastIndex";if("c"=="abbc"[l](/(b)*/)[1]||4!="test"[l](/(?:)/,-1)[o]||2!="ab"[l](/(?:ab)*/)[o]||4!="."[l](/(.?)(.?)/)[o]||"."[l](/()()/)[o]>1||""[l](/.?/)[o]){var u=void 0===/()??/.exec("")[1];s=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(a,t,e);var s,l,p,d,m,v=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,w=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,f+"g");u||(s=new RegExp("^"+y.source+"$(?!\\s)",f));while(l=y.exec(a)){if(p=l.index+l[0][o],p>b&&(v.push(a.slice(b,l.index)),!u&&l[o]>1&&l[0].replace(s,function(){for(m=1;m<arguments[o]-2;m++)void 0===arguments[m]&&(l[m]=void 0)}),l[o]>1&&l.index<a[o]&&r.apply(v,l.slice(1)),d=l[0][o],b=p,v[o]>=w))break;y[c]===l.index&&y[c]++}return b===a[o]?!d&&y.test("")||v.push(""):v.push(a.slice(b)),v[o]>w?v.slice(0,w):v}}else"0"[l](void 0,0)[o]&&(s=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):s.call(String(i),a,n)},s]})},"6d0b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.$t("title.luckyDraw")))]),a("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.$t("description.luckyDraw"))+"\n    ")]),a("ul",{staticClass:"nav nav-tabs mb-3",attrs:{id:"luckyDrawMain-tab",role:"tablist"}},["init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"selectType-tab","data-toggle":"pill",href:"#selectType",role:"tab","aria-controls":"selectType","aria-selected":"true"}},[t._v("設定抽獎類型")])]):t._e(),"init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingDrawData-tab","data-toggle":"pill",href:"#settingDrawData",role:"tab","aria-controls":"settingDrawData","aria-selected":"true"}},[t._v("候選名單")])]):t._e(),"drawPersonForItem"===t.drawType&&"init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingDrawitemData-tab","data-toggle":"pill",href:"#settingDrawitemData",role:"tab","aria-controls":"settingDrawitemData","aria-selected":"true"}},[t._v("獎品名單")])]):t._e(),t._m(0),t._m(1),"init"!==t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"exportData-tab","data-toggle":"pill",href:"#exportData",role:"tab","aria-controls":"exportData","aria-selected":"false"}},[t._v("查看抽獎資訊")])]):t._e()]),a("div",{staticClass:"tab-content",attrs:{id:"luckyDrawMain-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"selectType",role:"tabpanel","aria-labelledby":"selectType-tab"}},[a("div",{staticClass:"list-group"},[a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("button",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",class:{active:"drawPersonForItem"===t.drawType},on:{click:function(e){t.drawType="drawPersonForItem"}}},[t._m(3),a("p",{staticClass:"mb-1"},[t._v("每次執行，程式將依照獎品填寫的順序，從候選名單中抽出對應的中獎人，並會紀錄各獎品的中獎人。")]),a("small",{staticClass:"text-muted"},[t._v("需填寫候選名單及獎品")])])]),a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("button",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",class:{active:"drawPerson"===t.drawType},on:{click:function(e){t.drawType="drawPerson"}}},[t._m(4),a("p",{staticClass:"mb-1"},[t._v("每次將從候選清單中隨機抽出一位中獎者，直到所有中獎者被抽出或使用者自己停止為止。")]),a("small",{staticClass:"text-muted"},[t._v("需填寫候選名單")])])])])])]),a("div",{staticClass:"tab-pane fade show",attrs:{id:"settingDrawData",role:"tabpanel","aria-labelledby":"settingDrawData-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("候選名單預覽")]),a("div",{staticStyle:{height:"50vh","overflow-x":"auto"}},[a("ul",{staticClass:"list-group mb-3"},t._l(t.personOriginList,function(e){return a("li",{staticClass:"list-group-item"},[t._v("\n                                    "+t._s(e.name)+"\n                                    "),t._m(5,!0)])}))])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("資料輸入")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mb-3"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-secondary",class:{active:"text"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"text"},domProps:{checked:t._q(t.personInputType,"text")},on:{change:function(e){t.personInputType="text"}}}),t._v("手動輸入\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"file"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"file"},domProps:{checked:t._q(t.personInputType,"file")},on:{change:function(e){t.personInputType="file"}}}),t._v("從檔案匯入\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"auto"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"auto"},domProps:{checked:t._q(t.personInputType,"auto")},on:{change:function(e){t.personInputType="auto"}}}),t._v("自動產生\n                                    ")])])]),"text"===t.personInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.personText,expression:"personText"}],staticClass:"form-control",attrs:{rows:"7","aria-describedby":"personTextInputSmail",placeholder:"Puck"},domProps:{value:t.personText},on:{input:function(e){e.target.composing||(t.personText=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"personTextInputSmail"}},[t._v("\n                                        格式：一行一筆資料，不限中英文數字符號皆可，也不限資料筆數。\n                                    ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parsePersonText}},[t._v("輸入")])]):t._e(),"file"===t.personInputType?a("div",{staticClass:"col-12"},[t._m(6),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("輸入")])]):t._e(),"auto"===t.personInputType?a("div",{staticClass:"col-12"},[t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("產生")])]):t._e()])])])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"settingDrawitemData",role:"tabpanel","aria-labelledby":"settingDrawitemData-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("獎品名單預覽")]),a("div",{staticStyle:{height:"50vh","overflow-x":"auto"}},[a("ul",{staticClass:"list-group mb-3"},t._l(t.itemOriginList,function(e){return a("li",{staticClass:"list-group-item"},[t._v("\n                                    "+t._s(e.name)+"\n                                    "),a("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(e.number))]),t._m(12,!0)])}))])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("資料輸入")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mb-3"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-secondary",class:{active:"text"===t.itemInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputType,expression:"itemInputType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"text"},domProps:{checked:t._q(t.itemInputType,"text")},on:{change:function(e){t.itemInputType="text"}}}),t._v("手動輸入\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"file"===t.itemInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputType,expression:"itemInputType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"file"},domProps:{checked:t._q(t.itemInputType,"file")},on:{change:function(e){t.itemInputType="file"}}}),t._v("從檔案匯入\n                                    ")])])]),"text"===t.itemInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemText,expression:"itemText"}],staticClass:"form-control",attrs:{rows:"7",placeholder:"頭獎,1","aria-describedby":"itemTextInputSmail"},domProps:{value:t.itemText},on:{input:function(e){e.target.composing||(t.itemText=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"itemTextInputSmail"}},[t._v("\n                                        格式：一行一筆資料，獎品名稱與數量/機率以,分隔，名稱不限中英文數字符號皆可，機率限小數，且如果機率總和不為1，則會剩餘機率為銘謝惠顧，不限資料筆數。\n                                    ")])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-info",class:{active:"number"===t.itemInputNumberType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputNumberType,expression:"itemInputNumberType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"number"},domProps:{checked:t._q(t.itemInputNumberType,"number")},on:{change:function(e){t.itemInputNumberType="number"}}}),t._v("數量\n                                        ")]),a("label",{staticClass:"btn btn-outline-info",class:{active:"probability"===t.itemInputNumberType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputNumberType,expression:"itemInputNumberType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"probability"},domProps:{checked:t._q(t.itemInputNumberType,"probability")},on:{change:function(e){t.itemInputNumberType="probability"}}}),t._v("機率\n                                        ")])])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parseItemText}},[t._v("輸入")])]):t._e(),"file"===t.itemInputType?a("div",{staticClass:"col-12"},[t._m(13),a("div",{staticClass:"form-group"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-info",class:{active:"number"===t.itemInputNumberType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputNumberType,expression:"itemInputNumberType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"number"},domProps:{checked:t._q(t.itemInputNumberType,"number")},on:{change:function(e){t.itemInputNumberType="number"}}}),t._v("數量\n                                        ")]),a("label",{staticClass:"btn btn-outline-info",class:{active:"probability"===t.itemInputNumberType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputNumberType,expression:"itemInputNumberType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"probability"},domProps:{checked:t._q(t.itemInputNumberType,"probability")},on:{change:function(e){t.itemInputNumberType="probability"}}}),t._v("機率\n                                        ")])])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("輸入")])]):t._e()])])])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"settingStyle",role:"tabpanel","aria-labelledby":"settingStyle-tab"}},[t._v("\n            settingStyle\n        ")]),a("div",{staticClass:"tab-pane fade",attrs:{id:"luckyDraw",role:"tabpanel","aria-labelledby":"luckyDraw-tab"}},["init"===t.drawData.status?a("div",{staticClass:"row"},[t._m(14),a("div",{staticClass:"col-12 col-md-2 offset-md-5"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-lg btn-danger btn-block",attrs:{type:"button"},on:{click:t.initDrawData}},[t._v("開始抽獎")])])])]):t._e(),"init"!==t.drawData.status?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-link btn-lg",attrs:{type:"button"},on:{click:t.fullscreen}},[a("font-awesome-icon",{attrs:{icon:"expand"}})],1)]):t._e(),"init"!==t.drawData.status?a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center",staticStyle:{"background-color":"white"},attrs:{id:"luckyDrawMain"}},[a("div",{staticClass:"align-self-center text-center"},[a("div",{staticClass:"mb-5",style:{fontSize:.5*t.style.fontSize+"vh"}},[t._v("\n                        "+t._s(t.style.title)+"\n                    ")]),t.drawData.currentDrawTarget?a("div",[a("div",{staticStyle:{opacity:"0.5"},style:{fontSize:.2*t.style.fontSize+"vh"}},[t._v("\n                            [目前抽出]\n                        ")]),a("div",{style:{fontSize:.4*t.style.fontSize+"vh"}},[t._v("\n                            "+t._s(t.drawData.currentDrawTarget.name)+"\n                        ")])]):t._e(),a("div",{staticStyle:{height:"60vh"}},[a("div",{staticClass:"mt-5",staticStyle:{opacity:"0.5"},style:{fontSize:.2*t.style.fontSize+"vh"}},[t._v("\n                            [中獎人]\n                        ")]),a("div",{style:{fontSize:t.style.fontSize+"vh"}},[a("div",{staticStyle:{"overflow-y":"hidden"},style:{height:1.5*t.style.fontSize+"vh"},attrs:{id:"DrawSlotMachine"}},[t._l(t.drawData.drawViewList,function(e,s){return t.drawData.showIndex===s?a("div",[t._v("\n                                    "+t._s(e.name)+"\n                                ")]):t._e()}),-1===t.drawData.showIndex?a("div",[t._v("???")]):t._e()],2)]),a("div",{staticClass:"row"},["ready"===t.drawData.status?a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-warning btn-lg btn-block",attrs:{type:"button"},on:{click:t.clickDrawBtn}},[t._v("抽獎\n                                ")])]):t._e(),"confirm"===t.drawData.status?a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{type:"button"},on:{click:t.settingNextDrawData}},[t._v("準備下一抽\n                                ")])]):t._e(),"end"===t.drawData.status?a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-danger",style:{fontSize:.15*t.style.fontSize+"vh"}},[t._v("\n                                    (抽獎結束)\n                                ")])]):t._e()])])])]):t._e()]),a("div",{staticClass:"tab-pane fade",attrs:{id:"exportData",role:"tabpanel","aria-labelledby":"exportData-tab"}},[t._v("\n            exportData\n        ")])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingStyle-tab","data-toggle":"pill",href:"#settingStyle",role:"tab","aria-controls":"settingStyle","aria-selected":"false"}},[t._v("設定樣式")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"luckyDraw-tab","data-toggle":"pill",href:"#luckyDraw",role:"tab","aria-controls":"luckyDraw","aria-selected":"false"}},[t._v("抽獎")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("label",[t._v("請選擇抽獎類型")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v("依照獎品順序抽出中獎者")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v("只抽中獎者")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control-file",attrs:{type:"file","aria-describedby":"personFileInputSmall"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"personFileInputSmall"}},[t._v("\n                                        格式：一行一筆資料，不限中英文數字符號皆可，也不限資料筆數。\n                                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("數字範圍")]),a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control text-center",attrs:{type:"number"}}),a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("to")])]),a("input",{staticClass:"form-control",attrs:{type:"number"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("排除數字")]),a("input",{staticClass:"form-control",attrs:{type:"text","aria-describedby":"excludeNumberSmall"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"excludeNumberSmall"}},[t._v("\n                                        格式：每個數字以空白分隔。\n                                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("前綴")]),a("input",{staticClass:"form-control",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("後綴")]),a("input",{staticClass:"form-control",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"numberLeftPad"}}),a("label",{staticClass:"form-check-label",attrs:{for:"numberLeftPad"}},[t._v("\n                                            數字補零\n                                        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control-file",attrs:{type:"file","aria-describedby":"itemFileInputSmall"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"itemFileInputSmall"}},[t._v("\n                                        格式：一行一筆資料，獎品名稱與數量/機率以,分隔，名稱不限中英文數字符號皆可，機率限小數，且如果機率總和不為1，則會剩餘機率為銘謝惠顧，不限資料筆數。\n                                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n                        注意：開始抽獎後，將無法再更改任何抽獎資料，僅可查看。\n                    ")])])}],i=(a("28a5"),a("ac6a"),a("cadf"),a("551c"),a("097d"),a("93bf")),r=a.n(i),l={metaInfo:function(){return{title:this.$i18n.t("title.luckyDraw"),meta:[]}},data:function(){return{style:{fontSize:15,title:"尾牙抽獎"},drawData:{showIndex:-1,drawViewSourceList:[],drawViewList:[],personCurrentList:[],itemCurrentList:[],currentDrawTarget:null,status:"init"},drawType:"drawPersonForItem",personInputType:"text",personText:"",personOriginList:[{name:"Boo"},{name:"Foo"},{name:"Puck"},{name:"Yuuna"},{name:"Apple"},{name:"Benana"},{name:"Cat"},{name:"Dog"},{name:"Egg"},{name:"Qoo"},{name:"Yahoo"},{name:"Google"},{name:"Pig"}],itemInputType:"text",itemText:"",itemInputNumberType:"number",itemOriginList:[{name:"一獎",number:1},{name:"二獎",number:2}],log:[]}},methods:{parsePersonText:function(){var t=[];this.personText.split("\n").forEach(function(e){t.push({name:e})}),this.personOriginList=t},parseItemText:function(){var t=[];this.itemText.split("\n").forEach(function(e){var a=e.split(",");t.push({name:a[0],number:1*a[1]})}),this.itemOriginList=t},fullscreen:function(){r.a.request($("#luckyDrawMain")[0])},initDrawData:function(){this.drawData.itemCurrentList=JSON.parse(JSON.stringify(this.itemOriginList)),this.drawData.personCurrentList=JSON.parse(JSON.stringify(this.personOriginList)),this.drawData.drawViewSourceList=JSON.parse(JSON.stringify(this.personOriginList)),this.drawData.status="ready",this.drawData.showIndex=-1,this.settingNextDrawData()},settingNextDrawData:function(){0===this.drawData.personCurrentList.length||0===this.drawData.itemCurrentList.length?this.drawData.status="end":("drawPersonForItem"===this.drawType&&(this.drawData.currentDrawTarget=this.drawData.itemCurrentList[this.drawData.itemCurrentList.length-1]),this.drawData.status="ready")},settingDrawView:function(){this.drawData.drawViewList=[];for(var t=0;t<20;t++)this.drawData.drawViewList.push(this.drawData.drawViewSourceList[this.getRandomNumber(this.drawData.drawViewSourceList.length)]);this.drawData.status="draw"},draw:function(){var t,e,a;"drawPersonForItem"===this.drawType&&(e=this.drawData.itemCurrentList.pop(),e.number--,e.number>0&&this.drawData.itemCurrentList.push(e)),t=this.getRandomNumber(this.drawData.personCurrentList.length),a=this.drawData.personCurrentList[t],this.drawData.personCurrentList.splice(t,1),this.drawData.drawViewList.push(a),this.writeLog(e,a)},clickDrawBtn:function(){this.settingDrawView(),this.draw(),this.showDrawView()},writeLog:function(t,e){this.log.push({item:t,person:e})},showDrawView:function(){var t,e=this,a=e.drawData.drawViewList.length,s=a-1;t=setInterval(function(){e.drawData.showIndex=e.getRandomNumber(a)},100),setTimeout(function(){clearInterval(t),e.drawData.showIndex=s,e.drawData.status="confirm"},3e3)},getRandomNumber:function(t){return Math.floor(Math.random()*t)}},computed:{},watch:{},components:{},mounted:function(){}},o=l,c=(a("d367"),a("2877")),u=Object(c["a"])(o,s,n,!1,null,"55824ed5",null);u.options.__file="LuckyDraw.vue";e["default"]=u.exports},"93bf":function(t,e,a){
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var e="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},a=t.exports,s="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,n=function(){for(var t,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,n=a.length,i={};s<n;s++)if(t=a[s],t&&t[1]in e){for(s=0;s<t.length;s++)i[a[0][s]]=t[s];return i}return!1}(),i={change:n.fullscreenchange,error:n.fullscreenerror},r={request:function(t){return new Promise(function(a){var i=n.requestFullscreen,r=function(){this.off("change",r),a()}.bind(this);t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[i]():t[i](s?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",r)}.bind(this))},exit:function(){return new Promise(function(t){var a=function(){this.off("change",a),t()}.bind(this);e[n.exitFullscreen](),this.on("change",a)}.bind(this))},toggle:function(t){return this.isFullscreen?this.exit():this.request(t)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,a){var s=i[t];s&&e.addEventListener(s,a,!1)},off:function(t,a){var s=i[t];s&&e.removeEventListener(s,a,!1)},raw:n};n?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(e[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[n.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[n.fullscreenEnabled])}}}),a?t.exports=r:window.screenfull=r):a?t.exports=!1:window.screenfull=!1})()},aae3:function(t,e,a){var s=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},c653:function(t,e,a){},d367:function(t,e,a){"use strict";var s=a("c653"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-4e0a047f.f76aeeee.js.map