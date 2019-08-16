import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 可以通过this访问store实例
  render: h => h(App)
}).$mount('#app')
