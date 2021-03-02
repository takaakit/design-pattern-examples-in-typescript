// ˅
'use strict';

import { Supporter } from './supporter';
import { Trouble } from './trouble';

// ˄

export class SpecialSupporter extends Supporter {
    // ˅
    
    // ˄

    private readonly targetId: number;

    constructor(name: string, targetId: number) {
        // ˅
        super(name);
        this.targetId = targetId;
        // ˄
    }

    // Troubles with the specific ID are handled.
    protected canHandle(trouble: Trouble): boolean {
        // ˅
        return trouble.id === this.targetId;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
