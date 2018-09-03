<template>
  <div class="main">
    <div class="bg-header" :style="{background:BgColor}"></div>
    <div class="list-header">
      <button @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantouxiangzuoxianxing"></use>
        </svg>
      </button>
      <span>{{name}}</span>
    </div>
    <img :src="picUrl" alt="" class="singer-img">

    <div>
      <div class="play-all" @click="play(tracks[0].id)">
        <div class="item-size">
          <svg class="icon play-icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
        </div>
        <p class="item-name">播放全部
          <span class="size">(共{{length}}首)</span>
        </p>
      </div>
      <div>
        <PlayListItem @click.native="play(item.id)" v-for="(item, index) in tracks" :id="item.id" :key="item.id" :index="(index+1)" :name="item.name" :author="item.ar.reduce((total, num)=>total+'/'+num.name,'').slice(1)" :album="item.al.name" />
      </div>
    </div>
  </div>
</template>

<script>
import SongCover from "./SongCover";
import PlayListItem from "./PlayListItem";

export default {
  name: "SingerSongList",
  data() {
    return {
      BgColor: "#fff",
      // opacity: 0,
      name: "",
      picUrl: "",
      length: "",
      tracks: null,
      time: ""
    };
  },
  components: {
    SongCover,
    PlayListItem
  },
  methods: {
    play(id) {
      let playingList = [];
      this.tracks.map(e => {
        playingList.push({
          id: e.id,
          name: e.id,
          ar: e.ar[0].name,
          al: e.al.name
        });
      });
      this.$Storage.setItem("playingList", JSON.stringify(playingList));
      this.$router.push({
        path: "/audio",
        query: {
          id: id
        }
      });
    },
    rgb() {
      setTimeout(() => {
        const canvas = document.createElement("canvas");
        const cxt = canvas.getContext("2d");
        let img = new Image();
        img.crossOrigin = "anonymous";
        img.src = this.picUrl;
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          cxt.drawImage(img, 0, 0);
          let rgb = [];
          let red, green, blue;
          red = green = blue = 0;
          let width = parseInt(img.width / 10);
          let height = parseInt(img.height / 10);
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              let data = cxt.getImageData(i * width, j * height, width, height)
                .data;
              red += data[0];
              green += data[1];
              blue += data[2];
            }
          }
          this.BgColor = `rgb(${parseInt(red / 100) - 60},${parseInt(
            green / 100
          ) - 60},${parseInt(blue / 100) - 60})`;
        };
      }, 0);
    },
    Count(e) {
      e.playCount /= 10000;
      e.playCount = e.playCount.toFixed(1) + "万";
    }
  },
  created() {
    this.$axios
      .get("/music/artists?id=" + this.$route.query.id)
      .then(response => {
        this.name = response.data.artist.name;
        this.picUrl = response.data.artist.picUrl;
        this.tracks = response.data.hotSongs;
        this.length = this.tracks.length;
        this.rgb();
      })
      .catch(error => {
        console.log(error);
      });

    // window.onscroll = () => {
    //   this.opacity =
    //     document.documentElement.scrollTop / 200 > 1
    //       ? 1
    //       : document.documentElement.scrollTop / 200;
    // };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  color: #fff;
  font-size: 1rem;
  z-index: 999;
  width: 100%;
  button {
    padding: 1rem;
  }
}
.bg-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.2rem;
  z-index: 999;
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
}
.singer-img {
  width: 100%;
  height: auto;
  display: block;
}
.cover,
.list-name {
  width: 50%;
  margin: 1rem;
  color: #fff;
  font-size: 0.8rem;
  .description {
    margin: 2rem 0;
    font-size: 0.7rem;
  }
}
.avatar-url {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.play-all {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    border-bottom: 1px solid rgb(199, 199, 199);
    transform-origin: 0 0;
    transform: scale(0.5, 0.5);
    box-sizing: border-box;
    top: 0;
  }
  display: flex;
  align-items: center;
  background-color: rgb(250, 250, 250);
  &:active {
    background-color: rgb(230, 230, 230);
  }
  .item-size {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3.5rem;
    .play-icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: #000;
    }
  }
  .item-name {
    flex: 1;
    .size {
      font-size: 0.8rem;
      color: rgb(199, 199, 199);
    }
  }
}
</style>
