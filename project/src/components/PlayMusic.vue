<template>
  <div class="container">
    <!-- <h1>{{details.id}}</h1> -->
    <div class="bg" :style="{ backgroundImage: `url(${details.al.picUrl || details.al.artist.img1v1Url})` }"></div>
    <div class="topNav">
      <div class="back" @click="$emit('back')">
        <span class="iconfont tb icon-jiantou-zuo"></span>
      </div>
      <div class="title">
        <div class="name">
          <marquee behavior="scoll" direction="left">
            {{ details.al.name }}
          </marquee>
        </div>
        <div class="author">{{ details.ar[0].name }}</div>
      </div>
      <div class="share">
        <span class="iconfont tb icon-fenxiang"></span>
      </div>
    </div>
    <div v-show="over" @click=" over = !over" class="content">
      <img
        :class="['needle', { play: !paused }]"
        src="https://s3.music.126.net/mobile-new/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862="
        alt=""
      />
      <img
        class="disc"
        src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4602256867/5855/63fb/325b/d7e4e3a244701ee85fecb5d4f6b5bd57.png?imageView=&quality=75&thumbnail=200y200"
        alt=""
      />
      <img :class="['picImg', { go: !paused }]" :src="details.al.picUrl || details.al.artist.img1v1Url" alt="" />
    </div>
    <div v-show="!over" @click=" over = !over" class="Lyric" ref="lyric">
      <p
        :class="{ lr: currentTime * 1000 >= item.pre && currentTime * 1000 < item.time }"
        v-for="(item, index) in lricText"
        :key="index"
      >
        {{ item.lyric }}
      </p>
    </div>
    <div class="progress"></div>
    <div class="Controller">
      <span class="iconfont icon icon-xunhuan"></span>
      <span @click="goPlay(1)" class="iconfont icon icon-xiayishou"></span>
      <span
        @click="play"
        :class="[
          'iconfont',
          'icon',
          'bf',
          paused ? 'icon-bofang1' : 'icon-zantingtingzhi2',
        ]"
      ></span>
      <span @click="goPlay(-1)" class="iconfont icon icon-shangyishou"></span>
      <span class="iconfont icon icon-daohangzhankai"></span>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import { computed, ref, watch } from "vue";
export default {
  props: ["details", "show", "play", "next"],
  setup(props) {
    let paused = computed(() => store.state.paused);
    let currentTime = computed(() => store.state.currentTime);
    let lricText = computed(() => store.getters.handleLyric);
    let playCurrentIndex = computed(() => store.state.playCurrentIndex);
    let over = ref(true);
    watch(currentTime, (value) => {
      let p = document.querySelector("p.lr");
      document.querySelector(".Lyric").scrollTop = p.offsetTop;
    });
    function goPlay(num) {
      if (playCurrentIndex == 0) {
        playCurrentIndex = 0;
      } else if (num == 1) {
        store.commit("setPlayCurrentIndex", --store.state.playCurrentIndex);
        props.next();
      } else {
        store.commit("setPlayCurrentIndex", ++store.state.playCurrentIndex);
        props.next();
      }
    }
    return {
      paused,
      over,
      currentTime,
      lricText,
      goPlay,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #fff;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    filter: blur(80px);
  }
  .topNav {
    width: 100%;
    height: 1rem;
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .back {
      margin-right: 0.2rem;
    }
    .title {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 0.25rem;
        marquee {
          width: 100%;
        }
      }
      .author {
        font-size: 0.2rem;
        color: #666;
      }
    }
    .share {
      margin-left: 0.2rem;
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 10rem;
    .needle {
      width: 2.3rem;
      height: auto;
      position: absolute;
      top: 0;
      left: 60%;
      transform-origin: left top;
      transform: translate(-50%) rotate(-10deg);
      z-index: 10;
      transition: transform linear 1s;
    }
    .play {
      transform: translate(-50%) rotate(5deg);
    }
    .disc {
      width: 5rem;
      height: 5rem;
      position: relative;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .picImg {
      width: 3.1rem;
      height: 3.1rem;
      border-radius: 50%;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: rotate 8s linear infinite;
      animation-play-state: paused;
    }
    .go {
      animation-play-state: running;
    }
  }
  .Lyric {
    position: relative;
    width: 100%;
    height: 10rem;
    overflow: scroll;
    text-align: center;
    color: #fff;
    p {
      font-size: 0.25rem;
      color: #666;
      margin: 0.06rem 0;
      &.lr {
        font-size: 0.3rem;
        color: #fff;
        margin: 0.1rem 0;
      }
    }
  }
  .Controller {
    width: 100%;
    height: 1.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.8rem;
    .icon {
      font-size: 0.4rem;
      color: #fff;
    }
    .bf {
      font-size: 0.7rem;
    }
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
