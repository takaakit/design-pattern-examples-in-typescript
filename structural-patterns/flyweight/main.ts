// First, create instances for displaying large size characters, then display large size character string using that instances.
'use strict';

import { LargeSizeString } from './large-size-string';

if (process.argv.length != 3) {
    console.log('Usage: node main.js digits');
    console.log('Ex.  : node main.js 1212123');
}
else {
    const bs = new LargeSizeString(process.argv[2]);
    bs.display();
}
