import Vue from 'vue'
import Router from 'vue-router'
import register from '@/views/RegisterPage'
import home from '@/views/HomePage'
import login from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
        path: '/',
        name: 'home',
        component: home
    }
  ]
})