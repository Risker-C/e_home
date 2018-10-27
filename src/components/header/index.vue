<template>
    <div class="header-wrap clearfix" v-show="showHeader">
      <div class="logo-wrap" v-if="isShow">
        <div class="lift-wrap fll">
          <img src="../../imgs/logo.png" alt="">
        </div>
        <router-link to="/login" class="right-wrap flr" v-show="!isLogin">
          登录
        </router-link>
      </div>
      <div class="center-wrap" v-else>
        <div v-show= "isBack">
          <div class="back" @click="back">
            <img src="../../imgs/back.png" class="back-icon" alt="">
          </div>
        </div>
        {{$route.meta.title}}
      </div>

    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  computed: {
    isShow () {
      switch (this.$route.name) {
        case 'index':
          return true
        default:
          return false
      }
    },
    isBack () {
      switch (this.$route.name) {
        case 'index':
        case 'news':
        case 'mySpace':
          return false
        default:
          return true
      }
    },
    showHeader () {
      switch (this.$route.name) {
        case 'newsDetail':
          return false
        case 'userInfo':
          return false
        default:
          return true
      }
    }
  },
  created () {
    // console.log(this.$route)
  },
  watch: {
    $route () {
      if (this.$route.name === 'index') {
        if (localStorage.getItem('token')) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .header-wrap{
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   height: .86rem;
   z-index: 50;
   border-bottom: 2px solid #c50206;
   line-height: .86rem;
   background: #c50206;

   .logo-wrap {
     height: .68rem;
     padding: .1rem;
   }

   .lift-wrap{
     width: 2.60rem;
     height: .64rem;
     padding: 0 .04rem;
     border: .02rem solid transparent;

     img {
       display: block;
       width: 130px;
       display: block;
     }
   }

   .right-wrap {
     width: .68rem;
     height: .64rem;
     padding: 0 .04rem;
     border: .02rem solid transparent;
     display: block;
     font-size: 17px;
     font-weight: 300;
     text-decoration: none;
     color: #fff;
     line-height: 34px;
   }

   .center-wrap {
     font-size: 18px;
     font-weight: 400;
     color: #fff;
     text-align: center;
     padding: 0.02px 0.02px 0 0.02px;
   }

   .back {
     width: 0.72rem;
     height: 0.88rem;
     position: fixed;
     left: 0;
     top: 0;
     margin-left: .1rem;
     display: flex;
     flex-flow: column;
     justify-content: center;

     .back-icon{
       width: .5rem;
       height: .65rem;
     }
   }
 }
</style>
