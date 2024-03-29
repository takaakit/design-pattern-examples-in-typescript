// ˅
'use strict';

import { FileSystemElement } from './file-system-element';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    private readonly _name: string;

    private readonly elements: Array<FileSystemElement>;

    constructor(name: string) {
        // ˅
        super();
        this._name = name;
        this.elements = new Array<FileSystemElement>();
        // ˄
    }

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

    // Print this element with the "upperPath".
    print(upperPath: string): void {
        // ˅
        console.log(`${upperPath}/${this.toString()}`);
        for (let element of this.elements) {
            element.print(`${upperPath}/${this.name}`);
        }
        // ˄
    }

    // Add an element
    add(element: FileSystemElement): void {
        // ˅
        this.elements.push(element);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
