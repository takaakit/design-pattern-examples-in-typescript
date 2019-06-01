// ˅
'use strict';

import { Product } from './product';

// ˄

export abstract class Factory {
    // ˅
    
    // ˄

    create(owner: string): Product {
        // ˅
        const product: Product = this.createProduct(owner);
        this.registerProduct(product);
        return product;
        // ˄
    }

    abstract createProduct(owner: string): Product;

    abstract registerProduct(product: Product): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
