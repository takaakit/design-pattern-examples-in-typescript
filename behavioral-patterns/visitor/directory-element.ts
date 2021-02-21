// ˅
'use strict';

import { FileSystemElement } from './file-system-element';
import { Visitor } from './visitor';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    private readonly _name: string;

    // Collection of elements
    private readonly _elements: Array<FileSystemElement>;

    constructor(name: string) {
        // ˅
        super();
        this._name = name;
        this._elements = new Array<FileSystemElement>();
        // ˄
    }

    get elements(): Array<FileSystemElement> {
        // ˅
        return this._elements;
        // ˄
    }

    // Directory element name
    get name(): string {
        // ˅
        return this._name;
        // ˄
    }

    get size(): number {
        // ˅
        var value: number = 0;
        for (let i = 0; i < this.elements.length; i++) {
            value += this.elements[i].size;
        }
        return value;
        // ˄
    }

    // Accept a visitor
    accept(visitor: Visitor): void {
        // ˅
        visitor.visitDirectory(this);
        // ˄
    }

    // Add an entry
    add(element: FileSystemElement): FileSystemElement {
        // ˅
        this.elements.push(element);
        return this;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
