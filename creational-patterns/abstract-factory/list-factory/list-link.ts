// ˅
'use strict';

import { Link } from '../factory/link';

// ˄

export class ListLink extends Link {
    // ˅
    
    // ˄

    constructor(name: string, url: string) {
        // ˅
        super(name, url);
        // ˄
    }

    toHTML(): string {
        // ˅
        return `  <li><a href="${this.url}">${this.name}</a></li>\n`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
