// ˅
'use strict';

import { NumberValue } from './number-value';

// ˄

// Generate a random number value.
export class RandomNumberValue extends NumberValue {
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
			this._value = Math.floor(Math.random() * 50);
			super.notifyObservers();
		}
        // ˄
    }

    get value(): number {
        // ˅
        return this._value;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄