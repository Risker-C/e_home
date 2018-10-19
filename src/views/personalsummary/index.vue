<template>
<div>
  <span v-for="(item, index) in imgs" :key="index" v-show="imgs.length > 0">
    <label class="upImg fll">
      <img :src="item" alt="">
    </label>
  </span>
  <label class="upImg fll">
    <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
    <img src="../../imgs/upload.png" alt="">
  </label>
  <div class="btn-wrap" @click="handleUpload">
    <div class="btn">提交审核</div>
  </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      formData: new FormData(),
      imgs: [],
      upImgs: [],
      imgLen: 0,
      file: ''
    }
  },
  methods: {
    addImg (event) {
      console.log(this.$refs.inputer)
      var file = this.$refs.inputer.files[0]
      let url = window.webkitURL.createObjectURL(file)
      this.imgs.push(url)
      let r = new FileReader()
      r.onload = function () {
        this.file = r.result.split('data:image/jpeg;base64,')[1]
      }
      r.readAsDataURL(file)// Base64
      // setTimeout(() => {
      this.upLoadImg()
      // }, 1000)
    },
    upLoadImg () {
      let formdata = new FormData()
      formdata.append('myFile', this.file)
      console.log(formdata)
      this.$axios.post('/image/uploadBase64.do', formdata, {ContentType: 'application/x-www-form-urlencoded'}).then(res => {
        this.upImgs.push(res.url)
      })
    },
    handleUpload () {
      console.log(this.imgs)
      let formData = new FormData()
      formData.append('pic_list', this.imgs)
      formData.append('comment_id', 0)
      formData.append('user_id', sessionStorage.getItem('token'))
      // console.log(formData.get('pic_list'))
      this.$axios.post('/nationComment/submitSummary.do', formData, {ContentType: 'application/x-www-form-urlencoded'}).then(res => {
        console.log(res)
        Toast(res.data.msg)
      })
    }
  }
}
</script>

<style scoped lang="scss">

  .upImg{
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    padding: .2rem;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
    }
    input{
      display: none;
    }
  }
  .btn-wrap{
    position: fixed;
    bottom: 70px;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;

    .btn{
      color: #fff;
      text-decoration: none;
      border-color: transparent;
      background-color: #ef473a;
      margin-top: .2rem;
      margin-bottom: .2rem;
      position: relative;
      padding: 0 .24rem;
      min-width: .104rem;
      min-height: .94rem;
      border-radius: .08rem;
      vertical-align: top;
      text-align: center;
      text-overflow: ellipsis;
      font-size: .32rem;
      line-height: .84rem;
      cursor: pointer;
    }
  }
</style>
