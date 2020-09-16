import Vue from 'vue';
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';

new Vue({
  store,
  router,
  render(h) { return h(App); },
}).$mount('#app');
