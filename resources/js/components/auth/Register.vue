<template>
	<div class="container">
		<h2 class="text-center">Registration Form</h2>
		<div class="col-md-6 offset-md-3">
			<form>
				<div class="form-group">
					<label>Name:</label>
					<input type="email" id="name" class="form-control" v-model="formData.name">
				</div>
				<div class="form-group">
					<label>Email:</label>
					<input type="email" id="email" class="form-control" v-model="formData.email">
				</div>
				<div class="form-group">
					<label>Password:</label>
					<input type="password" id="password" class="form-control" v-model="formData.password">
				</div>
				<div class="form-group">
					<button type="button" class="btn btn-primary btn-block" @click="clickRegister">Register</button>
					
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				formData: {
					name:'',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			clickRegister(){
				console.log(this.$data.formData);
				axios.post('api/auth/register', this.$data.formData)
					.then((response)=> {
						console.log(response)
						let status = response.status;
						if(status == 201){
							alert("Registered Successfully!!");
							Object.assign(this.$data, this.$options.data());
        
							this.$router.push('/login');
						}
					})
					.catch((error)=> console.log(error));
			}
		}
	}
</script>