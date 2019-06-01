// ˅
'use strict';

import { DisplayImpl } from './display-impl';

// ˄

export class TextDisplayImpl implements DisplayImpl {
    // ˅
    
    // ˄

    // A string to display
    private readonly text: string;

    // A number of characters in bytes
    private readonly width: number;

    constructor(text: string) {
        // ˅
        this.text = text;
        this.width = text.length;   // Set the number of characters in bytes.
        
        // ˄
    }

    implOpen(): void {
        // ˅
        this.printLine();
        // ˄
    }

    implWrite(): void {
        // ˅
        console.log(':' + this.text + ':');     // Enclose a text with ":" and display it.
        // ˄
    }

    implClose(): void {
        // ˅
        this.printLine();
        // ˄
    }

    private printLine(): void {
        // ˅
        var line: string = '*';                 // Display "*" mark at the beginning of a frame.
        for (let i = 0; i < this.width; i++) {  // Display "." for the number of "width".
            line += '.'
        }
        line += '*'                             // Display "*" mark at the end of a frame.
        console.log(line);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
