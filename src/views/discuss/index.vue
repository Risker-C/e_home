<template>
  <div class="firctr">
    <p class="firhead">评议须知</p>
    <div class="content">
      <p>在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
      <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
      <p>2、参加“两学一做”学习教育情况；</p>
      <p>3、参加党的组织生活、按要求交纳党费；</p>
      <p>4、学习情况、业务能力提高情况；</p>
      <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
      <p>6、联系群众、关心群众、服务群众情况；</p>
      <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
    </div>
    <div class="firbtnctrl ">
      <mt-picker
        :visibleItemCount="3"
        :slots="slots"
        :itemHeight="40"
        @change="onValuesChange">
      </mt-picker>
      <button class="next-btn" @click="jump">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      data: [],
      value: ''
    }
  },
  methods: {
    onValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.value = values[0]
    },
    getData () {
      this.$axios.get('/branch/findAll.do').then(res => {
        this.slots[0].values = res.rows.map(item => item.branch)
        this.data = res.rows
      })
    },
    jump () {
      let i = this.data.findIndex(item => item.branch === this.value)
      let id = this.data[i].id
      this.$router.push(`/Members/${id}`)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style  lang="scss">
  .firctr{
    padding-top: .38rem;
  }

  .firhead{
    height: .4rem;
    font-size: .32rem;
    text-align: center;
    font-weight: 400;
    margin-bottom: .2rem;
  }

  .content{
    padding: .2rem;
    line-height: .42rem;
    font-size: .28rem;
    color: #666;
    font-family: inherit;
    p{
      margin-bottom: .2rem;
    }
  }

  .firbtnctrl{
    position: relative;

    .picker{
      width: 4.6rem;
      position: absolute;
      left: .2rem;
      top: .8rem;
    }
    .picker-slot-wrapper{
      font-size: .24rem;
    }
    .next-btn{
      width: 1.8rem;
      position: absolute;
      right: .5rem;
      top: 1.6rem;
      height: .8rem;
      background: rgb(197, 2, 6);
      border: 1px solid transparent;
      border-radius: .08rem;
      color: #fff;
    }
  }

</style>
