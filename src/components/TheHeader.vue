<template>
	<header class="py-2">
		<h1 class="text-center">Hello Net</h1>

		<div class="input-group">
			<input
				v-model="store.searchText"
				class="form-control"
				type="text"
				placeholder="Search a film" />
			<button @click="performSearch" class="btn btn-success">Go</button>
		</div>
	</header>
</template>

<script>
import {store} from '../store';
export default {
	data() {
		return {
			store,
		};
	},

	methods: {
		performSearch() {
			this.$emit('startSearch');
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	height: 120px;
}
</style>
