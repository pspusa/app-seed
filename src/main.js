import Vue from 'vue'

import config from 'config'

console.log(config)

import App from './App.vue'
import router from './router'

import store from './store'

import pspLiga from './assets/logo/font/liga.js'

import Buefy from 'buefy'
import VueAffix from 'vue-affix'

Vue.use(VueAffix)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
