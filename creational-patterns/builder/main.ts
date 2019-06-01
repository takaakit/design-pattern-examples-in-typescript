// Create documents in HTML format and text format.
'use strict';

import { HTMLBuilder } from './hTML-builder';
import { Director } from './director';
import { PlainTextBuilder } from './plain-text-builder';

if (process.argv.length != 3) {
    showUsage();
}
else if (process.argv[2] == 'plain') {
    const plainTextBuilder: PlainTextBuilder = new PlainTextBuilder();
    const directory: Director = new Director(plainTextBuilder);
    directory.build();
    const content: string = plainTextBuilder.result;
    console.log(content);
}
else if (process.argv[2] == 'html') {
    const htmlBuilder: HTMLBuilder = new HTMLBuilder();
    const directory: Director = new Director(htmlBuilder);
    directory.build();
    const filename: string = htmlBuilder.result;
    console.log(filename + ' has been created.');
}
else {
    showUsage();
}

function showUsage() {
    console.log('Usage 1: node main.js plain      <- Create a document in plain text.');
    console.log('Usage 2: node main.js html       <- Create a document in HTML.');
}
