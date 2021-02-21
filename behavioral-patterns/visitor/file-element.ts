// ˅
'use strict';

import { FileSystemElement } from './file-system-element';
import { Visitor } from './visitor';

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

    // File element name
    get name(): string {
        // ˅
        return this._name
        // ˄
    }

    get size(): number {
        // ˅
        return this._size;
        // ˄
    }

    accept(visitor: Visitor): void {
        // ˅
        visitor.visitFile(this);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
