require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './components/routes';
import Vuex from 'vuex';
import storeData from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeData);

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});



axios.interceptors.response.use(function (response) {
  
    
    return response;
  }, function (error) {
    if (error.response.status === 401){
      localStorage.removeItem("token");
      router.push('/login'); 
      
    }
    return Promise.reject(error);
  });


const router = new VueRouter({
	routes,
	mode: 'history'

});

let HomeApp = require('./components/Home.vue');

const app = new Vue({
    el: '#app',
    components: {HomeApp},
    router,
    store
});
