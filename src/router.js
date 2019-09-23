import Vue from 'vue'
import Router from 'vue-router'
import top from './components/inputField.vue'
import about from './components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/about',
      component: about
    }
  ]
})