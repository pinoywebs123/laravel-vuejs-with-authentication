<template>

	<div class="container">
		<header-app></header-app>
		<h1 class="text-center">LARAVEL with VUEJS using LARAVEL MIX</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	import HeaderApp from './Header.vue';
	

	export default {
		components: {HeaderApp}
	}
</script>
<style>
	.container h1 {
		margin-top: 5%;
	}
</style>