// ˅
'use strict';

import { Item } from './item';

// ˄

export abstract class Data extends Item {
    // ˅
    
    // ˄

    protected items: Array<Item>;

    constructor(name: string) {
        // ˅
        super(name);
        this.items = new Array<Item>();
        // ˄
    }

    add(item: Item): void {
        // ˅
        this.items.push(item);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
