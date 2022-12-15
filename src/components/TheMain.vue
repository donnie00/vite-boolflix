<template>
	<div class="body-wrapper d-flex flex-column">
		<MoviesSection v-if="store.currentSection === 'moviesSection'" />
		<SeriesSection v-else />
	</div>
</template>

<script>
import MoviesSection from './MoviesSection.vue';
import SeriesSection from './SeriesSection.vue';

import {store, getCountryCode} from '../store';

export default {
	components: {MoviesSection, SeriesSection},

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
	flex-grow: 1;

	overflow: auto;
	margin: 1rem 0;
}
</style>
