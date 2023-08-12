(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["youtubeDraw"],{"1df9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v(t._s(t.$t("title.youtubeDraw")))]),s("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.$t("description.youtubeDraw"))+"\n    ")]),s("p",{domProps:{innerHTML:t._s(t.$t("message.youtubeAndGoogleTerms"))}}),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-main-color h4",attrs:{for:"youtubeUrl"}},[t._v(t._s(t.$t("text.videoUrl")))]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.videoUrl,expression:"videoUrl"}],staticClass:"form-control",attrs:{type:"text",id:"youtubeUrl","aria-describedby":"youtubeUrlFetchMsg",placeholder:"https://www.youtube.com/watch?v=#########"},domProps:{value:t.videoUrl},on:{input:function(e){e.target.composing||(t.videoUrl=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:"stale"!==t.commentStatus},on:{click:t.fetch}},[t._v(t._s(t.$t("text.fetchComment"))+"\n                        ")])])]),"fetching"===t.commentStatus?s("small",{staticClass:"form-text text-muted",attrs:{id:"youtubeUrlFetchMsg"}},[s("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}),t._v("\n                    "+t._s(t.$t("text.fetchingComment"))+" "+t._s(t.commentThreadsCount)+"...\n                ")],1):t._e(),"ready"===t.commentStatus?s("small",{staticClass:"form-text text-muted",attrs:{id:"youtubeUrlFetchMsg"}},[t._v("\n                    "+t._s(t.$t("text.total{0}Comment",[t.commentThreadsCount]))+"\n                ")]):t._e()])]),s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-main-color h4"},[t._v(t._s(t.$t("text.drawPersonCount")))]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.drawNumber,expression:"drawNumber",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.drawNumber},on:{input:function(e){e.target.composing||(t.drawNumber=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),s("div",{staticClass:"col-12 mt-2"},[s("SettingFilter")],1)]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:"ready"!==t.commentStatus||"ready"!==t.drawStatus},on:{click:t.run}},[t._v("\n                "+t._s(t.$t("text.startDraw"))+"\n            ")])]),s("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[s("button",{staticClass:"btn btn-secondary btn-block",attrs:{disabled:"ready"!==t.commentStatus||"ready"!==t.drawStatus},on:{click:t.preview}},[t._v("\n                "+t._s(t.$t("text.reviewSomeComment"))+"\n            ")])]),t.filterSetting.enableList.includes("continuousDrawNoRepeated")?s("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[s("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:"ready"!==t.commentStatus||"ready"!==t.drawStatus},on:{click:t.reset}},[t._v("\n                "+t._s(t.$t("text.reset"))+"\n            ")])]):t._e()]),s("br"),"drawing"===t.drawStatus?s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-striped bg-success",style:{width:t.nowDrawCount/t.drawNumber*100+"%"},attrs:{role:"progressbar"}},[t._v("\n            "+t._s(t.nowDrawCount)+" / "+t._s(t.drawNumber)+"\n        ")])]):t._e(),s("div",{staticClass:"text-center"},["ready"===t.commentStatus?s("small",{staticClass:"form-text text-muted"},[t._v("\n            "+t._s(t.showCount)+" / "+t._s(t.showTotalCount)+"\n        ")]):t._e()]),s("CommentTable",{staticClass:"mt-2"})],1)},r=[],n=(s("ac6a"),s("4917"),s("1da1")),i=s("ade3"),o=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"text-main-color h4"},[t._v(t._s(t.$t("text.filterCondition")))]),s("div",{staticClass:"form-inline"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"textLengthGtNumber",id:"textLengthGtNumberCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"textLengthGtNumber")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="textLengthGtNumber",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"textLengthGtNumberCheck"}},[t._v("\n                "+t._s(t.$t("message.commentLengthGt"))+"\n            ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.textLengthGtNumber,expression:"textLengthGtNumber"}],staticClass:"form-control form-control-sm ml-1",attrs:{type:"number"},domProps:{value:t.textLengthGtNumber},on:{input:function(e){e.target.composing||(t.textLengthGtNumber=e.target.value)}}})]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"textContain",id:"textContainCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"textContain")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="textContain",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"textContainCheck"}},[t._v("\n                "+t._s(t.$t("message.commentContain"))+"\n            ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.textContain,expression:"textContain"}],staticClass:"form-control form-control-sm ml-1",attrs:{type:"text"},domProps:{value:t.textContain},on:{input:function(e){e.target.composing||(t.textContain=e.target.value)}}})]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"textLikeGtNumber",id:"textLikeGtNumberCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"textLikeGtNumber")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="textLikeGtNumber",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"textLikeGtNumberCheck"}},[t._v("\n                "+t._s(t.$t("message.commentLikeGt"))+"\n            ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.textLikeGtNumber,expression:"textLikeGtNumber"}],staticClass:"form-control form-control-sm ml-1",attrs:{type:"number"},domProps:{value:t.textLikeGtNumber},on:{input:function(e){e.target.composing||(t.textLikeGtNumber=e.target.value)}}})]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"continuousDrawNoRepeated",id:"continuousDrawNoRepeatedCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"continuousDrawNoRepeated")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="continuousDrawNoRepeated",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"continuousDrawNoRepeatedCheck"}},[t._v("\n                "+t._s(t.$t("message.continuousDrawNoRepeated"))+"\n            ")])])]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"duplicateUsers",id:"duplicateUsersCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"duplicateUsers")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="duplicateUsers",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"duplicateUsersCheck"}},[t._v("\n                "+t._s(t.$t("text.duplicateUsers"))+"\n            ")])])]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"isSubscriptCheck",id:"isSubscriptCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"isSubscriptCheck")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="isSubscriptCheck",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"isSubscriptCheck"}},[t._v("\n                "+t._s(t.$t("text.hasSubscript"))),s("small",{staticClass:"text-muted ml-1"},[t._v(t._s(t.$t("message.isSubscriptCheck")))])])])]),s("div",{staticClass:"form-inline mt-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.enableList,expression:"enableList"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"datetimeRange",id:"datetimeRangeCheck"},domProps:{checked:Array.isArray(t.enableList)?t._i(t.enableList,"datetimeRange")>-1:t.enableList},on:{change:function(e){var s=t.enableList,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n="datetimeRange",i=t._i(s,n);a.checked?i<0&&(t.enableList=s.concat([n])):i>-1&&(t.enableList=s.slice(0,i).concat(s.slice(i+1)))}else t.enableList=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"datetimeRangeCheck"}},[t._v("\n                "+t._s(t.$t("text.dateRange"))+"\n            ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.startDateTime,expression:"startDateTime"}],staticClass:"form-control form-control-sm ml-1",attrs:{type:"datetime-local"},domProps:{value:t.startDateTime},on:{input:function(e){e.target.composing||(t.startDateTime=e.target.value)}}}),t._v(" - \n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.endDateTime,expression:"endDateTime"}],staticClass:"form-control form-control-sm ml-1",attrs:{type:"datetime-local"},domProps:{value:t.endDateTime},on:{input:function(e){e.target.composing||(t.endDateTime=e.target.value)}}})])])},l=[],m=s("5935");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={data(){return{}},methods:{},computed:d({},Object(m["b"])("YoutubeDraw",["filterSetting.enableList","filterSetting.textLengthGtNumber","filterSetting.textContain","filterSetting.textLikeGtNumber","filterSetting.startDateTime","filterSetting.endDateTime"])),watch:{},components:{},mounted(){}},h=b,p=s("2877"),v=Object(p["a"])(h,c,l,!1,null,"85a10874",null),f=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col",width:"18%"}},[t._v(t._s(t.$t("text.displayName")))]),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("text.commentContent")))]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[s("font-awesome-icon",{attrs:{icon:"thumbs-up"}})],1),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v(t._s(t.$t("text.replyCount")))]),s("th",[t._v(" ")]),s("th",{attrs:{scope:"col",width:"15%"}},[t._v(t._s(t.$t("text.publishTime")))])])]),s("tbody",t._l(t.comments,(function(e){return s("tr",[s("th",{attrs:{scope:"row"}},[s("img",{staticClass:"rounded-circle mr-2",attrs:{src:e.author.avatar,alt:e.author.name}}),s("a",{attrs:{href:e.author.channelUrl}},[t._v(t._s(e.author.name))])]),s("td",[s("div",{staticStyle:{"max-height":"25vh","max-width":"40rem",overflow:"auto"},domProps:{innerHTML:t._s(e.textDisplay)}})]),s("td",[t._v(t._s(e.likeCount))]),s("td",[t._v(t._s(e.totalReplyCount))]),s("td",[s("a",{staticClass:"text-danger",attrs:{href:e.url,target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","youtube"],size:"lg"}})],1)]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("formatDate")(e.publishedAt)))])])})),0)])])},C=[];function w(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?w(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var L={data(){return{}},methods:{},computed:y({},Object(o["c"])("YoutubeDraw",["comments"])),watch:{},components:{},mounted(){}},k=L,x=Object(p["a"])(k,g,C,!1,null,"145917e0",null),_=x.exports,O=s("6275"),D=s("5110");function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function j(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var S={metaInfo(){return{title:this.$i18n.t("title.youtubeDraw"),meta:[]}},data(){return{drawNumber:1,videoUrl:"",commentStatus:"stale",drawStatus:"ready",previousComments:[],showCount:0,showTotalCount:0,nowDrawCount:0}},methods:j(j({},Object(o["b"])("YoutubeApi",["callCommentThreads","getVideoDetail"])),{},{getWinningComments(t){var e=this;return Object(n["a"])((function*(){let s=[];e.nowDrawCount=0;do{if(0===t.length){s.length<e.drawNumber&&alert(e.$i18n.t("message.notEnoughMessages"));break}let a=O["b"].random(0,t.length-1),r=t[a];!e.filterSetting.enableList.includes("isSubscriptCheck")||(yield D["a"].checkHasSubscript(e.videoDetail.channelId,r.author.channelId.value))?(s.push(r),t.splice(a,1),e.nowDrawCount++):t.splice(a,1)}while(s.length<e.drawNumber);return s}))()},run(){this.drawStatus="drawing",this.comments=[];let t=this.filterSetting.enableList.includes("continuousDrawNoRepeated")&&this.previousComments.length>0,e=this.filter(t?this.previousComments:this.commentThreads);this.showTotalCount=e.length,this.previousComments=e,this.getWinningComments(e).then(t=>{this.comments=t,this.showCount=this.comments.length,this.drawStatus="ready"})},preview(){let t=this.filter(this.commentThreads);this.comments=t.slice(0,25),this.showCount=this.comments.length,this.showTotalCount=t.length},reset(){this.previousComments=[],this.comments=[],this.showCount=0,this.showTotalCount=0},filter(t){let e,s=this.filterSetting,a=[];return e=t.filter(t=>{let e=!0;if(s.enableList.includes("textLengthGtNumber")&&(e=e&&t.textDisplay.length>parseInt(s.textLengthGtNumber)),s.enableList.includes("textContain")&&(e=e&&t.textDisplay.includes(s.textContain)),s.enableList.includes("textLikeGtNumber")&&(e=e&&t.likeCount>parseInt(s.textLikeGtNumber)),s.enableList.includes("datetimeRange")&&(e=e&&new Date(s.startDateTime)<=new Date(t.publishedAt)&&new Date(s.endDateTime)>=new Date(t.publishedAt)),s.enableList.includes("duplicateUsers")){let s=a.includes(t.author.channelId.value);e=e&&!s,s||a.push(t.author.channelId.value)}return e}),e},fetch(){let t=this.videoUrl.match(/^(https:\/\/www\.youtube\.com\/watch\?v=|https:\/\/youtu\.be\/)(([^&])*)&*/);if(!t)return void console.log("error");this.commentStatus="fetching";let e=t[2];this.getVideoDetail(e),this.callCommentThreads({videoId:e}).then(()=>{this.commentStatus="ready"}).catch(()=>{alert(this.$i18n.t("message.quotaLimited"))})}}),computed:j(j(j({},Object(o["c"])("YoutubeApi",["commentThreads","commentThreadsCount","videoDetail"])),Object(o["c"])("YoutubeDraw",["filterSetting"])),Object(m["b"])("YoutubeDraw",["comments"])),watch:{videoUrl(){this.commentStatus="stale",this.previousComments=[]}},components:{SettingFilter:f,CommentTable:_},mounted(){}},P=S,A=Object(p["a"])(P,a,r,!1,null,"5111c56e",null);e["default"]=A.exports},ade3:function(t,e,s){"use strict";function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return a}))}}]);