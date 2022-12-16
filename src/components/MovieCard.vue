<template>
	<div class="card border-secondary text-light">
		<img
			:src="getImgPath('poster_path')"
			class="card-img-top h-100"
			alt="film-poster" />
		<div
			class="card-text"
			:style="{backgroundImage: `url(${getImgPath('backdrop_path')})`}">
			<ul class="list-unstyled d-flex flex-column">
				<li>
					<b>Original Title:</b>
					<br />
					{{ getOriginalTitle }}
				</li>
				<li>
					<b>Language:</b>
					<br />
					<span class="text-uppercase">
						{{ item.original_language }}
					</span>

					<span :class="`fi-${getFlagClass}`" class="fi m-2"></span>
				</li>
				<li>
					<b>Vote:</b>
					<br />
					<span v-for="star in 5">
						<span v-if="star <= getStarNumber" class="text-warning">
							&starf;
						</span>
						<span v-else>&star;</span>
					</span>
				</li>
				<li class="overflow-auto">
					<b>Overview:</b>
					<br />
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
		getImgPath(img) {
			let toReturn = '';
			let imgRes = '';

			const imgPath = this.item[img];

			if (imgPath !== null) {
				if (img === 'poster_path') {
					imgRes = 'w342';
				} else if (img === 'backdrop_path') {
					imgRes = 'w780';
				}

				toReturn = `https://image.tmdb.org/t/p/${imgRes}${imgPath}`;
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

	max-height: 500px;
	min-width: 200px;
	max-width: 300px;

	.card-text {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		opacity: 0;
		visibility: hidden;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		transition: all 0.15s linear;

		ul {
			margin-bottom: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.6);
			padding: 1rem;
		}
	}

	&:hover {
		.card-text {
			visibility: visible;
			opacity: 1;
		}
	}
}
</style>
