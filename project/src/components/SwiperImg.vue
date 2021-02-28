<template>
  <swiper :pagination="{ clickable: true }" :autoplay="5">
    <swiper-slide v-for="(item, index) in imgs" :key="index">
      <a href="">
        <img class="banner" :src="item.pic" alt="" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import {getBanner} from '../api/index.js';
SwiperCore.use([Pagination, Autoplay]);
export default {
  name: "Swiwaper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgs: [],
    };
  },
  async mounted() {
    let img = await getBanner(1);
    this.imgs = img.data.banners;
  },
};
</script>

<style lang="scss">
.swiper-container {
  margin: 0 0.4rem;
  height: 2.7rem;
  border-radius: 0.1rem;
  .swiper-slide {
    a {
      display: block;
      height: 100%;
      img {
        width: 100%;
        &.banner{
          height: 100%;
        }
      }
    }
  }
  .swiper-pagination-bullet-active {    //swiper组件存在的BUG 设置了scoped则该选择器会产生变化
    background-color: crimson;
  }
}
</style>
