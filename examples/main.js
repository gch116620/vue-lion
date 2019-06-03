import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLion from '../packages/index'
Vue.use(vueLion)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
