<template>
  <div >
    <div class="choice">请选择支付方式</div>
    <div class="pay-list">
      <div class="pay-row" @click="open(1)">
        微信
        <img src="../../imgs/weixin.png" class="left">
        <img src="../../imgs/right.png" class="right">
      </div>
      <div class="pay-row" @click="open(2)">
        支付宝
        <img src="../../imgs/zhifubao.png" class="left">
        <img src="../../imgs/right.png" class="right">
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
    >
      <!--<img :src="url">-->
      <div class="title"> {{title}} </div>
      <img src="../../imgs/wechat.png" class="payImg" v-if="select">
      <img src="../../imgs/alipay.png" class="payImg" v-else>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible: false,
      select: true,
      title: ''
    }
  },
  methods: {
    open (index) {
      // console.log('????')
      switch (index) {
        case 1:
          this.popupVisible = true
          this.select = true
          this.title = '微信支付'
          break
        case 2:
          this.popupVisible = true
          this.select = false
          this.title = '支付宝支付'
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .choice{
    height: .4rem;
    padding: .4rem 0 .2rem 0;
    font-size: .3rem;
  }
  .pay-list{
    width: 100px;
    .pay-row{
      position: relative;
      width: 5.2rem;
      height: .4rem;
      font-size: .32rem;
      padding: .4rem 1.08rem .4rem 1.22rem;
      border: 1px solid rgb(221, 221, 221);

      .left{
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
      }

      .right{
        position: absolute;
        right: .2rem;
        top: .44rem;
        width: .24rem;
        height: .32rem;
        padding: .12rem .24rem 0 0;
      }
    }
  }
  .mint-popup{

    .title{
      line-height: .8rem;
      font-size: .4rem;
      text-align: center;
    }

    .payImg{
      width: 6rem;
      height: 6rem;
    }
  }
</style>
