// ˅
'use strict';

import { Page } from '../factory/page';
import { Link } from '../factory/link';
import { Data } from '../factory/data';
import { Factory } from '../factory/factory';
import { TableData } from './table-data';
import { TableLink } from './table-link';
import { TablePage } from './table-page';

// ˄

export class TableFactory extends Factory {
    // ˅
    
    // ˄

    createPage(title: string, author: string): Page {
        // ˅
        return new TablePage(title, author);
        // ˄
    }

    createLink(name: string, url: string): Link {
        // ˅
        return new TableLink(name, url);
        // ˄
    }

    createData(name: string): Data {
        // ˅
        return new TableData(name);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
