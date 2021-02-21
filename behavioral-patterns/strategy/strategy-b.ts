// ˅
'use strict';

import { Hand } from './hand';
import { Strategy } from './strategy';

// ˄

// Calculate a hand from the previous hand stochastically.
export class StrategyB implements Strategy {
    // ˅
    
    // ˄

    private readonly history: Array<Array<number>>;

    private preHand: Hand;

    private curHand: Hand;

    constructor() {
        // ˅
        this.history = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        this.preHand = new Hand(Hand.ROCK);
        this.curHand = new Hand(Hand.ROCK);
        
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
