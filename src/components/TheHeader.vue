<template>
	<div class="searchBar input-group">
		<input
			v-model="store.searchText"
			@click="performSearch"
			class="form-control"
			type="text"
			placeholder="Search a film" />
		<button class="btn btn-success">Go</button>
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
};
</script>

<style lang="scss"></style>
