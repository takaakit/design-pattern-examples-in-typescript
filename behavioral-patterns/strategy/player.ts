// ˅
'use strict';

import { Strategy } from './strategy';
import { HandSignal } from './hand-signal';
import { GameResultType } from './game-result-type';

// ˄

export class Player {
    // ˅
    
    // ˄

    private readonly name: string;

    private winCount: number;

    private lossCount: number;

    private gameCount: number;

    private readonly strategy: Strategy;

    constructor(name: string, strategy: Strategy) {
        // ˅
        this.name = name;
        this.winCount = 0;
        this.lossCount = 0;
        this.gameCount = 0;
        this.strategy = strategy;
        // ˄
    }

    // Show a hand signal from the strategy.
    showHandSignal(): HandSignal {
        // ˅
        return this.strategy.showHandSignal();
        // ˄
    }

    // Notify a game result.
    notifyGameResult(result: GameResultType, ownHand: HandSignal, opponentsHand: HandSignal): void {
        // ˅
        switch (result) {
            case GameResultType.Win:
                this.winCount++;
                this.gameCount++;
                break;
            case GameResultType.Loss:
                this.lossCount++;
                this.gameCount++;
                break;
            case GameResultType.Draw:
                this.gameCount++;
                break;
        }

        this.strategy.notifyGameResult(result, ownHand, opponentsHand);
        // ˄
    }

    toString(): string {
        // ˅
        return `${this.name} [${this.gameCount} games, ${this.winCount} won, ${this.lossCount} lost, ${this.gameCount - this.winCount - this.lossCount} drew]`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
