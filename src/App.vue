<template>
  <div id="app" :class="{modal:$store.state.content.modal}">
    <transition :name="headerTransition">
      <router-view></router-view>
    </transition>
    <audio id="myAudio">
      <source :src="$store.state.currentMusic.url" type="audio/mpeg">
    </audio>
    <SmallAudio v-if="!$store.state.Audio && $store.state.currentMusic.id" @click.native="play" />
    <CurrentList/>
  </div>
</template>

<script>
import SmallAudio from "./components/SmallAudio";
import CurrentList from "./components/CurrentList";

export default {
  name: "App",
  data() {
    return { headerTransition: "" };
  },
  components: { SmallAudio, CurrentList },
  methods: {
    play() {
      this.$router.push({
        path: "/audio",
        query: {
          id: this.$store.state.currentMusic.id
        }
      });
    }
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
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
}
html,
body {
  background-color: #fafafa;
  height: 100%;
}
.modal {
  position: fixed;
  width: 100%;
}
::-webkit-scrollbar {
  width: 0em;
}
::-webkit-scrollbar:horizontal {
  height: 0em;
}
#app {
  background-color: #fafafa;
  height: 100%;
}
a {
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #000;
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}
#app-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
#app-content {
  position: absolute;
  width: 100%;
  top: 3.5rem;
}

.icon {
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
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
</style>
