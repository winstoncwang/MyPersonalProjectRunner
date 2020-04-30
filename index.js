#!/usr/bin/env node
const chokidar = require('chokidar');

chokidar
	.watch('.') //{ ignoreInitial: true }
	.on('add', () => {
		process.stdout.write('file added');
	})
	.on('change', () => {
		process.stdout.write('file changed');
	})
	.on('unlink', () => {
		process.stdout.write('file unlinked');
	});


    const debounce = (func, wait)=>{

        const timeOut = setTimeout(func,wait);

    }