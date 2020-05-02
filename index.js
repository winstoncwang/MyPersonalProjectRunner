#! /usr/bin/env node
const fs = require('fs');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal'); //caporal recommends this naming convention.
//Caporal imports a program rather than a class or a object of methods.

//program
program
	.version('0.1')
	.argument('[filename]', 'Name of file to execute') //[filename] optional set default to index.js
	.action(async ({ filename }) => {
		const name = filename || 'index.js';

		try {
			await fs.promises.access(name); //promise.acces to check if we have the privilage to access the file/check its existance.
		} catch (err) {
			throw new Error(`file not found: ${name}`);
		}

		const start = debounce(() => {
			console.log('-----USER PROGRAM STARTED!!-----');
		}, 300);

		chokidar
			.watch('.') //{ ignoreInitial: true }
			.on('add', start)
			.on('change', start)
			.on('unlink', start);
	});

program.parse(process.argv);
