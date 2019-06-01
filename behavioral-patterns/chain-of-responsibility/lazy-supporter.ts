// ˅
'use strict';

import { Supporter } from './supporter';
import { Trouble } from './trouble';

// ˄

export class LazySupporter extends Supporter {
    // ˅
    
    // ˄

    constructor(name: string) {
        // ˅
        super(name);
        // ˄
    }

    // No troubles are handled.
    handle(trouble: Trouble): boolean {
        // ˅
        return false;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
