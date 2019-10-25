import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})

export default router
