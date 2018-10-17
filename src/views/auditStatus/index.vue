<template>
  <div>
    <div class="logo-wrap">
      <img src="../../imgs/reviewing.png">
    </div>
    <div class="stateText">正在审核中</div>
    <div class="close-btn" @click="handleClose">关闭</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
  .logo-wrap{
    margin-top: 1rem;
    padding-top: .9rem;
    text-align: center;
    font-size: .24rem;

    img{
      width: 1.82rem;
    }
  }
  .stateText{
    height: .4rem;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
    color: #666;
    margin: .1rem 0;
  }
  .close-btn{
    margin: 2rem 1.5rem 0 1.5rem;
    background: rgb(197, 2, 6);
    color: #fff;
    font-size: .32rem;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    border-radius: .2rem;
  }
</style>
