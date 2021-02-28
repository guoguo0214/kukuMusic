<template>
  <div class="User">
    <Nav></Nav>
    <div class="Info">
      <img :src="$store.state.userInfo.delaits.profile.avatarUrl" alt="" />
      <div class="delaits">
          <div class="userDelaits">
              <div class="name">{{$store.state.userInfo.delaits.profile.nickname}}</div>
              <div class="leve">LV.{{$store.state.userInfo.delaits.level}}</div>
          </div>
          <div class="concen">
              <div class="dynamic">
                  <span class="count">{{$store.state.userInfo.delaits.profile.allSubscribedCount}}</span>
                  <span>动态</span>
              </div>
              <div class="fans">
                  <span class="count">{{$store.state.userInfo.delaits.profile.eventCount}}</span>
                  <span>粉丝</span>
              </div>
              <div class="guanzhu">
                  <span class="count">{{$store.state.userInfo.delaits.profile.sCount}}</span>
                  <span>关注</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/TopNav";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.User {
    .Info{
        padding: 0 0.4rem;
        display: flex;
        justify-content: space-between;
        img{
            width: 2.5rem;
        }
        .delaits{
            .userDelaits{
                display: flex;
                align-content: center;
                padding: 0.3rem 0;
                border-bottom: solid #ccc 0.01rem;
                .name{
                    margin-right: 0.2rem;
                    font-size: 0.35rem;
                }
                .leve{
                    padding: 0.01rem 0.2rem;
                    border: solid red 0.01rem;
                    border-radius: 0.25rem;
                    color: red;
                }
            }
            .concen{
                display: flex;
                justify-content: flex-start;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 0.3rem;
                }
                .dynamic{
                    flex: 1;
                    border-right: solid #ccc 0.01rem;
                }
                .fans{
                    flex: 1;
                    border-right: solid #ccc 0.01rem;
                }
                .guanzhu{
                    flex: 1;
                }
            }
        }
    }
}
</style>
