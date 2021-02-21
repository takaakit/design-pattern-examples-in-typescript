/*
Analyze the syntax of the mini-language composed of "forward", "left", "right", and "repeat" commands.

-----
Examples before and after syntax analysis.
* Ex.1
Before : "program end"
After  : [program []]

* Ex.2
Before : "program forward right left end"
After  : [program [forward, right, left]]

* Ex.3
Before : "program repeat 4 forward right end end"
After  : [program [repeat 4 [forward, right]]]
*/

'use strict';

import { Node } from './node';
import { Program } from './program';
import { Context } from './context';

import fs = require('fs');
import readline = require('readline');

const stream = fs.createReadStream(__dirname + '/program.txt', 'utf8');
const reader = readline.createInterface({ input: stream });
reader.on('line', (line: string) => {
	console.log('Before parsing : ' + line);
	const node: Node = new Program();
	node.parse(new Context(line));
	console.log('After parsing  : ' + node);
});
