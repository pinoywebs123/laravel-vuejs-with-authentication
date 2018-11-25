require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './components/routes';

Vue.use(VueRouter);

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});


const router = new VueRouter({
	routes,
	mode: 'history'

});

let HomeApp = require('./components/Home.vue');

const app = new Vue({
    el: '#app',
    components: {HomeApp},
    router
});
