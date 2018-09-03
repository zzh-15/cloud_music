<template>
  <div>
    <HomeSlide class="slide" />
    <HomePrograma :items="recommended" name="推荐歌单" to="/main/home/playlist" type="playlist"/>
    <HomePrograma :items="newSong" name="最新音乐"  to="/newMusic"  type="album"/>
  </div>
</template>

<script>
import HomeSlide from "./HomeSlide";
import HomePrograma from "./HomePrograma";

export default {
  name: "RecommendPage",
  data() {
    return {
      recommended: null,
      newSong: null
    };
  },
  components: {
    HomeSlide,
    HomePrograma
  },
  methods: {
    playCount(e) {
      e.playCount /= 10000;
      e.playCount = e.playCount.toFixed(1) + "万";
    }
  },
  created() {
    this.$axios
      .all([this.$axios.get("/music/personalized?limit=6"),this.$axios.get("/music/personalized/newsong?limit=6")])
      .then(response => {
        response[0].data.result.map(e => {
          this.playCount(e);
        });
        this.recommended = response[0].data.result;
        this.newSong = response[1].data.result.slice(0,6);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .slide {
//   margin-top: 2rem;
// }
</style>
