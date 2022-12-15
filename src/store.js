import {reactive} from 'vue';
import countries from '../node_modules/flag-icons/country.json';

export const store = reactive({
	searchText: '',
	loading: false,
	currentSection: 'moviesSection',
	movies: [],
	series: [],
	flagCode: [],
});

export function getCountryCode() {
	countries.forEach((country) => {
		store.flagCode.push(country.code);
	});
}
