(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b63862"],{"522c":function(t,e,a){"use strict";t.exports=r;var s=[""," ","  ","   ","    ","     ","      ","       ","        ","         "];function r(t,e,a){if(t+="",e-=t.length,e<=0)return t;if(a||0===a||(a=" "),a+=""," "===a&&e<10)return s[e]+t;var r="";while(1){if(1&e&&(r+=a),e>>=1,!e)break;a+=a}return r+t}},"6d0b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.$t("title.luckyDraw")))]),a("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.$t("description.luckyDraw"))+"\n    ")]),a("ul",{staticClass:"nav nav-tabs mb-3",attrs:{id:"luckyDrawMain-tab",role:"tablist"}},["init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"selectType-tab","data-toggle":"pill",href:"#selectType",role:"tab","aria-controls":"selectType","aria-selected":"true"}},[t._v(t._s(t.$t("text.drawType")))])]):t._e(),"init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingDrawData-tab","data-toggle":"pill",href:"#settingDrawData",role:"tab","aria-controls":"settingDrawData","aria-selected":"true"}},[t._v(t._s(t.$t("text.personList")))])]):t._e(),"drawPersonForItem"===t.drawType&&"init"===t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingDrawitemData-tab","data-toggle":"pill",href:"#settingDrawitemData",role:"tab","aria-controls":"settingDrawitemData","aria-selected":"true"}},[t._v(t._s(t.$t("text.awardList")))])]):t._e(),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"settingStyle-tab","data-toggle":"pill",href:"#settingStyle",role:"tab","aria-controls":"settingStyle","aria-selected":"false"}},[t._v(t._s(t.$t("text.settingStyle")))])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"luckyDraw-tab","data-toggle":"pill",href:"#luckyDraw",role:"tab","aria-controls":"luckyDraw","aria-selected":"false"}},[t._v(t._s(t.$t("text.luckyDraw")))])]),"init"!==t.drawData.status?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"exportData-tab","data-toggle":"pill",href:"#exportData",role:"tab","aria-controls":"exportData","aria-selected":"false"}},[t._v(t._s(t.$t("text.lookDrawInfo")))])]):t._e()]),a("div",{staticClass:"tab-content",attrs:{id:"luckyDrawMain-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"selectType",role:"tabpanel","aria-labelledby":"selectType-tab"}},[a("div",{staticClass:"list-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("label",[t._v(t._s(t.$t("message.selectDrawType")))])]),a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("button",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",class:{active:"drawPersonForItem"===t.drawType},on:{click:function(e){t.drawType="drawPersonForItem"}}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v(t._s(t.$t("message.drawPersonForAward")))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(t.$t("message.drawPersonForAwardDescription")))]),a("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("message.needPersonAndAward")))])])]),a("div",{staticClass:"col-12 col-md-8 offset-md-2"},[a("button",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",class:{active:"drawPerson"===t.drawType},on:{click:function(e){t.drawType="drawPerson"}}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v(t._s(t.$t("message.drawPerson")))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(t.$t("message.drawPersonDescription")))]),a("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("message.needPerson")))])])])])])]),a("div",{staticClass:"tab-pane fade show",attrs:{id:"settingDrawData",role:"tabpanel","aria-labelledby":"settingDrawData-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.personListPreview")))]),a("div",{staticStyle:{height:"50vh","overflow-x":"auto"}},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),a("th",{attrs:{scope:"col"}})])]),a("tbody",t._l(t.personOriginList,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(" "+t._s(e.name))]),a("td",[a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.personOriginList.splice(s,1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}),0)])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.dataInput")))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mb-3"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-secondary",class:{active:"text"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"text"},domProps:{checked:t._q(t.personInputType,"text")},on:{change:function(e){t.personInputType="text"}}}),t._v(t._s(t.$t("text.artificialInput"))+"\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"file"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"file"},domProps:{checked:t._q(t.personInputType,"file")},on:{change:function(e){t.personInputType="file"}}}),t._v(t._s(t.$t("text.fromFileImport"))+"\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"auto"===t.personInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personInputType,expression:"personInputType"}],attrs:{type:"radio",name:"personInputType",autocomplete:"off",value:"auto"},domProps:{checked:t._q(t.personInputType,"auto")},on:{change:function(e){t.personInputType="auto"}}}),t._v(t._s(t.$t("text.autoGenerate"))+"\n                                    ")])])]),"text"===t.personInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.personText,expression:"personText"}],staticClass:"form-control",attrs:{rows:"7","aria-describedby":"personTextInputSmail",placeholder:"Puck"},domProps:{value:t.personText},on:{input:function(e){e.target.composing||(t.personText=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"personTextInputSmail"}},[t._v("\n                                        "+t._s(t.$t("message.oneDataOneLine"))+"\n                                    ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parsePersonText}},[t._v(t._s(t.$t("text.input"))+"\n                                ")])]):t._e(),"file"===t.personInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control-file",attrs:{type:"file","aria-describedby":"personFileInputSmall"},on:{change:t.handlePersonFileChosen}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"personFileInputSmall"}},[t._v("\n                                        "+t._s(t.$t("message.oneDataOneLine"))+"\n                                    ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parsePersonText}},[t._v(t._s(t.$t("text.input"))+"\n                                ")])]):t._e(),"auto"===t.personInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.numberRange")))]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.startNumber,expression:"personAutoGenData.startNumber"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:t.personAutoGenData.startNumber},on:{input:function(e){e.target.composing||t.$set(t.personAutoGenData,"startNumber",e.target.value)}}}),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.endNumber,expression:"personAutoGenData.endNumber"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.personAutoGenData.endNumber},on:{input:function(e){e.target.composing||t.$set(t.personAutoGenData,"endNumber",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.excludeNumber")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.excludeNumberText,expression:"personAutoGenData.excludeNumberText"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"excludeNumberSmall"},domProps:{value:t.personAutoGenData.excludeNumberText},on:{input:function(e){e.target.composing||t.$set(t.personAutoGenData,"excludeNumberText",e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"excludeNumberSmall"}},[t._v("\n                                        "+t._s(t.$t("message.eachNumberSeparatedByBlank"))+"\n                                    ")])]),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.prefix")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.prefix,expression:"personAutoGenData.prefix"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.personAutoGenData.prefix},on:{input:function(e){e.target.composing||t.$set(t.personAutoGenData,"prefix",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.suffix")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.suffix,expression:"personAutoGenData.suffix"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.personAutoGenData.suffix},on:{input:function(e){e.target.composing||t.$set(t.personAutoGenData,"suffix",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personAutoGenData.numberLeftPad,expression:"personAutoGenData.numberLeftPad"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"numberLeftPad"},domProps:{checked:Array.isArray(t.personAutoGenData.numberLeftPad)?t._i(t.personAutoGenData.numberLeftPad,"")>-1:t.personAutoGenData.numberLeftPad},on:{change:function(e){var a=t.personAutoGenData.numberLeftPad,s=e.target,r=!!s.checked;if(Array.isArray(a)){var n="",i=t._i(a,n);s.checked?i<0&&t.$set(t.personAutoGenData,"numberLeftPad",a.concat([n])):i>-1&&t.$set(t.personAutoGenData,"numberLeftPad",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.personAutoGenData,"numberLeftPad",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"numberLeftPad"}},[t._v("\n                                            "+t._s(t.$t("text.zeroPadding"))+"\n                                        ")])])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.generatePerson}},[t._v(t._s(t.$t("text.generate"))+"\n                                ")])]):t._e()])])])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"settingDrawitemData",role:"tabpanel","aria-labelledby":"settingDrawitemData-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.awardListPreview")))]),a("div",{staticStyle:{height:"50vh","overflow-x":"auto"}},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.amount")))]),a("th",{attrs:{scope:"col"}})])]),a("tbody",t._l(t.itemOriginList,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(" "+t._s(e.name))]),a("td",[a("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(e.number))])]),a("td",[a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.itemOriginList.splice(s,1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}),0)])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.dataInput")))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mb-3"},[a("div",{staticClass:"btn-group btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-secondary",class:{active:"text"===t.itemInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputType,expression:"itemInputType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"text"},domProps:{checked:t._q(t.itemInputType,"text")},on:{change:function(e){t.itemInputType="text"}}}),t._v(t._s(t.$t("text.artificialInput"))+"\n                                    ")]),a("label",{staticClass:"btn btn-outline-secondary",class:{active:"file"===t.itemInputType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInputType,expression:"itemInputType"}],attrs:{type:"radio",name:"itemInputType",autocomplete:"off",value:"file"},domProps:{checked:t._q(t.itemInputType,"file")},on:{change:function(e){t.itemInputType="file"}}}),t._v(t._s(t.$t("text.fromFileImport"))+"\n                                    ")])])]),"text"===t.itemInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemText,expression:"itemText"}],staticClass:"form-control",attrs:{rows:"7",placeholder:"item,1","aria-describedby":"itemTextInputSmail"},domProps:{value:t.itemText},on:{input:function(e){e.target.composing||(t.itemText=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"itemTextInputSmail"}},[t._v("\n                                        "+t._s(t.$t("message.oneDataOneLineAndAwardNumber"))+"\n                                    ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parseItemText}},[t._v(t._s(t.$t("text.input"))+"\n                                ")])]):t._e(),"file"===t.itemInputType?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control-file",attrs:{type:"file","aria-describedby":"itemFileInputSmall"},on:{change:t.handleItemFileChosen}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"itemFileInputSmall"}},[t._v("\n                                        "+t._s(t.$t("message.oneDataOneLineAndAwardNumber"))+"\n                                    ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.parseItemText}},[t._v(t._s(t.$t("text.input"))+"\n                                ")])]):t._e()])])])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"settingStyle",role:"tabpanel","aria-labelledby":"settingStyle-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mt-1"},[a("label",{attrs:{for:"change-font-size"}},[t._v(t._s(t.$t("text.fontSize")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.fontSize,expression:"style.fontSize"}],staticClass:"custom-range",attrs:{type:"range",min:"1",max:"20",step:"0.5",id:"change-font-size"},domProps:{value:t.style.fontSize},on:{__r:function(e){return t.$set(t.style,"fontSize",e.target.value)}}})]),a("div",{staticClass:"col-12 col-md-4 mt-1"},[a("label",{attrs:{for:"choose-bg-color"}},[t._v(t._s(t.$t("text.bgColor")))]),a("div",{staticClass:"input-group-sm row"},[a("div",{staticClass:"col-8 pr-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.bgColor,expression:"style.bgColor"}],staticClass:"form-control",attrs:{type:"input",id:"choose-bg-color"},domProps:{value:t.style.bgColor},on:{input:function(e){e.target.composing||t.$set(t.style,"bgColor",e.target.value)}}})]),a("div",{staticClass:"col-2 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.bgColor,expression:"style.bgColor"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.style.bgColor},on:{input:function(e){e.target.composing||t.$set(t.style,"bgColor",e.target.value)}}})])])]),a("div",{staticClass:"col-12 col-md-4 mt-1"},[a("label",{attrs:{for:"choose-font-color"}},[t._v(t._s(t.$t("text.fontColor")))]),a("div",{staticClass:"input-group-sm row"},[a("div",{staticClass:"col-8 pr-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.fontColor,expression:"style.fontColor"}],staticClass:"form-control",attrs:{type:"input",id:"choose-font-color"},domProps:{value:t.style.fontColor},on:{input:function(e){e.target.composing||t.$set(t.style,"fontColor",e.target.value)}}})]),a("div",{staticClass:"col-2 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.fontColor,expression:"style.fontColor"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.style.fontColor},on:{input:function(e){e.target.composing||t.$set(t.style,"fontColor",e.target.value)}}})])])]),a("div",{staticClass:"col-12 col-md-6 mt-1"},[a("label",[t._v(t._s(t.$t("text.theme")))]),a("div",{staticClass:"input-group",staticStyle:{"overflow-x":"auto"}},t._l(t.supportStyleList,function(e,s){return a("div",[a("button",{staticClass:"btn btn-outline-dark mr-1",style:{color:e.color,backgroundColor:e.bgColor},attrs:{type:"button"},on:{click:function(a){t.style.fontColor=e.color,t.style.bgColor=e.bgColor}}},[t._v("\n                                Abc\n                            ")])])}),0)]),a("div",{staticClass:"col-12 col-md-5 mt-1"},[a("label",{attrs:{for:"title-input"}},[t._v(t._s(t.$t("text.title")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.style.title,expression:"style.title"}],staticClass:"form-control",attrs:{type:"input",id:"title-input"},domProps:{value:t.style.title},on:{input:function(e){e.target.composing||t.$set(t.style,"title",e.target.value)}}})])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"luckyDraw",role:"tabpanel","aria-labelledby":"luckyDraw-tab"}},["init"===t.drawData.status?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n                        "+t._s(t.$t("message.startDrawAfterCantEditData"))+"\n                    ")])]),a("div",{staticClass:"col-12 col-md-2 offset-md-5"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-lg btn-danger btn-block",attrs:{type:"button"},on:{click:t.initDrawData}},[t._v(t._s(t.$t("text.startDraw"))+"\n                        ")])])])]):t._e(),"init"!==t.drawData.status?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-link btn-lg",attrs:{type:"button"},on:{click:t.fullscreen}},[a("font-awesome-icon",{attrs:{icon:"expand"}})],1)]):t._e(),"init"!==t.drawData.status?a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center",style:{backgroundColor:t.style.bgColor,color:t.style.fontColor},attrs:{id:"luckyDrawMain"}},[a("div",{staticClass:"align-self-center text-center"},[a("div",{staticClass:"mb-5",style:{fontSize:.5*t.style.fontSize+"vh"}},[t._v("\n                        <"+t._s(t.style.title)+">\n                    ")]),t.drawData.currentDrawTarget?a("div",[a("div",{staticStyle:{opacity:"0.5"},style:{fontSize:.2*t.style.fontSize+"vh"}},[t._v("\n                            ["+t._s(t.$t("text.currentAward"))+"]\n                        ")]),a("div",{style:{fontSize:.4*t.style.fontSize+"vh"}},[t._v("\n                            "+t._s(t.drawData.currentDrawTarget.name)+"\n                        ")]),a("div",{staticStyle:{opacity:"0.3"},style:{fontSize:.15*t.style.fontSize+"vh"}},[t._v("\n                            "+t._s(t.$t("text.remainingAmount"))+" "+t._s(t.drawData.currentDrawTarget.number)+"\n                        ")])]):t._e(),a("div",{staticStyle:{height:"60vh"}},[a("div",{staticClass:"mt-5",staticStyle:{opacity:"0.5"},style:{fontSize:.2*t.style.fontSize+"vh"}},[t._v("\n                            ["+t._s(t.$t("text.winner"))+"]\n                        ")]),a("div",{style:{fontSize:t.style.fontSize+"vh"}},[a("div",{staticStyle:{"overflow-y":"hidden"},style:{height:1.5*t.style.fontSize+"vh"},attrs:{id:"DrawSlotMachine"}},[t._l(t.drawData.drawViewList,function(e,s){return t.drawData.showIndex===s?a("div",[t._v("\n                                    "+t._s(e.name)+"\n                                ")]):t._e()}),-1===t.drawData.showIndex?a("div",[t._v("???")]):t._e()],2)]),a("div",{staticClass:"row"},["ready"===t.drawData.status?a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-warning btn-lg btn-block",attrs:{type:"button"},on:{click:t.clickDrawBtn}},[t._v(t._s(t.$t("text.luckyDraw"))+"\n                                ")])]):t._e(),"confirm"===t.drawData.status?a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{type:"button"},on:{click:t.settingNextDrawData}},[t._v(t._s(t.$t("text.prepareNextDraw"))+"\n                                ")])]):t._e(),"end"===t.drawData.status?a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-danger",style:{fontSize:.15*t.style.fontSize+"vh"}},[t._v("\n                                    ("+t._s(t.$t("text.endOfDraw"))+")\n                                ")])]):t._e()])])])]):t._e()]),a("div",{staticClass:"tab-pane fade",attrs:{id:"exportData",role:"tabpanel","aria-labelledby":"exportData-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.personListPreview")))]),a("div",{staticStyle:{height:"25vh","overflow-x":"auto"}},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),a("th",{staticClass:"text-danger",attrs:{scope:"col"}},[t._v(t._s(t.$t("text.whetherWin")))])])]),a("tbody",t._l(t.personOriginList,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"text-danger"},[t._v(" "+t._s(t.checkPersonIsWin(e)?t.$t("text.hasWon"):"")+"\n                                    ")])])}),0)])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.awardListPreview")))]),a("div",{staticStyle:{height:"25vh","overflow-x":"auto"}},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.amount")))]),a("th",{staticClass:"text-danger",attrs:{scope:"col"}},[t._v(t._s(t.$t("text.remainingAmount")))])])]),a("tbody",t._l(t.itemOriginList,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.number))]),a("td",{staticClass:"text-danger"},[t._v(t._s(t.getItemLastNumber(e)))])])}),0)])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.drawLog"))+" ("+t._s(t.$t("text.orderByTime"))+")")]),a("div",[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),"drawPersonForItem"===t.drawType?a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.award"))+"\n                                    ")]):t._e(),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.time")))])])]),a("tbody",t._l(t.logs,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.person.name))]),"drawPersonForItem"===t.drawType?a("td",[t._v(t._s(e.item.name))]):t._e(),a("td",[t._v(t._s(e.time))])])}),0)])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("text.drawLog"))+" ("+t._s(t.$t("text.orderByAward"))+")")]),a("div",[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.name")))]),"drawPersonForItem"===t.drawType?a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.award"))+"\n                                    ")]):t._e(),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.time")))])])]),a("tbody",t._l(t.reverseLogs,function(e,s){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.person.name))]),"drawPersonForItem"===t.drawType?a("td",[t._v(t._s(e.item.name))]):t._e(),a("td",[t._v(t._s(e.time))])])}),0)])])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("-")])])}],n=a("93bf"),i=a.n(n),o=a("522c"),l=a.n(o),c={metaInfo(){return{title:this.$i18n.t("title.luckyDraw"),meta:[]}},data(){return{style:{fontSize:15,title:"尾牙抽獎",bgColor:"#FFFFFF",fontColor:"#000000"},supportStyleList:[{color:"#000000",bgColor:"#FFFFFF"},{color:"#FFFFFF",bgColor:"#000000"},{color:"#2fff5a",bgColor:"#000000"},{color:"#FFF700",bgColor:"#2980B9"},{color:"#E19C23",bgColor:"#2368E1"},{color:"#E12F23",bgColor:"#23D5E1"},{color:"#8223E1",bgColor:"#82E123"},{color:"#2EA064",bgColor:"#A02E6A"},{color:"#a02427",bgColor:"#96a051"}],drawData:{showIndex:-1,drawViewSourceList:[],drawViewList:[],personCurrentList:[],itemCurrentList:[],currentDrawTarget:null,status:"init"},drawType:"drawPersonForItem",personInputType:"text",personText:"",personFile:null,personOriginList:[{name:"Puck"},{name:"Yuuna"},{name:"Cat"},{name:"Dog"},{name:"Fish"},{name:"Mimikyu"},{name:"Pikachu"}],personAutoGenData:{startNumber:0,endNumber:100,excludeNumberText:"",prefix:"",suffix:"",numberLeftPad:!1},itemInputType:"text",itemText:"",itemFile:null,itemOriginList:[{name:"頭獎",number:1},{name:"一獎",number:1},{name:"二獎",number:2},{name:"三獎",number:2}],logs:[]}},methods:{handlePersonFileChosen(t){let e=new FileReader,a=this;e.onload=(t=>{a.personText=e.result}),e.readAsText(t.target.files[0])},handleItemFileChosen(t){let e=new FileReader,a=this;e.onload=(t=>{a.itemText=e.result}),e.readAsText(t.target.files[0])},generatePerson(){let t=[];this.personAutoGenData.excludeNumberText.split(",").forEach(e=>{""!==e.trim()&&t.push(e)}),this.personOriginList=[];for(let e=this.personAutoGenData.startNumber;e<=this.personAutoGenData.endNumber;e++){if(-1!==t.indexOf(e.toString()))continue;let a=this.personAutoGenData.numberLeftPad?l()(e,this.personAutoGenData.endNumber.toString().length,0):e;a=this.personAutoGenData.prefix+a+this.personAutoGenData.suffix,this.personOriginList.push({name:a})}},parsePersonText(){let t=[];this.personText.split("\n").forEach(e=>{""!==e.trim()&&t.push({name:e})}),this.personOriginList=t},parseItemText(){let t=[];this.itemText.split("\n").forEach(e=>{if(""!==e.trim()){let a=e.split(",");t.push({name:a[0],number:1*a[1]})}}),this.itemOriginList=t},fullscreen(){i.a.request($("#luckyDrawMain")[0])},initDrawData(){this.drawData.itemCurrentList=JSON.parse(JSON.stringify(this.itemOriginList)),this.drawData.personCurrentList=JSON.parse(JSON.stringify(this.personOriginList)),this.drawData.drawViewSourceList=JSON.parse(JSON.stringify(this.personOriginList)),this.drawData.status="ready",this.drawData.showIndex=-1,this.settingNextDrawData()},settingNextDrawData(){0===this.drawData.personCurrentList.length||0===this.drawData.itemCurrentList.length?this.drawData.status="end":("drawPersonForItem"===this.drawType&&(this.drawData.currentDrawTarget=this.drawData.itemCurrentList[this.drawData.itemCurrentList.length-1]),this.drawData.status="ready")},settingDrawView(){this.drawData.drawViewList=[];for(let t=0;t<20;t++)this.drawData.drawViewList.push(this.drawData.drawViewSourceList[this.getRandomNumber(this.drawData.drawViewSourceList.length)]);this.drawData.status="draw"},draw(){let t,e,a;"drawPersonForItem"===this.drawType&&(e=this.drawData.itemCurrentList.pop(),e.number--,e.number>0&&this.drawData.itemCurrentList.push(e)),t=this.getRandomNumber(this.drawData.personCurrentList.length),a=this.drawData.personCurrentList[t],this.drawData.personCurrentList.splice(t,1),this.drawData.drawViewList.push(a),this.writeLog(e,a)},clickDrawBtn(){this.settingDrawView(),this.draw(),this.showDrawView()},writeLog(t,e){this.logs.push({item:t,person:e,time:(new Date).toLocaleString()})},showDrawView(){let t,e=this,a=e.drawData.drawViewList.length,s=a-1;t=setInterval(function(){e.drawData.showIndex=e.getRandomNumber(a)},100),setTimeout(function(){clearInterval(t),e.drawData.showIndex=s,e.drawData.status="confirm"},3e3)},getRandomNumber(t){return Math.floor(Math.random()*t)},checkPersonIsWin(t){return-1===this.drawData.personCurrentList.findIndex(e=>{return t.name===e.name})},getItemLastNumber(t){let e=this.drawData.itemCurrentList.find(e=>{return t.name===e.name});return e?e.number:0}},computed:{reverseLogs(){return this.logs.reverse()}},watch:{},components:{},mounted(){}},u=c,d=a("2877"),p=Object(d["a"])(u,s,r,!1,null,"f3a31ae4",null);e["default"]=p.exports},"93bf":function(t,e,a){
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var e="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},a=t.exports,s="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var t,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,r=a.length,n={};s<r;s++)if(t=a[s],t&&t[1]in e){for(s=0;s<t.length;s++)n[a[0][s]]=t[s];return n}return!1}(),n={change:r.fullscreenchange,error:r.fullscreenerror},i={request:function(t){return new Promise(function(a){var n=r.requestFullscreen,i=function(){this.off("change",i),a()}.bind(this);t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[n]():t[n](s?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",i)}.bind(this))},exit:function(){return new Promise(function(t){var a=function(){this.off("change",a),t()}.bind(this);e[r.exitFullscreen](),this.on("change",a)}.bind(this))},toggle:function(t){return this.isFullscreen?this.exit():this.request(t)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,a){var s=n[t];s&&e.addEventListener(s,a,!1)},off:function(t,a){var s=n[t];s&&e.removeEventListener(s,a,!1)},raw:r};r?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(e[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[r.fullscreenEnabled])}}}),a?t.exports=i:window.screenfull=i):a?t.exports=!1:window.screenfull=!1})()}}]);
//# sourceMappingURL=chunk-63b63862.75b5f066.js.map