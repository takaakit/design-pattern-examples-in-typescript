// ˅
'use strict';

import { Mediator } from './mediator';

// ˄

export abstract class Colleague {
    // ˅
    
    // ˄

    mediator: Mediator;

    // Set enable/disable from the Mediator
    abstract setActivation(isEnable: boolean): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
