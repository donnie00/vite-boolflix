<template>
	<header class="py-4 d-flex flex-column">
		<div class="d-flex align-items-center">
			<img class="me-5" src="/logo.png" alt="" />

			<div class="input-group">
				<input
					@keyup.enter="performSearch"
					v-model="store.searchText"
					class="form-control"
					type="text"
					placeholder="Search a film" />
				<button @click="performSearch" class="btn btn-danger">Go</button>
			</div>
		</div>

		<div
			class="sections text-center d-flex flex-column align-items-center justify-content-center d-md-block">
			<input
				class="d-none"
				type="radio"
				name="sectionSelect"
				id="homeSection"
				value="home"
				v-model="store.currentSection"
				checked />
			<label class="mx-5 fs-3" for="homeSection"> Home </label>

			<input
				class="d-none"
				type="radio"
				name="sectionSelect"
				id="moviesSection"
				value="movies"
				v-model="store.currentSection" />
			<label class="mx-5 fs-3" for="moviesSection">
				<span>
					<img
						class="d-none d-md-inline-block"
						src="../assets/magnifying_glass_tilted_right_u1F50E_icon_48x48.png"
						alt="" />
					Movies
				</span>
			</label>

			<input
				class="d-none"
				type="radio"
				name="sectionSelect"
				id="seriesSection"
				value="series"
				v-model="store.currentSection" />
			<label class="mx-5 fs-3" for="seriesSection">
				<span>
					<img
						class="d-none d-md-inline-block"
						src="../assets/magnifying_glass_tilted_right_u1F50E_icon_48x48.png"
						alt="" />
					Series
				</span>
			</label>
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
	flex-shrink: 0;

	.sections {
		label {
			color: grey;
			position: relative;

			transition: color 0.4s linear;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				right: 50%;
				width: 0;
				height: 5px;
				background: #f00;
				visibility: hidden;

				transition: width 0.2s linear;
			}

			&::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				width: 0;
				height: 5px;
				background: #f00;
				visibility: hidden;

				transition: width 0.2s linear;
			}
		}

		input:checked {
			+ label {
				color: white;

				&::after {
					visibility: visible;
					width: 50%;
				}
				&::before {
					visibility: visible;
					width: 50%;
				}
			}
		}
	}
}
</style>
