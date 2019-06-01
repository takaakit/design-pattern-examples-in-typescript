// ˅
'use strict';

import { Supporter } from './supporter';
import { Trouble } from './trouble';

// ˄

export class MoodySupporter extends Supporter {
    // ˅
    
    // ˄

    constructor(name: string) {
        // ˅
        super(name);
        // ˄
    }

    // Troubles with an odd ID are handled.
    handle(trouble: Trouble): boolean {
        // ˅
        return trouble.id % 2 == 1;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
