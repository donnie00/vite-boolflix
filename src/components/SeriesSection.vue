<template>
	<div>
		<div class="series-section">
			<div v-if="store.series.length > 0" class="row g-3 h-100">
				<div class="col" v-for="(serie, i) in store.series">
					<MovieCard :item="serie" :key="i" />
				</div>
			</div>
			<p v-else class="fs-1">No series to show...</p>
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
<style lang="scss"></style>
