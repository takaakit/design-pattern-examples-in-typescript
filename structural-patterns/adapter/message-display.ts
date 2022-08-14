// ˅
'use strict';

// ˄

export class MessageDisplay {
    // ˅
    
    // ˄

    private readonly message: string;

    constructor(message: string) {
        // ˅
        this.message = message;
        // ˄
    }

    displayWithHyphens(): void {
        // ˅
        console.log(`-- ${this.message} --`);
        // ˄
    }

    displayWithBrackets(): void {
        // ˅
        console.log(`[[ ${this.message} ]]`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
