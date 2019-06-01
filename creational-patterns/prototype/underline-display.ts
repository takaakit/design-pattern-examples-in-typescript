// ˅
'use strict';

import { Display } from './framework/display';

// ˄

export class UnderlineDisplay implements Display {
    // ˅
    
    // ˄

    private readonly underlineChar: string;

    constructor(underlineChar: string) {
        // ˅
        this.underlineChar = underlineChar;
        
        // ˄
    }

    createClone(): Display {
        // ˅
        return new UnderlineDisplay(this.underlineChar);
        // ˄
    }

    show(message: string): void {
        // ˅
        const length: number = message.length;
        console.log('"' + message + '"');
        var line: string = ' ';
        for (let i = 0; i < length; i++) {
            line += this.underlineChar;
        }
        console.log(line);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
