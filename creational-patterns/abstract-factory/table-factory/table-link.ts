// ˅
'use strict';

import { Link } from '../factory/link';

// ˄

export class TableLink extends Link {
    // ˅
    
    // ˄

    constructor(name: string, url: string) {
        // ˅
        super(name, url);
        // ˄
    }

    toHTML(): string {
        // ˅
        return '  <td><a href="' + this.url + '">' + this.name + '</a></td>' + '\n'
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
