// ˅
'use strict';

import { AbstractDisplay } from './abstract-display';

// ˄

export class CharDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    private readonly charValue: string;

    constructor(charValue: string) {
        // ˅
        super();
        this.charValue = charValue;
        // ˄
    }

    open(): void {
        // ˅
        process.stdout.write(`<<`);             // Display '<<' in the start characters.
        // ˄
    }

    write(): void {
        // ˅
        process.stdout.write(this.charValue);   // Display the character.
        // ˄
    }

    close(): void {
        // ˅
        console.log(`>>`);                      // Display '>>' in the end characters.
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
