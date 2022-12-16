<template>
	<div class="body-wrapper d-flex flex-column">
		<Transition>
			<HomeSection v-if="getSectionToShow === 'home'" />
			<SearchedSection v-else :sectionToShow="getSectionToShow" />
		</Transition>
	</div>
</template>

<script>
import SearchedSection from './SearchedSection.vue';
import HomeSection from './HomeSection.vue';

import {store, getCountryCode, getListForHome} from '../store';

export default {
	components: {SearchedSection, HomeSection},

	data() {
		return {
			store,
		};
	},

	computed: {
		getSectionToShow() {
			return this.store.currentSection;
		},
	},

	created() {
		getCountryCode();
	},
};
</script>

<style scoped lang="scss">
@use '../styles/transition.scss';
.body-wrapper {
	flex-grow: 1;

	overflow: auto;
	padding: 0 50px;
}
</style>
