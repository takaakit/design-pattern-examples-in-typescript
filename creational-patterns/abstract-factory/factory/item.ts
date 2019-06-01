// ˅
'use strict';

// ˄

export abstract class Item {
    // ˅
    
    // ˄

    protected readonly name: string;

    constructor(name: string) {
        // ˅
        this.name = name;
        // ˄
    }

    abstract toHTML(): string;

    // ˅
    
    // ˄
}

// ˅

// ˄
