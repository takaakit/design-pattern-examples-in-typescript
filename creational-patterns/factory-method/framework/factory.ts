// ˅
'use strict';

import { Product } from './product';

// ˄

export abstract class Factory {
    // ˅
    
    // ˄

    create(owner: string): Product {
        // ˅
        return this.createProduct(owner);
        // ˄
    }

    protected abstract createProduct(owner: string): Product;

    // ˅
    
    // ˄
}

// ˅

// ˄
