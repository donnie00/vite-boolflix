<template>
	<MovieCard v-for="movie in store.movies" :item="movie" />
	<MovieCard v-for="serie in store.series" :item="serie" />
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

<style></style>
