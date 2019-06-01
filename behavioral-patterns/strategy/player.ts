// ˅
'use strict';

import { Strategy } from './strategy';
import { Hand } from './hand';

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

    // Calculate a hand from the strategy.
    nextHand(): Hand {
        // ˅
        return this.strategy.nextHand();
        // ˄
    }

    // Won a game.
    won(): void {
        // ˅
        this.strategy.learn(true);
        this.winCount++;
        this.gameCount++;
        // ˄
    }

    // Lost a game.
    lost(): void {
        // ˅
        this.strategy.learn(false);
        this.lossCount++;
        this.gameCount++;
        // ˄
    }

    // Drew a game.
    drew(): void {
        // ˅
        this.gameCount++;
        // ˄
    }

    toString(): string {
        // ˅
        return this.name + ' [' + this.gameCount + ' games, ' + this.winCount + ' won, ' + this.lossCount + ' lost, ' + (this.gameCount - this.winCount - this.lossCount) + ' drew]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
