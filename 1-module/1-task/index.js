/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
'use strict';
function factorial(n) {
	let result = 1;
		for(let i=n; i > 1; i--){
			result*= i;
		}
	return result;
	}
