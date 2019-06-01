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
        return this._value;
        // ˄
    }

    // Get an instance of the hand
    static getHand(handValue: number): Hand {
        // ˅
        return this.hands[handValue];
        // ˄
    }

    constructor(value: number) {
        // ˅
        this._value = value;
        // ˄
    }

    // Return true if "this" is stronger than "hand".
    isStrongerThan(hand: Hand): boolean {
        // ˅
        return this.judgeGame(hand) === 1;
        // ˄
    }

    // Return false if "this" is weaker than "hand".
    isWeakerThan(hand: Hand): boolean {
        // ˅
        return this.judgeGame(hand) === -1;
        // ˄
    }

    toString(): string {
        // ˅
        return Hand.handName[this.value];
        // ˄
    }

    // The draw is 0. "this" win is 1. "hand" win is -1.
    private judgeGame(hand: Hand): number {
        // ˅
        if (this === hand) {
            return 0;
        }
        else if ((this.value + 1) % 3 === hand.value) {
            return 1;
        }
        else {
            return -1;
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
