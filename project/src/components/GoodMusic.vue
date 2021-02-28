<template>
  <div class="container">
    <header>
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </header>
    <swiper class="musicList" :slides-per-view="3.1" :space-between="10">
      <swiper-slide class="music" v-for="(item, index) in musicList.list" :key="index">
        <router-link :to="'list?id=' + item.id">
          <img :src="item.picUrl" alt="" />
          <div class="titleName">{{ item.name }}</div>
          <div class="play">
            <span class="iconfont bf icon-play"></span>{{ changeValue(item.playCount) }}
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import { getGoodMusic } from "../api/index";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    let musicList = reactive({ list: [] });
    function changeValue(num) {
      if (num.toString().length >= 10) {
        return (num / 1000000000).toFixed(2) + "亿";
      } else if (num.toString().length >= 5) {
        return (num / 10000).toFixed(2) + "万";
      } else {
        return num;
      }
    }
    onMounted(async () => {
      let MusicData = await getGoodMusic();
      musicList.list = MusicData.data.result;
    });
    return {
      musicList,
      changeValue,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0.2rem 0.4rem;
  position: relative;
  overflow: scroll;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 0.03rem;
    background-image: linear-gradient(0deg, rgb(125, 125, 125) 50%, transparent 50%);
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0.2rem 0;
    .title {
      font-size: 0.35rem;
      font-weight: bolder;
    }
    .more {
      border: solid 1px rgb(125, 125, 125);
      padding: 0.04rem 0.1rem;
      border-radius: 0.2rem;
    }
  }
  .musicList {
    margin: 0;
    height: 3.3rem;
    border-radius: 0;
    //width: 7.129rem;
    .swiper-wrapper {
      width: 100%;
    }
    .music {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 2rem !important;
      position: relative;
      a {
        text-decoration: none;
        color: #000;
      }
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
      .titleName {
        padding: 0.1rem 0;
        font-size: 0.25rem;
        line-height: 0.45rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .play {
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        font-size: 0.2rem;
        border: solid 1px rgb(125, 125, 125);
        padding: 0.06rem 0.08rem;
        border-radius: 0.25rem;
        background-color: rgba(125, 125, 125, 0.5);
        color: #fff;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        .bf {
          margin-right: 0.04rem;
          margin-left: 0.1rem;
        }
        .icon-play:before {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
