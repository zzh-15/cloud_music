webpackJsonp([11],{KCMz:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"NewMusic",data:function(){return{newMuisc:null,offset:0,loading:!1,tips:"努力加载中..."}},components:{SongItem:i("A1dM").a},mounted:function(){window.addEventListener("scroll",this.scrollBottom)},methods:{scrollBottom:function(){var t=this;window.screen.height+document.documentElement.scrollTop>=document.body.clientHeight&&!this.loading&&(this.loading=!0,this.offset++,this.$axios.get("/music/top/album?offset="+this.offset+"&limit=12").then(function(n){t.newMuisc=t.newMuisc.concat(n.data.albums),t.$nextTick(function(){t.loading=!1})}).catch(function(n){t.tips="连接失败，请稍后重试",console.log(n)}))}},created:function(){var t=this;this.$axios.get("/music/top/album?offset="+this.offset+"&limit=12").then(function(n){t.newMuisc=n.data.albums}).catch(function(t){console.log(t)})}},s={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"header"},[i("button",{on:{click:function(n){t.$router.go(-1)}}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuojiantouxiangzuoxianxing"}})])]),t._v(" "),i("span",[t._v("新碟上架")])]),t._v(" "),i("div",{staticClass:"music"},t._l(t.newMuisc,function(t){return i("SongItem",{key:t.id,staticClass:"music-item",attrs:{id:t.id,type:"album",name:t.name,picUrl:t.picUrl,people:t.artists[0].name,playCount:null}})})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[i("span",[t._v(t._s(t.tips))])])])},staticRenderFns:[]};var o=i("C7Lr")(e,s,!1,function(t){i("POAi")},"data-v-6fa239ee",null);n.default=o.exports},POAi:function(t,n){}});
//# sourceMappingURL=11.73bca2e08c8309ed1474.js.map