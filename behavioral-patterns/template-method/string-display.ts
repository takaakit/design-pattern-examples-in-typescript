// ˅
'use strict';

import { AbstractDisplay } from './abstract-display';

// ˄

export class StringDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    private readonly stringValue: string;

    // String width
    private readonly width: number;

    constructor(stringValue: string) {
        // ˅
        super();
        this.stringValue = stringValue;
        this.width = stringValue.length;
        // ˄
    }

    open(): void {
        // ˅
        this.writeLine();            // Write a line
        // ˄
    }

    write(): void {
        // ˅
        console.log('|' + this.stringValue + '|');  // Display the character with '|'
        // ˄
    }

    close(): void {
        // ˅
        this.writeLine();            // Write a line
        // ˄
    }

    private writeLine(): void {
        // ˅
        process.stdout.write('+');      // Display an end mark '+'
        for (let i = 0; i < this.width; i++) {
            process.stdout.write('-');  // Display a line '-'
        }
        console.log('+');               // Display an end mark '+'
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
