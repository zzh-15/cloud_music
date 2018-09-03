<template>
  <div>
    <Header id="app-header" />
    <transition :name="headerTransition">
      <keep-alive>
        <router-view id="app-content"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Main",
  data() {
    return {
      headerTransition: ""
    };
  },
  components: {
    Header
  },
  watch: {
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.headerTransition = "slide-left";
      } else {
        this.headerTransition = "slide-right";
      }
    }
  }
};
</script>

<style lang="scss">
</style>
