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
        var line: string = '';
        line += '+';       // Display an end mark '+'
        for (let i = 0; i < this.width; i++) {
            line += '-';   // Display a line '='
        }
        line += '+';       // Display an end mark '+'
        console.log(line);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
