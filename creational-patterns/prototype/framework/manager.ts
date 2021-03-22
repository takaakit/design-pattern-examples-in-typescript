// ˅
'use strict';

import { Display } from './display';

// ˄

export class Manager {
    // ˅
    
    // ˄

    private readonly display: Map<string, Display>;

    constructor() {
        // ˅
        this.display = new Map<string, Display>();
        // ˄
    }

    registerDisplay(displayName: string, display: Display): void {
        // ˅
        this.display.set(displayName, display);
        // ˄
    }

    getDisplay(displayName: string): Display {
        // ˅
        const d: Display = this.display.get(displayName);
        return d.clone();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
