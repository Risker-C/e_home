<template>
    <div class="footer-wrap" v-show="isShow">
      <router-link class="btn btn1" exact-active-class="btn1Active" to="/">
        <div class="img"></div>
        <div>首页</div>
      </router-link>
      <router-link class="btn btn2" active-class="btn2Active" to="/news">
        <div class="img"></div>
        <div>通知早知道</div>
      </router-link>
      <router-link class="btn btn3" active-class="btn3Active" to="/mySpace">
        <div class="img"></div>
        <div>我的党建</div>
      </router-link>
    </div>
</template>

<script>
export default {
  computed: {
    isShow () {
      switch (this.$route.name) {
        case 'index':
          return true
        case 'news':
          return true
        case 'mySpace':
          return true
        default:
          return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .footer-wrap{
   /*padding: 1px 0 1px 0;*/
   background:#fff;
   position: fixed;
   height: 46px;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;

   .btn {
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-decoration: none;
     align-items: center;
     height: 46px;
     border-top: 2px solid #fff;
     font-size: 10px;
     text-align: center;
     color: #999;

     .img{
       margin-top: 6px;
       width: 21px;
       height: 21px;
       text-align: center;
     }
   }
   .btn1 {
     .img{
       background: url("./imgs/党_grey.png");
       background-size: cover;
     }
   }
   .btn1Active {
     color: #f00;
     border-top-color: red;
     .img{
       background: url("./imgs/党_red.png");
       background-size: cover;
     }
   }
   .btn2 {
     .img{
       background: url("./imgs/消息_grey.png");
       background-size: cover;
     }
   }
   .btn2Active {
     color: #f00;
     border-top-color: red;
     .img{
       background: url("./imgs/消息_red.png");
       background-size: cover;
     }
   }
   .btn3 {
     .img{
       background: url("./imgs/会员_grey.png");
       background-size: cover;
     }
   }
   .btn3Active {
     color: #f00;
     border-top-color: red;
     .img{
       background: url("./imgs/会员_red.png") no-repeat;
       background-size: cover;
     }
   }
 }
</style>
