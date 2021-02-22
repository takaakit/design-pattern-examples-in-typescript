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
        for (let i = 0; i < length + 4; i++) {
            process.stdout.write(this.borderChar);
        }
        console.log();
        console.log(this.borderChar + ' ' + message + ' ' + this.borderChar);
        for (let i = 0; i < length + 4; i++) {
            process.stdout.write(this.borderChar);
        }
        console.log();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
