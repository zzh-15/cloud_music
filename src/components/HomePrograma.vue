<template>
  <div class="programa">
    <router-link :to="to">
      <span class="programa-name">{{name}}
        <svg class="icon play-count" aria-hidden="true">
          <use xlink:href="#icon-dayuhao-copy-copy"></use>
        </svg>
      </span>
    </router-link>
    <div class="programa-items">
      <SongItem class="programa-item" :type="type" :id="type=='playlist'?item.id:item.song.album.id" v-for="item in items" :key="item.id" :name="item.name" :picUrl="item.picUrl?item.picUrl:item.song.album.picUrl" :people="item.song?item.song.artists[0].name:null" :playCount="item.playCount" />
    </div>
  </div>
</template>

<script>
import SongItem from "./SongItem";

export default {
  name: "HomePrograma",
  props: ["items", "name", "to", "type"],
  data() {
    return {};
  },
  components: {
    SongItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  margin-bottom: 0.8rem;
  border-left: 3px solid $themeColor;
}
.programa {
  margin-top: 0.8rem;
  .programa-items {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    .programa-item {
      width: 33%;
    }
  }
  .programa-name {
    text-indent: 0.1rem;
    font-size: 1rem;
    padding: 0px 10px;
    border-left: 3px solid $themeColor;
  }
}
.play-count {
  width: 1rem;
  height: 1rem;
}
</style>
