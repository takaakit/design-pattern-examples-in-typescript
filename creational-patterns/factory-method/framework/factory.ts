// ˅
'use strict';

import { Product } from './product';

// ˄

export abstract class Factory {
    // ˅
    
    // ˄

    create(owner: string): Product {
        // ˅
        // Write pre-creation code here, if any.

        let product = this.createProduct(owner);

        // Write post-creation code here, if any.

        return product;
        // ˄
    }

    protected abstract createProduct(owner: string): Product;

    // ˅
    
    // ˄
}

// ˅

// ˄
