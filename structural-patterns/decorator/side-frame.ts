// ˅
'use strict';

import { Frame } from './frame';
import { Display } from './display';

// ˄

export class SideFrame extends Frame {
    // ˅
    
    // ˄

    // Decoration character
    private readonly frameChar: string;

    constructor(display: Display, frameChar: string) {
        // ˅
        super(display);

        if (frameChar.length !== 1) {
            console.log(`Only one character is allowed in a side frame.`);
            process.exit(1);
        }
        this.frameChar = frameChar;
        // ˄
    }

    // Number of characters added left and right decoration characters
    get columns(): number {
        // ˅
        return 1 + this.display.columns + 1;
        // ˄
    }

    // Number of lines
    get rows(): number {
        // ˅
        return this.display.rows;
        // ˄
    }

    getLineText(row: number): string {
        // ˅
        return this.frameChar + this.display.getLineText(row) + this.frameChar;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
