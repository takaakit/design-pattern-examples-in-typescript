// ˅
'use strict';

import { Element } from './element';
import { Visitor } from './visitor';

// ˄

export abstract class FileSystemElement implements Element {
    // ˅
    
    // ˄

    protected _name: string;

    protected _size: number;

    abstract get name(): string;

    abstract get size(): number;

    abstract accept(visitor: Visitor): void;

    toString(): string {
        // ˅
        return this.name + ' (' + this.size + ')';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
