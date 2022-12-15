<template>
	<div>
		<div class="movie-section">
			<div v-if="store.movies.length > 0" class="row g-3 h-100">
				<div class="col" v-for="(movie, i) in store.movies">
					<MovieCard :item="movie" :key="i" />
				</div>
			</div>
			<p v-else class="fs-1">No movies to show...</p>
		</div>
	</div>
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
