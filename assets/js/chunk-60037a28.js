(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60037a28"],{"127c":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"news"},[e("mt-header",{attrs:{fixed:"",title:"消息中心"}},[e("mt-button",{attrs:{slot:"left"},on:{click:t.back},slot:"left"},[e("i",{staticClass:"backicon iconfont icon-fanhui"})])],1),e("div",{staticClass:"news-a"},[e("mt-navbar",{model:{value:t.selected,callback:function(o){t.selected=o},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"1"}},[t._v("课程提醒"),e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.remind1,expression:"remind1 != 0"}],staticClass:"mint-badge is-error is-size-small",attrs:{"data-v-18ea014a":""}},[t._v(t._s(t.remind1))])]),e("mt-tab-item",{attrs:{id:"2"}},[t._v("互动提醒"),e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.remind2,expression:"remind2 != 0"}],staticClass:"mint-badge is-error is-size-small",attrs:{"data-v-18ea014a":""}},[t._v(t._s(t.remind2))])]),e("mt-tab-item",{attrs:{id:"3"}},[t._v("平台通知"),e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.remind3,expression:"remind3 != 0"}],staticClass:"mint-badge is-error is-size-small",attrs:{"data-v-18ea014a":""}},[t._v(t._s(t.remind3))])])],1),e("transition",{attrs:{name:"slide-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCourseReminder,expression:"showCourseReminder"}]},[e("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp},on:{init:t.mescrollInit}},t._l(t.remindList,function(o,n){return e("a",{staticClass:"mint-cell",class:{"index-l-1":o.stauuuu},attrs:{"data-v-18ea014a":""},on:{click:function(o){t.toCourse(n)}}},[e("div",{staticClass:"mint-cell-wrapper"},[e("div",{staticClass:"mint-cell-title course-flex"},[e("div",{staticClass:"mint-cell-text"},[e("img",{attrs:{src:o.img}})]),e("div",{staticClass:"news-ti"},[e("div",{staticClass:"n-title"},[t._v(t._s(o.title))]),e("div",{staticClass:"n-content",class:{"index-l-1":o.stauuuu}},[t._v(t._s(o.note))])])]),e("div",{staticClass:"mint-cell-value"},[e("span",[t._v(t._s(o.note))])])]),e("div",{staticClass:"mint-cell-right"})])}),0)],1)]),e("transition",{attrs:{name:"slide-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showInteractiveReminder,expression:"showInteractiveReminder"}]},[e("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp1},on:{init:t.mescrollInit}},t._l(t.interactionList,function(o,n){return e("a",{staticClass:"mint-cell",class:{"index-l-1":o.stauuuu},attrs:{"data-v-18ea014a":""}},[e("div",{staticClass:"mint-cell-wrapper"},[e("div",{staticClass:"mint-cell-title course-flex"},[e("div",{staticClass:"mint-cell-text Interaction"},[e("img",{attrs:{src:o.img}})]),e("div",{staticClass:"news-ti"},[e("div",{staticClass:"n-title"},[t._v(t._s(o.title))]),e("div",{staticClass:"n-content"},[t._v(t._s(o.note))])])]),e("div",{staticClass:"mint-cell-value"},[e("span",[t._v(t._s(o.date))])])]),e("div",{staticClass:"mint-cell-right"})])}),0)],1)]),e("transition",{attrs:{name:"slide-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showPlatformNotification,expression:"showPlatformNotification"}]},[e("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp2},on:{init:t.mescrollInit}},t._l(t.remindNotice,function(o,n){return e("a",{staticClass:"mint-cell",class:{"index-l-1":o.stauuuu},attrs:{"data-v-18ea014a":""}},[e("div",{staticClass:"mint-cell-wrapper"},[e("div",{staticClass:"mint-cell-title course-flex"},[e("div",{staticClass:"news-ti"},[e("div",{staticClass:"n-title"},[t._v(t._s(o.title))]),e("div",{staticClass:"n-content"},[t._v(t._s(o.note))])])]),e("div",{staticClass:"mint-cell-value"},[e("span",[t._v(t._s(o.date))])])]),e("div",{staticClass:"mint-cell-right"})])}),0)],1)])],1)],1)},s=[],i=e("f499"),l=e.n(i),r=(e("7f7f"),e("2b0e")),a=e("76a0"),c=e("8d6b");r["default"].component(a["Badge"].name,a["Badge"]),r["default"].component(a["TabContainer"].name,a["TabContainer"]),r["default"].component(a["TabContainerItem"].name,a["TabContainerItem"]);var p={components:{MescrollVue:c["a"]},created:function(){this.getRemind(),this.getMun()},watch:{selected:function(t,o){"1"==t&&(this.getRemind(),this.showCourseReminder=!0,this.showInteractiveReminder=!1,this.showPlatformNotification=!1),"2"==t&&(this.getInteraction(),this.showCourseReminder=!1,this.showInteractiveReminder=!0,this.showPlatformNotification=!1),"3"==t&&(this.getNotice(),this.showCourseReminder=!1,this.showInteractiveReminder=!1,this.showPlatformNotification=!0)}},data:function(){return{showCourseReminder:!0,showInteractiveReminder:!1,showPlatformNotification:!1,selected:"1",interactionList:[],remindList:[],remindNotice:[],list:[],remind1:0,remind2:0,remind3:0,mescroll:null,mescrollDown:{},mescrollUp:{callback:this.getRemind,page:{num:0,size:4},htmlNodata:'<p class="upwarp-nodata">- 暂无更多数据 -</p>'},mescrollUp1:{callback:this.getInteraction,page:{num:0,size:4},htmlNodata:'<p class="upwarp-nodata"></p>'},mescrollUp2:{callback:this.getNotice,page:{num:0,size:4},htmlNodata:'<p class="upwarp-nodata"></p>'}}},beforeRouteEnter:function(t,o,e){e(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,o,e){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),e()},methods:{mescrollInit:function(t){this.mescroll=t},back:function(){this.$router.back()},getInteraction:function(t,o){o||(o=this.mescroll),t||(t={},t.num=1,t.size=8);var e=this;t.size=1,setTimeout(function(){1===t.num?e.axios.get("json/news-Interaction.json").then(function(t){e.interactionList=[];var n=t.data;e.interactionList=e.interactionList.concat(n),e.$nextTick(function(){o.endSuccess(n.length)})}).catch(function(t){o.endErr()}):(console.log("[消息中心] 互动提醒第二页"),e.axios.get("json/news-Interaction.json").then(function(n){var s=n.data;e.interactionList=e.interactionList.concat(s),e.$nextTick(function(){o.endSuccess(s.length)}),t.size=10}).catch(function(t){o.endErr()}))},500)},getRemind:function(t,o){o||(o=this.mescroll),t||(t={},t.num=1,t.size=8);var e=this;t.size=1,setTimeout(function(){1===t.num?e.axios.get("json/news-Remind.json").then(function(t){e.remindList=[];for(var n=t.data,s=JSON.parse(sessionStorage.getItem("alreadYreadFromNews"))||[],i=0;i<s.length;i++)e.arr[s[i]].stauuuu=!0;e.remindList=e.remindList.concat(n),e.$nextTick(function(){o.endSuccess(n.length)})}):(console.log("[消息中心] 课程提醒第二页"),e.axios.get("json/news-Remind.json").then(function(n){for(var s=n.data,i=JSON.parse(sessionStorage.getItem("alreadYreadFromNews"))||[],l=0;l<i.length;l++)e.arr1[i[l]].stauuuu=!0;e.remindList=e.remindList.concat(s),e.$nextTick(function(){o.endSuccess(s.length)}),t.size=10}))},500)},getNotice:function(t,o){o||(o=this.mescroll),t||(t={},t.num=1,t.size=8);var e=this;t.size=1,setTimeout(function(){1===t.num?e.axios.get("json/news-notice.json").then(function(t){e.remindNotice=[];var n=t.data;e.remindNotice=e.remindNotice.concat(n),e.$nextTick(function(){o.endSuccess(n.length)})}):(console.log("[消息中心] 平台通知第二页"),e.axios.get("json/news-notice.json").then(function(n){var s=n.data;e.remindNotice=e.remindNotice.concat(s),e.$nextTick(function(){o.endSuccess(s.length)}),t.size=10}))},500)},toCourse:function(t){for(var o=JSON.parse(sessionStorage.getItem("alreadYreadFromNews"))||[],e=0;e<o.length;e++)console.log(o[e]),o[e]==t&&o.splice(e,1);o.unshift(t),sessionStorage.setItem("alreadYreadFromNews",l()(o)),this.$router.push({path:"/course",query:{id:t}})},getMun:function(){var t=this;this.axios.get("json/news-mun.json").then(function(o){t.list=o.data,t.remind1=t.list[0].mun,t.remind2=t.list[1].mun,t.remind3=t.list[2].mun,sessionStorage.setItem("asdasd",l()(t.remind3))})}}},u=p,d=(e("9e49"),e("2877")),m=Object(d["a"])(u,n,s,!1,null,"a706a6ae",null);m.options.__file="News.vue";o["default"]=m.exports},"7f7f":function(t,o,e){var n=e("86cc").f,s=Function.prototype,i=/^\s*function ([^ (]*)/,l="name";l in s||e("9e1e")&&n(s,l,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8d6b":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"mescroll",staticClass:"mescroll"},[e("div",[t._t("default")],2)])},s=[],i=e("f868"),l=e.n(i),r=(e("f2fd"),{name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new l.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter:function(){var t=this;this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(function(){t.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave:function(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}),a=r,c=e("2877"),p=Object(c["a"])(a,n,s,!1,null,null,null);p.options.__file="mescroll.vue";o["a"]=p.exports},"9e49":function(t,o,e){"use strict";var n=e("e41f"),s=e.n(n);s.a},a21f:function(t,o,e){var n=e("584a"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},e41f:function(t,o,e){},f2fd:function(t,o,e){},f499:function(t,o,e){t.exports=e("a21f")},f868:function(t,o,e){var n,s;
/*!
 * version 1.4.0 MIT
 * 2018-11-25 wenju
 * http://www.mescroll.com
 */
/*!
 * version 1.4.0 MIT
 * 2018-11-25 wenju
 * http://www.mescroll.com
 */
(function(i,l){n=l,s="function"===typeof n?n.call(o,e,o,t):n,void 0===s||(t.exports=s)})(0,function(){var t=function(t,o){var e=this;if(e.version="1.4.0",e.isScrollBody=!t||"body"===t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i="undefined"===typeof window.orientation,l=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:s,pc:i,android:l},e.isDownScrolling=!1,e.isUpScrolling=!1;var r=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&r&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(o,e){if(!o)return e;for(var n in e)null==o[n]?o[n]=e[n]:"object"===typeof o[n]&&t.extend(o[n],e[n]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&t.preventDefault(o),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var e=t.getScrollTop();t.isKeepTop=0===e,t.os.pc&&e<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){if(t.startPoint){var e=t.getScrollTop();e>0&&(t.isKeepTop=!1);var n=t.getPoint(o),s=n.y-t.startPoint.y;if(s>0){if(e<=0&&(t.preventDefault(o),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var i=Math.abs(t.lastPoint.x-n.x),l=Math.abs(t.lastPoint.y-n.y),r=Math.sqrt(i*i+l*l);if(0!==r){var a=Math.asin(l/r)/Math.PI*180;if(a<t.optDown.minAngle)return}if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var c=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=c*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=c>0?c*t.optDown.outOffsetRate:c),t.downwarp.style.height=t.downHight+"px";var p=t.downHight/t.optDown.offset;t.optDown.onMoving(t,p,t.downHight)}}else if(s<0){var u=t.getScrollHeight(),d=t.getClientHeight(),m=u-d-e;!t.optUp.isBounce&&m<=0&&t.preventDefault(o),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(d+t.optUp.offset>=u||m<=0)&&t.triggerUpScroll()}t.lastPoint=n}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},e=t.optDown.afterLoading(t);"number"===typeof e&&e>0?setTimeout(o,e):o()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),!1!==o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.lazyStartTime=(new Date).getTime(),o.lazyTag="mescroll-lazying",o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)&&!o.optUp.isLock&&o.optUp.hasNext){var n=o.getScrollHeight()-o.getClientHeight()-t;n<=o.optUp.offset&&e&&o.triggerUpScroll()}var s=o.optUp.toTop;if((s.src||s.html)&&(t>=s.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.lazyLoad.use){var i=(new Date).getTime();o.lazyTimer&&clearTimeout(o.lazyTimer),i-o.lazyStartTime>=o.optUp.lazyLoad.delay?(o.lazyStartTime=i,o.lazyLoad(0)):o.lazyTimer=o.lazyLoad()}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){var o=this,e=t.target,n=!0;while(e!==document.body&&e!==document){var s=e.classList;if(s){if(s.contains("mescroll")||s.contains("mescroll-touch")){n=!1;break}if(s.contains("mescroll-touch-x")||s.contains("mescroll-touch-y")){var i=t.touches?t.touches[0].pageX:t.clientX,l=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=i),o.preWinY||(o.preWinY=l);var r=Math.abs(o.preWinX-i),a=Math.abs(o.preWinY-l),c=Math.sqrt(r*r+a*a);if(o.preWinX=i,o.preWinY=l,0!==c){var p=Math.asin(a/c)/Math.PI*180;if(p<=45&&s.contains("mescroll-touch-x")||p>45&&s.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var o=this.upwarp.getElementsByClassName("upwarp-progress")[0];o&&o.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,o){null!=t&&(t?this.showNoMore():this.hideUpScroll(o)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},t.prototype.endBySize=function(t,o,e){var n;if(this.optUp.use&&null!=o){var s=(this.optUp.page.num-1)*this.optUp.page.size+t;n=s<o}this.endSuccess(t,n,e)},t.prototype.endSuccess=function(t,o,e){var n=this;if(n.isDownScrolling&&n.endDownScroll(),n.optUp.use){var s;if(null!=t){var i=n.optUp.page.num,l=n.optUp.page.size;if(1===i&&(n.clearDataList(),e&&(n.optUp.page.time=e)),t<l||!1===o)if(n.optUp.hasNext=!1,0===t&&1===i)s=!1,n.showEmpty();else{var r=(i-1)*l+t;s=!(r<n.optUp.noMoreSize),n.removeEmpty()}else s=!1,n.optUp.hasNext=!0,n.removeEmpty()}var a=!n.optUp.hasNext;n.endUpScroll(s,a),n.loadFull(),n.optUp.lazyLoad.use&&n.lazyLoad()}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var s="";if(o.icon&&(s+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(s+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(s+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=s,n.appendChild(t.emptyDom),o.btnClick){var i=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?i.addEventListener("tap",function(e){e.stopPropagation(),t.preventDefault(e),o.btnClick()}):i.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var o,e=this,n=e.optUp.toTop;if(null==e.toTopBtn)n.html?(e.toTopBtn=document.createElement("div"),e.toTopBtn.innerHTML=n.html):(e.toTopBtn=document.createElement("img"),e.toTopBtn.src=n.src),e.toTopBtn.className=n.warpClass,n.supportTap?e.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),e.preventDefault(t);var o=n.btnClick&&n.btnClick();!0!==o&&e.scrollTo(0,e.optUp.toTop.duration)}):e.toTopBtn.onclick=function(){var t=n.btnClick&&n.btnClick();!0!==t&&e.scrollTo(0,e.optUp.toTop.duration)},n.warpId&&(o=e.getDomById(n.warpId)),o||(o=document.body),o.appendChild(e.toTopBtn);e.toTopBtn.classList.remove(n.hideClass),e.toTopBtn.classList.add(n.showClass),e.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var o=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=o,this.toTopBtn.style.webkitAnimationDuration=o}},t.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),s=t;if(s>0){var i=e.getScrollHeight()-e.getClientHeight();s>i&&(s=i)}else s=0;e.isScrollTo=!0,e.scrollDom.style.webkitOverflowScrolling="auto",e.getStep(n,s,function(t){e.setScrollTop(t),t===s&&(e.scrollDom.style.webkitOverflowScrolling="touch",e.isScrollTo=!1)},o)},t.prototype.getStep=function(t,o,e,n,s){var i=o-t;if(0!==n&&0!==i){n=n||300,s=s||30;var l=n/s,r=i/l,a=0,c=window.setInterval(function(){a<l-1?(t+=r,e&&e(t,c),a++):(e&&e(o,c),window.clearInterval(c))},s)}else e&&e(o)},t.prototype.lazyLoad=function(t){var o=this,e=null!=t?t:o.optUp.lazyLoad.delay,n=setTimeout(function(){for(var t=o.scrollDom.querySelectorAll("["+o.optUp.lazyLoad.attr+"]"),e=t.length,n=0;n<e;n++){var s=t[n];if("true"!==s.getAttribute(o.lazyTag)&&o.isInSee(s,o.optUp.lazyLoad.offset)){var i=s.getAttribute(o.optUp.lazyLoad.attr),l=new Image;l.onload=function(){var t=this.src,e=this.dom,n=o.optUp.lazyLoad.showClass;n&&e.classList.add(n),"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")",e.removeAttribute(o.optUp.lazyLoad.attr),e.removeAttribute(o.lazyTag)},l.onerror=function(){this.dom.removeAttribute(o.lazyTag)},l.onabort=function(){this.dom.removeAttribute(o.lazyTag)},l.src=i,s.setAttribute(o.lazyTag,"true"),l.dom=s}}},e);return n},t.prototype.isInSee=function(t,o){o=o||0;var e=this.getOffsetTop(t),n=this.getScrollTop()-o,s=e+t.offsetHeight,i=n+o+this.getClientHeight()+o;return e<i&&e>=n||s<=i&&s>n},t.prototype.getOffsetTop=function(t){var o=t.offsetTop,e=t.offsetParent;while(null!=e&&e!==this.scrollDom)o+=e.offsetTop+e.clientTop,e=e.offsetParent;return o},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"===typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var o;return t&&("string"===typeof t?o=document.getElementById(t):t.nodeType&&(o=t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t})}}]);