<template>
  <div class="mySpace">
    <div class="mySpace-header">
      <div style="text-align: center;font-size: .24rem">
        <img class="userImg" :src=" isLogin ? userInfo.header : imgUrl" alt="">
      </div>
      <div style="height: .36rem">
        <router-link to="/login" class="username" v-if="!isLogin">你还没有登录,请登录</router-link>
        <div class="islogin username" v-else>{{userInfo.username}}</div>
      </div>
    </div>
    <div class="mySpace-body">
      <ul>
        <li>
          <router-link :to="isLogin ? '/userInfo' : '/login'" class="list">
            <img src="../../imgs/person.png" class="img-wrap">
            <div class="center">个人信息</div>
            <img src="../../imgs/right.png" class="go-wrap flr">
          </router-link>
        </li>
        <li>
          <router-link :to="isLogin ? '/score' : '/login'" class="list">
            <img src="../../imgs/lxjf.png" class="img-wrap">
            <div class="center">个人量化积分</div>
            <img src="../../imgs/right.png" class="go-wrap flr">
          </router-link>
        </li>
        <li>
          <router-link :to="isLogin ? '/uppass' : '/login'" class="list">
            <img src="../../imgs/xgmm.png" class="img-wrap">
            <div class="center">修改密码</div>
            <img src="../../imgs/right.png" class="go-wrap flr">
          </router-link>
        </li>
        <li>
          <router-link :to="isLogin ? '/pay' : '/login'" class="list">
            <img src="../../imgs/icon3.png" class="img-wrap">
            <div class="center">党费缴纳</div>
            <img src="../../imgs/right.png" class="go-wrap flr">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mySpace-bottom">
      <button v-show="isLogin" class="loginOutBtn" @click="loginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
      userInfo: {},
      imgUrl: 'http://211.67.177.56:8080/hhdj/mobile/static/assets/bt_bg.png'
    }
  },
  methods: {
    loginOut () {
      this.$store.commit('logout')
      sessionStorage.removeItem('token')
      this.isLogin = false
    }
  },
  created () {
    const data = this.$store.state.data
    console.log(data)
    if (data.username) {
      this.isLogin = true
      this.userInfo = data
    }
  }
}
</script>

<style lang="scss">
  .mySpace-header {
    height: 2.8rem;
    background: #c50206;
    text-align: center;

    .userImg{
      margin-top: .73rem;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
    }

    .username{
      display: block;
      font-size: .24rem;
      text-decoration: none;
      color: #fff;
      font-weight: 400;
      line-height: .36rem;
      width: 100%;
    }
  }

  .mySpace-body {
    ul{
      list-style: none;
    }

  }
  .list{
    margin: -1px;
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: .32rem 1.08rem;
    width: 100%;
    display: block;
    height: 1.08rem;
    box-sizing: border-box;
    font-size: .32rem;
    color: #666;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    .img-wrap{
      width: .64rem;
      height: .64rem;
      position: absolute;
      left: .22rem;
      top: 0;
      right: 3.32rem;
      padding: .2rem 0;
    }

    .go-wrap {
      position: absolute;
      width: .15rem;
      height: .24rem;
      padding: .4rem 0;
      top: 0;
      right: .22rem;
    }
  }

  .mySpace-bottom{
    padding: .2rem;

    .loginOutBtn{
      width: 100%;
      height: .9rem;
      margin: .2rem 0;
      border: .02rem solid transparent;
      border-radius: .08rem;
      box-sizing: border-box;
      background: #ef473a;
      padding: 0 .24rem;
      font-size: .32rem;
      color: #fff;
      font-weight: 400;
      line-height: .84rem;
    }
  }
</style>
