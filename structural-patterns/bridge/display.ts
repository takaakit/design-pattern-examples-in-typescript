// ˅
'use strict';

import { DisplayImpl } from './display-impl';

// ˄

export class Display {
    // ˅
    
    // ˄

    private readonly impl: DisplayImpl;

    constructor(impl: DisplayImpl) {
        // ˅
        this.impl = impl;
        
        // ˄
    }

    output(): void {
        // ˅
        this.open();
        this.write();
        this.close();
        // ˄
    }

    protected open(): void {
        // ˅
        this.impl.implOpen();
        // ˄
    }

    protected write(): void {
        // ˅
        this.impl.implWrite();
        // ˄
    }

    protected close(): void {
        // ˅
        this.impl.implClose();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
