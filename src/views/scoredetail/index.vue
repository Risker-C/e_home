<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    :infinite-scroll-distance="100">
    <div class="list-wrap">
      <div v-for="(item, index) in data" :key="index" class="list-item">
      <!--<div class="list-item">-->
        <div class="item-left">
          <div class="item-left-top">{{item.typeName}}</div>
          <div class="item-left-bottom">{{item.timeFormat}}</div>
        </div>
        <div class="item-right">+{{item.singleDesc}}</div>
      </div>
    </div>
    <div v-show="allLoaded" class="bottom">
      没有更多数据了
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
      this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=${this.rows}`).then(res => {
        Indicator.close()
        this.data = [
          ...this.data,
          ...res.rows
        ]
        if (res.rows.length !== this.rows) {
          this.allLoaded = true // 若数据已全部获取完毕
        }
      })
    },
    loadMore () {
      this.page = this.page + 1
      this.loading = true
      this.getData()
      this.loading = false
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  .list-item{
    display: flex;
    flex-flow: row;
    background: #fff;
    height: 1.6rem;
    border-bottom: .02rem solid rgb(221, 221, 221);
    padding: .32rem;
    box-sizing: border-box;
    position: relative;
    font-size: .32rem;
    font-weight: 400;

    .item-right{
      position: absolute;
      right: .2rem;
      color: red;
    }

    .item-left{
      line-height: .4rem;
      .item-left-top{
        margin-bottom: .1rem;
        font-size: .36rem;
      }

      .item-left-bottom{
        font-size: .28rem;
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
