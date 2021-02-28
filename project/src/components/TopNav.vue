<template>
  <div class="Topnav">
    <div class="TopLeft">
        <span class="iconfont icon-caidan icon"></span>
    </div>
    <div class="TopCenter">
        <span @click="show(0)" class="BtnNav"><router-link to="/my">我的</router-link></span>
        <span @click="show(1)" class="BtnNav active"><router-link to="/">发现</router-link></span>
        <span @click="show(2)" class="BtnNav">云村</span>
        <span @click="show(3)" class="BtnNav">视频</span>
    </div>
    <div @click="$router.push({path:'/search'})" class="TopRight">
        <span class="iconfont icon-search icon"></span>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        show(a){
            for(var i = 0;i<document.querySelectorAll('.BtnNav').length;i++){
                document.querySelectorAll('.BtnNav')[i].classList.remove('active')
            }
            document.querySelectorAll('.BtnNav')[a].classList.add('active')
        }
    },
};
</script>

<style lang="scss" scoped>
    .Topnav{
        width: 7.5rem; //100%
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        .TopCenter{
            width: 5rem;
            display: flex;
            justify-content: space-evenly;
            a{
                text-decoration: none;
                //color: rgba($color: #000000, $alpha: 0.4);
            }
            .BtnNav{
               // color: rgba($color: #000000, $alpha: 0.4);
            }
            .active{
                color: rgba($color: #000000, $alpha: 1);
                font-weight: bolder;
            }
        }
        .icon{
            font-size: 0.35rem;
        }
    }
</style>
