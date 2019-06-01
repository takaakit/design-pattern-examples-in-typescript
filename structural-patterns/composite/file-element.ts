// ˅
'use strict';

import { FileSystemElement } from './file-system-element';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    constructor(name: string, size: number) {
        // ˅
        super();
        this.name = name;
        this.size = size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath: string): void {
        // ˅
        console.log(upperPath + '/' + this.toString());
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
