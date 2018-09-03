<template>
  <div class="player">
    <div class="bg" :style="{background:'url(' + data.songs[0].al.picUrl + ') no-repeat left top',backgroundSize:'cover'}"></div>
    <div class="song-title">
      <button @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantouxiangzuoxianxing"></use>
        </svg>
      </button>
      <div class="song-brief">
        <div>
          <p class="brief name">{{data.songs[0].name}}</p>
          <p class="brief author">{{data.songs[0].ar[0].name}}</p>
        </div>
      </div>
    </div>
    <div v-if="lyricShow" class="lyrics" @click="lyricToggle">
      <div class="lyrics-content" v-if="lyric == null">
        <div class="lyrics-line">
          <p>歌词加载中...</p>
        </div>
      </div>
      <div class="lyrics-content" v-else>
        <div class="lyrics-line" :line="index" :class="{lyricsActive:index == line}" v-for="(item,index) in lyric.lines" :key="index">
          <p>{{item.txt}}</p>
        </div>
      </div>
    </div>
    <div v-else class="play-state rotating" :style="{animationPlayState:animationPlayState}" @click="lyricToggle">
      <img src="../../static/img/record.png" alt="" class="record">
      <img :src="data.songs[0].al.picUrl" alt="" class="picUrl">
    </div>

    <div class="play-control">
      <div class="play-time">
        <span class="current-time time">{{playTime.currentTime}}</span>
        <div class="progress">
          <div class="speed" @click="speed($event)"></div>
          <div class="already" :style="{width:playTime.point+'%'}"></div>
          <div class="point" :style="{left:playTime.point+'%'}" @touchmove.stop.prevent="pointMove($event)" @touchend.stop.prevent="pointEnd()"></div>
        </div>
        <span class="total-time time">{{playTime.totalTime}}</span>
      </div>
      <div class="control">
        <svg class="song song-model" v-if="$store.state.playModel == 'list_cycle'" aria-hidden="true" @click="$store.commit('playModelChange')">
          <use xlink:href="#icon-liebiaoxunhuan"></use>
        </svg>
        <svg class="song song-model" v-else-if="$store.state.playModel == 'list_order'" aria-hidden="true" @click="$store.commit('playModelChange')">
          <use xlink:href="#icon-shunxubofang"></use>
        </svg>
        <svg class="song song-model" v-else-if="$store.state.playModel == 'list_random'" aria-hidden="true" @click="$store.commit('playModelChange')">
          <use xlink:href="#icon-bofangye-caozuolan-suijibofang"></use>
        </svg>
        <svg class="song song-model" v-else aria-hidden="true" @click="$store.commit('playModelChange')">
          <use xlink:href="#icon-xunhuan"></use>
        </svg>
        <svg class="song song-choose" aria-hidden="true" @click="lastMusic">
          <use xlink:href="#icon-shangyishou"></use>
        </svg>
        <svg v-if="$store.state.playState" class="song song-play" aria-hidden="true" @click="playStateChange">
          <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg v-else class="song song-play" aria-hidden="true" @click="playStateChange">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="song song-choose" aria-hidden="true" @click="nextMusic">
          <use xlink:href="#icon-kuaijin"></use>
        </svg>
        <svg class="song-like" v-if="collection.c" aria-hidden="true" @click="collectionChange">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <svg class="song-like" v-else aria-hidden="true" @click="collectionChange">
          <use xlink:href="#icon-aixin"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Lyric from "lyric-parser";

export default {
  name: "Audio",
  data() {
    return {
      data: null,
      audio: null,
      playTime: {
        currentTime: "00:00",
        totalTime: "00:00",
        point: 0
      },
      collection: {
        c: false,
        index: 0
      },
      animationPlayState: "running",
      pointDrag: true,
      lyric: null,
      lyricShow: false,
      line: 0
    };
  },
  methods: {
    lyricToggle() {
      if (this.lyricShow) {
        this.lyricShow = false;
      } else {
        this.lyricShow = true;
        if (this.lyric == null) {
          this.lyricRender();
        }
      }
    },
    lyricRender() {
      this.$axios
        .get("/music/lyric?id=" + this.$store.state.currentMusic.id)
        .then(response => {
          if (this.lyric != null) {
            this.line = 0;
            this.lyric.stop();
          }
          this.lyric = new Lyric(response.data.lrc.lyric, l => {
            this.line = l.lineNum;
            if (this.line >= 3) {
              let lyrics = document.getElementsByClassName("lyrics")[0];
              let lyricsContent = document.getElementsByClassName(
                "lyrics-content"
              )[0];
              let line = document.querySelector(`div[line='${this.line}']`);
              if(lyrics && line) {
              lyricsContent.style.top =
                lyrics.offsetHeight / 2 - line.offsetTop + "px";
              }
            }
          });
          this.lyric.seek(this.audio.currentTime * 1000);
          if (this.$store.state.playState) {
            this.lyric.play();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    pointMove(event) {
      this.pointDrag = false;
      let progress = document.getElementsByClassName("progress")[0];
      let already = document.getElementsByClassName("already")[0];
      let point = document.getElementsByClassName("point")[0];
      let styles = window.getComputedStyle(progress, null);
      let width = styles.width;
      let touch = event.targetTouches[0];
      //计算红色块的left值，pageX是相对于整个页面的坐标，减去15（红色块长度的一半）是为了让鼠标点显示在中间，可以更改值看看效果，如果灰色块不是紧挨着屏幕，那还需要计算灰色块距离左屏幕的距离，应为pageX！！！
      let moveleft = touch.pageX - progress.offsetLeft;
      if (moveleft <= 0) {
        //红色块的left值最小是0；
        moveleft = 0;
      }
      if (moveleft >= parseInt(width)) {
        ////红色块的left值最小是灰色块的width减去红色块的width；
        moveleft = parseInt(width);
      }
      already.style.width = moveleft + "px";
      point.style.left = moveleft + "px";
    },
    pointEnd() {
      let progress = document.getElementsByClassName("progress")[0];
      let styles = window.getComputedStyle(progress, null);
      let point = document.getElementsByClassName("point")[0];
      let loca = parseInt(point.style.left) / parseInt(styles.width);
      this.playTime.point = loca * 100;
      this.audio.currentTime = this.audio.duration * loca;
      if (this.lyric) {
        this.lyric.seek(this.audio.currentTime * 1000);
      }
      this.pointDrag = true;
    },
    lastMusic() {
      let playingList = JSON.parse(this.$Storage.getItem("playingList"));
      for (let i = 0; i <= playingList.length; i++) {
        if (this.$store.state.currentMusic.id == playingList[i].id) {
          if (i === 0) {
            this.changeMusic(playingList[playingList.length - 1].id);
          } else {
            this.changeMusic(playingList[i - 1].id);
          }
          break;
        }
      }
    },
    nextMusic() {
      let playingList = JSON.parse(this.$Storage.getItem("playingList"));
      for (let i = 0; i <= playingList.length; i++) {
        if (this.$store.state.currentMusic.id == playingList[i].id) {
          if (i === playingList.length - 1) {
            this.changeMusic(playingList[0].id);
          } else {
            this.changeMusic(playingList[i + 1].id);
          }
          break;
        }
      }
    },
    playStateChange() {
      if (this.$store.state.playState) {
        this.audio.pause();
        if (this.lyric) {
          this.lyric.stop();
        }
        this.animationPlayState = "paused";
        this.$store.commit("playStateChange", false);
      } else {
        this.audio.play();
        if (this.lyric) {
          this.lyric.play();
        }
        this.animationPlayState = "running";
        this.$store.commit("playStateChange", true);
      }
    },
    collectionChange() {
      let collection = JSON.parse(this.$Storage.getItem("collection"));
      if (this.collection.c) {
        this.collection.c = false;
        collection.splice(this.collection.index, 1);
      } else {
        this.collection.c = true;
        if (collection == null) {
          collection = [];
        }
        collection.push({
          id: this.data.songs[0].id,
          name: this.data.songs[0].name,
          ar: this.data.songs[0].ar,
          al: this.data.songs[0].al
        });
      }
      this.$Storage.setItem("collection", JSON.stringify(collection));
    },
    speed(e) {
      let loca = e.offsetX / e.target.clientWidth;
      this.playTime.point = loca * 100;
      this.audio.currentTime = this.audio.duration * loca;
      if (this.lyric) {
        this.lyric.seek(this.audio.currentTime * 1000);
      }
    },
    timeConversion(time) {
      time = parseInt(time);
      let minute = parseInt(time / 60);
      minute = ("" + minute).length > 1 ? minute : "0" + minute;
      let second = time % 60;
      second =
        second == 0 ? "00" : (second + "").length > 1 ? second : "0" + second;
      return minute + ":" + second;
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
          this.lyricRender();
          this.addRecentPlay();
        })
        .catch(error => {
          console.log(error);
        });
    },
    addRecentPlay() {
      let recentPlay = JSON.parse(this.$Storage.getItem("recentPlay"));
      if (recentPlay == null) {
        recentPlay = [];
      }
      let repeat = false;
      recentPlay.map(e => {
        if (this.data.songs[0].id == e.id) {
          repeat = true;
        }
      });
      if (!repeat) {
        recentPlay.unshift({
          id: this.data.songs[0].id,
          name: this.data.songs[0].name,
          ar: this.data.songs[0].ar,
          al: this.data.songs[0].al
        });
        if (recentPlay.length > 10) {
          recentPlay.pop();
        }
        this.$Storage.setItem("recentPlay", JSON.stringify(recentPlay));
      }
    }
  },
  created() {
    this.$store.commit("changeAudio", true);
    this.$axios
      .get("/music/song/detail?ids=" + this.$route.query.id)
      .then(response => {
        this.data = response.data;
        this.audio = document.querySelector("#myAudio");

        if (this.$route.query.id != this.$store.state.currentMusic.id) {
          response.data.songs[0].url = `http://music.163.com/song/media/outer/url?id=${
            this.$route.query.id
          }.mp3`;
          this.$store.commit("currentMusicUrlChange", response.data.songs[0]);
          this.audio.load();
          this.audio.play();
          //this.lyricRender();
        }

        this.$store.commit("playStateChange", true);
        this.addRecentPlay();
        setInterval(() => {
          if (this.pointDrag) {
            if (!isNaN(this.audio.duration)) {
              this.playTime.totalTime = this.timeConversion(
                this.audio.duration
              );
            } else {
              this.playTime.totalTime = "00:00";
            }
            this.playTime.currentTime = this.timeConversion(
              this.audio.currentTime
            );
            this.playTime.point =
              this.audio.currentTime / this.audio.duration * 100;
            if (
              parseInt(this.audio.duration) == parseInt(this.audio.currentTime)
            ) {
              let playingList = JSON.parse(
                this.$Storage.getItem("playingList")
              );
              if (this.$store.state.playModel == "list_cycle") {
                for (let i = 0; i <= playingList.length; i++) {
                  if (this.$store.state.currentMusic.id == playingList[i].id) {
                    let id;
                    if (i == playingList.length - 1) {
                      id = playingList[0].id;
                    } else {
                      id = playingList[i + 1].id;
                    }
                    this.changeMusic(id);
                    break;
                  }
                }
              } else if (this.$store.state.playModel == "list_order") {
                for (let i = 0; i <= playingList.length; i++) {
                  if (this.$store.state.currentMusic.id == playingList[i].id) {
                    if (i < playingList.length - 1) {
                      this.changeMusic(playingList[i + 1].id);
                      break;
                    }
                  }
                }
              } else if (this.$store.state.playModel == "list_random") {
                let r = Math.floor(Math.random() * playingList.length);
                this.changeMusic(playingList[r].id);
              } else {
                this.audio.currentTime = 0;
                if (this.lyric) this.lyric.seek(0);
                this.audio.play();
              }
            }
          }
        }, 500);
      })
      .catch(error => {
        console.log(error);
      });
    let collection = JSON.parse(this.$Storage.getItem("collection"));
    if (collection != null) {
      collection.map((e, index) => {
        if (e.id == this.$route.query.id) {
          this.collection.c = true;
          this.collection.index = index;
        }
      });
    }
  },
  destroyed() {
    this.$store.commit("changeAudio", false);
  },
  beforeRouteLeave(to, from, next) {
    if (this.lyric) {
      this.lyric.stop();
      this.lyric = null;
    }
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.player {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .bg {
    position: fixed;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    filter: blur(2rem);
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.5;
    }
  }
  .song-title {
    position: absolute;
    width: 100%;
    padding-top: 0.5rem;
    display: flex;
    align-items: stretch;
    .song-brief {
      flex: 1;
      display: flex;
      align-items: center;
      .brief {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name {
        color: #fff;
        width: 15rem;
      }
      .author {
        color: rgb(196, 196, 196);
        font-size: 0.9rem;
        width: 15rem;
      }
    }
  }
}
.play-state {
  position: absolute;
  top: 20%;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  left: 50%;
  margin-left: -9rem;
  .record {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 10px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
  }
  .picUrl {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
  padding: 0.8rem;
}
.rotating {
  animation: rotate 30s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lyrics {
  position: absolute;
  top: 20%;
  bottom: 20%;
  width: 100%;
  overflow: hidden;
  color: rgb(209, 209, 209);
  .lyrics-content {
    position: relative;
    top: 50%;
    transition: all 0.5s;
    .lyrics-line {
      width: 100%;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 1.5rem;

      p {
        text-align: center;
        font-size: 0.9rem;
      }
    }
  }
  .lyricsActive {
    color: #fff;
  }
}
.play-control {
  position: fixed;
  bottom: 0;
  width: 100%;
  .control {
    width: 100%;
    // transform: translateX(-50%);
    // left: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.5rem;
  }
}
.play-time {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;

  .time {
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    padding: 0 0.4rem;
  }
  .current-time {
    color: #fff;
  }
  .total-time {
    color: rgb(206, 206, 206);
  }
  .progress {
    position: relative;
    flex: 1;
    height: 0.1rem;
    background-color: rgb(233, 233, 233);
    border-radius: 0.2rem;
    .speed {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      z-index: 999;
    }
    .already {
      background-color: $themeColor;
      height: 0.1rem;
      //width: 60%;
      border-radius: 0.2rem;
    }
    .point {
      position: absolute;
      //left: 60%;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: #fff;
      top: 50%;
      transform: translateX(-0.3rem) translateY(-50%);
      z-index: 999;
    }
  }
}
.song {
  fill: #fff;
}
.song-choose {
  width: 2rem;
  height: 2rem;
}
.song-play {
  width: 3.3rem;
  height: 3.3rem;
}
.song-model {
  fill: rgb(192, 192, 192);
  width: 1.8rem;
  height: 1.8rem;
  &:active {
    fill: #fff;
  }
}
.song-like {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
