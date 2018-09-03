<template>
  <div class="item">
    <div class="item-index" v-if="index">{{index}}</div>
    <div class="item-info">
      <div>
        <p class="item-name">{{name}}</p>
        <p v-if="type=='album'" class="item-author">{{author}}</p>
        <p v-else class="item-author">{{author}} - {{album}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayListItem",
  props: ["name", "index", "author", "album", "type","id"],
  data() {
    return {};
  },
  components: {},
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  align-items: stretch;
  background-color: rgb(250, 250, 250);
  &:active {
    background-color: rgb(230, 230, 230);
  }

  .item-index {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3.5rem;
    color: rgb(199, 199, 199);
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
</style>
