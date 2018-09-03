<template>
  <div id="small-audio">
    <div class="song">
      <img :src="$store.state.currentMusic.al.picUrl" alt="" class="cover">
      <div class="brief">
        <div class="detail">
          <p class="name">{{$store.state.currentMusic.name}}</p>
          <p class="ar-name">{{$store.state.currentMusic.ar[0].name}}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="progress" @click.stop="playStateChange">
        <div class="progress-bg"></div>
        <div class="progress-half">
          <div class="progress-roating roating-left" :style="{transform: 'rotate('+roatingLeft+'deg)'}"></div>
        </div>
        <div class="progress-half">
          <div class="progress-roating roating-right" :style="{transform: 'rotate('+roatingRight+'deg)'}"></div>
        </div>
        <svg class="icon-play-state" aria-hidden="true" v-if="$store.state.playState">
          <use xlink:href="#icon-weibiaoti519"></use>
        </svg>
        <svg class="icon-play-state" aria-hidden="true" v-else style="transform: translateX(-40%) translateY(-50%)">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
      </div>
      <div class="icon-list" @click.stop="open">
        <svg class="icon-play-list" aria-hidden="true">
          <use xlink:href="#icon-shunxubofang"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallAudio",
  data() {
    return {
      roatingLeft: -137,
      roatingRight: -134,
      audio: null
    };
  },
  methods: {
    playStateChange() {
      if (this.$store.state.playState) {
        this.$store.commit("playStateChange", false);
        this.audio.pause();
      } else {
        this.$store.commit("playStateChange", true);
        this.audio.play();
      }
    },
    open() {
      this.$store.commit("changeContentHeight", 20);
      this.$store.commit("changeContentModal", true);
    }
  },
  components: {},
  created() {
    this.audio = document.querySelector("#myAudio");
    setInterval(() => {
      if (
        this.$store.state.playState &&
        this.$store.state.currentMusic.id &&
        !this.$store.state.Audio
      ) {
        if (!isNaN(this.audio.duration)) {
          let progress = this.audio.currentTime / this.audio.duration;
          if (progress <= 0.5) {
            let angle = 180 * progress * 2;
            this.roatingRight = -135 + parseInt(angle);
            this.roatingLeft = -135;
          } else {
            let angle = 180 * (progress - 0.5) * 2;
            this.roatingLeft = -135 + parseInt(angle);
            this.roatingRight = 45;
          }
        }
      }
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#small-audio {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: stretch;
  z-index: 99;
  background-color: #fff;
  height: 3rem;
  .song {
    display: flex;
    width: 70%;
    align-items: center;
    .cover {
      width: 2.4rem;
      height: auto;
      padding: 0 0.4rem;
    }
    .brief {
      .name {
        font-size: 0.8rem;
        width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ar-name {
        color: rgb(202, 202, 202);
        font-size: 0.7rem;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    .progress {
      position: relative;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      .progress-bg {
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 2px solid rgb(138, 138, 138);
        box-sizing: border-box;
        z-index: -1;
      }
      .progress-half {
        position: relative;
        height: 2rem;
        width: 50%;
        overflow: hidden;
        .progress-roating {
          height: 2rem;
          width: 200%;
          border-radius: 50%;
          box-sizing: border-box;
        }
        .roating-left {
          border: 2px solid $themeColor;
          border-top: 2px solid transparent;
          border-right: 2px solid transparent;
        }
        .roating-right {
          position: absolute;
          right: 0;
          border: 2px solid $themeColor;
          border-bottom: 2px solid transparent;
          border-left: 2px solid transparent;
        }
      }
    }
  }
  .icon-play-state {
    position: absolute;
    width: 1rem;
    height: 1rem;
    fill: rgb(138, 138, 138);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
.icon-play-list {
  width: 1.8rem;
  height: 1.8rem;
  fill: rgb(138, 138, 138);
  vertical-align: -0.9em;
}
.song-model {
  fill: rgb(192, 192, 192);
  width: auto;
  height: 1.5rem;
  padding: 0 0.5rem;
}
</style>
