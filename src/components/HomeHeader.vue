<template>
    <div class="home-header">
        <div class="header-items">
            <router-link to="/main/home/recommend" exact>
                个性推荐
            </router-link>
            <router-link to="/main/home/playlist" exact>
                歌单
            </router-link>
            <router-link to="/main/home/rank" exact>
                排行榜
            </router-link>
        </div>
        <div class="underline" :style="{ left: left }"></div>
    </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      left: this.$route.meta.index * 33.3 + "%"
    };
  },
  watch: {
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      this.left = this.$route.meta.index * 33.3 + "%";
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  color: rgb(92, 92, 92);
}
.header-items {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 2rem;
  }
}
.underline {
  position: relative;
  transition: all 200ms;
  width: 33.3%;
  border-top: 3px solid $themeColor;
  left: 0;
}
.router-link-active {
  color: $themeColor;
}
</style>
