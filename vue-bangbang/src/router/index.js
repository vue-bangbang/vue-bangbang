import Vue from 'vue'
import Router from 'vue-router'
import MIndex from '@/components/m-index/m-index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MIndex',
      component: MIndex
    }
  ]
})
