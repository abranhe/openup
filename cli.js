#!/usr/bin/env node

'use strict';

require('./editors/netbeans')();

const pkgVersion = require('./package').version;

const args = process.argv.slice(2);

switch (args[0]) {
	case 'netbeans':
		netbeans(args[0]);
		break;
	default:
		console.log('not working');

}


// function openURL(url) {
// 	const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');
// 	require('child_process').exec(start + ' ' + url);
// }
