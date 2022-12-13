<template>
	<ul>
		<li>Title: {{ getTitle }}</li>
		<li>Original Title: {{ getOriginalTitle }}</li>
		<li>
			Poster:
			<div
				class="poster-container"
				:style="{backgroundImage: `url(${backgroundUrl})`}"></div>
		</li>
		<li>
			Language: {{ item.original_language }}
			<span :class="`fi-${getFlagClass}`" class="fi m-2"></span>
		</li>
		<li>
			Vote:
			<span class="text-warning" v-for="number in getStarNumber">
				&starf;
			</span>
		</li>
	</ul>
</template>

<script>
import '/node_modules/flag-icons/css/flag-icons.min.css';

import {store} from '../store';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			store,
			backgroundUrl: `https://image.tmdb.org/t/p/w92/${this.item.poster_path}`,
		};
	},

	computed: {
		getTitle() {
			return this.item.title ? this.item.title : this.item.name;
		},
		getOriginalTitle() {
			return this.item.original_title
				? this.item.original_title
				: this.item.original_name;
		},
		getFlagClass() {
			let toReturn = 'xx';
			if (store.flagCode.includes(this.item.original_language)) {
				toReturn = this.item.original_language;
			}

			return toReturn;
		},
		getStarNumber() {
			return Math.round(this.item.vote_average / 2);
		},
		printStars() {},
	},
};
</script>

<style scoped>
.poster-container {
	height: 50px;
	width: 50px;
}
</style>
