<template>
	<div>
		<ul class="nav nav-pills">
		  <li class="nav-item">
		    
		    <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
		  </li>
		   <li class="nav-item">
		   
		    <router-link to="/books" class="nav-link" active-class="active">Books</router-link>
		  </li>
		  <li class="nav-item">
		   	<template v-if="checkAuth" >
		   		
		    	
		    	<button @click="userLogout" class="nav-link btn btn-danger btn-sm">Logout</button>
		   	</template>
		   	<template v-if="!checkAuth">
		   		
		    	<router-link to="/login" class="nav-link" active-class="active" >Login</router-link>
		   	</template>
		    
		  </li>
		 
		 
		</ul>
	</div>
</template>

<script>
	export default{
		computed:{
			checkAuth(){
				if(this.$store.getters.userToken == null){
					return false;
					
				}else{
					return true;
				}
			}
		},
		
		methods: {
			
			userLogout(){
				console.log("click");
				axios.post('api/auth/logout')
					.then( (response)=> {
						console.log(response);
						localStorage.removeItem("token");
						this.$router.push('/login');
						this.$store.state.userAuth = null;
					}).catch((error)=> console.log(error));
					
			}
		}

	}
</script>