<template>
    <div class="loginYage">
        <div class="nav">
            <div class="back">
                <span class="iconfont icon-jiantou-zuo"></span>
            </div>
            <div class="title">登录</div>
            <div class="wenhao">
                <span class="iconfont icon-wenhao"></span>
            </div>
        </div>
        <div class="log">
            <span class="iconfont icon-yinle2-copy"></span>
        </div>
        <div class="login">
            <div class="username">
                <label for="">账号:</label>
                <input type="text" name="" v-model="username">
            </div>
            <div class="password">
                <label for="">密码:</label>
                <input type="password" name="" v-model="password">
            </div>
            <div class="sub">
                <input type="button" @click="login({username,password})" value="登录">
                <input type="button" value="注册">
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/index';
import { ref} from 'vue';
import {useRouter} from 'vue-router';
export default {
    setup(props) {
        let username = ref("");
        let password = ref("");
        const router = useRouter();
        async function login(userinfo){
         let code = await store.dispatch('login',userinfo);
         if(code == 200){
             console.log(router);
             router.push({path:'/my'});
         }else{}
        }
        return{
            username,
            password,
            login
        }
    }
}
</script>

<style lang='scss' scoped>
    .loginYage{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: orangered;
        align-items: center;
        .nav{
            width: 100%;
            height: 1rem;
            display: flex;
            padding: 0 0.4rem;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            .back{
                margin-right: 0.4rem;
            }
            .title{
                flex: 1;
                text-align: center;
                font-size: 0.35rem;
            }
            .wenhao{
                margin-left: 0.4rem;
            }
        }
        .log{
            margin-top: 2rem;
            margin-bottom: 0.5rem;
            .iconfont{
                font-size: 1rem;
                color: #fff;
            }
        }
        .login{
            color: #fff;
            .username{
                margin-bottom: 0.3rem;
            }
            input{
                width: 3.5rem;
                height: 0.6rem;
                border: none;
                outline: none;
                margin-left: 0.3rem;
                padding: 0 0.1rem;
            }
            .sub{
                margin-top: 0.3rem;
                input{
                    color: red;
                    border-radius: 1rem;
                    width: 2rem;
                    background-color: #fff;
                }
            }
        }
    }
</style>