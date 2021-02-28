<template>
  <div class="container">
    <img :src="playlist.coverImgUrl" alt="" class="backImage" />
    <div class="listTop">
      <div class="nav">
        <div class="back" @click="$router.go(-1)">
          <span class="iconfont cent icon-jiantou-zuo"></span>
          <div class="title">
            歌单
            <span class="iconfont icon-wenhao shanbiao"></span>
          </div>
        </div>
        <div class="more">
          <span class="iconfont right icon-search"></span>
          <span class="iconfont icon-gengduoxiao"></span>
        </div>
      </div>
      <div class="content">
        <div class="detailImg">
          <img :src="playlist.coverImgUrl" alt="" />
          <div class="play">
            <span class="iconfont bf icon-play"></span
            >{{ changeValue(playlist.playCount) }}
          </div>
        </div>
        <div class="detailTitle">
          <h3>{{ playlist.name }}</h3>
          <div class="author">
            <img :src="playlist.creator.avatarUrl" alt="" />
            <span class="name">{{ playlist.creator.nickname }}</span>
          </div>
          <div class="detaiTitle">{{ playlist.description }}</div>
        </div>
      </div>
      <div class="iconList">
        <div class="icon">
          <span class="iconfont tb icon-xiaoxixinxihuihuahuida"></span>
          <span>{{ playlist.commentCount }}</span>
        </div>
        <div class="icon">
          <span class="iconfont tb icon-fenxiang"></span>
          <span>{{ playlist.shareCount }}</span>
        </div>
        <div class="icon">
          <span class="iconfont tb icon-xiazai"></span>
          <span>下载</span>
        </div>
        <div class="icon">
          <span class="iconfont tb icon-xuanzhong"></span>
          <span>多选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  props: ["playlist"],
  setup(playlist) {
    function changeValue(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(2) + "万";
      } else {
        return num;
      }
    }

    return {
      changeValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .backImage {
    position: absolute;
    z-index: -1;
    width: 100%;
    filter: blur(40px);
  }
  .listTop {
    position: relative;
    z-index: 0;
    padding: 0 0.4rem;
    .nav {
      display: flex;
      justify-content: space-between;
      height: 0.8rem;
      align-items: center;
      color: #fff;
      position: fixed;
      padding: 0 0.4rem;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 99;
      .back {
        display: flex;
        align-items: center;
        .title {
          position: relative;
          .shanbiao {
            position: absolute;
            top: -0.05rem;
            right: -0.25rem;
            font-size: 0.2rem;
          }
        }
      }
      .right {
        margin-right: 0.3rem;
      }
      .cent {
        margin-right: 0.2rem;
        &::before {
          vertical-align: middle;
        }
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      padding: 0.4rem 0;
      padding-top: 1.2rem;
      .detailImg {
        position: relative;
        width: 2.5rem;
        height: 2.8rem;
        border-radius: 0.1rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        .play {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 0.01rem;
          color: #fff;
          .bf {
            font-size: 0.01rem;
            margin-right: 0.04rem;
            margin-left: 0.1rem;
          }
          .icon-play:before {
            vertical-align: middle;
          }
        }
      }
      .detailTitle {
        width: 4rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .author {
          height: 0.6rem;
          //line-height: 0.6rem;
          img {
            vertical-align: middle;
            width: 0.6rem;
            border-radius: 50%;
            margin-right: 0.15rem;
          }
          .name {
            font-size: 0.24rem;
            color: #ccc;
            position: relative;
            &::after {
              position: absolute;
              content: ">";
              top: 0;
              right: -0.3rem;
            }
          }
        }
        .detaiTitle {
          font-size: 0.24rem;
          color: #ccc;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          padding-right: 0.2rem;
          position: relative;
          &::after {
            position: absolute;
            content: ">";
            top: 50%;
            transform: translateY(-50%);
            right: 0rem;
          }
        }
      }
    }
    .iconList {
      display: flex;
      margin-bottom: 0.4rem;
      .icon {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        color: #fff;
        font-size: 0.2rem;
        .tb {
          color: #fff;
          font-size: 0.45rem;
        }
      }
    }
  }
}
</style>
