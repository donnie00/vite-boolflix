<template>
	<div class="searchBar input-group">
		<input
			v-model="store.searchText"
			class="form-control"
			type="text"
			placeholder="Search a film" />
		<button @click="performSearch" class="btn btn-success">Go</button>
	</div>
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

<style lang="scss"></style>
