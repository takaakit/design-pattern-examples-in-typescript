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

    createClone(): Display {
        // ˅
        return new FrameDisplay(this.borderChar);
        // ˄
    }

    show(message: string): void {
        // ˅
        const length: number = message.length;
        var upperLine: string = '';
        for (let i = 0; i < length + 4; i++) {
            upperLine += this.borderChar;
        }
        console.log(upperLine);
        console.log(this.borderChar + ' ' + message + ' ' + this.borderChar);
        var buttonLine: string = '';
        for (var i = 0; i < length + 4; i++) {
            buttonLine += this.borderChar;
        }
        console.log(buttonLine);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
