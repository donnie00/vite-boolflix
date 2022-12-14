<template>
	<div class="card h-100 border-secondary text-light">
		<img
			:src="getImgPath('poster_path')"
			class="card-img-top h-100"
			alt="film-poster" />
		<div
			class="card-text"
			:style="{backgroundImage: `url(${getImgPath('backdrop_path')})`}">
			<ul class="list-unstyled">
				<li><b>Original Title:</b> {{ getOriginalTitle }}</li>
				<li>
					<b>Language:</b> {{ item.original_language }}
					<span :class="`fi-${getFlagClass}`" class="fi m-2"></span>
				</li>
				<li>
					<b>Vote:</b>
					<span v-for="star in 5">
						<span v-if="star <= getStarNumber" class="text-warning">
							&starf;
						</span>
						<span v-else>&star;</span>
					</span>
				</li>
				<li class="scrolling-li">
					<b class="scrolling-b">Overview:</b>
					{{ item.overview }}
				</li>
			</ul>
		</div>
		<div class="card-footer text-bg-dark text-center">
			<span class="fw-bold"> {{ getTitle }} </span>
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

		getImgPath(img) {
			let toReturn = '';
			let imgRes = '';

			const imgPath = this.item[img];
			// const imgPath = null;

			if (imgPath !== null) {
				if (img === 'poster_path') {
					imgRes = 'w500';
				} else if (img === 'backdrop_path') {
					imgRes = 'w780';
				}

				toReturn = `https://image.tmdb.org/t/p/${imgRes}/${imgPath}`;
			} else {
				toReturn = '/no-img-avail.jpg';
			}

			return toReturn;
		},
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
	},
};
</script>

<style scoped lang="scss">
.card {
	overflow: hidden;

	.card-img {
	}

	.card-text {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		visibility: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		// .scrolling-li {
		// 	overflow-y: auto;
		// }

		// .scrolling-b {
		// 	overflow-y: auto;
		// }
	}
	ul {
		margin-bottom: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		padding: 1rem;
	}

	&:hover {
		.card-text {
			visibility: visible;
		}
	}
}
</style>
