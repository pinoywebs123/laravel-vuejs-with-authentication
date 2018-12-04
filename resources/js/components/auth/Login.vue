<template>
	<div class="container">
		<div class="col-md-6 offset-md-3">
			<form>
				<div class="form-group">
					<label>Email:</label>
					<input type="email" id="email" class="form-control" v-model="formData.email">
				</div>
				<div class="form-group">
					<label>Password:</label>
					<input type="password" id="password" class="form-control" v-model="formData.password">
				</div>
				<div class="form-group">
					<button type="button" class="btn btn-primary btn-block" @click="clickSubmit">SUBMIT</button>
					<p class="text-center">
						No account? Create
						<a href="#" @click="clickSignup">here</a>
					</p>
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
						email: '',
						password: ''
					}
				}
			},
			methods: {
				
				clickSubmit(){
					console.log("login");
					axios.post('api/auth/login', this.$data.formData)
						.then((response)=> {
							if(response.status == 200){
								localStorage.setItem("token", response.data.access_token);
								this.$router.push('/books');
							console.log(response);
							this.$store.state.userAuth = response.data.access_token;
							}
							
						}).catch((error)=> console.log(error));
				},
				clickSignup(){
					this.$router.push('/register');
				}
			}
	}
</script>