// function debounce (func, ms = 0) {
// 	let timer;
// 	let resolves = [];

// 	return function (...args) {
// 		// Run the function after a certain amount of time
// 		if (timer) {
// 			clearTimeout(timer);
// 		}

// 		timer = setTimeout(() => {
// 			// Get the result of the inner function, then apply it to the resolve function of
// 			// each promise that has been created since the last time the inner function was run
// 			let result = func(...args);
// 			resolves.forEach((resolveEle) => resolveEle(result));
// 			resolves = [];
// 		}, ms);

// 		return new Promise((newEle) => resolves.push(newEle));
// 	};
// }

// const debounce = (func, delay = 200) => {
// 	let timeoutId;
// 	//console.log(args);

// 	return (...args) => {
// 		if (timeoutId) {
// 			clearTimeout(timeoutId);
// 		}
// 		timeoutId = setTimeout(() => {
// 			func.apply(null, args);
// 		}, delay);
// 	};
// };
