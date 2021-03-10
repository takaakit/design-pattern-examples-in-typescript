/*
Create documents in HTML format and text format. It is possible to create different documents
in the same construction process.
 */
'use strict';

import { HTMLBuilder } from './html-builder';
import { Director } from './director';
import { PlainTextBuilder } from './plain-text-builder';
import * as path from 'path';
import * as rl from 'readline';

console.log('Please enter "plain" or "html":');

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (data: any) => {
    let input: string = data;
    readline.close();

    if (input == 'plain') {
        const plainTextBuilder: PlainTextBuilder = new PlainTextBuilder();
        const directory: Director = new Director(plainTextBuilder);
        directory.build();

        const content: string = plainTextBuilder.getContent();
        console.log(content);
    }
    else if (input == 'html') {
        const htmlBuilder: HTMLBuilder = new HTMLBuilder();
        const directory: Director = new Director(htmlBuilder);
        directory.build();
        
        const fileName: string = htmlBuilder.getFileName();
        console.log(fileName + ' has been created.');
        console.log('Output File: ' + path.join(process.cwd(), fileName));
    }
    else {
        console.log('The value is not "plain" or "html".');
        process.exit(1);
    }
});
