// ˅
'use strict';

import { HandSignal } from './hand-signal';
import { GameResultType } from './game-result-type';

// ˄

export interface Strategy {

    // Show a hand signal.
    showHandSignal(): HandSignal;

    // Notify a game result.
    notifyGameResult(result: GameResultType, ownHand: HandSignal, opponentsHand: HandSignal): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
