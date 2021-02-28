<template>
  <div class="container">
    <div class="Lists">
      <div class="IconList">
        <div class="Icon date">
          <span class="iconfont icon-calendar-fill"></span>
          <div class="day">{{ getDay }}</div>
        </div>
        <div class="IconTitle">每日推荐</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-shouyinji"></span>
        </div>
        <div class="IconTitle">私人FM</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-icon gedan"></span>
        </div>
        <div class="IconTitle">歌单</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-PCbofangye_paihangbang"></span>
        </div>
        <div class="IconTitle">排行榜</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-bofang"></span>
        </div>
        <div class="IconTitle">直播</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-zhuanji"></span>
        </div>
        <div class="IconTitle">数字专辑</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-xingqiu"></span>
        </div>
        <div class="IconTitle">歌房</div>
      </div>
      <div class="IconList">
        <div class="Icon">
          <span class="iconfont icon-youxichongzhi gedan"></span>
        </div>
        <div class="IconTitle">游戏专区</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDay() {
      return new Date().getDate();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0.1rem 0.4rem;
  padding: 0.1rem 0;
  overflow: scroll;
  .Lists {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    padding-right: 0.2rem;
    .IconList {
      display: flex;
      flex-direction: column;
      align-items: center;
      .Icon {
        width: 0.9rem;
        height: 0.9rem;
        background-color: rgba($color: pink, $alpha: 0.8);
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 0.9rem;
        margin-bottom: 0.1rem;
        .iconfont {
          font-size: 0.6rem;
          color: red;
          &.gedan {
            font-size: 0.5rem;
          }
        }
        .day {
          position: absolute;
          top: 57%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99;
          color: #fff;
          font-size: 0.1rem;
        }
      }
      .IconTitle {
        font-size: 0.22rem;
      }
    }
  }
}
</style>
