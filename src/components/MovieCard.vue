<template>
	<span :class="`fi-${movie.original_language}`" class="fi m-2"></span>
</template>

<script>
import '/node_modules/flag-icons/css/flag-icons.min.css';
import {store} from '../store';
export default {
	props: {
		movie: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			store,
		};
	},

	computed: {
		getFlag() {
			let flagString = 'xx';
		},
	},
};
</script>

<style></style>
