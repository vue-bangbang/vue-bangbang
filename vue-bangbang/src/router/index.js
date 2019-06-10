import Vue from 'vue'
import Router from 'vue-router'
import MIndex from '@/pages/m-index/m-index'
import CpGroup from '@/pages/cpgroup/CpGroup'
import LearningDiary from '@/pages/learning-diary/LearningDiary'
import ClockIn from '@/pages/clock-in/ClockIn'
import PracticeProject from '@/pages/practice-project/PracticeProject'
import EmploymentPattern from '@/pages/employment-pattern/EmploymentPattern'
import CodeModules from '@/pages/code-modules/CodeModules'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
