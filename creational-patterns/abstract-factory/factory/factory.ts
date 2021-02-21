// ˅
'use strict';

import { Data } from './data';
import { Link } from './link';
import { Page } from './page';

// ˄

export interface Factory {

    createPage(title: string, author: string): Page;

    createLink(name: string, url: string): Link;

    createData(name: string): Data;

    // ˅
    
    // ˄
}

// ˅

// ˄
