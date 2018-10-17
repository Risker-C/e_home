<template>
  <div id="app">
    <Header/>
    <router-view  style="margin-top: .86rem"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  span{
    font-size: .32rem;
  }
  h4{
    margin: .2rem 0;
    font-size: .36rem;
    line-height: .432rem;
    font-weight: 500;
  }
</style>
