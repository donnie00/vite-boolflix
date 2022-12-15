<template>
	<div class="container">
		<div class="main-container d-flex flex-column">
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
			store.movies = [];

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
			store.series = [];

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
				})
				.catch((error) => {
					store.loading = true;
					alert(
						'Qualcosa è andato storto, ricarica la pagina ed esegui di nuovo la ricerca'
					);
				});
		},

		fetchData() {
			if (store.searchText != '') {
				this.fetchMovies();
				this.fetchSeries();
			} else {
				alert('Eseguire una ricerca valida!!!');
			}
		},
	},
};
</script>

<style lang="scss">
@use './styles/general.scss';

.main-container {
	height: 100vh;
}
</style>
