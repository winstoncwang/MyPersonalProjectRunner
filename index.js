#! /usr/bin/env node
const chokidar = require('chokidar');
const lodashDebounce = require('lodash.debounce');

const start = debounce(() => {
	console.log('USER PROGRAM STARTED!!');
}, 100);

chokidar
	.watch('.') //{ ignoreInitial: true }
	.on('add', start)
	.on('change', () => {
		process.stdout.write('file changed');
	})
	.on('unlink', () => {
		process.stdout.write('file unlinked');
	});
