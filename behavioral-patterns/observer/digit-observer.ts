// ˅
'use strict';

import { ValueNumber } from './value-number';
import { Observer } from './observer';

// ˄

// Display values with digits.
export class DigitObserver implements Observer {
    // ˅
    
    // ˄

    update(value: ValueNumber): void {
        // ˅
		console.log('Digit    : ' + value.valueNumber);

        const sleep: any = require('sleep');
        sleep.msleep(100);   // Wait 100ms
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
