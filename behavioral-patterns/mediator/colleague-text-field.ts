// ˅
'use strict';

import { Colleague } from './colleague';

// ˄

export class ColleagueTextField extends Colleague {
    // ˅
    
    // ˄

    private readonly textArea: HTMLTextAreaElement;

    constructor(textArea: HTMLTextAreaElement) {
        // ˅
        super();
        this.textArea = textArea;
        this.textArea.addEventListener('input', (event) => this.inputTextArea(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable: boolean): void {
        // ˅
        this.textArea.disabled = !isEnable;
        // ˄
    }

    isEmpty(): boolean {
        // ˅
        return this.textArea.value.length === 0
        // ˄
    }

    private inputTextArea(event: Event): void {
        // ˅
        this._mediator.colleagueChanged(event);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
