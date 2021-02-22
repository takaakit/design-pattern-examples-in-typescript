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
        for (let i = 0; i < this.elements.length; i++) {
            size += this.elements[i].size;
        }
        return size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath: string): void {
        // ˅
        console.log(upperPath + '/' + this.toString());
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].print(upperPath + '/' + this.name);
        }
        // ˄
    }

    // Add a element
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
