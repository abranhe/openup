#!/usr/bin/env node
'use strict';
const exec = require('child_process');
const isGit = require('is-git-repository');
const meow = require('meow');

const cli = meow(`
	Usage:

	  $ openup

  Flags:

	  -h, --help        Show help message and close
	  -v, --version     View package version
`, {
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		}
	}
});

const open = () => {
	exec.exec(`git remote -v | awk '/origin.*push/ {print $2}' | xargs open`, (error, stdout, stderr) => {
		console.log(`${stdout}`);
		console.log(`${stderr}`);
		if (error !== null) {
			console.log(`exec error: ${error}`);
		}
	})
};

isGit() ? open() : console.log('The directory isn\'t a git repository :(');
