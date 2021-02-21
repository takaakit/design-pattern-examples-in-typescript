// ˅
'use strict';

import * as fs from 'fs';
import { Item } from './item';

// ˄

export abstract class Page {
    // ˅
    
    // ˄

    protected readonly title: string;

    protected readonly author: string;

    protected contents: Array<Item>;

    constructor(title: string, author: string) {
        // ˅
        this.title = title;
        this.author = author;
        this.contents = new Array<Item>();
        // ˄
    }

    abstract toHTML(): string;

    add(item: Item): void {
        // ˅
        this.contents.push(item);
        // ˄
    }

    output(): void {
        // ˅
        const fileName = this.title + '.html';
        try {
            fs.writeFileSync(fileName, this.toHTML());
        } catch(e) {
            console.error(e);
        }
        console.log(fileName + ' has been created.');
        const path = require('path');
        console.log('Output File: ' + path.join(process.cwd(), fileName));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
