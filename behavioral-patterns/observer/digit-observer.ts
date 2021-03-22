// ˅
'use strict';

import { Subject } from './subject';
import { NumberSubject } from './number-subject';
import { Observer } from './observer';

// ˄

// Display values as a number.
export class DigitObserver implements Observer {
    // ˅
    
    // ˄

    private numberSubject: NumberSubject;

    constructor(numberSubject: NumberSubject) {
        // ˅
        this.numberSubject = numberSubject;
        
        // ˄
    }

    update(changedSubject: Subject): void {
        // ˅
        if (changedSubject === this.numberSubject) {
    		console.log('Digit    : ' + this.numberSubject.value);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
