<template>
	<div class="home-list">
		<h2>Top 10 films:</h2>
		<CardsHorizontalList :list="store.listsArray.popularity_movie_" />
	</div>
	<div class="home-list">
		<h2>Top 10 series:</h2>
		<CardsHorizontalList :list="store.listsArray.popularity_tv_" />
	</div>
	<div class="home-list">
		<h2>Most voted of all time:</h2>
		<CardsHorizontalList :list="store.listsArray.vote_count_movie_" />
	</div>
	<div class="home-list">
		<h2>Most loved cartoon:</h2>
		<CardsHorizontalList :list="store.listsArray.popularity_tv_16_" />
	</div>
</template>
<script>
import {store} from '../store';

import CardsHorizontalList from './CardsHorizontalList.vue';

export default {
	components: {CardsHorizontalList},

	data() {
		return {
			store,
		};
	},
};
</script>
<style lang="scss">
.home-list {
	flex-basis: 50%;

	h2 {
		margin: 1rem 0;
	}
}
</style>
