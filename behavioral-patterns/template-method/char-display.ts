// ˅
'use strict';

import { AbstractDisplay } from './abstract-display';

// ˄

export class CharDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    private readonly charValue: string;

    private outputString: string;

    constructor(charValue: string) {
        // ˅
        super();
        this.charValue = charValue;
        this.outputString = '';
        // ˄
    }

    open(): void {
        // ˅
        this.outputString += '<<';             // Display '<<' in the start characters.
        // ˄
    }

    write(): void {
        // ˅
        this.outputString += this.charValue;   // Display the character.
        // ˄
    }

    close(): void {
        // ˅
        this.outputString += '>>' + '\n';      // Display '>>' in the start characters.
        console.log(this.outputString);
        this.outputString = '';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
