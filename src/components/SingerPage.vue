<template>
  <div>
    <div class="indexs">
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#hot')">热</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#A')">A</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#B')">B</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#C')">C</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#D')">D</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#E')">E</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#F')">F</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#G')">G</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#H')">H</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#I')">I</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#J')">J</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#K')">K</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#L')">L</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#M')">M</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#N')">N</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#O')">O</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#P')">P</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#Q')">Q</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#R')">R</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#S')">S</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#T')">T</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#U')">U</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#V')">V</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#W')">W</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#X')">X</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#Y')">Y</a>
      <a class="letter" href="javascript:void(0)" @click="goAnchor('#Z')">Z</a>
    </div>
    <div class="content" id="hot">
      <div class="title">热门</div>
      <div class="items">
        <div class="item" v-for="item in artists[0]" :key="item.id" @click="singerList(item.id)">
          <img :src="item.picUrl" alt="" class="face">
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="content" :id="String.fromCharCode(index+65)" v-for="(list,index) in artists.slice(1)" :key="index">
      <div class="title">{{String.fromCharCode(index+65)}}</div>
      <div class="items">
        <div class="item" v-for="item in list" :key="item.id" @click="singerList(item.id)">
          <img :src="item.picUrl" alt="" class="face">
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/pinyinUtil.js";

export default {
  name: "SingerPage",
  data() {
    return {
      artists: []
    };
  },
  components: {},
  methods: {
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector);
      document.documentElement.scrollTop = anchor.offsetTop;
    },
    singerList(id) {
      this.$router.push({
        path: "/singerList",
        query: {
           id: id
        }
      });
    }
  },
  created() {
    this.$axios
      .get("/music/top/artists?limit=100")
      .then(response => {
        this.artists.push(response.data.artists.slice(0, 9));
        for (let i = 0; i < 26; i++) {
          this.artists.push([]);
        }
        response.data.artists.map(e => {
          let letter = pinyinUtil.getFirstLetter(e.name)[0];
          let code = letter.charCodeAt();
          this.artists[code - 64].push(e);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indexs {
  position: fixed;
  top: 55%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.3rem;
  .letter {
    color: rgb(155, 155, 155);
    padding: 0.1rem 0;
    font-size: 0.7rem;
  }
}
.content {
  background-color: rgb(245, 245, 245);
  .title {
    background-color: rgb(190, 190, 190);
    color: #fff;
    font-size: 0.7rem;
    padding: 0.1rem 1rem;
  }
  .items {
    padding-top: 0.3rem;
    .item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(206, 206, 206);
      &:active {
        background-color: rgb(230, 230, 230);
      }
      .face {
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        padding: 0.3rem;
      }
      .name {
        font-size: 0.8rem;
        padding-left: 1rem;
      }
    }
  }
}
</style>
