<template>
  <div @click="listDetail">
    <SongCover :playCount="playCount" :picUrl="picUrl" />
    <div class="brief">
      <p>{{name}}</p>
      <p v-if="people">
        <span style="color:rgb(182, 182, 182)">{{people}}</span>
      </p>
    </div>

  </div>
</template>

<script>
import SongCover from "./SongCover";

export default {
  name: "SongItem",
  props: ["name", "picUrl", "people", "playCount", "type", "id"],
  data() {
    return {
      detail: null
    };
  },
  components: {
    SongCover
  },
  methods: {
    listDetail() {
      this.$router.push({
        path: "/listDetail",
        query: {
           id: this.id,
           type: this.type
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.brief {
  font-size: 0.75rem;
  padding: 0.3rem 0.3rem;
}
</style>
