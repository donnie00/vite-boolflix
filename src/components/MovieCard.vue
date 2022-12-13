<template>
	<!--test di card :style="{backgroundImage: `url(${backgroundUrl})`}"-->
	<div class="card text-light h-100">
		<img :src="getImgPath" class="card-img" alt="..." />
		<div class="card-text">
			<ul class="list-unstyled">
				<li>Title: {{ getTitle }}</li>
				<li>Original Title: {{ getOriginalTitle }}</li>
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
		</div>
	</div>
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
		};
	},

	methods: {
		showInfo() {},
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

		getImgPath() {
			let toReturn = '';
			const imgPath = this.item.poster_path;
			if (imgPath !== 'null') {
				toReturn = `https://image.tmdb.org/t/p/w500/${this.item.poster_path}`;
			} else {
				//da gestire
			}

			return toReturn;
		},
	},
};
</script>

<style scoped lang="scss">
.card {
	overflow: hidden;
	ul {
		background-color: black;
		visibility: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin-bottom: 0;
	}
	&:hover {
		ul {
			visibility: visible;
		}
	}
}
</style>
