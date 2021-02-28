<template>
  <router-view></router-view>
  <Play></Play>
</template>

<script>
import Play from './components/PlayController';
import store from './store/index';
import localStorage from './model/localstorage';
  export default {
    components:{
      Play
    },
    mounted() {
      let userinfo = localStorage.get('userinfo');
      if(userinfo){
        store.commit('setUserInfo',userinfo);
      }
    },
  }
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "微软雅黑";
  }
  .icon{
    font-size: 0.3rem;
  }
</style>
