// ˅
'use strict';

import { Colleague } from './colleague';

// ˄

export class ColleagueButton extends Colleague {
    // ˅
    
    // ˄

    private _isPressed: boolean;

    private readonly button: HTMLButtonElement;

    constructor(button: HTMLButtonElement) {
        // ˅
        super();
        this.button = button;
        this._isPressed = false;
        this.button.addEventListener('mousedown', (event) => this.pressedButton(event));
        this.button.addEventListener('mouseup', (event) => this.releasedButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable: boolean): void {
        // ˅
        this.button.disabled = !isEnable;
        // ˄
    }

    isPressed(): boolean {
        // ˅
        return this._isPressed;
        // ˄
    }

    private pressedButton(event: MouseEvent): void {
        // ˅
        this._isPressed = true;
        // ˄
    }

    private releasedButton(event: MouseEvent): void {
        // ˅
        this._mediator.colleagueChanged();
        this._isPressed = false;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
