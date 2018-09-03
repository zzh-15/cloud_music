<template>
  <div>
    <div class="rank-type">
      <span class="programa-name">
        官方榜
      </span>
      <div class="official-rangklist">
        <div class="official-rank" v-if="playlist[3]" @click="detail(playlist[3].id)">
          <div class="official-avatar"><img v-lazy="playlist[3].coverImgUrl" alt="" class="official-img">
          </div>
          <div class="top3">
            <p>1.{{playlist[3].tracks[0].name}} - {{playlist[3].tracks[0].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>2.{{playlist[3].tracks[1].name}} - {{playlist[3].tracks[1].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>3.{{playlist[3].tracks[2].name}} - {{playlist[3].tracks[2].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
          </div>
        </div>
        <div class="official-rank" v-if="playlist[0]"  @click="detail(playlist[0].id)">
          <div class="official-avatar"><img v-lazy="playlist[0].coverImgUrl" alt="" class="official-img">
          </div>
          <div class="top3">
            <p>1.{{playlist[0].tracks[0].name}} - {{playlist[0].tracks[0].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>2.{{playlist[0].tracks[1].name}} - {{playlist[0].tracks[1].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>3.{{playlist[0].tracks[2].name}} - {{playlist[0].tracks[2].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
          </div>
        </div>
        <div class="official-rank" v-if="playlist[2]"  @click="detail(playlist[2].id)">
          <div class="official-avatar"><img v-lazy="playlist[2].coverImgUrl" alt="" class="official-img">
          </div>
          <div class="top3">
            <p>1.{{playlist[2].tracks[0].name}} - {{playlist[2].tracks[0].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>2.{{playlist[2].tracks[1].name}} - {{playlist[2].tracks[1].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>3.{{playlist[2].tracks[2].name}} - {{playlist[2].tracks[2].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
          </div>
        </div>
        <div class="official-rank" v-if="playlist[1]"  @click="detail(playlist[1].id)">
          <div class="official-avatar"><img v-lazy="playlist[1].coverImgUrl" alt="" class="official-img">
          </div>
          <div class="top3">
            <p>1.{{playlist[1].tracks[0].name}} - {{playlist[1].tracks[0].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>2.{{playlist[1].tracks[1].name}} - {{playlist[1].tracks[1].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
            <p>3.{{playlist[1].tracks[2].name}} - {{playlist[1].tracks[2].ar.reduce((total, currentValue)=>total+'/'+currentValue.name,'').slice(1)}}</p>
          </div>
        </div>

      </div>

      <span class="programa-name">
        全球榜
      </span>
      <div class="world-rangklist">
        <div class="world-rank" v-if="playlist[4]"  @click="detail(playlist[4].id)">
          <div class="world-avatar"><img v-lazy="playlist[4].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[4].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[23]"  @click="detail(playlist[23].id)">
          <div class="world-avatar"><img v-lazy="playlist[23].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[23].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[10]"  @click="detail(playlist[10].id)">
          <div class="world-avatar"><img v-lazy="playlist[10].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[10].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[22]"  @click="detail(playlist[22].id)">
          <div class="world-avatar"><img v-lazy="playlist[22].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[22].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[5]"  @click="detail(playlist[5].id)">
          <div class="world-avatar"><img v-lazy="playlist[5].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[5].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[6]"  @click="detail(playlist[6].id)">
          <div class="world-avatar"><img v-lazy="playlist[6].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[6].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[8]"  @click="detail(playlist[8].id)">
          <div class="world-avatar"><img v-lazy="playlist[8].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[8].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[9]"  @click="detail(playlist[9].id)">
          <div class="world-avatar"><img v-lazy="playlist[9].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[9].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[14]"  @click="detail(playlist[14].id)">
          <div class="world-avatar"><img v-lazy="playlist[14].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[14].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[15]"  @click="detail(playlist[15].id)">
          <div class="world-avatar"><img v-lazy="playlist[15].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[15].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[16]"  @click="detail(playlist[16].id)">
          <div class="world-avatar"><img v-lazy="playlist[16].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[16].name}}
          </div>
        </div>
        <div class="world-rank" v-if="playlist[18]"  @click="detail(playlist[18].id)">
          <div class="world-avatar"><img v-lazy="playlist[18].coverImgUrl" alt="" class="world-img">
          </div>
          <div class="rank-name">
            {{playlist[18].name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankListPage",
  data() {
    return {
      rankIdx: [3, 0, 2, 1, 4, 23, 10, 22, 5, 6, 8, 9, 14, 15, 16, 18],
      playlist: []
    };
  },
  methods: {
    detail(id) {
      this.$router.push({
        path: "/listDetail",
        query: {
          id: id,
          type: "playlist"
        }
      });
    }
  },
  created() {
    for (let i = 0; i < this.rankIdx.length; i++) {
      this.$axios
        .get("/music/top/list?idx=" + this.rankIdx[i])
        .then(response => {
          //this.playlist[this.rankIdx[0][i]] = response.data.playlist;
          this.$set(this.playlist, this.rankIdx[i], response.data.playlist);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rank-type {
  padding-top: 1rem;
  .programa-name {
    display: block;
    text-indent: 0.1rem;
    font-size: 1rem;
    padding: {
      left: 0.7rem;
    }
    border-left: 3px solid $themeColor;
    margin-bottom: 1rem;
  }
  .official-rangklist {
    margin-bottom: 2rem;
    .official-rank {
      position: relative;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding-top: 0.2rem;
      .official-avatar {
        position: relative;
        .official-img {
          width: auto;
          height: 8rem;
          display: block;
        }
      }
      .top3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 1rem 0.5rem;
        p {
          width: 14rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.9rem;
        }
      }
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
    }
  }
  .world-rangklist {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    .world-rank {
      width: 32%;
      margin: 0 0.66%;
      .world-avatar {
        position: relative;
        .world-img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
      .rank-name {
        padding: 0.4rem;
        font-size: 0.8rem;
        height: 2rem;
      }
    }
  }
  .update-time {
    position: absolute;
    padding: 0.3rem;
    color: #fff;
    bottom: 0;
    left: 0;
    font-size: 0.6rem;
  }
}
</style>
