webpackJsonp([4],{MYfc:function(t,e,i){var n;n=function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=20)}([function(t,e,i){t.exports=!i(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var i=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=i)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){var n=i(11),a=i(16),s=i(18),r=Object.defineProperty;e.f=i(0)?Object.defineProperty:function(t,e,i){if(n(t),e=s(e,!0),n(i),a)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){"use strict";e.__esModule=!0;var n,a=i(8),s=(n=a)&&n.__esModule?n:{default:n};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},function(t,e,i){t.exports={default:i(9),__esModule:!0}},function(t,e,i){i(19);var n=i(2).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var n=i(10);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,a){return t.call(e,i,n,a)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){var n=i(1),a=i(4).document,s=n(a)&&n(a.createElement);t.exports=function(t){return s?a.createElement(t):{}}},function(t,e,i){var n=i(4),a=i(2),s=i(12),r=i(15),o=function(t,e,i){var c,l,u,d=t&o.F,f=t&o.G,h=t&o.S,p=t&o.P,g=t&o.B,y=t&o.W,m=f?a:a[e]||(a[e]={}),v=m.prototype,_=f?n:h?n[e]:(n[e]||{}).prototype;for(c in f&&(i=e),i)(l=!d&&_&&void 0!==_[c])&&c in m||(u=l?_[c]:i[c],m[c]=f&&"function"!=typeof _[c]?i[c]:g&&l?s(u,n):y&&_[c]==u?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):p&&"function"==typeof u?s(Function.call,u):u,p&&((m.virtual||(m.virtual={}))[c]=u,t&o.R&&v&&!v[c]&&r(v,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,e,i){var n=i(5),a=i(17);t.exports=i(0)?function(t,e,i){return n.f(t,e,a(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){t.exports=!i(0)&&!i(3)(function(){return 7!=Object.defineProperty(i(13)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n=i(1);t.exports=function(t,e){if(!n(t))return t;var i,a;if(e&&"function"==typeof(i=t.toString)&&!n(a=i.call(t)))return a;if("function"==typeof(i=t.valueOf)&&!n(a=i.call(t)))return a;if(!e&&"function"==typeof(i=t.toString)&&!n(a=i.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e,i){var n=i(14);n(n.S+n.F*!i(0),"Object",{defineProperty:i(5).f})},function(t,e,i){var n,a,s,r;r=function(t,e,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(i),s=r(n);function r(t){return t&&t.__esModule?t:{default:t}}var o=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g,c=0,l={title:"ti",artist:"ar",album:"al",offset:"offset",by:"by"};function u(){}var d=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;(0,a.default)(this,t),this.lrc=e,this.tags={},this.lines=[],this.handler=i,this.state=c,this.curLine=0,this._init()}return(0,s.default)(t,[{key:"_init",value:function(){this._initTag(),this._initLines()}},{key:"_initTag",value:function(){for(var t in l){var e=this.lrc.match(new RegExp("\\["+l[t]+":([^\\]]*)]","i"));this.tags[t]=e&&e[1]||""}}},{key:"_initLines",value:function(){for(var t=this.lrc.split("\n"),e=0;e<t.length;e++){var i=t[e],n=o.exec(i);if(n){var a=i.replace(o,"").trim();a&&this.lines.push({time:60*n[1]*1e3+1e3*n[2]+10*(n[3]||0),txt:a})}}this.lines.sort(function(t,e){return t.time-e.time})}},{key:"_findCurNum",value:function(t){for(var e=0;e<this.lines.length;e++)if(t<=this.lines[e].time)return e;return this.lines.length-1}},{key:"_callHandler",value:function(t){t<0||this.handler({txt:this.lines[t].txt,lineNum:t})}},{key:"_playRest",value:function(){var t=this,e=this.lines[this.curNum].time-(+new Date-this.startStamp);this.timer=setTimeout(function(){t._callHandler(t.curNum++),t.curNum<t.lines.length&&1===t.state&&t._playRest()},e)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];this.lines.length&&(this.state=1,this.curNum=this._findCurNum(t),this.startStamp=+new Date-t,e||this._callHandler(this.curNum-1),this.curNum<this.lines.length&&(clearTimeout(this.timer),this._playRest()))}},{key:"togglePlay",value:function(){var t=+new Date;1===this.state?(this.stop(),this.pauseStamp=t):(this.state=1,this.play((this.pauseStamp||t)-(this.startStamp||t),!0),this.pauseStamp=0)}},{key:"stop",value:function(){this.state=c,clearTimeout(this.timer)}},{key:"seek",value:function(t){this.play(t)}}]),t}();e.default=d,t.exports=e.default},a=[t,e,i(6),i(7)],void 0===(s="function"==typeof(n=r)?n.apply(e,a):n)||(t.exports=s)}])},t.exports=n()},PkCn:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("3cXf"),a=i.n(n),s=i("MYfc"),r=i.n(s),o={name:"Audio",data:function(){return{data:null,audio:null,playTime:{currentTime:"00:00",totalTime:"00:00",point:0},collection:{c:!1,index:0},animationPlayState:"running",pointDrag:!0,lyric:null,lyricShow:!1,line:0}},methods:{lyricToggle:function(){this.lyricShow?this.lyricShow=!1:(this.lyricShow=!0,null==this.lyric&&this.lyricRender())},lyricRender:function(){var t=this;this.$axios.get("/music/lyric?id="+this.$store.state.currentMusic.id).then(function(e){null!=t.lyric&&(t.line=0,t.lyric.stop()),t.lyric=new r.a(e.data.lrc.lyric,function(e){if(t.line=e.lineNum,t.line>=3){var i=document.getElementsByClassName("lyrics")[0],n=document.getElementsByClassName("lyrics-content")[0],a=document.querySelector("div[line='"+t.line+"']");i&&a&&(n.style.top=i.offsetHeight/2-a.offsetTop+"px")}}),t.lyric.seek(1e3*t.audio.currentTime),t.$store.state.playState&&t.lyric.play()}).catch(function(t){console.log(t)})},pointMove:function(t){this.pointDrag=!1;var e=document.getElementsByClassName("progress")[0],i=document.getElementsByClassName("already")[0],n=document.getElementsByClassName("point")[0],a=window.getComputedStyle(e,null).width,s=t.targetTouches[0].pageX-e.offsetLeft;s<=0&&(s=0),s>=parseInt(a)&&(s=parseInt(a)),i.style.width=s+"px",n.style.left=s+"px"},pointEnd:function(){var t=document.getElementsByClassName("progress")[0],e=window.getComputedStyle(t,null),i=document.getElementsByClassName("point")[0],n=parseInt(i.style.left)/parseInt(e.width);this.playTime.point=100*n,this.audio.currentTime=this.audio.duration*n,this.lyric&&this.lyric.seek(1e3*this.audio.currentTime),this.pointDrag=!0},lastMusic:function(){for(var t=JSON.parse(this.$Storage.getItem("playingList")),e=0;e<=t.length;e++)if(this.$store.state.currentMusic.id==t[e].id){0===e?this.changeMusic(t[t.length-1].id):this.changeMusic(t[e-1].id);break}},nextMusic:function(){for(var t=JSON.parse(this.$Storage.getItem("playingList")),e=0;e<=t.length;e++)if(this.$store.state.currentMusic.id==t[e].id){e===t.length-1?this.changeMusic(t[0].id):this.changeMusic(t[e+1].id);break}},playStateChange:function(){this.$store.state.playState?(this.audio.pause(),this.lyric&&this.lyric.stop(),this.animationPlayState="paused",this.$store.commit("playStateChange",!1)):(this.audio.play(),this.lyric&&this.lyric.play(),this.animationPlayState="running",this.$store.commit("playStateChange",!0))},collectionChange:function(){var t=JSON.parse(this.$Storage.getItem("collection"));this.collection.c?(this.collection.c=!1,t.splice(this.collection.index,1)):(this.collection.c=!0,null==t&&(t=[]),t.push({id:this.data.songs[0].id,name:this.data.songs[0].name,ar:this.data.songs[0].ar,al:this.data.songs[0].al})),this.$Storage.setItem("collection",a()(t))},speed:function(t){var e=t.offsetX/t.target.clientWidth;this.playTime.point=100*e,this.audio.currentTime=this.audio.duration*e,this.lyric&&this.lyric.seek(1e3*this.audio.currentTime)},timeConversion:function(t){t=parseInt(t);var e=parseInt(t/60),i=t%60;return(e=(""+e).length>1?e:"0"+e)+":"+(i=0==i?"00":(i+"").length>1?i:"0"+i)},changeMusic:function(t){var e=this;this.$axios.get("/music/song/detail?ids="+t).then(function(i){e.data=i.data,i.data.songs[0].url="http://music.163.com/song/media/outer/url?id="+t+".mp3",e.$store.commit("currentMusicUrlChange",i.data.songs[0]),e.audio.load(),e.$store.state.playState&&e.audio.play(),e.lyricRender(),e.addRecentPlay()}).catch(function(t){console.log(t)})},addRecentPlay:function(){var t=this,e=JSON.parse(this.$Storage.getItem("recentPlay"));null==e&&(e=[]);var i=!1;e.map(function(e){t.data.songs[0].id==e.id&&(i=!0)}),i||(e.unshift({id:this.data.songs[0].id,name:this.data.songs[0].name,ar:this.data.songs[0].ar,al:this.data.songs[0].al}),e.length>10&&e.pop(),this.$Storage.setItem("recentPlay",a()(e)))}},created:function(){var t=this;this.$store.commit("changeAudio",!0),this.$axios.get("/music/song/detail?ids="+this.$route.query.id).then(function(e){t.data=e.data,t.audio=document.querySelector("#myAudio"),t.$route.query.id!=t.$store.state.currentMusic.id&&(e.data.songs[0].url="http://music.163.com/song/media/outer/url?id="+t.$route.query.id+".mp3",t.$store.commit("currentMusicUrlChange",e.data.songs[0]),t.audio.load(),t.audio.play()),t.$store.commit("playStateChange",!0),t.addRecentPlay(),setInterval(function(){if(t.pointDrag&&(isNaN(t.audio.duration)?t.playTime.totalTime="00:00":t.playTime.totalTime=t.timeConversion(t.audio.duration),t.playTime.currentTime=t.timeConversion(t.audio.currentTime),t.playTime.point=t.audio.currentTime/t.audio.duration*100,parseInt(t.audio.duration)==parseInt(t.audio.currentTime))){var e=JSON.parse(t.$Storage.getItem("playingList"));if("list_cycle"==t.$store.state.playModel){for(var i=0;i<=e.length;i++)if(t.$store.state.currentMusic.id==e[i].id){var n=void 0;n=i==e.length-1?e[0].id:e[i+1].id,t.changeMusic(n);break}}else if("list_order"==t.$store.state.playModel){for(var a=0;a<=e.length;a++)if(t.$store.state.currentMusic.id==e[a].id&&a<e.length-1){t.changeMusic(e[a+1].id);break}}else if("list_random"==t.$store.state.playModel){var s=Math.floor(Math.random()*e.length);t.changeMusic(e[s].id)}else t.audio.currentTime=0,t.lyric&&t.lyric.seek(0),t.audio.play()}},500)}).catch(function(t){console.log(t)});var e=JSON.parse(this.$Storage.getItem("collection"));null!=e&&e.map(function(e,i){e.id==t.$route.query.id&&(t.collection.c=!0,t.collection.index=i)})},destroyed:function(){this.$store.commit("changeAudio",!1)},beforeRouteLeave:function(t,e,i){this.lyric&&(this.lyric.stop(),this.lyric=null),i()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("div",{staticClass:"bg",style:{background:"url("+t.data.songs[0].al.picUrl+") no-repeat left top",backgroundSize:"cover"}}),t._v(" "),n("div",{staticClass:"song-title"},[n("button",{on:{click:function(e){t.$router.go(-1)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zuojiantouxiangzuoxianxing"}})])]),t._v(" "),n("div",{staticClass:"song-brief"},[n("div",[n("p",{staticClass:"brief name"},[t._v(t._s(t.data.songs[0].name))]),t._v(" "),n("p",{staticClass:"brief author"},[t._v(t._s(t.data.songs[0].ar[0].name))])])])]),t._v(" "),t.lyricShow?n("div",{staticClass:"lyrics",on:{click:t.lyricToggle}},[null==t.lyric?n("div",{staticClass:"lyrics-content"},[t._m(0)]):n("div",{staticClass:"lyrics-content"},t._l(t.lyric.lines,function(e,i){return n("div",{key:i,staticClass:"lyrics-line",class:{lyricsActive:i==t.line},attrs:{line:i}},[n("p",[t._v(t._s(e.txt))])])}))]):n("div",{staticClass:"play-state rotating",style:{animationPlayState:t.animationPlayState},on:{click:t.lyricToggle}},[n("img",{staticClass:"record",attrs:{src:i("pg6L"),alt:""}}),t._v(" "),n("img",{staticClass:"picUrl",attrs:{src:t.data.songs[0].al.picUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"play-control"},[n("div",{staticClass:"play-time"},[n("span",{staticClass:"current-time time"},[t._v(t._s(t.playTime.currentTime))]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"speed",on:{click:function(e){t.speed(e)}}}),t._v(" "),n("div",{staticClass:"already",style:{width:t.playTime.point+"%"}}),t._v(" "),n("div",{staticClass:"point",style:{left:t.playTime.point+"%"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.pointMove(e)},touchend:function(e){e.stopPropagation(),e.preventDefault(),t.pointEnd()}}})]),t._v(" "),n("span",{staticClass:"total-time time"},[t._v(t._s(t.playTime.totalTime))])]),t._v(" "),n("div",{staticClass:"control"},["list_cycle"==t.$store.state.playModel?n("svg",{staticClass:"song song-model",attrs:{"aria-hidden":"true"},on:{click:function(e){t.$store.commit("playModelChange")}}},[n("use",{attrs:{"xlink:href":"#icon-liebiaoxunhuan"}})]):"list_order"==t.$store.state.playModel?n("svg",{staticClass:"song song-model",attrs:{"aria-hidden":"true"},on:{click:function(e){t.$store.commit("playModelChange")}}},[n("use",{attrs:{"xlink:href":"#icon-shunxubofang"}})]):"list_random"==t.$store.state.playModel?n("svg",{staticClass:"song song-model",attrs:{"aria-hidden":"true"},on:{click:function(e){t.$store.commit("playModelChange")}}},[n("use",{attrs:{"xlink:href":"#icon-bofangye-caozuolan-suijibofang"}})]):n("svg",{staticClass:"song song-model",attrs:{"aria-hidden":"true"},on:{click:function(e){t.$store.commit("playModelChange")}}},[n("use",{attrs:{"xlink:href":"#icon-xunhuan"}})]),t._v(" "),n("svg",{staticClass:"song song-choose",attrs:{"aria-hidden":"true"},on:{click:t.lastMusic}},[n("use",{attrs:{"xlink:href":"#icon-shangyishou"}})]),t._v(" "),t.$store.state.playState?n("svg",{staticClass:"song song-play",attrs:{"aria-hidden":"true"},on:{click:t.playStateChange}},[n("use",{attrs:{"xlink:href":"#icon-zanting"}})]):n("svg",{staticClass:"song song-play",attrs:{"aria-hidden":"true"},on:{click:t.playStateChange}},[n("use",{attrs:{"xlink:href":"#icon-bofang1"}})]),t._v(" "),n("svg",{staticClass:"song song-choose",attrs:{"aria-hidden":"true"},on:{click:t.nextMusic}},[n("use",{attrs:{"xlink:href":"#icon-kuaijin"}})]),t._v(" "),t.collection.c?n("svg",{staticClass:"song-like",attrs:{"aria-hidden":"true"},on:{click:t.collectionChange}},[n("use",{attrs:{"xlink:href":"#icon-shoucang"}})]):n("svg",{staticClass:"song-like",attrs:{"aria-hidden":"true"},on:{click:t.collectionChange}},[n("use",{attrs:{"xlink:href":"#icon-aixin"}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lyrics-line"},[e("p",[this._v("歌词加载中...")])])}]};var l=i("C7Lr")(o,c,!1,function(t){i("nr6W")},"data-v-bb47c1e8",null);e.default=l.exports},nr6W:function(t,e){},pg6L:function(t,e,i){t.exports=i.p+"static/img/record.6f3f7ca.png"}});
//# sourceMappingURL=4.be075f378c59b98e32ad.js.map