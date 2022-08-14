// ˅
'use strict';

import { Product } from '../framework/product';

// ˄

export class CreditCard implements Product {
    // ˅
    
    // ˄

    private readonly owner: string;

    constructor(owner: string) {
        // ˅
        this.owner = owner;
        console.log(`Make ${this.owner}'s card.`);
        // ˄
    }

    use(): void {
        // ˅
        console.log(`Use ${this.owner}'s card.`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
