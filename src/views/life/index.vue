<template>
  <div>
    <div class="img-wrap">
      <img src="../../imgs/timg.jpg">
    </div>
    <div class="menu-row">
      <router-link to="/study" class="menu-item">
        <img src="../../imgs/icon1.png">
        <div>政治学习</div>
      </router-link>
      <router-link to="/auditStatus/0/0" class="menu-item">
        <img src="../../imgs/icon2.png">
        <div>思想汇报</div>
      </router-link>
      <router-link to="/auditStatus/0/1" class="menu-item">
        <img src="../../imgs/icon3.png">
        <div>心得总结</div>
      </router-link>
    </div>
    <div class="menu-row">
      <router-link to="/LifeChoice" class="menu-item">
        <img src="../../imgs/icon4.png">
        <div>民主评议</div>
      </router-link>
      <router-link to="/findorg" class="menu-item">
        <img src="../../imgs/icon5.png">
        <div>流动党员找组织</div>
      </router-link>
      <div class="menu-item"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .img-wrap{
    width: 100%;
    font-size: .24rem;

    img{
      width: 100%;
    }
  }

  .menu-row{
    display: flex;
    flex-flow: row;
    width: 100%;

    .menu-item{
      flex: 1;
      width: 1.7rem;
      height: 2.3rem;
      padding: .3rem .4rem;
      text-align: center;
      font-size: .28rem;
      line-height: .4rem;
      text-decoration: none;
      color: #666;
      img{
        width: 1.7rem;
        height: 1.7rem;
        margin-bottom: .1rem;
      }

      div{

      }
    }
  }
</style>
