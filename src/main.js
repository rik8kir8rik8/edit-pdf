import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import {vueAccordion} from 'vue-accordion'
Vue.component('vue-accordion', vueAccordion)
Vue.config.productionTip = false

import router from './router.js'

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')

