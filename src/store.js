import {reactive} from 'vue';
import countries from '../node_modules/flag-icons/country.json';

export const store = reactive({
	searchText: '',
	movies: [],
	series: [],
	flagCode: [],
});

export function getCountryCode() {
	countries.forEach((country) => {
		store.flagCode.push(country.code);
	});
}

// export function omologateResults() {
// 	const movies = store.movies;
// 	const series = store.series;

// 	movies.forEach((movie) => {
// 		(movie['origina_title'] = movie['og_title']),
// 			(movie['original_language'] = movie['og_language']);
// 	});

// 	movies.forEach((serie) => {
// 		(serie['name'] = serie['name']),
// 			(serie['origina_name'] = serie['og_title']),
// 			(serie['original_language'] = serie['og_language']);
// 	});

// console.log(movies, series);
// }
