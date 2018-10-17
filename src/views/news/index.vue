<template>
  <mt-loadmore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    :autoFill="false"
    ref="loadmore"
    bottomPullText="上拉加载更多"
    class="more">
    <div class="news">
      <div v-for="(index, item) in data" :key="item" class="row clearfix" @click="jump(index.newsId)">
        <div class="lift-wrap fll">
          <img src="../../imgs/iconfont_gonggaotongzhi.png" alt="">
        </div>
        <div class="right-wrap flr">
          <div class="notice-title">
            {{index.title}}
          </div>
          <div class="notice-time">
            {{index.currentTime}}
          </div>
        </div>
      </div>
    </div>
    <div v-show="allLoaded" class="bottom">
      没有更多数据了
    </div>
  </mt-loadmore>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      data: [],
      page: 1,
      rows: 8,
      allLoaded: false
    }
  },
  methods: {
    // time (date) {
    //   let dateObj = new Date(date)
    //   console.log(dateObj)
    //   let year = dateObj.getFullYear()
    //   let mouth = dateObj.getMonth()
    //   let day = dateObj.getDay()
    //   let hours = dateObj.getHours()
    //   let minutes = dateObj.getMinutes()
    //   let second = dateObj.getSeconds()
    //   let dateStr = `${year}-${mouth}-${day} ${hours}:${minutes}:${second}`
    //   console.log(dateStr)
    //   return dateStr
    // },
    jump (id) {
      this.$router.push(`/newsDetail/${id}`)
    },
    getData () {
      Indicator.open({
        text: '页面加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get('/news/newsList.do?page=1&rows=10&type=2').then(res => {
        console.log(res)
        this.data = [
          ...this.data,
          ...res.rows
        ]
        if (res.rows.length !== this.rows) {
          this.allLoaded = true // 若数据已全部获取完毕
        }
        Indicator.close()
      })
    },
    // 下拉刷新
    loadTop () {
      this.data = []
      this.page = 1
      this.allLoaded = false
      this.getData()
      this.$refs.loadmore.onTopLoaded()
    },
    // 上拉加载更多
    loadBottom () {
      this.page = this.page + 1
      console.log(this.page)
      this.getData()
      this.$refs.loadmore.onBottomLoaded()
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.news{

}
.row {
  display: block;
  width: 100%;
  color: #666;
  padding: .2rem;
  background: #fff;
  height: 1.94rem;
  border-bottom: .02rem solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .lift-wrap {
    width: 1.42rem;
    height: 1.52rem;
    text-align: center;
    padding: 0 .1rem .4rem .1rem;
    box-sizing: border-box;

    img{
      padding: .1rem;
      width: .7rem;
      height: .74rem;
    }
  }

  .right-wrap {
    padding: .1rem;
    font-weight: 400;
    line-height: .4rem;

    .notice-title{
      font-size: .3rem;
      width: 5.48rem;
      height: .8rem;
    }
    .notice-time{
      font-size: .24rem;
      width: 5.48rem;
      height: .4rem;
      margin: .06rem 0;
    }
  }
}
.mint-loadmore-text{
  font-size: .32rem;
}
.bottom{
  height: .4rem;
  padding: .2rem 0;
  text-align: center;
  color: #666;
  font-size: .28rem;
  font-weight: 400;
  margin-bottom: .92rem;
}
</style>
