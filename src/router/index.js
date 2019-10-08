import Vue from 'vue'
import Router from 'vue-router'
import register from '@/views/RegisterPage'
import home from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
        path: '/',
        name: 'home',
        component: home
    }
  ]
})