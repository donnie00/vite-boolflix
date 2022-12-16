<template>
	<div v-if="store[sectionToShow].length > 0" class="row g-3 h-100 mt-3">
		<div class="col" v-for="(card, i) in store[sectionToShow]">
			<MovieCard class="h-100" :item="card" :key="i" />
		</div>
	</div>

	<p v-else class="fs-1 section-text">
		No {{ sectionToShow }} to show... perform a search or try again!
		<br />
	</p>
</template>
<script>
import MovieCard from './MovieCard.vue';

import {store} from '../store';

export default {
	components: {MovieCard},

	props: {
		sectionToShow: {
			type: String,
			require: true,
		},
	},
	data() {
		return {
			store,
		};
	},
};
</script>
