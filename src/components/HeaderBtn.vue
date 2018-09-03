<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script>
export default {
  name: "HeaderBtn",
  props: ["icon"],
  methods: {
      changePage() {
          this.$store.commit("currentPageChange",this.icon);
      }
          
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1.3rem;
  height: 1.3rem;
  margin: 0.8rem 1.3rem;
}
</style>
