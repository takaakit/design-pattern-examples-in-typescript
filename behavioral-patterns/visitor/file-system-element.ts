// ˅
'use strict';

import { Element } from './element';
import { Visitor } from './visitor';

// ˄

export abstract class FileSystemElement implements Element {
    // ˅
    
    // ˄

    abstract accept(visitor: Visitor): void;

    abstract get name(): string;

    abstract get size(): number;

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
