import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/loginIn'
import MIndex from '@/pages/m-index/m-index'
import CpGroup from '@/pages/cpgroup/CpGroup'
import LearningDiary from '@/pages/learning-diary/LearningDiary'
import ClockIn from '@/pages/clock-in/ClockIn'
import PracticeProject from '@/pages/practice-project/PracticeProject'
import EmploymentPattern from '@/pages/employment-pattern/EmploymentPattern'
import CodeModules from '@/pages/code-modules/CodeModules'
import headerAll from '@/pages/m-index/headerAll'
import footerAll from '@/pages/m-index/footerAll'

Vue.use(Router)
Vue.component('headerAll', headerAll)
Vue.component('footerAll', footerAll)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/MIndex',
      name: 'MIndex',
      component: MIndex
    },
    {
      path: '/CpGroup',
      name: 'CpGroup',
      component: CpGroup
    },
    {
      path: '/LearningDiary',
      name: 'LearningDiary',
      component: LearningDiary
    },
    {
      path: '/ClockIn',
      name: 'ClockIn',
      component: ClockIn
    },
    {
      path: '/PracticeProject',
      name: 'PracticeProject',
      component: PracticeProject
    },
    {
      path: '/EmploymentPattern',
      name: 'EmploymentPattern',
      component: EmploymentPattern
    },
    {
      path: '/CodeModules',
      name: 'CodeModules',
      component: CodeModules
    }
  ]
})
