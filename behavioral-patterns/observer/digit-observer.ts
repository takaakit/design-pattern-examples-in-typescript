// ˅
'use strict';

import { NumberValue } from './number-value';
import { Observer } from './observer';

// ˄

// Display values as a number.
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
