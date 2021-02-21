// ˅
'use strict';

import { ValueNumber } from './value-number';

// ˄

// Generate a random number.
export class RandomNumber extends ValueNumber {
    // ˅
    
    // ˄

    constructor() {
        // ˅
		super();
        // ˄
    }

    generate(): void {
        // ˅
		for (let i: number = 0; i < 20; i++) {
			this._valueNumber = Math.floor(Math.random() * 50);
			super.notifyObservers();
		}
        // ˄
    }

    get valueNumber(): number {
        // ˅
        return this._valueNumber;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
