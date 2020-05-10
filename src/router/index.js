import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      // redirect: '/homepage',
      children: [
        {
          path: 'homepage',
          component: () => import('@/views/index.vue'),
          name: 'homepage'
        }
      ]
    },
    {
      path: '/HelloWorld',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/Journalism',
      component: () => import('@/views/Journalism.vue')
    }
  ]
})
