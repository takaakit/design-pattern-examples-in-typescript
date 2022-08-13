// ˅
'use strict';

import { Observer } from './observer';

// ˄

// Provides an interface for attaching and detaching Observer objects.
export class Subject {
    // ˅
    
    // ˄

    private observers: Array<Observer>;

    constructor() {
        // ˅
        this.observers = new Array<Observer>();
        // ˄
    }

    attach(observer: Observer): void {
        // ˅
        this.observers.push(observer);
        // ˄
    }

    detach(observer: Observer): void {
        // ˅
        for (let i = 0; i < this.observers.length; i++) {
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
