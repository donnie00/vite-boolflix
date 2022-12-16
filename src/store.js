import {reactive} from 'vue';
import axios from 'axios';

import countries from '../node_modules/flag-icons/country.json';

export const store = reactive({
	searchText: '',
	loading: false,
	currentSection: 'home',
	movies: [],
	series: [],
	flagCode: [],
	listsArray: {},
});

export function getCountryCode() {
	countries.forEach((country) => {
		store.flagCode.push(country.code);
	});
}

export function createNewList(...param) {
	let listName = '';
	param.forEach((param) => {
		if (param != undefined) {
			listName += `${param}_`;
		}
	});
	return listName;
}

export function getListForHome(sort, type, genre) {
	store.loading = true;
	listsArray: {
	}

	axios
		.get('https://api.themoviedb.org/3/discover/' + `${type}`, {
			params: {
				api_key: '4be321c822eae29fbba299f60ddac453',
				sort_by: `${sort}.desc`,
				with_genres: genre,
			},
		})
		.then((resp) => {
			let i = 0;
			let newArray = createNewList(sort, type, genre);
			store.listsArray[newArray] = [];
			let arrayToPush = store.listsArray[newArray];

			while (arrayToPush.length < 10) {
				arrayToPush.push(resp.data.results[i]);
				i++;
			}
			store.loading = false;
		});
}
