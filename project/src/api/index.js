import axios from "axios";

export function getBanner(type=0) {
        return axios.get(`http://localhost:3000/banner?type=${type}`)
    };

export function getGoodMusic(count = 6){
    return axios.get(`http://localhost:3000/personalized?limit=${count}`)
}

export function getPlayListDetail(id){
    return axios.get(`http://localhost:3000/playlist/detail/detail?id=${id}`)
}

export function getMV(id){
    return axios.get(`http://localhost:3000/mv/detail?mvid=${id}`)
}

export function getLyric(id){
    return axios.get(`http://localhost:3000/lyric?id=${id}`)
}
export function search(keywords){
    return axios.get(`http://localhost:3000/search?keywords=${keywords}`)
}
export function author(keywords){
    return axios.get(`http://localhost:3000/search?type=100&keywords=${keywords}`)
}
export function login(phone,password){
    return axios.get(`http://localhost:3000/login/cellphone?phone=${phone}&password=${password}`)
}
export function userDetails(id){
    return axios.get(`http://localhost:3000/user/detail?uid=${id}`);
}