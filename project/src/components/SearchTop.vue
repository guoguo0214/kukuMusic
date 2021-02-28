<template>
  <div>
    <div class="nav">
      <span @click="$router.go(-1)" class="iconfont back icon-jiantou-zuo"></span>
      <input
        class="search"
        v-model="searchKey"
        @keydown.enter="saveKeyword()"
        :placeholder="placeholder"
        type="text"
        name=""
      />
    </div>
    <div v-show="show" class="advertising">
      <div class="title">广告</div>
      <div class="close">x</div>
    </div>
    <div v-show="show" class="history">
      <div class="title">历史</div>
      <div class="historyIcon">
        <div @click="searchHistor(item)" class="item" v-for="(item, index) in keywordList.list" :key="index">
          {{ item }}
        </div>
      </div>
      <span class="iconfont clear icon-qingkong"></span>
    </div>
    <div v-show="!show" class="searchItem">
      <div v-show="authorList.list.length != 0" class="author">
        <div class="authorItem" v-for="(item, index) in authorList.list" :key="index">
          <img :src="item.img1v1Url" alt="" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
      <div @click="play(item,index)" class="item" v-for="(item, index) in musicList.list" :key="index">
        <div class="index">{{index + 1}}</div>
        <div class="name">
          <div class="title">{{ item.name }}</div>
          <div class="text">{{item.album.name}}</div>
        </div>
        <div class="play">
          <span v-show="item.mvid" class="iconfont mv icon-bofangMV"></span>
          <span class="iconfont icon-play"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onBeforeMount } from "vue";
import localstorage from "../model/localstorage";
import { search, author } from "../api/index";
import store from '../store/index';
export default {
  setup(props) {
    let keywordList = reactive({ list: [] });
    let searchKey = ref("");
    let show = ref(true);
    let musicList = reactive({ list: [] });
    let authorList = reactive({ list: [] });
    onBeforeMount(() => {
      keywordList.list = localStorage.keywordList ? localstorage.get("keywordList") : [];
    });
    async function saveKeyword() {
      keywordList.list.push(searchKey.value);
      keywordList.list = Array.from(new Set(keywordList.list));
      localstorage.set("keywordList", keywordList.list);
      show.value = false;
      let result = await search(searchKey.value);
      let authorTitle = await author(searchKey.value);
      authorList.list = authorTitle.data.result.artists;
      musicList.list = result.data.result.songs;
      console.log(store.state.playlist[store.state.playCurrentIndex]);
    }
    function searchHistor(value){
      searchKey.value = value;
      saveKeyword();
    }
    function play(item,i){
      item.al = item.album;
      item.ar = [{name:item.name}];
      item.al.picUrl = item.al.artist.img1v1Url;
      store.commit('pushPlayList',item);
      store.commit('setPlayCurrentIndex',store.state.playlist.length-1);
    }
    return {
      keywordList,
      saveKeyword,
      searchKey,
      musicList,
      show,
      authorList,
      searchHistor,
      play
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  width: 100%;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  padding: 0 0.4rem;
  .back {
    margin-right: 0.4rem;
  }
  .search {
    flex: 1;
    padding: 0.08rem 0rem;
    border: none;
    outline: none;
    border-bottom: solid 1px #666;
    color: #666;
  }
}
.advertising {
  position: relative;
  margin-top: 1rem;
  height: 1rem;
  border-radius: 0.15rem;
  background-image: url(http://p4.music.126.net/Mnem-kQNnQefqcJhrPt8nQ==/109951165751266480.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  margin-bottom: 0.2rem;
  .title {
    position: absolute;
    left: 2%;
    top: 2%;
    color: #dccdcd;
    font-size: 0.1rem;
  }
  .close {
    position: absolute;
    right: 2%;
    top: 2%;
    color: #dccdcd;
    font-size: 0.3rem;
  }
}
.history {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  min-height: 0.8rem;
  .title {
    margin-right: 0.2rem;
  }
  .historyIcon {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .item {
      font-weight: normal;
      padding: 0.08rem 0.2rem;
      background-color: #eee;
      border-radius: 0.5rem;
      margin-top: 0.1rem;
      margin-right: 0.1rem;
    }
  }
  .clear {
    color: #ccc;
    margin-left: 0.2rem;
  }
}
.searchItem {
  padding-bottom: 1.2rem;
  margin-top: 1rem;
  .author {
    //height: 1.5rem;
    display: flex;
    overflow: scroll;
    align-items: center;

    .authorItem {
      padding: 0.2rem 0.1rem;
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
      }
      .name {
        font-size: 0.2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: center;
      }
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .index{
      margin-right: 0.4rem;
    }
    .name {
      flex: 1;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .text{
        color: #666;
        font-size: 0.2rem;
      }
    }
    .play{
      .iconfont{
        font-size: 0.4rem;
      }
      .mv{
        margin-right: 0.3rem;
      }
    }
  }
}
</style>
