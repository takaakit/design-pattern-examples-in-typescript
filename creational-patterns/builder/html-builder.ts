// ˅
'use strict';

import * as fs from 'fs';
import { WriteStream } from 'fs';
import { Builder } from './builder';

// ˄

export class HTMLBuilder implements Builder {
    // ˅
    
    // ˄

    // File name to create
    result: string;

    private writer: WriteStream;

    constructor() {
        // ˅
        this.result = '';
        this.writer = null;
        // ˄
    }

    // Make a title of HTML file
    createTitle(title: string): void {
        // ˅
        this.result = title + '.html';      // Set a title as a file name
        this.writer = fs.createWriteStream(this.result, 'utf8');
        this.writer.write('<html><head><title>' + title + '</title></head><body>' + '\n');  // Write a title
        this.writer.write('<h1>' + title + '</h1>' + '\n');
        // ˄
    }

    // Make a section of HTML file
    createSection(section: string): void {
        // ˅
        this.writer.write('<p>' + section + '</p>' + '\n');    // Write a section
        // ˄
    }

    // Make items of HTML file
    createItems(items: Array<string>): void {
        // ˅
        this.writer.write('<ul>' + '\n');    // Write items
        for (let item of items) {
            this.writer.write('<li>' + item + '</li>' + '\n');
        }
        this.writer.write('</ul>' + '\n');
        // ˄
    }

    close(): void {
        // ˅
        this.writer.write('</body></html>' + '\n');
        this.writer.end();                  // Close file
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
