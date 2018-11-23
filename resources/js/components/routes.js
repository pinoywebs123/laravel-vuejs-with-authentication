import Login from './auth/Login.vue';
import Register from './auth/Register.vue';
import Book from './Book.vue';
export const routes  = [
	{path: '/login', component: Login, beforeEnter: (to,from,next)=> {
		if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
			next();
		}else{
			next(false);
		}
	}},
	{path: '/register', component: Register},
	{path: '/books', component: Book, beforeEnter: (to,from,next)=> {
		if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
			next(false);
		}else{
			next();
		}
	}}
];