// ˅
'use strict';

import { Subject } from './subject';

// ˄

// Holds a value and notifies observers when the value is set.
export class NumberSubject extends Subject {
    // ˅
    
    // ˄

    private _value: number;

    constructor() {
        // ˅
        super();
        // ˄
    }

    get value(): number {
        // ˅
        return this._value;
        // ˄
    }

    set value(value: number) {
        // ˅
        this._value = value;
        this.notifyObservers();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
