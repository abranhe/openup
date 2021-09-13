#!/usr/bin/env node
import meow from 'meow';
import open from 'open';
import chalk from 'chalk';
import isGitRepo from 'is-git-repository';
import gitRemoteOriginUrl from 'git-remote-origin-url';

meow(`
	Usage:

	  $ openup

  Flags:

	  -h, --help        Show help message and close
	  -v, --version     View package version
`, {
	importMeta: import.meta,
	flags: {
		help: {
			type: 'boolean',
			alias: 'h',
		},
		version: {
			type: 'boolean',
			alias: 'v',
		},
	},
});

// Exit if not a git repo
if (!isGitRepo()) {
	console.log(chalk.red('Not a git repository'));

	// eslint-disable-next-line node/prefer-global/process
	process.exit(1);
}

(async () => {
	const repoUrl = await gitRemoteOriginUrl();

	// Cloned repo with SSH
	const url = repoUrl.includes('git@') ? repoUrl.replace('git@', 'https://') : repoUrl;

	console.log(chalk.green(`Opening ${url}`));
	await open(url);
})();
