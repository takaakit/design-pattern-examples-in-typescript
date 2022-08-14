// ˅
'use strict';

// ˄

export abstract class FileSystemElement {
    // ˅
    
    // ˄

    abstract get name(): string;

    abstract get size(): number;

    // Print this element with the "upperPath".
    abstract print(upperPath: string): void;

    toString(): string {
        // ˅
        return `${this.name} (${this.size})`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
