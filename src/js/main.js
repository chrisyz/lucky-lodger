'use strict';
const shuffleSeed = require('shuffle-seed');

const OPTIONS = [
	'Heads',
	'Tails'
];

module.exports = (function() {
	const form = document.getElementById('sorter');
	const input = document.getElementById('seed');
	const resultsEl = document.getElementById('results');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const seed = input.value;
		const result = shuffleSeed.shuffle(OPTIONS, seed);

		resultsEl.textContent = `The answer is ${result[0]}`;
	});

})();