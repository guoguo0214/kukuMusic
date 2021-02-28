<template>
  <div class="playController">
    <div class="left" @click="isShow = !isShow">
      <img
        :src="
          playlist[playCurrentIndex].al.picUrl || playlist[playCurrentIndex].al.artist.img1v1Url ||
          'https://s3.music.126.net/mobile-new/img/disc_default.png?ba7c53e25dbac9fe14f024846ddb57d2='
        "
        alt=""
      />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
        <div class="description">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <span
        :class="['iconfont', 'icon', paused ? 'icon-play' : 'icon-zanting1']"
        @click="play"
      ></span>
      <span class="iconfont icon more icon-daohangzhankai"></span>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
    <keep-alive>
      <PlayMusic v-show="isShow" :next='nextPlay' :play='play' @back="isShow = !isShow" :details="playlist[playCurrentIndex]"></PlayMusic>
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PlayMusic from "../components/PlayMusic";
export default {
  data() {
    return {
      isShow:false,
    }
  },
  mounted() {
    console.log(this.playlist[this.playCurrentIndex]);
    this.$store.dispatch('getLyricText',this.playlist[this.playCurrentIndex].id);
  },
  updated() {
    this.$store.dispatch('getLyricText',this.playlist[this.playCurrentIndex].id);
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex", "paused"]),
  },
  methods: {
    ...mapMutations(["setPaused"]),
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.setPaused(false);
        this.upDataCurrentTime();
      } else {
        this.$refs.audio.pause();
        this.setPaused(true);
        clearInterval(this.$store.state.currentId);
      }
    },
    upDataCurrentTime(){
      this.$store.state.currentId = setInterval(()=>{
        this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
      },1000)
    },
    nextPlay(){
      this.$refs.audio.play();
    }

  },
  components: {
    PlayMusic,
  },
};
</script>

<style lang="scss" scoped>
.playController {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px rgba($color: #fff, $alpha: 0.5);
  background-color: rgba($color: #fff, $alpha: 0.4);
  z-index: 20;
  .left {
    display: flex;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin: 0 0.2rem;
    }
    .content {
      .title{
        overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
      }
      .description {
        font-size: 0.2rem;
        color: #666;
      }
    }
  }
  .right {
    .icon {
      margin: 0 0.2rem;
      font-size: 0.35rem;
    }
    .more {
      font-size: 0.4rem;
    }
  }
}
</style>
