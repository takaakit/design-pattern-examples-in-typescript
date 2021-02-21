// ˅
'use strict';

import { Colleague } from './colleague';

// ˄

export class ColleagueButton extends Colleague {
    // ˅
    
    // ˄

    private readonly button: HTMLButtonElement;

    constructor(button: HTMLButtonElement) {
        // ˅
        super();
        this.button = button;
        this.button.addEventListener('click', (event) => this.clickButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable: boolean): void {
        // ˅
        this.button.disabled = !isEnable;
        // ˄
    }

    private clickButton(event: MouseEvent): void {
        // ˅
        this._mediator.colleagueChanged(event);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
