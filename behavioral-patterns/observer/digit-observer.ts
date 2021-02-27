// ˅
'use strict';

import { NumberValue } from './number-value';
import { Observer } from './observer';

// ˄

// Display number values with digits.
export class DigitObserver implements Observer {
    // ˅
    
    // ˄

    update(numberValue: NumberValue): void {
        // ˅
		console.log('Digit    : ' + numberValue.value);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
