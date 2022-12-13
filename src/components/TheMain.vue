<template>
	<div class="wrapper">
		<h2>Movies:</h2>
		<div class="row row-cols-1 row-cols-md-3 g-3">
			<div class="col" v-for="movie in store.movies">
				<MovieCard :item="movie" />
			</div>
		</div>

		<h2>Series:</h2>
		<div class="row row-cols-1 row-cols-md-3 g-3">
			<div class="col" v-for="serie in store.series">
				<MovieCard :item="serie" />
			</div>
		</div>

		<!-- <MovieCard v-for="movie in store.movies" :item="movie" />
		<MovieCard v-for="serie in store.series" :item="serie" /> -->
	</div>
</template>

<script>
import MovieCard from './MovieCard.vue';
import {store, getCountryCode} from '../store';

export default {
	components: {MovieCard},

	data() {
		return {
			store,
		};
	},

	created() {
		getCountryCode();
	},
};
</script>

<style scoped lang="scss">
.wrapper {
	height: 100vh;
	overflow: auto;
}
</style>
