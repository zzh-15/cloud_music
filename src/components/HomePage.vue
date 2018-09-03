<template>
  <div>
    <HomeHeader class="header" />
    <transition :name="homeTransition">
      <keep-alive>
        <router-view class="content"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader";

export default {
  name: "HomePage",
  data() {
    return {
      homeTransition: ""
    };
  },
  components: {
    HomeHeader
  },
  watch: {
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.homeTransition = "slide-left";
      } else {
        this.homeTransition = "slide-right";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.header {
  position: fixed;
  top: 3.5rem;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.content {
  margin-top: 2rem;
}
</style>
