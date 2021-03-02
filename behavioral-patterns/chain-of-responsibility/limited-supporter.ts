// ˅
'use strict';

import { Supporter } from './supporter';
import { Trouble } from './trouble';

// ˄

export class LimitedSupporter extends Supporter {
    // ˅
    
    // ˄

    private readonly limitId: number;

    constructor(name: string, limitId: number) {
        // ˅
        super(name);
        this.limitId = limitId;
        // ˄
    }

    // Troubles with an ID below the limit are handled.
    protected canHandle(trouble: Trouble): boolean {
        // ˅
        return trouble.id <= this.limitId;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
