<template>
  <div>
    <div class="text">
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
      this.$axios.get('http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html').then(res => {
        let first = res.split('<!--content-->')[1]
        let content = first.split('<!--p1 end-->')[0]
        this.content = content
        Indicator.close()
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  .text {
    width: 7.50rem;
    padding: .2rem;
    box-sizing: border-box;
    font-size: .32rem;
    line-height: .64rem;
    h1{
      font-size: .48rem;
      font-weight: 500;
      margin-bottom: .2rem;
    }
    h2{
      font-size: .4rem;
      margin: .2rem 0;
      font-weight: 500;
      line-height: .48rem;
    }
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
      font-size: .28rem;
      line-height: .56rem;
      margin-bottom: .2rem;
    }
    span{
      font-size: .32rem;
    }
  }
</style>
