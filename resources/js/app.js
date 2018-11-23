require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './components/routes';

Vue.use(VueRouter);


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
