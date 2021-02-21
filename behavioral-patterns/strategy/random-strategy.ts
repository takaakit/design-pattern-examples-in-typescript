// ˅
'use strict';

import { HandSignal } from './hand-signal';
import { GameResultType } from './game-result-type';
import { Strategy } from './strategy';

// ˄

// Random Strategy: showing a random hand signal.
export class RandomStrategy implements Strategy {
    // ˅
    
    // ˄

    constructor() {
        // ˅
        
        // ˄
    }

    showHandSignal(): HandSignal {
        // ˅
        return HandSignal.getHand(Math.floor(Math.random() * 3));
        // ˄
    }

    notifyGameResult(result: GameResultType, ownHand: HandSignal, opponentsHand: HandSignal): void {
        // ˅
        // Do nothing
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
