const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');


clear();
console.log(
    chalk.red(figlet.textSync('as-bridge', {horizontalLayout: 'full'})));

program
  .version('1.0.0')
  .description('Solana <> Arweave Decentralized Bridge')
  .option('-v, --version', 'output the version number')
  .option('-h, --help','output usage information');

if (program.version) console.log(' - version');