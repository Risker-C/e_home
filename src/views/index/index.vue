<template>
    <div class="index-wrap">
      <div class="swiper">
        <!--方案一：mintUI-->
        <mt-swipe :auto="10000" style="width: 100%;height: 3.85rem">
          <mt-swipe-item v-for="(slide, index) in swiperSlides" :key="index">
            <div class="swipe-img" @click="jump(slide.url)">
              <img :src='slide.imgUrl' alt="">
              <div style="">{{slide.title}}</div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
        <!--方案二：Vue-Awesome-Swiper 样式未成功-->
        <!--<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">-->
          <!--&lt;!&ndash; slides &ndash;&gt;-->

          <!--<swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src='slide.imgUrl' alt=""></swiper-slide>-->
          <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
          <!--<div class="swiper-pagination"  slot="pagination"></div>-->
        <!--</swiper>-->
      </div>
      <div class="btns">
        <div class="row">
          <router-link to="/newseye">
            <div class="line">
                <img src="../../imgs/icon_01.png">
                <div>信工新闻眼</div>
            </div>
          </router-link>
          <router-link :to=" isLogin ? '/life' : '/login'">
            <div class="line">
                <img src="../../imgs/icon_03.png">
                <div>掌上组织生活</div>
            </div>
          </router-link>
          <router-link :to=" isLogin ? '/interaction' : '/login'">
            <div class="line">
                <img src="../../imgs/icon_05.png">
                <div>党员云互动</div>
            </div>
          </router-link>
        </div>
        <div class="row">
          <router-link to="/oneclick">
            <div class="line">
                <img src="../../imgs/icon_04.png">
                <div>党建一点通</div>
            </div>
          </router-link>
          <router-link to="/showidentity">
            <div class="line">
                <img src="../../imgs/icon_06.png">
                <div>党员亮身份</div>
            </div>
          </router-link>
          <router-link to="/today">
            <div class="line">
                <img src="../../imgs/icon_02.png">
              <div>党史上的今天</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="img"></div>
      <div class="footer-btn-wrap">
        <div class="footer-btn-left">
        </div>
        <div class="footer-btn-right">
          <div class="footer-row">
            <div class="footer-btn">
              <router-link to="/anytimestudy"></router-link>
            </div>
            <div class="footer-btn">
              <router-link to="/anytimephoto"></router-link>
            </div>
          </div>
          <div class="footer-row">
            <div class="footer-btn">
              <router-link to="/system"></router-link>
            </div>
            <div class="footer-btn">
              <router-link to="/activity"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperSlides: [1, 2, 3],
      swiperOption: {},
      imgUrls: [],
      isLogin: false
    }
  },
  methods: {
    callback (event) {
      // console.log(event)
    },
    jump (url) {
      this.$router.push(`/newsDetail/${url}`)
    }
  },
  created () {
    this.$axios.get('/carousel/carouselList.do?type=0').then(res => {
      if (res.code === 1) {
        this.swiperSlides = res.rows
        this.imgUrls = res.rows.map(index => index.imgUrl)
      }
    })
    if (localStorage.getItem('token')) {
      this.isLogin = true
    }
  }
}
</script>

<style scoped lang="scss">
 .index-wrap {
   margin-bottom: .92rem;
   .swiper{
     height: 3.85rem;

     .swipe-img{
       position: relative;
       height: 3.85rem;

       img{
         width: 100%;
         height: 100%
       }

       div{
         height: .4rem;
         padding: .08rem;
         position: absolute;
         left: 0;
         right: 0;
         bottom: 0;
         background: rgba(41, 41, 41, 0.67);
         font-size: 12px;
         color: #fff;
         line-height: .4rem;
       }
     }
   }

   .btns{
     height: 3.94rem;
     display: flex;
     flex-direction: column;
     background: url("../mySpace/imgs/bt_bg.png");
     -webkit-background-size: 100%;
     background-size: 100%;
     color: #fff;

     .row{
       flex: 1;
       display: flex;
       flex-flow: row nowrap;

       a {
         flex: 1;
         text-decoration: none;
         display: flex;
         flex-flow: column;
         justify-content: center;

         .line{
           font-size: 12px;
           color: #333;
           text-align: center;

           img{
             width: 1rem;
             margin-bottom: .1rem;
           }
         }
       }
     }
   }

   .img{
     height: 1.8rem;
     background: url("../../imgs/banner03.jpg");
     -webkit-background-size: 100% 100%;
     background-size: 100% 100%;
   }

   .footer-btn-wrap{
     height: 3.3rem;
     background: url("../../imgs/special.png");
     background-size: 100% 100%;
     display: flex;

     .footer-btn-left{
       flex: 1;
     }

     .footer-btn-right{
       flex: 2;
       display: flex;
       flex-flow: column;

       .footer-row{
         flex: 1;
         display: flex;

         .footer-btn{
            flex: 1;

           a {
             display: block;
             width: 100%;
             height: 100%;
           }
         }
       }
     }
   }
 }
</style>
