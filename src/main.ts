import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.config.productionTip = false;

// Set axios as default http module for network calls
Vue.prototype.$http = axios;
//...if token exists send it by default to any network call
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}
