<template>
  <div class="home">
    <TopNav class="nav"/>
    <SwiperImg class="swiper"/>
    <Icon></Icon>
    <GoodMusic></GoodMusic>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import SwiperImg from '../components/SwiperImg';
import Icon from '../components/Icon';
import GoodMusic from '../components/GoodMusic';
export default {
  name: "Home",
  components: {
    TopNav,
    SwiperImg,
    Icon,
    GoodMusic
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .swiper{
    margin-top: 0.2rem;
  }
</style>
