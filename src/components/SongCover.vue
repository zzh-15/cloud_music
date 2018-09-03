<template>
    <div class="song-cover">
            <span v-if="playCount">
                <svg class="icon play-count" aria-hidden="true">
                    <use xlink:href="#icon-erji"></use>
                </svg>{{playCount}}</span>
            <img v-lazy="picUrl" alt=""  colorify-manipulate>
        </div>
</template>

<script>
export default {
  name: "SongCover",
  props: ["playCount","picUrl"],
  data() {
    return {};
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.song-cover {
  position: relative;
  span {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 12px;
    padding: 2px 0;
    letter-spacing: 0.1rem;
    transform: scale(0.80);
  }
  img {
    width: 100%;
    height: auto;
  }
}
.play-count {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 3px;
}
</style>
