<template>
  <div>
    <div class="header">
      <button @click="$router.push('/main/home/recommend')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantouxiangzuoxianxing"></use>
        </svg>
      </button>
      <div class="search">
        <input type="search" class="search-input" @search="search(keyword)" v-model="keyword" placeholder="搜索音乐、歌手">
        <svg class="icon-cha" aria-hidden="true" v-if="keyword" @click="keyword=''">
          <use xlink:href="#icon-cha"></use>
        </svg>
      </div>

    </div>

    <div class="hot-search">
      <p class="">热门搜索</p>
      <div class="hot-items">
        <div class="hot-item" v-for="item in hots" :key="item.first" @click="search(item.first)">
          {{item.first}}
        </div>
      </div>
    </div>
    <div class="records">
      <div class="record" v-for="(item,index) in searchRecord" :key="index">
        <svg class="icon-record" aria-hidden="true">
          <use xlink:href="#icon-shizhong"></use>
        </svg>
        <div class="record-text" @click="search(item)">
          <p>{{item}}</p>
          <svg class="icon-clean" aria-hidden="true" @click.stop="clean(item)">
            <use xlink:href="#icon-cha-copy"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      keyword: "",
      hots: [],
      searchRecord:[]
    };
  },
  components: {},
  methods: {
    search(keyword) {
      let searchRecord = JSON.parse(this.$Storage.getItem("searchRecord"));
      searchRecord.result = new Set(searchRecord.result);
      searchRecord.result.add(keyword);
      this.$Storage.setItem("searchRecord", JSON.stringify(searchRecord));
      this.searchRecord = Array.from(searchRecord.result)
      this.$router.push({
        path:"/searchResult",
        query:{
          keyword:keyword
        },
      })
    },
    clean(value) {
      let searchRecord = JSON.parse(this.$Storage.getItem("searchRecord"));
      searchRecord.result = new Set(searchRecord.result);
      searchRecord.result.delete(value);
      this.$Storage.setItem("searchRecord", JSON.stringify(searchRecord));
      this.searchRecord = Array.from(searchRecord.result)
    }
  },
  created() {
    if (this.$Storage.getItem("searchRecord") == null) {
      let searchRecord = { result: new Set() }
      this.$Storage.setItem("searchRecord", JSON.stringify(searchRecord));
      this.searchRecord = Array.from(searchRecord.result)
    } else {
      this.searchRecord = JSON.parse(this.$Storage.getItem("searchRecord")).result
    }
    this.$axios
      .get("/music/search/hot")
      .then(response => {
        this.hots = response.data.result.hots;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input::-webkit-input-placeholder {
  color: rgb(238, 238, 238);
}
input::-webkit-search-cancel-button {
  display: none;
}
.records {
  .record {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding-bottom: 0.8rem;
    margin-top: 1rem;
    .icon-record {
      width: 1rem;
      height: 1rem;
      padding: 0 0.5rem;
    }
    .record-text {
      display: flex;
      flex: 1;
      justify-content: space-between;
      font-size: 1rem;
      .icon-clean {
        width: 1rem;
        height: 1rem;
        padding: 0 1rem;
      }
    }
  }
}

.header {
  display: flex;
  background-color: $themeColor;
  align-items: center;
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: #fff;
    padding: 0.8rem;
  }
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
.hot-search {
  margin-bottom: 2rem;
  p {
    font-size: 0.7rem;
    color: rgb(168, 168, 168);
    padding: 0.8rem 0.5rem;
  }
  .hot-items {
    display: flex;
    flex-wrap: wrap;
    .hot-item {
      border: 1px solid rgb(168, 168, 168);
      border-radius: 1rem;
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
      margin: 0.3rem 0.3rem;
      &:active {
        background-color: rgb(168, 168, 168);
        color: #fff;
      }
    }
  }
}
</style>
