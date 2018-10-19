<template>
  <div
    class="user-list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="isOver"
    infinite-scroll-distance="10"
  >
    <div class="user-row" v-for="(item, index) in this.data" :key="index" @click="handleClick(item)">
      <div class="row-img">
        <img :src="item.header">
      </div>
      <span class="left-username">{{item.username}}</span>
      <span class="right-branchName">{{item.branchName}}</span>
    </div>
    <div class="list-bottom" v-show="isOver">没有更多的数据了</div>
  </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
export default {
  data () {
    return {
      id: '',
      page: 1,
      rows: 20,
      data: [],
      isOver: false
    }
  },
  methods: {
    getData () {
      Indicator.open({
        text: '内容加载中...',
        spinnerType: 'double-bounce'
      })
      let token = sessionStorage.getItem('token')
      this.$axios.get(`http://211.67.177.56:8080/hhdj/nationComment/userList.do?select_branch=${this.id}&user_id=${token}&page=${this.page}&rows=${this.rows}`).then(res => {
        this.data = {
          ...this.data,
          ...res.rows
        }
        if (res.rows.length !== this.rows) {
          this.isOver = true
        }
        Indicator.close()
      })
    },
    loadMore () {
      if (!this.isOver) {
        console.log(this.isOver)
        this.page++
        this.getData()
      }
    },
    handleClick (item) {
      console.log(item)
      this.$axios.get(`/nationComment/isComment.do?user_id=${sessionStorage.getItem('token')}&other_user_id=${item.id}&id=CEBBD1A4FF2147C8B9ED0CEA6AE90BCF&comment_id=CEBBD1A4FF2147C8B9ED0CEA6AE90BCF`).then(res => {
        Toast(res.msg)
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .user-row{
    height: 1.1rem;
    position: relative;
    margin: -0.02rem 0;
    border-bottom: .02rem solid rgb(221, 221, 221);
    /*padding: .32rem 1.08rem;*/
    box-sizing: border-box;
    line-height: 1.1rem;
    font-size: .32rem;

    .row-img{
      position: absolute;
      height: 100%;
      top: 0;
      left: .22rem;
      padding: .2rem 0;

      img{
        width: .64rem;
        height: .64rem;
        border: .02rem solid transparent;
        border-radius: 50%;
      }
    }
    .left-username{
      position: absolute;
      left: 1.08rem;
    }
    .right-branchName{
      position: absolute;
      font-size: .28rem;
      right: .2rem;
    }
  }

  .list-bottom{
    height: 1rem;
    line-height: 1rem;
    font-size: .32rem;
    text-align: center;
  }
</style>
