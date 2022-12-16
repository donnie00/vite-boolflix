<template>
	<div class="container">
		<div class="main-container d-flex flex-column">
			<TheHeader @startSearch="fetchData()" />

			<Transition>
				<TheLoader v-if="store.loading" />
				<TheMain v-else />
			</Transition>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheLoader from './components/TheLoader.vue';

import {store, getListForHome} from './store';

export default {
	components: {TheHeader, TheMain, TheLoader},

	data() {
		return {
			store,
		};
	},

	methods: {
		fetchMovies() {
			store.movies = [];
			store.loading = true;

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
					store.loading = false;
				})
				.catch((error) => {
					store.loading = true;
					alert(
						'Qualcosa è andato storto, ricarica la pagina ed esegui di nuovo la ricerca'
					);
				});
		},

		fetchSeries() {
			store.series = [];
			store.loading = true;

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
					store.loading = false;
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

	mounted() {
		getListForHome('vote_count', 'movie');
		getListForHome('popularity', 'movie');
		getListForHome('popularity', 'tv');
		getListForHome('popularity', 'tv', 16);
	},
};
</script>

<style lang="scss">
@use './styles/general.scss';
@use './styles/transition.scss';

.main-container {
	height: 100vh;
}
</style>
