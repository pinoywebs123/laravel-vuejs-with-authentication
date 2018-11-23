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
		   
		    <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
		  </li>
		 
		 
		</ul>
	</div>
</template>

<script>
	export default{

	}
</script>