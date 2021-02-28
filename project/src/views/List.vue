<template>
    <div class="container">
        <Top class="head" :playlist="musiclist.detail"></Top>
        <PlayList class="content" :playlist="musiclist.detail"></PlayList>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import { getPlayListDetail} from '../api/index';
import { onMounted,reactive} from 'vue';
import Top from '../components/ListTop';
import PlayList from '../components/PlayMusicList';
import store from '../store/index'
export default {
    setup() {
        const router = useRoute();
        let musiclist = reactive({list:[],detail:{creator:{},tracks:[],coverImgUrl:""}})
        onMounted(async()=>{
            let res = await getPlayListDetail(router.query.id);
            musiclist.detail = res.data.playlist;
            res.data.result = musiclist.list;
            store.commit('setPlayList',musiclist.detail.tracks);
        })

        return {
            musiclist
        }
    },
    components:{
        Top,PlayList
    }
}
</script>

<style lang='scss' scoped>
</style>