// ˅
'use strict';

import { Memento } from './memento';

// ˄

export class Gamer {
    // ˅
    
    // ˄

    // Gamer's money
    private _money: number;

    constructor(money: number) {
        // ˅
        this._money = money;
        // ˄
    }

    createMemento(): Memento {
        // ˅
        return new Memento(this._money);
        // ˄
    }

    setMemento(memento: Memento): void {
        // ˅
        this._money = memento.money;
        // ˄
    }

    // Play a game
    play(): void {
        // ˅
        const dice: number = Math.floor(Math.random() * 6) + 1;     // Shake a dice
        console.log(`The number of dice is ${dice}.`);

        const preMoney = this._money;
        switch (dice) {
            case 1:
            case 3:
            case 5:
                // In case of odd...Money is halved
                this._money = this._money / 2;
                console.log(`Gamer's money is halved: ${preMoney} -> ${this._money}`);
                break;
            case 2:
            case 4:
            case 6:
                // In case of even...Money doubles
                this._money = this._money * 2;
                console.log(`Gamer's money doubles: ${preMoney} -> ${this._money}`);
                break;
            default:
                // Other...Exit
                console.log(`Unexpected value.`);
                process.exit(1);
        }
        // ˄
    }

    get money(): number {
        // ˅
        return this._money;
        // ˄
    }

    toString(): string {
        // ˅
        return `[money = ${this._money}]`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
