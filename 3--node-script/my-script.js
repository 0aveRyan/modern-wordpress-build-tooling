#!/usr/bin/env node

// @see https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line

const fs = require('fs');
const { resolve } = require('path');
const engine = require('php-parser');
const split = require('lodash/split');
const trim = require('lodash/trim');
const chalk = require('chalk');
const brandedText = chalk.hex('#3575d3');

// setup AST parser
const parser = new engine({ parser: { extractDoc: true } });

// use node fs to syncronously read file contents
const fileContents = fs.readFileSync(resolve(__dirname, 'example.php'));

// parse ast of plugin php file
const ast = parser.parseCode(fileContents);
// Extract WordPress Plugin main file comment block
const wpPluginHeaderDoc = ast.comments[0].value;
// By slicing at 'Version: ' and '*' on the next line, no matter any line changes, 
// php docblock (including @version), order swapping, etc this *always* works and 
// is simple code to understand ¯\_(ツ)_/¯
const sliceAtVersion = split( wpPluginHeaderDoc, 'Version: ');
const sliceAtAsterisk = split( sliceAtVersion[1], '*' );
const extractedVersion = trim(sliceAtAsterisk[0]);

// console.log works for your shell, as well as your browser console!
console.log(brandedText('Current Version: %s'), extractedVersion);