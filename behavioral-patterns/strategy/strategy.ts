// ˅
'use strict';

import { Hand } from './hand';

// ˄

export interface Strategy {

    nextHand(): Hand;

    learn(win: boolean): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
