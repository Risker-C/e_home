<template>
  <div>
    <div class="header-wrap">
      <div class="back" @click="back">
        <img src="../../imgs/back.png" class="back-icon" alt="">
      </div>
      个人信息
      <router-link to="/login" class="right-wrap">
        编辑
      </router-link>
    </div>
    <div class="info-list">
      <div class="info-row" v-for="(item, index) in data" :key="index">
        <div class="row-left">{{index}}</div>
        <div class="row-right">
          <div>{{item}}</div>
          <!--<img v-else :src="item.value">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      data: {},
      list: {
        'header': '',
        'username': '',
        'idCard': '',
        'hometown': ''
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    getData () {
      Indicator.open({
        text: '页面加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`/user/userInfo.do`).then(res => {
        this.data = res.data
        // res.data.forEach(index => {console.log(index)})
        Indicator.close()
      }).catch(err => {
        Indicator.close()
        console.log(err)
        // Toast(err.msg)
        // setTimeout(() => {
        //   this.$router.push('/login')
        // }, 1000)
      })
    }
  },
  computed: {
    title (index) {
      switch (index) {
        case 'header':
          return '头像'
        case 'username':
          return '姓名'
        case 'idCard':
          return '身份证'
        case 'hometown':
          return '家庭住址'
        case 'address':
          return '工作地址'
        case 'nation':
          return '民族'
        case 'wxNum':
          return '微信号'
        case 'qqNum':
          return 'QQ号'
        case 'sex':
          return '性别'
        case 'education':
          return '最高学历'
        case 'jobRank':
          return '职称'
        case 'salary':
          return '薪资水平'
        case 'joinPartyTime':
          return '入党时间'
        case 'lastPayTime':
          return '党费最后缴纳时间'
        case 'partyIdentity':
          return '当前身份'
        default:
          return ''
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .header-wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: .86rem;
    background: #c50206;
    border-bottom: 2px solid #c50206;
    padding: 0.02px 0.02px 0 0.02px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: .86rem;
    color: #fff;
    z-index: 998;

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

    .right-wrap{
      position: fixed;
      right: .2rem;
      top: 0;
      font-size: .34rem;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
    }
  }
  .info-list{
  }
  .info-row{
    height: 1rem;
    margin: 0 0 -0.02rem 0;
    border-bottom: .02rem solid rgb(221, 221, 221);
    position: relative;
    font-size: .28rem;
    line-height: 1rem;

    .row-left{
      position: absolute;
      top: .02rem;
      left: .22rem;
    }

    .row-right{
      position: absolute;
      top: .02rem;
      right: .22rem;
      height: 100%;
      padding: .2rem 0;
      box-sizing: border-box;

      img{
        width: .56rem;
        height: .56rem;
      }
      div{
        line-height: .6rem;
      }
    }
  }
</style>
