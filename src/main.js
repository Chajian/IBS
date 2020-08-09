import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App),
  data: {
	host: '127.0.0.1',
	port: '8080'
  }
}).$mount('#app')
