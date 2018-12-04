const token = localStorage.getItem("token");
export default {
	state: {
		userAuth : null,
	},
	getters: {
		userToken(state){
			return state.userAuth;
		}
	}
}