/*
An interpreter for mini language to operate radio controlled car. It parses the following syntax
composed of "forward", "left", "right", and "repeat" commands:
```
<program>      ::= program <command list>
<command list> ::= <command>* end
<command>      ::= <repeat> | <action>
<repeat>       ::= repeat <number> <command list>
<action>       ::= forward | right | left
<number>       ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```
___
Examples before and after syntax analysis.

Ex.1
```
Before parsing : program end
After parsing  : [program []]
```

Ex.2
```
Before parsing : program forward right left end
After parsing  : [program [forward, right, left]]
```

Ex.3
```
Before parsing : program repeat 4 forward right end end
After parsing  : [program [repeat 4 [forward, right]]]
```
*/
'use strict';

import { Node } from './node';
import { Program } from './program';
import { Context } from './context';
import * as fs from 'fs';
import * as readline from 'readline';

const stream = fs.createReadStream(process.cwd() + '/program.txt', 'utf8');
const reader = readline.createInterface({ input: stream });
reader.on('line', (line: string) => {
	console.log('Before parsing : ' + line);
	const node: Node = new Program();
	node.parse(new Context(line));
	console.log('After parsing  : ' + node);
});
