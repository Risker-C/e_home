<template>
  <mt-loadmore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    :autoFill="false"
    ref="loadmore"
    bottomPullText="上拉加载更多"
    class="more">
    <div class="list-wrap">
      <div v-for="(item, index) in data" :key="index" class="list-item" @click="jump(item.newsId)">
        <div class="item-left fll">
          <img :src="item.pic">
        </div>
        <div class="item-right flr">
          <div class="item-right-top">
            {{item.title}}
          </div>
          <div class="item-right-bottom">
            <div class="item-time fll">
              {{item.currentTime}}
            </div>
            <div class="item-watch flr">
              <img src="../../imgs/12-eye.png">
              <span>{{item.count}}</span>
            </div>
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
  name: 'index',
  data () {
    return {
      type: '',
      data: [],
      page: 1,
      rows: 8,
      allLoaded: false
    }
  },
  methods: {
    selectType () {
      switch (this.$route.name) {
        case 'newseye':
          this.type = 0
          break
        case 'activity':
          this.type = 1
          break
        case 'oneclick':
          this.type = 3
          break
        case 'System':
          this.type = 4
          break
        case 'showidentity':
          this.type = 5
          break
        case 'anytimestudy':
          this.type = 6
          break
        case 'anytimephoto':
          this.type = 7
          break
        case 'study':
          this.type = 8
          break
        default:
          return ''
      }
    },
    getData () {
      Indicator.open({
        text: '页面加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res => {
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
    jump (id) {
      this.$router.push(`/newsDetail/${id}`)
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
    this.selectType()
    this.getData()
    console.log(this.type)
  }
}
</script>

<style lang="scss">
  .list-item{
    display: flex;
    flex-flow: row;
    background: #fff;
    height: 2rem;
    border-bottom: .02rem solid rgb(221, 221, 221);
    padding: .2rem .2rem .2rem 2rem;
    box-sizing: border-box;
    position: relative;

    .item-left{
      position: absolute;
      left: .2rem;

      img{
        width: 1.6rem;
        height: 1.6rem;
      }
    }

    .item-right{
      font-size: .32rem;
      font-weight: 500;

      .item-right-top{
        height: .96rem;
        line-height: .48rem;
      }

      .item-right-bottom{
        width: 5.3rem;
        position: absolute;
        top: 1.55rem;
        font-size: .20rem;
        font-weight: 400;
        line-height: .24rem;
        color: #666;
      }
    }
  }

  .item-watch{
    img{
      height: .24rem;
      margin-right: .1rem;
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
  }
</style>
