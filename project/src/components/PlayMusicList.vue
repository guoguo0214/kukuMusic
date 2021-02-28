<template>
  <div class="container">
    <header ref="nav">
      <div class="left">
        <span class="iconfont tb icon-bofang"></span>
        <div class="playall">
          <div class="title">播放全部</div>
          <div class="count">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right">
        <div class="collect">
          <span>+</span>
          <span>收藏</span>
          <span>({{ changeValue(playlist.subscribedCount) }})</span>
        </div>
      </div>
    </header>
    <div class="list">
      <div
        class="playItem"
        @click="setPlayCurrentIndex(index)"
        v-for="(item, index) in playlist.tracks"
        :key="index"
      >
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="details">
            <div class="title">{{ item.name }}</div>
            <div class="anthor">
              <span class="label" v-for="(tag, i) in playlist.tags" :key="i">{{
                tag
              }}</span
              >{{ item.alia[0] || item.al.name }}
            </div>
          </div>
        </div>
        <div class="right">
          <span class="iconfont icon-bofangMV" v-show="item.mv > 0"></span>
          <span class="iconfont icon-gengduoxiao more"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from '../store/index';
export default {
  props: ["playlist"],
  setup() {
    function changeValue(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(2) + "万";
      } else {
        return num;
      }
    }

    function setPlayCurrentIndex(index){
      state.commit('setPlayCurrentIndex',index);
      state.commit('setPaused',true);
    }
    

    return {
      changeValue,setPlayCurrentIndex
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding: 0 0.2rem;
  margin-top: 0.4rem;
  overflow: hidden;
  height: 50%;
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center;
    font-size: 0.3rem;
    .left {
      display: flex;
      align-items: center;
      .tb {
        font-size: 0.5rem;
      }
      .playall {
        display: flex;
        margin-left: 0.2rem;
        .title {
          font-weight: 500;
        }
        .count {
          color: #666;
        }
      }
    }
    .right {
      font-size: 0.2rem;
      padding: 0.15rem 0.2rem;
      border-radius: 0.4rem;
      background-color: orangered;
    }
  }
  .list {
    padding-bottom: 1.2rem;
    .playItem {
      padding: 0.2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .index {
          color: #666;
          padding: 0 0.17rem;
        }
        .details {
          margin-left: 0.17rem;
          .title {
            margin-bottom: 0.1rem;
          }
          .anthor {
            font-size: 0.2rem;
            color: #ccc;
            .label {
              display: inline-block;
              padding: 0 0.06rem;
              border: solid 0.01rem orangered;
              color: orangered;
              margin-right: 0.1rem;
            }
          }
        }
      }
      .right {
        .iconfont {
          &::before {
            font-size: 0.4rem;
            color: #ccc;
          }
        }
        .more {
          margin-left: 0.2rem;
        }
      }
    }
  }
}
</style>
