// ˅
'use strict';

import { Colleague } from './colleague';

// ˄

export class ColleagueRadioButton extends Colleague {
    // ˅
    
    // ˄

    private readonly radioButton: HTMLInputElement;

    constructor(radioButton: HTMLInputElement) {
        // ˅
        super();
        this.radioButton = radioButton;
        this.radioButton.addEventListener(`click`, (event) => this.clickRadioButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable: boolean): void {
        // ˅
        this.radioButton.disabled = !isEnable;
        // ˄
    }

    isSelected(): boolean {
        // ˅
        return this.radioButton.checked;
        // ˄
    }

    private clickRadioButton(event: MouseEvent): void {
        // ˅
        this._mediator.colleagueChanged();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
