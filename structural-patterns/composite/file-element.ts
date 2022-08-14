// ˅
'use strict';

import { FileSystemElement } from './file-system-element';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    private readonly _name: string;

    private readonly _size: number;

    constructor(name: string, size: number) {
        // ˅
        super();
        this._name = name;
        this._size = size;
        // ˄
    }

    get name(): string {
        // ˅
        return this._name;
        // ˄
    }

    get size(): number {
        // ˅
        return this._size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath: string): void {
        // ˅
        console.log(`${upperPath}/${this.toString()}`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
