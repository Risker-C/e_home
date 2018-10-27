<template>
  <div>
    <div class="header-wrap">
      <div class="back" @click="back">
        <img src="../../imgs/back.png" class="back-icon" alt="">
      </div>
      {{title}}
    </div>
    <div class="text">
      <h3>{{data.title}}</h3>
      <div v-html="content" class="content"></div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      id: '',
      data: {},
      content: ''
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
      this.$axios.get(`/news/newsContent.do?newsId=${this.id}`).then(res => {
        // console.log(res)
        this.data = res.data
        this.content = res.data.content
        Indicator.close()
      })
    }
  },
  computed: {
    title () {
      switch (this.data.type) {
        case 0:
          return '信工新闻眼'
        case 1:
          return '特色活动'
        case 2:
          return '新闻早知道'
        case 3:
          return '党建一点通'
        case 4:
          return '制度建设'
        case 5:
          return '党员亮身份'
        case 6:
          return '随时随地学'
        case 7:
          return '随时随地拍'
        case 8:
          return '政治学习'
        default:
          return ''
      }
    }
  },
  created () {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    this.getData()
  }
}
</script>

<style lang="scss">
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

  .text {
    width: 7.50rem;
    padding: .2rem;
    box-sizing: border-box;
    font-size: .32rem;
    line-height: .64rem;

    h3{
      font-size: .48rem;
      font-weight: 500;
      line-height: .576rem;
      margin-bottom: .2rem;
    }

    img{
      width: 100%;
    }
    p{
      font-size: .32rem;
      margin-bottom: .2rem;
    }
    span{
      font-size: .32rem;
    }
  }
</style>
