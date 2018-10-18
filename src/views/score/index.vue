<template>
  <div>
    <div class="top">{{data.totalScore}}</div>
    <router-link to="/scoredetail" class="detail-link">
      积分明细
      <img src="../../imgs/lxjf.png" class="img-left">
      <img src="../../imgs/right.png" alt="" class="img-right">
    </router-link>
    <div class="rule">
      积分规则
      <img src="../../imgs/wenhao.png" alt="">
    </div>
    <div class="rule-list">
      <div class="rule-row" v-for="(item, index) in ruleList" :key="index">
        <div class="rule-row-left">{{item.name}}</div>
        <div class="rule-row-right">{{item.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: {},
      ruleList: [
        {name: '登录app', score: 5},
        {name: '完善个人信息', score: 2},
        {name: '查看积分', score: 1},
        {name: '按时缴纳党费', score: 10},
        {name: '查看通知', score: 2},
        {name: '了解学院工作状态', score: 5},
        {name: '上交思想汇报经审核通过', score: 5},
        {name: '主动学习相关文件', score: 10},
        {name: '认真撰写心得总结并上交，经审核通过', score: 5},
        {name: '提交个人总结，并参与评议', score: 2},
        {name: '积极参与互动', score: 5},
        {name: '学习党建知识', score: 5},
        {name: '学习党史', score: 10},
        {name: '创先争优事迹', score: 10},
        {name: '学党章，学习近平总书记系列讲话', score: 10},
        {name: '用镜头记录两学一做过程中令人感动的人和事', score: 3},
        {name: '关注并积极参与特色活动', score: 5},
        {name: '制度化、常态化建设', score: 5}
      ]
    }
  },
  methods: {
    getData () {
      Indicator.open({
        text: '页面加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`/user/userInfo.do`).then(res => {
        this.data = res.data
        Indicator.close()
      }).catch(err => {
        Indicator.close()
        Toast(err.msg)
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .top{
    background: url("../../imgs/jifen.png") no-repeat;
    background-size: cover;
    height: 2.9rem;
    line-height: 2.9rem;
    text-align: center;
    color: #fff;
    font-size: .32rem;
  }
  .detail-link{
    display: block;
    height: 1.08rem;
    position: relative;
    font-size: .32rem;
    text-decoration: none;
    color: #666;
    padding: .32rem 1.08rem;
    box-sizing: border-box;
    border: .02rem solid rgb(221, 221, 221);
    margin: .04rem -.02rem 0;

    .img-left{
      position: absolute;
      top: .2rem;
      left: .22rem;
      width: .64rem;
      height: .64rem;
    }

    .img-right{
      position: absolute;
      top: .40rem;
      right: .22rem;
      width: .20rem;
      height: .30rem;
    }
  }
  .rule{
    height: .68rem;
    line-height: .68rem;
    position: relative;
    font-size: .28rem;
    background: rgb(221, 221, 221);
    padding-left: .22rem;
    box-sizing: border-box;
    img{
      position: absolute;
      top: .16rem;
      right: .22rem;
      width: .36rem;
      height: .36rem;
    }
  }
  .rule-row{
    height: .68rem;
    border-bottom: .02rem solid rgb(221, 221, 221);
    position: relative;
    line-height: .68rem;
    font-size: .28rem;
    color: rgb(153, 153, 153);
    .rule-row-left{
      position: absolute;
      left: .22rem;
    }
    .rule-row-right{
      position: absolute;
      right: .22rem;
      color: red;
    }
  }
</style>
