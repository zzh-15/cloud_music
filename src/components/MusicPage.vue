<template>
  <div>
    <div class="header">
      <div class="header-list">
        <div class="list-type">
          <div @click="change">我的收藏</div>
          <div @click="change">最近播放</div>
        </div>
        <div class="underline" :style="{ left: left }"></div>
      </div>
      <svg class="icon icon-return" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantouxiangzuoxianxing-copy"></use>
      </svg>
    </div>
    <div class="content">
      <div>
        <div class="play-all" @click="play(list[0].id)">
          <div class="item-size">
            <svg class="icon play-icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
          </div>
          <p class="item-name">播放全部
            <span class="size">(共{{list.length}}首)</span>
          </p>
        </div>
        <div>
          <PlayListItem @click.native="play(item.id)" v-for="(item, index) in list" :key="item.id" :id="item.id" :index="(index+1)" :name="item.name" :author="item.ar[0].name" :album="item.al.name" :type="$route.query.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayListItem from "./PlayListItem";

export default {
  name: "MusicPage",
  data() {
    return {
      list: [],
      type: "recentPlay",
      left: "50%"
    };
  },
  methods: {
    play(id) {
      let playingList = [];
      this.list.map(e => {
        playingList.push({
          id: e.id,
          name: e.id,
          ar: e.ar[0].name,
          al: e.al.name
        });
      });
      this.$Storage.setItem("playingList",JSON.stringify(playingList));
      this.$router.push({
        path: "/audio",
        query: {
          id: id
        }
      });
    },
    change() {
      if (this.type == "collection") {
        let recentPlay = JSON.parse(this.$Storage.getItem("recentPlay"));
        if (recentPlay == null) {
          recentPlay = [];
        }
        this.list = recentPlay;
        this.left = "50%";
        this.type = "recentPlay";
      } else {
        let collection = JSON.parse(this.$Storage.getItem("collection"));
        if (collection == null) {
          collection = [];
        }
        this.list = collection;
        this.left = "0%";
        this.type = "collection";
      }
    }
  },
  components: {
    PlayListItem
  },
  created() {
    this.change();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  background-color: $themeColor;
  height: 2.5rem;
  .header-list {
    margin: 0 auto;
    width: 10rem;
    .list-type {
      position: relative;
      display: flex;
      justify-content: space-between;
      justify-content: space-around;
      div {
        color: #fff;
        font-size: 0.9rem;
      }
    }
  }
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
}
.icon-return {
  padding: 0.65rem;
  position: absolute;
  right: 0;
}
.underline {
  position: relative;
  width: 50%;
  border-top: 2px solid #fff;
  left: 0;
  margin-top: 5px;
}
.content {
  position: relative;
  top: 2.5rem;
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
