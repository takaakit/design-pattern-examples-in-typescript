// ˅
'use strict';

import { Visitor } from './visitor';
import { FileElement } from './file-element';
import { DirectoryElement } from './directory-element';
import { FileSystemElement } from './file-system-element';

// ˄

export class ListVisitor implements Visitor {
    // ˅
    
    // ˄

    // Currently visited directory
    private currentDirectory: string;

    constructor() {
        // ˅
        this.currentDirectory = ``;
        // ˄
    }

    // Visit a file
    visitFile(file: FileElement): void {
        // ˅
        console.log(`${this.currentDirectory}/${file.toString()}`);
        // ˄
    }

    // Visit a directory
    visitDirectory(directory: DirectoryElement): void {
        // ˅
        console.log(`${this.currentDirectory}/${directory.toString()}`);
        const visitedDirectory = this.currentDirectory;
        this.currentDirectory = `${this.currentDirectory}/${directory.name}`;

        const iterator = directory.iterator();
        let result = iterator.next();
        while(!result.done) {
            (<FileSystemElement>(result.value)).accept(this);
            result = iterator.next();
        }

        this.currentDirectory = visitedDirectory;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
