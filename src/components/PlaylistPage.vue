<template>
  <div>
    <div class="type">
      <div class="all-play">
        {{currentType}}

      </div>

    </div>
    <div class="playlist">
      <SongItem v-for="item in playlist" :key="item.id" :id="item.id" type="playlist" :item="item" :name="item.name" :picUrl="item.picUrl" class="play-item" />
    </div>
  </div>
</template>

<script>
import SongItem from "./SongItem";

export default {
  name: "PlaylistPage",
  data() {
    return {
      playlist: null,
      currentType: "全部歌单"
    };
  },
  components: {
    SongItem
  },
  created() {
    this.$axios
      .get("/music/personalized")
      .then(response => {
        response.data.result.map(e => {
          this.playCount(e);
        });
        this.playlist = response.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    playCount(e) {
      e.playCount /= 10000;
      e.playCount = e.playCount.toFixed(1) + "万";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.play-count {
  width: 1rem;
  height: 1rem;
}
.type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
}
.all-play {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  border: 0.5px solid rgb(204, 204, 204);
  border-radius: 1rem;
  padding: 0.3rem 0.5rem;
}
.btn {
  border: none;
  outline: none;
  background-color: transparent;
  border-right: 0.5px solid rgb(204, 204, 204);
  padding: 0 0.4rem;
  color: rgb(148, 148, 148);
  font-size: 0.7rem;
}
.playlist {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  .play-item {
    width: 40%;
  }
}
</style>
