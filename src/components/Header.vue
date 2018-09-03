<template>
  <div class="header">
    <router-link to="/music">
      <HeaderBtn icon="#icon-yinle" />
    </router-link>
      <router-link to="/main/home">
        <HeaderBtn icon="#icon-home" />
      </router-link>
      <router-link to="/main/singer">
        <HeaderBtn icon="#icon-yonghu" />
      </router-link>
    <router-link to="/search">
      <HeaderBtn class="search" icon="#icon-sousuo" />
    </router-link>
  </div>
</template>

<script>
import HeaderBtn from "./HeaderBtn";

export default {
  name: "Header",
  components: {
    HeaderBtn
  }
};
</script>

<style lang="scss" scoped>
.icon {
  fill: rgba(209, 209, 209, 0.5);
}
.router-link-active {
  svg {
    fill: #fff;
  }
}
.menu {
  fill: #fff;
}
.search {
  fill: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 3.5rem;
  background-color: $themeColor;
}
</style>
