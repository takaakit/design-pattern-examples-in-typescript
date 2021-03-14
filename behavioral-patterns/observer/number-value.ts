// ˅
'use strict';

import { Observer } from './observer';

// ˄

// An abstract class that generates number value.
export abstract class NumberValue {
    // ˅
    
    // ˄

    protected _value: number;

    private observers: Array<Observer>;

    constructor() {
        // ˅
        this.observers = new Array<Observer>();
        this._value = 0;
        // ˄
    }

    abstract generate(): void;

    addObserver(observer: Observer): void {
        // ˅
        this.observers.push(observer);
        // ˄
    }

    removeObserver(observer: Observer): void {
        // ˅
		for (let i: number = 0; i < this.observers.length; i++) {
			if(this.observers[i] === observer){
				this.observers.splice(i, 1);
			}
		}
        // ˄
    }

    notifyObservers(): void {
        // ˅
		for (let observer of this.observers) {
			observer.update(this);
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
