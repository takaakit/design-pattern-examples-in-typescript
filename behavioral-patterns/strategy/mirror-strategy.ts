// ˅
'use strict';

import { HandSignal } from './hand-signal';
import { GameResultType } from './game-result-type';
import { Strategy } from './strategy';

// ˄

// Mirror Strategy: showing a hand signal from the previous opponent's hand signal.
export class MirrorStrategy implements Strategy {
    // ˅
    
    // ˄

    private preOpponentsHand: HandSignal;

    constructor() {
        // ˅
        this.preOpponentsHand = HandSignal.getHand(HandSignal.ROCK);
        // ˄
    }

    showHandSignal(): HandSignal {
        // ˅
        return this.preOpponentsHand;
        // ˄
    }

    notifyGameResult(result: GameResultType, ownHand: HandSignal, opponentsHand: HandSignal): void {
        // ˅
        this.preOpponentsHand = opponentsHand;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
