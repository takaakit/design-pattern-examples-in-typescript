// ˅
'use strict';

import { Visitor } from './visitor';
import { FileElement } from './file-element';
import { DirectoryElement } from './directory-element';

// ˄

export class ListVisitor implements Visitor {
    // ˅
    
    // ˄

    // Currently visited directory
    private currentDirectory: string;

    constructor() {
        // ˅
        this.currentDirectory = '';
        // ˄
    }

    // Visit a file
    visitFile(file: FileElement): void {
        // ˅
        console.log(this.currentDirectory + '/' + file.toString());
        // ˄
    }

    // Visit a directory
    visitDirectory(directory: DirectoryElement): void {
        // ˅
        console.log(this.currentDirectory + '/' + directory.toString());
        const visitedDirectory = this.currentDirectory;
        this.currentDirectory = this.currentDirectory + '/' + directory.name;
        for (let element of directory.elements) {
            element.accept(this);
        }
        this.currentDirectory = visitedDirectory;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
