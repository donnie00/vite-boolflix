<template>
	<div class="main-container text-bg-dark">
		<div class="container">
			<TheHeader @startSearch="fetchData()" />

			<TheMain />
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import {store} from './store';

export default {
	components: {TheHeader, TheMain},

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
					store.searchText = '';
				});
		},

		fetchSeries() {
			axios
				.get('https://api.themoviedb.org/3/search/tv', {
					params: {
						api_key: '4be321c822eae29fbba299f60ddac453',
						query: store.searchText,
					},
				})
				.then((resp) => {
					store.series.push(...resp.data.results);
					store.searchText = '';
				});
		},

		fetchData() {
			this.fetchMovies();
			this.fetchSeries();
		},
	},
};
</script>

<style lang="scss">
@use './styles/general.scss';
.main-container {
	// height: 100%;
}
</style>
