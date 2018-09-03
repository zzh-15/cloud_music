<template>
    <div>
        <div class="header">
            <button @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantouxiangzuoxianxing"></use>
                </svg>
            </button>
            <span>新碟上架</span>
        </div>
        <div class="music">
            <SongItem class="music-item" v-for="item in newMuisc" :id="item.id" type="album" :key="item.id" :name="item.name" :picUrl="item.picUrl" :people="item.artists[0].name" :playCount="null" />
        </div>
        <div class="loading" v-show="loading">
            <span>{{tips}}</span>
        </div>
    </div>
</template>

<script>
import SongItem from "./SongItem";

export default {
  name: "NewMusic",
  data() {
    return {
      newMuisc: null,
      offset: 0,
      loading: false,
      tips: "努力加载中..."
    };
  },
  components: {
    SongItem
  },
  mounted() {
    // 添加滚动事件，检测滚动到页面底部
    window.addEventListener("scroll", this.scrollBottom);
  },
  methods: {
    scrollBottom() {
      // 滚动到页面底部时，请求前一天的文章内容
      
      if (
        (window.screen.height + document.documentElement.scrollTop) >=
          document.body.clientHeight &&
        !this.loading
      ) {
        // 请求的数据未加载完成时，滚动到底部不再请求前一天的数据
        this.loading = true;
        this.offset++;
        this.$axios
          .get("/music/top/album?offset=" + this.offset + "&limit=12")
          .then(response => {
            this.newMuisc = this.newMuisc.concat(response.data.albums);
            // 请求的数据加载完成后，再次滚动到底部时，允许请求前一天数据
            this.$nextTick(() => {
              this.loading = false;
            });
          })
          .catch(error => {
            this.tips = "连接失败，请稍后重试";
            // 请求失败时，将 REQUIRE 置为 true，滚动到底部时，再次请求
            console.log(error);
          });
      }
    }
  },
  created() {
    this.$axios
      .get("/music/top/album?offset=" + this.offset + "&limit=12")
      .then(response => {
        this.newMuisc = response.data.albums;
      })
      .catch(error => {
        console.log(error);
      });
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
  background-color: $themeColor;
  color: #fff;
  font-size: 1.1rem;
  z-index: 999;
  width: 100%;
  button {
    padding: 1rem;
  }
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
}
.music {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: space-around;
  .music-item {
    width: 40%;
  }
}
.loading {
  height: 4rem;
  text-align: center;
  span {
    line-height: 4rem;
    color: rgb(136, 136, 136);
  }
}
</style>
