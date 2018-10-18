<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    :infinite-scroll-distance="100">
    <div class="list-wrap">
      <div v-for="(item, index) in data" :key="index" class="list-item">
        <!--<div class="list-item">-->
        <div class="item-top clearfix">
          <img class="fll" :src="item.header">
          <div class="fll top-center">
            <div class="top"> {{item.username}} </div>
            <div class="bottom">
              <img src="../../imgs/time.png" class="icon"/>
              <span>{{item.currentTime}}</span>
              <img src="../../imgs/sound.png" class="icon"/>
              <span>公开</span>
            </div>
          </div>
          <div class="flr top-right">
            党员互动
          </div>
        </div>
        <div class="item-center">{{item.content}}</div>
        <div class="item-bottom clearfix" @click="toDetail(item)">
          <span class="flr">
            <img src="../../imgs/recover.jpg"/>
            <span>回复</span>
          </span>
        </div>
      </div>
    </div>
    <div v-show="allLoaded" class="bottom">
      没有更多数据了
    </div>
    <div class="addBtn" @click="click"></div>
    <div :class="isAdd ? 'close' : ''"></div>
    <div class="publish-wrap" v-show="isAdd">
      <form action="">
        <textarea v-model="text"></textarea>
        <input type="button" value="发布" class="publish" @click="publish">
        <input type="button" value="取消" class="cancel" @click="click">
      </form>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      data: [],
      page: 1,
      rows: 8,
      allLoaded: false,
      loading: false,
      isAdd: false,
      text: ''
    }
  },
  methods: {
    getData () {
      Indicator.open({
        text: '内容加载中...',
        spinnerType: 'double-bounce'
      })
      this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=${this.rows}&type=0&cates=0`).then(res => {
        Indicator.close()
        this.data.push(...res.rows)
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
    },
    click () {
      this.isAdd = !this.isAdd
    },
    publish () {
      var formData = new FormData()
      formData.append('content', this.text)
      formData.append('type', 1)
      this.$axios.post('/forum/saveForum.do', formData, {ContentType: 'application/x-www-form-urlencoded'}).then(res => {
        if (res.code === 1) {
          this.isAdd = !this.isAdd
        }
        Toast(res.data.msg)
      }).catch(err => {
        console.log(err)
        Toast(err.msg)
      })
    },
    toDetail (item) {
      console.log(item)
      this.$router.push({name: 'interactionDetail', params: {id: item.forumId, url: item.header, time: item.currentTime, text: item.content, username: item.username}})
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  .list-wrap{
    background: #eee;
  }
  .list-item{
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    display: block;
    margin: -1px;
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

  .item-bottom{
    span{
      font-size: .28rem;
    }
    img{
      width: .42rem;
      height: .34rem;
      background-size: cover;
    }
  }
  .addBtn{
    position: fixed;
    z-index: 100;
    bottom: 1rem;
    right: .5rem;
    background: url("../../imgs/addBtn.png");
    width: 1.2rem;
    height: 1.2rem;
    background-size: cover;
  }
  .close{
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 150;
  }
  .publish-wrap{
    position: fixed;
    z-index: 200;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3.22rem;
    background: #f1f1f1;
    padding: .2rem;
    box-sizing: border-box;

    form{
      height: 100%;
      position: relative;
    }
    textarea{
      width: 100%;
      height: 2rem;
      border: .02rem solid transparent;
      border-radius: .06rem;
      margin-bottom: .2rem;
      padding: .08rem;
      line-height: .32rem;
      box-sizing: border-box;
      font-size: .28rem;
    }
    .publish{
      position: absolute;
      bottom: 0;
      left: 0;
      border-color: transparent;
      background-color: #ef473a;
      color: #fff;
      padding: 2px 4px 1px;
      min-width: 28px;
      min-height: 30px;
      font-size: 12px;
      line-height: 26px;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .cancel{
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid transparent;
      background-color: #f8f8f8;
      color: #444;
      border-radius: 4px;
      text-align: center;
      padding: 2px 4px 1px;
      min-width: 28px;
      min-height: 30px;
      font-size: 12px;
      line-height: 26px;
    }
  }
</style>
