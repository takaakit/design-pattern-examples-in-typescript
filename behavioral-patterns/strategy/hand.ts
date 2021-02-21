// ˅
'use strict';

// ˄

export class Hand {
    // ˅
    
    // ˄

    // Rock
    static readonly ROCK: number = 0;

    // Scissors
    static readonly SCISSORS: number = 1;

    // Paper
    static readonly PAPER: number = 2;

    // Hands of rock-scissors-paper
    private static readonly hands: Array<Hand> = [new Hand(Hand.ROCK), new Hand(Hand.SCISSORS), new Hand(Hand.PAPER)];

    // Values of rock, scissors and paper.
    private _value: number;

    // Characters of the hands
    private static readonly handName: Array<string> = ['Rock', 'Scissors', 'Paper'];

    get value() {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    // Get an instance of the hand
    static getHand(handValue: number): Hand {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    constructor(value: number) {
        // ˅
        
        // ˄
    }

    // Return true if "this" is stronger than "hand".
    isStrongerThan(hand: Hand): boolean {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    // Return false if "this" is weaker than "hand".
    isWeakerThan(hand: Hand): boolean {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    toString(): string {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    // The draw is 0. "this" win is 1. "hand" win is -1.
    private judgeGame(hand: Hand): number {
        // ˅
        throw new Error('Not implemented');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
