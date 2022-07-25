// ˅
'use strict';

import { Print } from './print';
import { MessageDisplay } from './message-display';

// ˄

// Adapt the MessageDisplay interface to the Print interface.
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
