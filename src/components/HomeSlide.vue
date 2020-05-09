<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.targetId">
                <img :src="item.imageUrl" alt="" class="swiper-img">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "HomeSlide",
  data() {
    return {
      imgs: null
    };
  },
  components: {},
  created() {
    this.$axios
      .get("/music/banner")
      .then(response => {
        this.imgs = response.data.banners;
        let mySwiper = new Swiper(".swiper-container", {
          autoplay: true, //可选选项，自动滑动
          loop: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: ".swiper-pagination",
            bulletActiveClass: 'my-bullet-active'
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swiper-img {
  width: 100%;
  height: auto;
}
.my-bullet-active {
    background-color: #c20c0c!important;
    opacity: 1!important;
}
</style>
