// First, create instances for displaying large size characters, then display large size character string using that instances.
'use strict';

import { LargeSizeString } from './large-size-string';

console.log('Please enter digits (ex. 1212123):');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (data: any) => {
    const input: string = data;
    readline.close();

    const bs = new LargeSizeString(input);
    bs.display();
});
