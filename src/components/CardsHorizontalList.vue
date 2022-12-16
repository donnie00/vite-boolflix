<template>
	<div class="card-group flex-nowrap scroll-x">
		<MovieCard v-for="(listItem, i) in list" :item="listItem" :key="i" />
	</div>
</template>
<script>
import {store} from '../store';

import MovieCard from './MovieCard.vue';

export default {
	components: {MovieCard},

	props: {
		list: {
			required: true,
		},
	},

	data() {
		return {
			store,
		};
	},
};
</script>
<style lang="scss">
.scroll-x {
	overflow: scroll;
}
</style>
