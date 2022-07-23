// ˅
'use strict';

import { Product } from './product';

// ˄

export abstract class Factory {
    // ˅
    
    // ˄

    create(owner: string): Product {
        // ˅
        // Write pre-creation code here.

        // Encapsulate the knowledge of which Product subclass to create and move this knowledge out of the framework.
        let product = this.createProduct(owner);

        // Write post-creation code here.

        return product;
        // ˄
    }

    protected abstract createProduct(owner: string): Product;

    // ˅
    
    // ˄
}

// ˅

// ˄
