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
        const length: number = message.length;
        console.log('"' + message + '"');
        process.stdout.write(' ');
        for (let i = 0; i < length; i++) {
            process.stdout.write(this.underlineChar);
        }
        console.log();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
