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
    private readonly elements: Array<FileSystemElement>;

    constructor(name: string) {
        // ˅
        super();
        this._name = name;
        this.elements = new Array<FileSystemElement>();
        // ˄
    }

    // Accept a visitor
    accept(visitor: Visitor): void {
        // ˅
        visitor.visitDirectory(this);
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
        let size: number = 0;
        for (let element of this.elements) {
            size += element.size;
        }
        return size;
        // ˄
    }

    // Add an element
    add(element: FileSystemElement): void {
        // ˅
        this.elements.push(element);
        // ˄
    }

    // Get the iterator
    iterator(): IterableIterator<FileSystemElement> {
        // ˅
        return this.elements[Symbol.iterator]();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
