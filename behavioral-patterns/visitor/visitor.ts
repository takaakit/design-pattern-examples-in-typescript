// ˅
'use strict';

import { FileElement } from './file-element';
import { DirectoryElement } from './directory-element';

// ˄

export interface Visitor {

    visitFile(file: FileElement): void;

    visitDirectory(directory: DirectoryElement): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
