// ˅
'use strict';

import { Builder } from './builder';

// ˄

export class Director {
    // ˅
    
    // ˄

    private readonly builder: Builder;

    constructor(builder: Builder) {
        // ˅
        this.builder = builder;
        
        // ˄
    }

    // Construct a document
    build(): void {
        // ˅
        this.builder.createTitle('Greeting');                                   // Title
        this.builder.createSection('Morning and Afternoon');                    // Section
        this.builder.createItems(['Good morning.', 'Hello.']);                  // Items
        this.builder.createSection('Evening');                                  // Other section
        this.builder.createItems(['Good evening.', 'Good night.', 'Goodbye.']); // Other items
        this.builder.close();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
