<template>
    <div>
        <div class="play-list" v-show="$store.state.content.modal" @click.stop="down"></div>
        <div class="list" :style="{height:$store.state.content.height+'rem'}">
            <div class="list-header">
                <div class="play-model" @click.stop="$store.commit('playModelChange')">
                    <svg class="song-model" v-if="$store.state.playModel == 'list_cycle'" aria-hidden="true">
                        <use xlink:href="#icon-liebiaoxunhuan"></use>
                    </svg>
                    <svg class="song-model" v-else-if="$store.state.playModel == 'list_order'" aria-hidden="true">
                        <use xlink:href="#icon-shunxubofang"></use>
                    </svg>
                    <svg class="song-model" v-else-if="$store.state.playModel == 'list_random'" aria-hidden="true">
                        <use xlink:href="#icon-bofangye-caozuolan-suijibofang"></use>
                    </svg>
                    <svg class="song-model" v-else aria-hidden="true">
                        <use xlink:href="#icon-xunhuan"></use>
                    </svg>
                    <span>({{$store.state.currentMusicList.length}})</span>
                </div>
                <div class="clean" @click.stop="cleanAll">
                    <svg class="song-model" aria-hidden="true">
                        <use xlink:href="#icon-lajitong"></use>
                    </svg>
                    <span>清空</span>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in $store.state.currentMusicList" :key="item.id" @click="changeMusic(item.id)">
                    <div>
                        <svg class="yinliang" aria-hidden="true" v-if="item.id==$store.state.currentMusic.id">
                            <use xlink:href="#icon-yinliang"></use>
                        </svg>
                        <p class="name" :class="{playing:item.id==$store.state.currentMusic.id}">{{item.name}}
                            <span class="ar-name" :style="{color:item.id==$store.state.currentMusic.id?'#c20c0c':'rgb(207, 207, 207)'}">-{{item.ar}}</span>
                        </p>
                    </div>
                    <svg class="song-model" aria-hidden="true" @click.stop="del(item.id)">
                        <use xlink:href="#icon-cha-copy-copy"></use>
                    </svg>
                </div>
            </div>
            <div class="down" @click="down">
                <p>关闭</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CurrentList",
  data() {
    return {
      audio: null
    };
  },
  methods: {
    down() {
      this.$store.commit("changeContentHeight", 0);
      this.$store.commit("changeContentModal", false);
    },
    cleanAll() {
      this.down();
      this.audio.pause();
      this.$store.commit("currentMusicListChange", []);
      this.$store.commit("currentMusicUrlChange", {});
    },
    changeMusic(id) {
      this.$axios
        .get("/music/song/detail?ids=" + id)
        .then(response => {
          this.data = response.data;
          response.data.songs[0].url = `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
          this.$store.commit("currentMusicUrlChange", response.data.songs[0]);
          this.audio.load();
          if (this.$store.state.playState) {
            this.audio.play();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    del(id) {
      this.$store.commit("deleteCurrentMusicList", id);
      if (id == this.$store.state.currentMusic.id) {
        this.changeMusic(this.$store.state.currentMusicList[0].id);
      }
    }
  },
  components: {},
  mounted() {
    this.audio = document.querySelector("#myAudio");
    document.getElementsByClassName("content")[0].addEventListener(
      "touchmove",
      function(e) {
        e.stopPropagation();
      },
      false
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.play-list {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.list {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background-color: rgb(250, 250, 250);
  transition: height 0.3s;
  .list-header {
    position: relative;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    height: 2.5rem;
    &:before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      z-index: -1;
      border-bottom: 1px solid rgb(199, 199, 199);
      transform-origin: 0 0;
      transform: scale(0.5, 0.5);
      box-sizing: border-box;
      top: 0;
    }
    .play-model {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .clean {
      width: 4rem;
      display: flex;
      align-items: center;
    }
  }
}
.song-model {
  fill: rgb(192, 192, 192);
  width: 1.2rem;
  height: 1.2rem;
  padding: 0 0.3rem;
}
.yinliang {
  width: 1.1rem;
  height: 1.1rem;
  padding: 0.7rem 0.1rem;
  fill: $themeColor;
}
.content {
  width: 100%;
  height: 15rem;
  overflow: scroll;
  .item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    &:before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      z-index: -1;
      border-bottom: 1px solid rgb(199, 199, 199);
      transform-origin: 0 0;
      transform: scale(0.5, 0.5);
      box-sizing: border-box;
      top: 0;
    }
    .name {
      line-height: 2.5rem;
      padding-left: 0.3rem;
      width: 18rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      .ar-name {
        font-size: 0.8rem;
      }
    }
  }
}
.down {
  height: 2.5rem;
  p {
    text-align: center;
    line-height: 2.5rem;
  }
}
.playing {
  color: $themeColor;
}
</style>