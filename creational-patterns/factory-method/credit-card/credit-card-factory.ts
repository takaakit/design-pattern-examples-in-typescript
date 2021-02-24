// ˅
'use strict';

import { CreditCard } from './credit-card';
import { Factory } from '../framework/factory';
import { Product } from '../framework/product';

// ˄

export class CreditCardFactory extends Factory {
    // ˅
    
    // ˄

    constructor() {
        // ˅
        super();
        // ˄
    }

    createProduct(owner: string): Product {
        // ˅
        return new CreditCard(owner);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
