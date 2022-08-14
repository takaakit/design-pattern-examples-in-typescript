// ˅
'use strict';

import { Display } from './framework/display';

// ˄

export class FrameDisplay implements Display {
    // ˅
    
    // ˄

    private readonly borderChar: string;

    constructor(borderChar: string) {
        // ˅
        this.borderChar = borderChar;
        // ˄
    }

    clone(): Display {
        // ˅
        return new FrameDisplay(this.borderChar);
        // ˄
    }

    show(message: string): void {
        // ˅
        console.log(this.borderChar.repeat(message.length + 4));
        console.log(`${this.borderChar} ${message} ${this.borderChar}`);
        console.log(this.borderChar.repeat(message.length + 4));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
