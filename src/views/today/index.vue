<template>
  <div>
    <div class="text">
      <div v-html="content" class="content"></div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      content: ''
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
      let url = this.selectPage()
      this.$axios.get(`http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=${url}`).then(res => {
        let first = res.split('<!--content-->')[1]
        let content = first.split('<!--p1 end-->')[0]
        this.content = content
        Indicator.close()
      })
    },
    selectPage () {
      function change (i) {
        return i > 9 ? i + '' : '0' + i
      }
      let today = new Date()
      let vm = change(today.getMonth() + 1)
      let vd = change(today.getDate())
      switch (vm) {
        case '01':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76622/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76624/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76625/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76626/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76627/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76628/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76629/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76630/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76631/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76632/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76633/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76634/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76635/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76636/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76637/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76638/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76639/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76640/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76641/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76642/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76643/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76644/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76645/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76646/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76647/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76648/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76649/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76650/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76651/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76653/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/76621/76654/index.html'
          }
          break
        case '02':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77553/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77554/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77555/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77556/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77557/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77558/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77559/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77560/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77561/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77562/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77563/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77565/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77566/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77567/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77569/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77570/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77571/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77572/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77575/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77576/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77577/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77578/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77579/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77580/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77581/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77582/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77583/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/77584/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/77552/117177/index.html'
          }
          break
        case '03':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77586/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77587/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77588/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77589/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77590/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77591/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77592/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77593/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77594/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/77595/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78560/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78752/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78753/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78754/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78755/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78756/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78757/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78760/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78762/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78763/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78766/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78767/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78768/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78769/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78770/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78771/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78772/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78773/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78774/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78775/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/77585/78776/index.html'
          }
          break
        case '04':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/78562/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79695/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79696/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79697/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79698/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79699/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79700/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79701/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79702/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79757/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79758/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79759/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79760/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79761/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79762/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79763/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79764/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79765/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79766/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79767/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79768/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79769/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79771/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79772/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79774/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79775/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79776/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79777/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79778/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/78561/79779/index.html'
          }
          break
        case '05':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79704/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79780/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79781/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79782/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79783/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79784/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79785/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79786/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79787/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79788/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79789/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79790/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79791/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79792/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79793/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79794/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79795/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79796/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/79797/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82260/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82261/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82262/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82263/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82264/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82265/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82266/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82267/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82268/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82269/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82270/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/79703/82271/index.html'
          }
          break
        case '06':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82274/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82275/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82276/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82277/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82278/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82279/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82280/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82281/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82282/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82283/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82284/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82285/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82286/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/82273/82287/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/65700/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/65856/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/65861/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/65863/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/65864/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/65868/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/65877/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/65878/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/66001/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/66002/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/66003/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/66004/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/66026/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/66027/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/66028/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/66029/index.html'
          }
          break
        case '07':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67448/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67449/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67450/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67458/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67506/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67562/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67563/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67564/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67565/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67566/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67825/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67826/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67827/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67828/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67829/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67995/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67996/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67997/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67998/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/67999/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68000/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68001/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68002/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68003/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68004/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68005/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68006/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68007/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68008/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68009/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/67447/68010/index.html'
          }
          break
        case '08':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68641/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68642/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68643/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68644/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68645/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68646/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68647/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68648/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68649/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68650/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68651/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68652/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68653/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68654/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68655/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68656/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68657/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68658/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68659/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68660/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68661/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68662/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68663/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68664/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68665/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68666/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68667/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68668/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68669/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68670/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/68640/68671/index.html'
          }
          break
        case '09':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70294/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70295/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70296/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70297/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70298/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70299/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70300/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70301/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70302/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70303/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70304/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70305/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70306/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70307/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70308/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70309/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70310/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70311/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70312/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70313/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70314/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70315/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70316/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70317/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70318/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70319/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70320/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70321/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70322/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/70293/70323/index.html'
          }
          break
        case '10':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70487/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70488/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70489/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70490/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70491/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70492/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70493/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70494/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70495/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70496/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70497/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70498/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70499/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70500/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70501/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70502/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70503/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70504/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70505/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70506/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70507/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70508/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70509/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70515/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70516/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70531/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70533/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70534/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70535/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70539/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/70486/70542/index.html'
          }
          break
        case '11':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72302/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72303/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72304/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72305/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72306/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72307/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72308/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72309/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72310/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72311/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72312/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72313/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72316/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72317/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72318/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72319/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72320/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72322/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72323/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72324/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72326/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72327/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72328/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72329/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72330/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72331/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72332/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72333/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72334/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/72301/72335/index.html'
          }
          break
        case '12':
          switch (vd) {
            case '01':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74857/index.html'

            case '02':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74952/index.html'

            case '03':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74954/index.html'

            case '04':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74955/index.html'

            case '05':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74956/index.html'

            case '06':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74957/index.html'

            case '07':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74958/index.html'

            case '08':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74959/index.html'

            case '09':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74960/index.html'

            case '10':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74961/index.html'

            case '11':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74962/index.html'

            case '12':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74963/index.html'

            case '13':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74964/index.html'

            case '14':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74965/index.html'

            case '15':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74966/index.html'

            case '16':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74967/index.html'

            case '17':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/74968/index.html'

            case '18':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75002/index.html'

            case '19':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75003/index.html'

            case '20':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75004/index.html'

            case '21':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75005/index.html'

            case '22':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75006/index.html'

            case '23':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75008/index.html'

            case '24':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75013/index.html'

            case '25':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75014/index.html'

            case '26':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75015/index.html'

            case '27':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75016/index.html'

            case '28':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75017/index.html'

            case '29':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75019/index.html'

            case '30':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75020/index.html'

            case '31':
              return 'http://cpc.people.com.cn/GB/64162/64165/74856/75021/index.html'
          }
          break
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  .text {
    width: 7.50rem;
    padding: .2rem;
    box-sizing: border-box;
    font-size: .32rem;
    line-height: .64rem;
    h1{
      font-size: .48rem;
      font-weight: 500;
      margin-bottom: .2rem;
    }
    h2{
      font-size: .4rem;
      margin: .2rem 0;
      font-weight: 500;
      line-height: .48rem;
    }
    h3{
      font-size: .48rem;
      font-weight: 500;
      line-height: .576rem;
      margin-bottom: .2rem;
    }

    img{
      width: 100%;
    }
    p{
      font-size: .28rem;
      line-height: .56rem;
      margin-bottom: .2rem;
    }
    span{
      font-size: .32rem;
    }
  }
</style>
