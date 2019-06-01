// ˅
'use strict';

import { Observer } from './observer';
import { ValueNumber } from './value-number';

// ˄

export interface Observer {

    update(value: ValueNumber): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
