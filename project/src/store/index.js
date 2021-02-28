import { createStore } from 'vuex';
import { getLyric, login, userDetails } from '../api/index';
import localStorage from '../model/localstorage';

export default createStore({
  state: {
    playlist: [{ al: { artist: { img1v1Url: '' } }, ar: [{}], id: "1403426429" }],
    playCurrentIndex: 0,
    paused: true,
    lyric: "",
    currentTime: 0,
    currentId: "",
    userInfo: {
      isLogin: false,
      userID: "",
      delaits:{}
    }
  },
  mutations: {
    setPlayList(state, value) {
      state.playlist = value;
    },
    pushPlayList(state, value) {
      state.playlist.push(value);
    },
    setPlayCurrentIndex(state, value) {
      state.playCurrentIndex = value;
    },
    setPaused(state, value) {
      state.paused = value;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    },
    setDelaits(state, value) {
      state.userInfo.delaits = value;
    },
    setIsLogin(state, value) {
      state.userInfo.isLogin = value;
    },
    setUserID(state, value) {
      state.userInfo.userID = value;
    },
    setUserInfo(state,value){
      state.userInfo = value;
    }
  },
  getters: {
    handleLyric(state) {
      let arr = state.lyric.split(/\n/igs).map((item) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 9));
        return { time: mill + sec * 1000 + min * 60 * 10000, lyric: item.slice(12, item.length) }
      })
      arr.forEach((item, index, arr) => {
        let pre = index == 0 ? 0 : arr[index - 1].time;
        item.pre = pre;
      })
      return arr;
    }
  },
  actions: {
    async getLyricText({ commit }, id) {
      let lyric = await getLyric(id);
      commit('setLyric', lyric.data.lrc.lyric);
    },
    async login(content, userInfo) {
      let result = await login(userInfo.username, userInfo.password);
      if (result.data.code == 200) {
        content.commit('setIsLogin', 'ture');
        content.commit('setUserID', result.data.account.id);
        let userDelait = await userDetails(result.data.account.id);
        console.log(userDelait);
        content.commit('setDelaits',userDelait.data);
        localStorage.set('userinfo',content.state.userInfo);
      }
      return result.data.code;
    }
  },
  modules: {
  }
})
