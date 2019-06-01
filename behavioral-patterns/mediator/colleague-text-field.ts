// ˅
'use strict';

import { Colleague } from './colleague';
import { Mediator } from './mediator';

// ˄

export class ColleagueTextField extends Colleague {
    // ˅
    
    // ˄

    private readonly textArea: HTMLTextAreaElement;

    constructor(textArea: HTMLTextAreaElement) {
        // ˅
        super();
        this.mediator = null;
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
        this.mediator.colleagueChanged(event);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
