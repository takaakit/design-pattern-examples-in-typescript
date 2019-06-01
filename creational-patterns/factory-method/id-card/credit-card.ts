// ˅
'use strict';

import { Product } from '../framework/product';

// ˄

export class CreditCard implements Product {
    // ˅
    
    // ˄

    readonly owner: string;

    constructor(owner: string) {
        // ˅
        console.log('Make ' + owner + '\'s card.');
        this.owner = owner;
        // ˄
    }

    use(): void {
        // ˅
        console.log('Use ' + this.owner + '\'s card.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
