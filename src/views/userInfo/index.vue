<template>
  <div>
    <div class="header-wrap">
      <div class="back" @click="back">
        <img src="../../imgs/back.png" class="back-icon" alt="">
      </div>
      {{isEdit?'修改个人信息':'个人信息'}}
      <span to="/login" class="right-wrap" @click="handleEdit()">
        {{isEdit?'保存':'编辑'}}
      </span>
    </div>
    <div>
      <div v-if="!isEdit">
        <div class="info-row" v-for="(item, index) in list" :key="index">
          <div class="row-left">
            {{item.title}}
          </div>
          <div class="row-right">
            <div>
              <img v-if="item.value === 'header'" :src="data[item.value]" alt="">
              <div v-else>
                <span v-if="item.value === 'sex'">{{data[item.value] === 1 ? '男' : '女'}}</span>
                <span v-else>{{data[item.value]}}</span>
              </div>
            </div>
            <!--<div v-else>-->
            <!--<label class="upImg" v-if="item.value === 'header'">-->
            <!--<input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>-->
            <!--<img :src="img ? img : data[item.value]" alt="">-->
            <!--</label>-->
            <!--<div v-else class="right-input">-->
            <!--<div v-if="item.value === 'idCard'">{{data[item.value]}}</div>-->
            <!--<input v-else type="text" v-model="data[item.value]">-->
            <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <div v-else>
        <div class="info-row">
          <div class="row-left">头像</div>
          <div class="row-right">
              <label class="upImg">
                <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                <img :src="img ? img : data.header" alt="">
              </label>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">姓名</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.username">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">身份证号</div>
          <div class="row-right">
            <div class="right-input">
              <div>{{data.idCard}}</div>
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">家庭住址</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.hometown">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">工作地址</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.address">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">民族</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.nation">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">微信号</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.wxNum">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">QQ号</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.qqNum">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">性别</div>
          <div class="row-right">
            <div class="right-input">
              <label><input type="radio" :checked="isMan ? 'checked' : ''" @change="changeSex">男</label>
              <label><input type="radio" :checked="!isMan ? 'checked' : ''" @change="changeSex">女</label>
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">最高学历</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.education">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">职称</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.jobRank">
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="row-left">薪资水平</div>
          <div class="row-right">
            <div class="right-input">
              <input type="text" v-model="data.salary">
            </div>
          </div>
        </div>
        <mt-field label="入党时间" placeholder="Input birthday" type="date" v-model="data.joinPartyTime"></mt-field>
        <mt-field label="党费最后缴纳时间" placeholder="Input birthday" type="date" v-model="data.lastPayTime"></mt-field>
        <div class="info-row">
          <div class="row-left">当前身份</div>
          <div class="row-right">
            <div class="right-input">
              <select v-model="data.partyStatus" style="background: transparent; border-color: transparent;outline: none">
                <option name="党员" value="2">党员</option>
                <option name="预备党员" value="1">预备党员</option>
                <option name="积极分子" value="0">积极分子</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: {},
      list: [
        {
          title: '头像',
          value: 'header'
        },
        {
          title: '姓名',
          value: 'username'
        },
        {
          title: '身份证',
          value: 'idCard'
        },
        {
          title: '家庭住址',
          value: 'hometown'
        },
        {
          title: '工作地址',
          value: 'address'
        },
        {
          title: '民族',
          value: 'nation'
        },
        {
          title: '微信号',
          value: 'wxNum'
        },
        {
          title: 'QQ号',
          value: 'qqNum'
        },
        {
          title: '性别',
          value: 'sex'
        },
        {
          title: '最高学历',
          value: 'education'
        },
        {
          title: '职称',
          value: 'jobRank'
        },
        {
          title: '薪资水平',
          value: 'salary'
        },
        {
          title: '入党时间',
          value: 'joinPartyTime'
        },
        {
          title: '党费最后缴纳时间',
          value: 'lastPayTime'
        },
        {
          title: '当前身份',
          value: 'partyIdentity'
        }
      ],
      isEdit: false,
      img: '',
      upImg: '',
      isMan: true
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
      this.$axios.get(`/user/userInfo.do`).then(res => {
        this.data = res.data
        this.$store.commit('login', res.data)
        Indicator.close()
      }).catch(err => {
        Indicator.close()
        console.log(err)
      })
    },
    handleEdit () {
      if (this.isEdit) {
        Indicator.open({
          text: '信息修改中...',
          spinnerType: 'double-bounce'
        })
        console.log(this.formData)
        let formdata = new FormData()
        if (this.upImg) {
          formdata.append('header', this.upImg)
        }
        formdata.append('username', this.data.username)
        formdata.append('hometown', this.data.hometown)
        formdata.append('address', this.data.address)
        formdata.append('nation', this.data.nation)
        formdata.append('wxNum', this.data.wxNum)
        formdata.append('qqNum', this.data.qqNum)
        formdata.append('sex', this.data.sex)
        formdata.append('education', this.data.education)
        formdata.append('jobRank', this.data.jobRank)
        formdata.append('salary', this.data.salary)
        formdata.append('joinPartyTime', this.data.joinPartyTime)
        formdata.append('lastPayTime', this.data.lastPayTime)
        formdata.append('partyStatus', this.data.partyStatus)
        this.$axios.post('/user/modifyInfo.do', formdata, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          Indicator.close()
          if (res.data.code === 1) {
            this.getData()
          }
          Toast(res.data.msg)
        }).catch(err => {
          console.log(err)
          Toast(err.data.msg)
          Indicator.close()
        })
      }
      this.isEdit = !this.isEdit
    },
    addImg (event) {
      var file = this.$refs.inputer.files[0]
      let url = window.webkitURL.createObjectURL(file)
      this.img = url
      console.log(this.img)
      let r = new FileReader()
      r.onload = () => {
        console.log(r.result)
        let file = r.result.split('data:image/jpeg;base64,')[1]
        let formdata = new FormData()
        formdata.append('myFile', file)
        this.$axios.post('/image/uploadBase64.do', formdata, {ContentType: 'application/x-www-form-urlencoded'}).then(res => {
          this.upImg = res.data.url
        })
      }
      r.readAsDataURL(file)// Base64
    },
    changeSex () {
      let sex = this.data.sex
      if (sex === 0) {
        this.data.sex = 1
        this.isMan = true
      } else {
        this.data.sex = 0
        this.isMan = false
      }
    }
  },
  computed: {
    title (index) {
      switch (index) {
        case 'header':
          return '头像'
        case 'username':
          return '姓名'
        case 'idCard':
          return '身份证'
        case 'hometown':
          return '家庭住址'
        case 'address':
          return '工作地址'
        case 'nation':
          return '民族'
        case 'wxNum':
          return '微信号'
        case 'qqNum':
          return 'QQ号'
        case 'sex':
          return '性别'
        case 'education':
          return '最高学历'
        case 'jobRank':
          return '职称'
        case 'salary':
          return '薪资水平'
        case 'joinPartyTime':
          return '入党时间'
        case 'lastPayTime':
          return '党费最后缴纳时间'
        case 'partyIdentity':
          return '当前身份'
        default:
          return ''
      }
    }
  },
  created () {
    this.getData()
    if (this.data.sex === 0) {
      this.isMan = false
    }
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
    z-index: 998;

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

    .right-wrap{
      position: fixed;
      right: .2rem;
      top: 0;
      font-size: .34rem;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
    }
  }
  .info-list{
  }
  .info-row{
    height: 1rem;
    margin: 0 0 -0.02rem 0;
    border-bottom: .02rem solid rgb(221, 221, 221);
    position: relative;
    font-size: .28rem;
    line-height: 1rem;

    .row-left{
      position: absolute;
      top: .02rem;
      left: .22rem;
    }

    .row-right{
      position: absolute;
      top: .02rem;
      right: .22rem;
      height: 100%;
      padding: .2rem 0;
      box-sizing: border-box;

      img{
        width: .56rem;
        height: .56rem;
      }
      div{
        line-height: .6rem;
      }
    }
  }
  .upImg{
    input{
      display: none;
    }
  }
  .right-input{
    input{
      border-color: transparent;
      text-align: right;
      outline: none;
    }
  }
  .mint-field-core{
    background: #fff;
    text-align: right;
    font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
  }
  .mint-cell-title{
    width: 2.24rem;
  }
  .mint-cell-text{
    font-size: .28rem;
  }
</style>
