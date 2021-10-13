import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { api } from './services/api'
import './common/utils/filters'

Vue.config.productionTip = false

Vue.prototype.$api = api

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Novaesbook';

  Promise.all([
    store.dispatch('user/verifyAuth')
  ])
    .then(() => {
      next()
    })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
