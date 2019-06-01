// ˅
'use strict';

// ˄

export class Singleton {
    // ˅
    
    // ˄

    private static readonly instance: Singleton = new Singleton();

    private constructor() {
        // ˅
        
        // ˄
    }

    static getInstance(): Singleton {
        // ˅
        return this.instance;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
