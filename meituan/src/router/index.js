import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Blank from '@/layout/blank'
import Index from '@/pages/index'
import ChangeCity from '@/pages/changeCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultpage',
      component: DefaultPage,
      redirect: './index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    }
  ]
})
