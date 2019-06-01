// ˅
'use strict';

import { Item } from './item';

// ˄

export abstract class Link extends Item {
    // ˅
    
    // ˄

    protected readonly url: string;

    constructor(name: string, url: string) {
        // ˅
        super(name);
        this.url = url;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
