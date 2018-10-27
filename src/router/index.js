import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let components = {
  index: () => import('../views/index/index'),
  login: () => import('../views/login/index'),
  news: () => import('../views/news/index'),
  mySpace: () => import('../views/mySpace/index'),
  newsDetail: () => import('../views/newsDetail/index'),
  activity: () => import('../views/activity/index'),
  anytimephoto: () => import('../views/anytimephoto/index'),
  list: () => import('../views/list/index'),
  userInfo: () => import('../views/userInfo/index'),
  score: () => import('../views/score/index'),
  uppass: () => import('../views/uppass/index'),
  pay: () => import('../views/pay/index'),
  life: () => import('../views/life/index'),
  study: () => import('../views/list/index'),
  findorg: () => import('../views/findorg/index'),
  auditStatus: () => import('../views/auditStatus/index'),
  LifeChoice: () => import('../views/LifeChoice/index'),
  discuss: () => import('../views/discuss/index'),
  Members: () => import('../views/Members/index'),
  today: () => import('../views/today/index'),
  scoredetail: () => import('../views/scoredetail/index'),
  interaction: () => import('../views/interaction/index'),
  interactionDetail: () => import('../views/interactionDetail/index'),
  personalsummary: () => import('../views/personalsummary/index')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: components.login
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '通知早知道'
      },
      component: components.news
    },
    {
      path: '/mySpace',
      name: 'mySpace',
      meta: {
        title: '我的党建'
      },
      component: components.mySpace
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      meta: {
        title: '通知早知道'
      },
      component: components.newsDetail
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        title: '特色活动'
      },
      component: components.list
    },
    {
      path: '/anytimephoto',
      name: 'anytimephoto',
      meta: {
        title: '随时随地拍'
      },
      component: components.anytimephoto
    },
    {
      path: '/anytimestudy',
      name: 'anytimestudy',
      meta: {
        title: '随时随地学'
      },
      component: components.list
    },
    {
      path: '/system',
      name: 'system',
      meta: {
        title: '制度建设'
      },
      component: components.list
    },
    {
      path: '/newseye',
      name: 'newseye',
      meta: {
        title: '信工新闻眼'
      },
      component: components.list
    },
    {
      path: '/oneclick',
      name: 'oneclick',
      meta: {
        title: '党建一点通'
      },
      component: components.list
    },
    {
      path: '/showidentity',
      name: 'showidentity',
      meta: {
        title: '党员亮身份'
      },
      component: components.list
    },
    {
      path: '/today',
      name: 'today',
      meta: {
        title: '党史上的今天'
      },
      component: components.today
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      meta: {
        title: '个人信息'
      },
      component: components.userInfo
    },
    {
      path: '/score',
      name: 'score',
      meta: {
        title: '个人量化积分'
      },
      component: components.score
    },
    {
      path: '/uppass',
      name: 'uppass',
      meta: {
        title: '修改密码'
      },
      component: components.uppass
    },
    {
      path: '/pay',
      name: 'pay',
      meta: {
        title: '修改密码'
      },
      component: components.pay
    },
    {
      path: '/life',
      name: 'life',
      meta: {
        title: '掌上组织生活'
      },
      component: components.life
    },
    {
      path: '/study',
      name: 'study',
      meta: {
        title: '政治学习'
      },
      component: components.list
    },
    {
      path: '/findorg',
      name: 'findorg',
      meta: {
        title: '流动党员找组织'
      },
      component: components.findorg
    },
    {
      path: '/auditStatus/0/0',
      name: 'auditStatus',
      meta: {
        title: '思想汇报'
      },
      component: components.auditStatus
    },
    {
      path: '/auditStatus/0/1',
      name: 'auditStatus',
      meta: {
        title: '心得总结'
      },
      component: components.auditStatus
    },
    {
      path: '/LifeChoice',
      name: 'LifeChoice',
      meta: {
        title: '掌上组织生活'
      },
      component: components.LifeChoice
    },
    {
      path: '/discuss',
      name: 'discuss',
      meta: {
        title: '民主评议'
      },
      component: components.discuss
    },
    {
      path: '/Members/:id',
      name: 'Members',
      meta: {
        title: '参评党员'
      },
      component: components.Members
    },
    {
      path: '/scoredetail',
      name: 'scoredetail',
      meta: {
        title: '积分明细'
      },
      component: components.scoredetail
    },
    {
      path: '/interaction',
      name: 'interaction',
      meta: {
        title: '党员云互动'
      },
      component: components.interaction
    },
    {
      path: '/interactionDetail/:id',
      name: 'interactionDetail',
      meta: {
        title: '党员云互动'
      },
      component: components.interactionDetail
    },
    {
      path: '/personalsummary',
      name: 'personalsummary',
      meta: {
        title: '个人总结'
      },
      component: components.personalsummary
    }
  ]
})
