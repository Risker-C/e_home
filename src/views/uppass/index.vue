<template>
  <form class="uppass-list">
    <div>
      <div class="up-title">旧密码:</div>
      <input type="password" class="up-text" v-model="formData.oldpass">
    </div>
    <div>
      <div class="up-title">新密码:</div>
      <input type="password" class="up-text" v-model="formData.newpass">
    </div>
    <div>
      <div class="up-title">确认密码:</div>
      <input type="password" class="up-text" v-model="formData.verifypass">
    </div>
    <input type="button" class="up-btn" @click="handleClick" value="确认" :disabled="isDisable">
  </form>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      formData: {
        oldpass: '',
        newpass: '',
        verifypass: ''
      },
      isDisable: false
    }
  },
  methods: {
    handleClick () {
      let formData = this.formData
      if (formData.oldpass === '' || formData.newpass === '' || formData.verifypass === '') {
        Toast({
          message: '请将信息填写完整',
          position: 'bottom'
        })
      } else if (formData.newpass !== formData.verifypass) {
        Toast({
          message: '两次密码不一致，请确认',
          position: 'bottom'
        })
      } else {
        this.isDisable = !this.isDisable
        this.$axios.get(`/user/updatePwd.do?newPwd=${formData.newpass}&oldPwd=${formData.oldpass}`).then(res => {
          console.log(res)
          this.isDisable = !this.isDisable
          if (res.code === 1) {
            Toast(res.msg + '，请重新登录')
            setTimeout(() => {
              this.$router.push('/login')
            }, 1000)
          } else {
            Toast(res.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.uppass-list{
  font-size: .32rem;
  width: 6rem;
  margin: 1rem auto 0;
  padding-top: 1rem;
  line-height: .4rem;
  .up-text{
    width: 100%;
    height: .82rem;
    margin: .2rem 0;
    border: .02rem solid rgb(153, 153, 153);
    border-radius: .1rem;
    padding: 0 .1rem;
    box-sizing: border-box;
  }
  .up-btn{
    width: 100%;
    height: .9rem;
    border-radius: .1rem;
    clear: both;
    background: #ef473a;
    border: .02rem solid transparent;
    color: #fff;
    font-size: .32rem;
  }
}
</style>
