// ˅
'use strict';

import { FileSystemElement } from './file-system-element';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    private readonly elements: Array<FileSystemElement>;

    constructor(name: string) {
        // ˅
        super();
        this.elements = new Array<FileSystemElement>();
        this.name = name;
        this.size = 0;
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
