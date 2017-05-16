import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/*',
      name: 'Redirect',
      redirect: '/'
    }
  ]
})
