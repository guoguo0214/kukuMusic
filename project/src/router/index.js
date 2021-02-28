import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import store from '@/store/index.js';

const routes = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/list",
    component:import ('../views/List.vue'),
  },
  {
    path:"/search",
    component:import ('../views/Search.vue')
  },
  {
    path:'/login',
    component: import ('../views/Login.vue')
  },
  {
    path:'/my',
    beforeEnter: (to, from, next) => {
      console.log(store.state.userInfo.delaits);
      if(store.state.userInfo.isLogin){
        next();
      }else{
        next('/login')
      }
    },
    component: import ('../views/My.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
