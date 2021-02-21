// ˅
'use strict';

import { Display } from './display';

// ˄

export abstract class Frame extends Display {
    // ˅
    
    // ˄

    protected display: Display;

    protected constructor(display: Display) {
        // ˅
        super();
        this.display = display;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
