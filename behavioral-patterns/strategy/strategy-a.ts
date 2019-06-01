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
        if (this.won === false) {
            this.preHand = Hand.getHand(Math.floor(Math.random() * 3));
        }
        return this.preHand;
        // ˄
    }

    learn(win: boolean): void {
        // ˅
        this.won = win;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
