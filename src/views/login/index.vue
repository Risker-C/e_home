<template>
    <div class="box">
      <div class="img-wrap">
        <img src="../../imgs/logo.png">
      </div>
      <div class="form">
        <div class="input-wrap">
          <input type="text" placeholder="身份证号" v-model="form.id_card">
        </div>
        <div class="input-wrap">
          <input type="password" placeholder="密码" v-model="form.password">
        </div>
        <div class="input-wrap">
          <button class="login" @click="handlelogin">登录</button>
        </div>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      form: {
        id_card: '',
        password: ''
      }
    }
  },
  methods: {
    // 登录功能实现
    handlelogin () {
      // 生成一个formData的对象
      let formDate = new FormData()
      formDate.set('id_card', this.form.id_card)
      formDate.set('password', this.form.password)
      // 对表单数据进行检查
      if (this.form.id_card !== '' && this.form.password !== '') {
        // 发送请求
        this.$axios.post('/user/userLogin.do', formDate).then(res => {
          // 如果登录成功，将数据存入vuex,并返回上一页面
          if (res.data.code === 1) {
            this.$store.commit('login', res.data.data)
            localStorage.setItem('token', res.data.token)
            Toast(res.data.msg)
            this.$router.back()
          } else {
            Toast(res.data.msg)
          }
        })
      } else if (this.form.id_card === '') {
        Toast('身份证号不得为空')
      } else {
        Toast('密码不得为空')
      }
    }
  }
}
</script>

<style lang="scss">
 .box {
   position: absolute;
   background: #c50206;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin-top: 34px;
    color: #fff;
   .img-wrap {
     width: 4rem;
     margin: .6rem auto;
     img {
       width: 100%;
     }
   }

 }
 .form{
    color: #fff;
   .input-wrap{
     width: 6rem;
     margin: 0 auto .2rem;
     height: .82rem;
     position: relative;

     input{
       position: absolute;
       top: 0;
       box-sizing: border-box;
       border: 1px solid gold;
       border-radius: 4px;
       background: #c50206;
       color: #fff;
       width: 100%;
       height: .8rem;
       font-size: 14px;
       padding: .08rem .24rem;
     }
     .login{
       position: absolute;
       top: 0;
       background: #e3574f;
       width: 100%;
       border: 1px solid #e3574f;
       border-radius: 4px;
       height: .8rem;
       color: #fff;
       font-size: .28rem;
     }
   }
 }
</style>
