<template>
	<div class="main-container text-bg-dark">
		<h1 class="text-center">Hello Net</h1>

		<TheHeader @startSearch="fetchMovies()" />
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
			axios
				.get('https://api.themoviedb.org/3/search/movie', {
					params: {
						api_key: '4be321c822eae29fbba299f60ddac453',
						query: store.searchText,
					},
				})
				.then((resp) => {
					store.movies.push(...resp.data.results);
					this.printResults();
					store.searchText = '';
				});
		},

		printResults() {
			store.movies.forEach((movie) => {
				const movieLog = {
					title: movie.title,
					originalTitle: movie.original_title,
					language: movie.original_language,
					vote: movie.vote_average,
				};

				console.log(movieLog);
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
