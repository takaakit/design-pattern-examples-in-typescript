// ˅
'use strict';

// ˄

export class HandSignal {
    // ˅
    
    // ˄

    // Rock
    static readonly ROCK: number = 0;

    // Scissors
    static readonly SCISSORS: number = 1;

    // Paper
    static readonly PAPER: number = 2;

    // Hands of rock-scissors-paper
    private static readonly handSignals: Array<HandSignal> = [new HandSignal(HandSignal.ROCK), new HandSignal(HandSignal.SCISSORS), new HandSignal(HandSignal.PAPER)];

    // Characters of the hands
    private static readonly handName: Array<string> = [`Rock`, `Scissors`, `Paper`];

    // Values of rock, scissors and paper.
    private readonly value: number;

    // Get an instance of the hand
    static getHand(handValue: number): HandSignal {
        // ˅
        return this.handSignals[handValue];
        // ˄
    }

    constructor(value: number) {
        // ˅
        this.value = value;
        // ˄
    }

    // Return true if "this" is stronger than "hand".
    isStrongerThan(hand: HandSignal): boolean {
        // ˅
        return this.judgeGame(hand) === 1;
        // ˄
    }

    // Return false if "this" is weaker than "hand".
    isWeakerThan(hand: HandSignal): boolean {
        // ˅
        return this.judgeGame(hand) === -1;
        // ˄
    }

    toString(): string {
        // ˅
        return HandSignal.handName[this.value];
        // ˄
    }

    // The draw is 0. "this" win is 1. "hand" win is -1.
    private judgeGame(hand: HandSignal): number {
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
