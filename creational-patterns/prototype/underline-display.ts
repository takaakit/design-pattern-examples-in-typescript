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

    clone(): Display {
        // ˅
        return new UnderlineDisplay(this.underlineChar);
        // ˄
    }

    show(message: string): void {
        // ˅
        console.log(`"${message}"`);
        console.log(` ${this.underlineChar.repeat(message.length)}`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
