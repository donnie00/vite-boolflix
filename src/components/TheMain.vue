<template>
	<MovieCard v-for="movie in store.movies" :movie="movie" />
</template>

<script>
import MovieCard from './MovieCard.vue';
import {store} from '../store';

export default {
	components: {MovieCard},

	data() {
		return {
			store,
		};
	},
};
</script>

<style></style>
