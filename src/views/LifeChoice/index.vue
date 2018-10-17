<template>
  <div>
    <div class="submitWrap">
      <router-link to="/personalsummary">个人总结</router-link>
      <router-link to="/discuss">民主评议</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .submitWrap{
    margin-top: 4.4rem;
    display: flex;
    flex-flow: column;

    a{
      display: block;
      width: 3.22rem;
      height: .9rem;
      font-size: .32rem;
      background: #ef473a;
      text-align: center;
      line-height: .9rem;
      text-decoration: none;
      color: #fff;
      margin: .4rem auto 0;
      padding: 0 .24rem;
      border: .02rem solid transparent;
      border-radius: .08rem;
    }
  }
</style>
