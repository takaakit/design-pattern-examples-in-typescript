// ˅
'use strict';

import { Print } from './print';
import { MessageDisplay } from './message-display';

// ˄

export class PrintMessageDisplay extends MessageDisplay implements Print {
    // ˅
    
    // ˄

    constructor(message: string) {
        // ˅
        super(message);
        // ˄
    }

    printWeak(): void {
        // ˅
        this.displayWithHyphens();
        // ˄
    }

    printStrong(): void {
        // ˅
        this.displayWithBrackets();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
