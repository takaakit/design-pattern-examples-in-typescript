// ˅
'use strict';

import { Hand } from './hand';
import { Strategy } from './strategy';

// ˄

// When winning a game, show the same hand at the next time.
export class StrategyA implements Strategy {
    // ˅
    
    // ˄

    private won: boolean;

    private preHand: Hand;

    constructor() {
        // ˅
        this.won = false;
        this.preHand = Hand.getHand(Hand.ROCK);
        
        // ˄
    }

    nextHand(): Hand {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    learn(win: boolean): void {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
