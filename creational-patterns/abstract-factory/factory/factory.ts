// ˅
'use strict';

import { Data } from './data';
import { Link } from './link';
import { Page } from './page';

// ˄

export abstract class Factory {
    // ˅
    
    // ˄

    abstract createPage(title: string, author: string): Page;

    abstract createLink(name: string, url: string): Link;

    abstract createData(name: string): Data;

    static getFactory(classname: string): Factory {
        // ˅
        if (classname === 'ListFactory') {
            return new ListFactory();
        }
        else if (classname === 'TableFactory') {
            return new TableFactory();
        }
        else {
            throw new Error('The argument is invalid.');
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅
// Import these files at the end of the file to avoid circular references.
import { ListFactory } from '../list-factory/list-factory';
import { TableFactory } from '../table-factory/table-factory';
// ˄
