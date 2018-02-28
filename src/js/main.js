'use strict';
const shuffleSeed = require('shuffle-seed');

const LODGERS = [
	'Spike/Eliz',
	'YZ/Alex',
	'Dan/Mary',
	'Roman/Emily',
	'Jason',
	'Ian',
	'Justin/Eric',
	'Dan'
];

module.exports = (function() {
	const form = document.getElementById('sorter');
	const input = document.getElementById('seed');
	const resultsEl = document.getElementById('results');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const seed = input.value;
		const result = shuffleSeed.shuffle(LODGERS, seed);

		resultsEl.innerHTML = result.reduce((acc, lodger) => {
			return acc + `<li>${lodger}</li>`;
		},'');
	});

})();