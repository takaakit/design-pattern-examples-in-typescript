// ˅
'use strict';

import { CreditCard } from './credit-card';
import { Factory } from '../framework/factory';
import { Product } from '../framework/product';

// ˄

export class CreditCardFactory extends Factory {
    // ˅
    
    // ˄

    private cardOwners: Array<string>;

    constructor() {
        // ˅
        super();
        this.cardOwners = new Array<string>();
        // ˄
    }

    createProduct(owner: string): Product {
        // ˅
        return new CreditCard(owner);
        // ˄
    }

    registerProduct(product: Product): void {
        // ˅
        this.cardOwners.push((product as CreditCard).owner);
        // ˄
    }

    getCardOwner(): Array<string> {
        // ˅
        return this.cardOwners;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
