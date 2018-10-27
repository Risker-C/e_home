<template>
  <div
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="100">
    <div>
      <div class="list-wrap clearfix">
        <div v-for="(item, index) in data" :key="index" class="list-item fll">
          <img :src="item.pic">
          <div class="item-bottom">{{item.title}}</div>
        </div>
      </div>
      <div v-show="allLoaded" class="bottom">
        没有更多数据了
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      data: [],
      page: 1,
      rows: 8,
      allLoaded: false,
      loading: false
    }
  },
  methods: {
    getData () {
      Indicator.open({
        text: '内容加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`news/newsList.do?page=${this.page}&rows=${this.rows}&type=7`).then(res => {
        Indicator.close()
        this.data = [
          ...this.data,
          ...res.rows
        ]
        if (res.rows.length !== this.rows) {
          this.allLoaded = true // 若数据已全部获取完毕
          this.loading = false
        }
      })
    },
    loadMore () {
      if (!this.allLoaded) {
        this.page = this.page + 1
        this.loading = true
        this.getData()
        this.loading = false
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .list-wrap{
    background: #fff;
  }
  .list-item{
    border-color: transparent;
    flex: 1;
    display: flex;
    flex-flow: column;
    background: #fff;
    width: 3.74rem;
    height: 3.79rem;
    padding: .32rem;
    font-size: .32rem;
    font-weight: 400;
    box-sizing: border-box;
    margin: 0;

    img{
      width: 3.1rem;
      height: 2.4rem;
    }
    .item-bottom{
      color: #666;
      width: 3.1rem;
      height: .74rem;
      font-size: .26rem;
      line-height: 1.5;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
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
