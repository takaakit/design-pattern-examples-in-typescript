// ˅
'use strict';

import { Page } from '../factory/page';
import { Link } from '../factory/link';
import { Data } from '../factory/data';
import { Factory } from '../factory/factory';
import { ListData } from './list-data';
import { ListLink } from './list-link';
import { ListPage } from './list-page';

// ˄

export class ListFactory implements Factory {
    // ˅
    
    // ˄

    createPage(title: string, author: string): Page {
        // ˅
        return new ListPage(title, author);
        // ˄
    }

    createLink(name: string, url: string): Link {
        // ˅
        return new ListLink(name, url);
        // ˄
    }

    createData(name: string): Data {
        // ˅
        return new ListData(name);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
