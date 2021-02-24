// ˅
'use strict';

import { NumberValue } from './number-value';
import { Observer } from './observer';
import * as sleep from 'sleep';

// ˄

// Display number values with digits.
export class DigitObserver implements Observer {
    // ˅
    
    // ˄

    update(numberValue: NumberValue): void {
        // ˅
		console.log('Digit    : ' + numberValue.value);

        sleep.msleep(100);   // Wait 100ms
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
