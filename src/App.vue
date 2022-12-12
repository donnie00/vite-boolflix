<template>
	<div class="main-container text-bg-dark">
		<h1 class="text-center">Hello Net</h1>

		<TheHeader />
	</div>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import {store} from './store';

export default {
	components: {TheHeader},

	methods: {
		fetchMovies() {
			axios.get('https://api.themoviedb.org/3/search/', {
				params: {
					api_key: '4be321c822eae29fbba299f60ddac453',
					query: store.searchText,
				},
			});
		},
	},
};
</script>

<style scoped>
.main-container {
	height: 100vh;
}
</style>
