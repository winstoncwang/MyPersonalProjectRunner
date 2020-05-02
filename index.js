#! /usr/bin/env node
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal'); //caporal recommends this naming convention.
//Caporal imports a program rather than a class or a object of methods.

//program

program
	.version('0.1')
	.argument('[filename]', 'Name of file to execute')
	.action((args) => {
		console.log(args);
	});

program.parse(process.argv);

const start = debounce(() => {
	console.log('-----USER PROGRAM STARTED!!-----');
}, 300);

chokidar
	.watch('.') //{ ignoreInitial: true }
	.on('add', start);
// .on('change', () => {
// 	process.stdout.write('file changed');
// })
// .on('unlink', () => {
// 	process.stdout.write('file unlinked');
// });
