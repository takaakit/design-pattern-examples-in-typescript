// ˅
'use strict';

import { Display } from './display';
import { DisplayImpl } from './display-impl';

// ˄

export class MultiLineDisplay extends Display {
    // ˅
    
    // ˄

    constructor(impl: DisplayImpl) {
        // ˅
        super(impl);
        // ˄
    }

    // Repeat display for the specified number of times
    outputMultiple(times: number): void {
        // ˅
        this.open();
        for (let i = 0; i < times; i++) {
            this.write();
        }
        this.close();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
