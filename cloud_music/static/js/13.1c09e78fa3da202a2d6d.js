webpackJsonp([13],{In7A:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"PlaylistPage",data:function(){return{playlist:null,currentType:"全部歌单"}},components:{SongItem:e("A1dM").a},created:function(){var t=this;this.$axios.get("/music/personalized").then(function(n){n.data.result.map(function(n){t.playCount(n)}),t.playlist=n.data.result}).catch(function(t){console.log(t)})},methods:{playCount:function(t){t.playCount/=1e4,t.playCount=t.playCount.toFixed(1)+"万"}}},i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"type"},[n("div",{staticClass:"all-play"},[this._v("\n      "+this._s(this.currentType)+"\n\n    ")])]),this._v(" "),n("div",{staticClass:"playlist"},this._l(this.playlist,function(t){return n("SongItem",{key:t.id,staticClass:"play-item",attrs:{id:t.id,type:"playlist",item:t,name:t.name,picUrl:t.picUrl}})}))])},staticRenderFns:[]};var s=e("C7Lr")(a,i,!1,function(t){e("buDq")},"data-v-24730287",null);n.default=s.exports},buDq:function(t,n){}});
//# sourceMappingURL=13.1c09e78fa3da202a2d6d.js.map