<template>
  <div>
    <div class="header">
      <div class="search-group">
        <button @click="$router.push('/search')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantouxiangzuoxianxing"></use>
          </svg>
        </button>
        <div class="search">
          <input type="search" class="search-input" @search="moreSearch(keyword)" v-model="keyword" placeholder="搜索音乐、歌手">
          <svg class="icon-cha" aria-hidden="true" v-if="keyword" @click="keyword=''">
            <use xlink:href="#icon-cha"></use>
          </svg>
        </div>
      </div>
      <div class="result-type">
        <a @click="change(0,1)">
          单曲
        </a>
        <a @click="change(1,1000)">
          歌单
        </a>
        <a @click="change(2,10)">
          专辑
        </a>
      </div>
      <div class="underline" :style="{ left: left }"></div>
    </div>
    <div class="search-result">
      <div v-if="type==1">
        <div class="item" v-for="item in data.result.songs" :key="item.id" @click="detail(item,1)">
          <div class="item-info">
            <div style="padding-left:0.5rem">
              <p class="item-name">{{item.name}}</p>
              <p class="item-author">{{item.artists[0].name}} - {{item.album.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="type==10">
        <div class="item" v-for="item in data.result.albums" :key="item.id" @click="detail(item,10)">
          <img v-lazy="item.picUrl" alt="" class="item-cover">
          <div class="item-info">
            <div style="padding-left:0.5rem">
              <p class="item-name">{{item.name}}</p>
              <p class="item-author">{{item.artist.name}} - {{date(item.publishTime)}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="type==1000">
        <div class="item" v-for="item in data.result.playlists" :key="item.id" @click="detail(item,1000)">
          <img v-lazy="item.coverImgUrl" alt="" class="item-cover">
          <div class="item-info">
            <div style="padding-left:0.5rem">
              <p class="item-name">{{item.name}}</p>
              <p class="item-author">{{item.trackCount}}首 by {{item.creator.nickname}}</p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../static/img/loading.gif" alt="" class="loading" v-show="loading">
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchResult",
  data() {
    return {
      data: { result: {} },
      keyword: "",
      type: 1,
      left: "",
      loading: true,
      offset: 0
    };
  },
  methods: {
    search(keyword) {
      this.$axios
        .get(
          `/music/search?keywords=${keyword}&type=${
            this.type
          }&limit=15&offset=${this.offset}`
        )
        .then(response => {
          this.data = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    moreSearch(keyword) {
      this.$router.push({
        path: "/searchResult",
        query: {
          keyword: keyword
        }
      });
      this.search(keyword);
    },
    detail(item, type) {
      if (type == 1) {
        let playingList = JSON.parse(this.$Storage.getItem("playingList"));
        if (playingList == null) {
          playingList = [];
        }
        let v = true;
        playingList.map(e => {
          if (e.id == item.id) {
            v = false;
          }
        });
        if (v) {
          playingList.push({
            id: item.id,
            name: item.name,
            ar: item.artists[0].name,
            al: item.album.name
          });
        }
        this.$Storage.setItem("playingList", JSON.stringify(playingList));
        this.$store.commit("currentMusicListChange", playingList);
        this.$router.push({
          path: "/audio",
          query: {
            id: item.id
          }
        });
      } else if (type == 10) {
        this.$router.push({
          path: "/listDetail",
          query: {
            id: item.id,
            type: "album"
          }
        });
      } else {
        this.$router.push({
          path: "/listDetail",
          query: {
            id: item.id,
            type: "playlist"
          }
        });
      }
    },
    change(left, type) {
      this.type = type;
      this.left = 33.3 * left + "%";
      this.loading = true;
      this.search(this.keyword);
    },
    date(time) {
      let date = new Date(time);
      return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
    },
    scrollBottom() {
      // 滚动到页面底部时，请求前一天的文章内容

      if (
        window.screen.height + document.documentElement.scrollTop >=
          document.getElementsByClassName('search-result')[0].clientHeight &&
        !this.loading
      ) {
        // 请求的数据未加载完成时，滚动到底部不再请求前一天的数据
        this.loading = true;
        this.offset++;
        this.$axios
          .get(
            `/music/search?keywords=${this.keyword}&type=${
              this.type
            }&limit=15&offset=${this.offset}`
          )
          .then(response => {
            if (this.type == 1) {
              this.data.result.songs = this.data.result.songs.concat(
                response.data.result.songs
              );
            } else if (this.type == 10) {
              this.data.result.albums = this.data.result.albums.concat(
                response.data.result.albums
              );
            } else {
              this.data.result.playlists = this.data.result.playlists.concat(
                response.data.result.playlists
              );
            }
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  created() {
    this.keyword = this.$route.query.keyword;
    this.search(this.keyword);
  },
  mounted() {
    // 添加滚动事件，检测滚动到页面底部
    window.addEventListener("scroll", this.scrollBottom);
  }
};
</script>
<style lang="scss" scoped>
input::-webkit-input-placeholder {
  color: rgb(238, 238, 238);
}
input::-webkit-search-cancel-button {
  display: none;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  .search-group {
    background-color: $themeColor;
    display: flex;
    align-items: center;
    width: 100%;
    .search {
      display: flex;
      height: 1.4rem;
      border-bottom: 1px rgb(238, 238, 238) solid;
      padding: 0.3rem 0;
      flex: 1;
      margin-right: 1rem;
      .icon-cha {
        fill: #fff;
        width: 1.2rem;
        padding: 0.2rem;
        height: 1rem;
      }
      .search-input {
        border: none;
        outline: none;
        background: transparent;
        margin-right: 1rem;
        color: #fff;
        flex: 1;
      }
    }
  }
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: #fff;
    padding: 0.8rem;
  }
}
.result-type {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 2rem;
    background-color: #fff;
  }
}
.underline {
  position: relative;
  transition: all 200ms;
  width: 33.3%;
  border-top: 3px solid $themeColor;
  left: 0;
}
.search-result {
  position: relative;
  top: 5.15rem;
  .item {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(250, 250, 250);
    &:active {
      background-color: rgb(230, 230, 230);
    }
    .item-cover {
      width: auto;
      height: 3rem;
      padding: 0 0.3rem;
    }

    .item-info {
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
      flex: 1;
      height: 3.5rem;
    }
  }
  .item-author {
    font-size: 0.8rem;
    color: rgb(199, 199, 199);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 0.4rem;
    width: 15rem;
  }
  .item-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 15rem;
  }
}
.loading {
  position: relative;
  display: block;
  width: 1rem;
  height: auto;
  margin: 0 auto;
  top: 1rem;
}
</style>

