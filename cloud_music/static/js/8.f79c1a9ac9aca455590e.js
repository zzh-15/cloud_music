webpackJsonp([8],{Y8d1:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("3cXf"),n=e.n(a),s={name:"MusicPage",data:function(){return{list:[],type:"recentPlay",left:"50%"}},methods:{play:function(t){var i=[];this.list.map(function(t){i.push({id:t.id,name:t.id,ar:t.ar[0].name,al:t.al.name})}),this.$Storage.setItem("playingList",n()(i)),this.$router.push({path:"/audio",query:{id:t}})},change:function(){if("collection"==this.type){var t=JSON.parse(this.$Storage.getItem("recentPlay"));null==t&&(t=[]),this.list=t,this.left="50%",this.type="recentPlay"}else{var i=JSON.parse(this.$Storage.getItem("collection"));null==i&&(i=[]),this.list=i,this.left="0%",this.type="collection"}}},components:{PlayListItem:e("GR7l").a},created:function(){this.change()}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"header-list"},[e("div",{staticClass:"list-type"},[e("div",{on:{click:t.change}},[t._v("我的收藏")]),t._v(" "),e("div",{on:{click:t.change}},[t._v("最近播放")])]),t._v(" "),e("div",{staticClass:"underline",style:{left:t.left}})]),t._v(" "),e("svg",{staticClass:"icon icon-return",attrs:{"aria-hidden":"true"},on:{click:function(i){t.$router.go(-1)}}},[e("use",{attrs:{"xlink:href":"#icon-zuojiantouxiangzuoxianxing-copy"}})])]),t._v(" "),e("div",{staticClass:"content"},[e("div",[e("div",{staticClass:"play-all",on:{click:function(i){t.play(t.list[0].id)}}},[e("div",{staticClass:"item-size"},[e("svg",{staticClass:"icon play-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-bofang"}})])]),t._v(" "),e("p",{staticClass:"item-name"},[t._v("播放全部\n          "),e("span",{staticClass:"size"},[t._v("(共"+t._s(t.list.length)+"首)")])])]),t._v(" "),e("div",t._l(t.list,function(i,a){return e("PlayListItem",{key:i.id,attrs:{id:i.id,index:a+1,name:i.name,author:i.ar[0].name,album:i.al.name,type:t.$route.query.type},nativeOn:{click:function(e){t.play(i.id)}}})}))])])])},staticRenderFns:[]};var c=e("C7Lr")(s,l,!1,function(t){e("or7c")},"data-v-7ad1937d",null);i.default=c.exports},or7c:function(t,i){}});
//# sourceMappingURL=8.f79c1a9ac9aca455590e.js.map