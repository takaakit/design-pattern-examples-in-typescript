// ˅
'use strict';

// ˄

export abstract class FileSystemElement {
    // ˅
    
    // ˄

    protected name: string;

    protected size: number;

    // Print this element with the "upperPath".
    abstract print(upperPath: string): void;

    toString(): string {
        // ˅
        return this.name + ' (' + this.size + ')'
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
