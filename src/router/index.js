import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/footer/Home'
import Contact from '@/components/footer/Contact'
import Cart from '@/components/footer/Cart'
import Search from '@/components/footer/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
  ]
})
