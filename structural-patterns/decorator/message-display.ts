// ˅
'use strict';

import { Display } from './display';

// ˄

export class MessageDisplay extends Display {
    // ˅
    
    // ˄

    // Message to be displayed
    private message: string;

    constructor(message: string) {
        // ˅
        super();
        this.message = message;
        // ˄
    }

    // Number of characters
    get columns(): number {
        // ˅
        return this.message.length;
        // ˄
    }

    // The number of rows is 1
    get rows(): number {
        // ˅
        return 1;
        // ˄
    }

    getLineText(row: number): string {
        // ˅
        if (row === 0) {
            return this.message;
        }
        else {
            return null;
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
