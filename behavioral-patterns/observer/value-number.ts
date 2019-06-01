// ˅
'use strict';

import { Observer } from './observer';

// ˄

// An abstract class that generates numbers.
export abstract class ValueNumber {
    // ˅
    
    // ˄

    valueNumber: number;

    private observers: Array<Observer>;

    constructor() {
        // ˅
		this.observers = new Array<Observer>();
		this.valueNumber = 0;
        // ˄
    }

    abstract generate(): void;

    addObserver(observer: Observer): void {
        // ˅
		this.observers.push(observer);
        // ˄
    }

    deleteObserver(observer: Observer): void {
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

    // ˅
    
    // ˄
}

// ˅

// ˄
