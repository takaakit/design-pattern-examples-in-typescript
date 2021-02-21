// ˅
'use strict';

// ˄

export class Singleton {
    // ˅
    
    // ˄

    private static readonly instance: Singleton = new Singleton();

    static getInstance(): Singleton {
        // ˅
        return this.instance;
        // ˄
    }

    private constructor() {
        // ˅
        
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
