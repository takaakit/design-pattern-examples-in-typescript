// ˅
'use strict';

import { Builder } from './builder';

// ˄

export class PlainTextBuilder implements Builder {
    // ˅
    
    // ˄

    // String to output
    result: string;

    private builder: Array<string>;

    constructor() {
        // ˅
        this.result = '';
        this.builder = new Array<string>();
        // ˄
    }

    // Make a title of plain text
    createTitle(title: string): void {
        // ˅
        this.builder.push('--------------------------------');  // Decoration line
        this.builder.push('[' + title + ']');                   // Title
        this.builder.push('');                                  // Blank line
        // ˄
    }

    // Make a section of plain text
    createSection(section: string): void {
        // ˅
        this.builder.push('* ' + section);                      // Section
        this.builder.push('');                                  // Blank line
        // ˄
    }

    // Make items of plain text
    createItems(items: Array<string>): void {
        // ˅
        for (let item of items) {
            this.builder.push('  - ' + item);                   // Items
        }
        this.builder.push('');                                  // Blank line
        // ˄
    }

    close(): void {
        // ˅
        this.builder.push('--------------------------------');  // Decoration line
        this.result = this.builder.join('\n');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
