<template>
  <div class="main">
    <div class="list-item  list-top">
      <div class="item-top clearfix">
        <img class="fll" :src=userList.url>
        <div class="fll top-center">
          <div class="top">{{userList.username}}</div>
          <div class="bottom">
            <img src="../../imgs/time.png" class="icon"/>
            <span>{{userList.time}}</span>
          </div>
        </div>
      </div>
      <div class="item-center">{{userList.text}}</div>
    </div>
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="allLoaded"
      :infinite-scroll-distance="100">
      <div v-for="(item, index) in data" :key="index" class="list-item">
        <!--<div class="list-item">-->
        <div class="item-top clearfix">
          <img class="fll" :src="item.header">
          <div class="fll top-center">
            <div class="top">{{item.username}}</div>
            <div class="bottom">
              <img src="../../imgs/time.png" class="icon"/>
              <span>{{item.timeFormat}}</span>
            </div>
          </div>
        </div>
        <div class="item-center">{{item.comment}}</div>
      </div>
    </div>
    <div v-show="allLoaded" class="bottom">
      没有更多数据了
    </div>
    <div class="bottom-input">
      <input type="text" v-model="text">
      <button @click="addComment">评论</button>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
export default {
  data () {
    return {
      userList: {},
      data: {},
      page: 1,
      rows: 8,
      allLoaded: false,
      loading: false,
      text: ''
    }
  },
  methods: {
    getData () {
      Indicator.open({
        text: '内容加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`/forum/forumCommentList.do?page=${this.page}&rows=${this.rows}&forum_id=${this.userList.id}`).then(res => {
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
      if (!this.allLoaded) {
        this.getData()
      }
      this.loading = false
    },
    addComment () {
      console.log(this.text)
      var formData = new FormData()
      formData.append('forum_id', this.userList.id)
      formData.append('comment', this.text)
      console.log(this.userList)
      this.$axios.post('/forum/addComment.do', formData, {ContentType: 'application/x-www-form-urlencoded'}).then(res => {
        this.text = ''
        this.page = 1
        this.getData()
        Toast(res.data.msg)
      }).catch(err => {
        console.log(err)
        Toast(err.msg)
      })
    }
  },
  created () {
    this.userList = this.$route.params
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .main{
    /*position: fixed;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*top: 0;*/
    background: rgb(239, 239, 244);
    width: 100%;
    box-sizing: border-box;
  }

  .list-item{
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    display: block;
    padding: 16px;
    font-size: 16px;
    height: 2.8rem;
    box-sizing: border-box;
    margin-bottom: .2rem;
  }
  .item-top{
    img{
      width: .66rem;
      height: .66rem;
      border-radius: 50%;
    }
    .icon{
      width: .24rem;
      height: .24rem;
    }
    .top-center{
      margin-left: .2rem;
      margin-bottom: .1rem;
      .top{
        font-size: .36rem;
      }
      .bottom{
        span{
          font-size: .24rem;
        }
      }
    }

    .top-right{
      font-size: .24rem;
      padding: .04rem .16rem;
      color: red;
      border: .02rem solid red;
      border-radius: 15%/50%;
    }
  }
  .item-center{
    margin: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    padding: .2rem 0;
    font-size: .32rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .list-top{
    margin: .2rem;
    box-sizing: border-box;
  }
  .bottom{
    height: .4rem;
    padding: .2rem 0;
    text-align: center;
    color: #666;
    font-size: .28rem;
    font-weight: 400;
  }
  .bottom-input{
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-sizing: border-box;

    input{
      position: absolute;
      top: .18rem;
      left: .16rem;
      border: 1px solid #c50206;
      background: #fff;
      border-radius: 4px;
      padding-right: 8px;
      padding-left: 8px;
      font-weight: 400;
      font-size: 14px;
      color: #444;
      height: 29px;
      background: 0 0;
      line-height: 18px;
      box-sizing: border-box;
      width: 80%;
    }
    button{
      position: absolute;
      top: .18rem;
      right: .16rem;
      background: #c50206;
      color: #fff;
      margin-left: 10.67px;
      padding: 2px 4px 1px;
      min-width: 28px;
      min-height: 30px;
      font-size: 12px;
      line-height: 26px;
      border-radius: 4px;
      border: 1px solid transparent;
    }
  }
</style>
