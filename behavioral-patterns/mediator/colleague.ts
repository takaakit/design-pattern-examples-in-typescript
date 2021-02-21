// ˅
'use strict';

import { Mediator } from './mediator';

// ˄

export abstract class Colleague {
    // ˅
    
    // ˄

    protected _mediator: Mediator;

    constructor() {
        // ˅
        this._mediator = null;
        // ˄
    }

    // Set enable/disable from the Mediator
    abstract setActivation(isEnable: boolean): void;

    set mediator(mediator: Mediator) {
        // ˅
        this._mediator = mediator;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
