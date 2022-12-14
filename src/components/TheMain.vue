<template>
	<div class="body-wrapper">
		<div class="movie-section">
			<h2>Movies:</h2>

			<div class="row row-cols-2 row-cols-md-5 g-3">
				<div class="col" v-for="(movie, i) in store.movies" :key="i">
					<MovieCard :item="movie" />
				</div>
			</div>
		</div>

		<div class="series-section">
			<h2>Series:</h2>

			<div class="row row-cols-2 row-cols-md-5 g-3">
				<div class="col" v-for="serie in store.series">
					<MovieCard :item="serie" />
				</div>
			</div>
		</div>
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
.body-wrapper {
	// position: sticky;
	// top: 0;

	// height: calc(100vh - 120px);

	h2 {
		margin: 1rem 0;
	}

	[class$='-section'] {
		// overflow: hidden;
		.row {
			// overflow: auto;
		}
	}
}
</style>
