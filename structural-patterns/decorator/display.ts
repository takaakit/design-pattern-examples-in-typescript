// ˅
'use strict';

// ˄

export abstract class Display {
    // ˅
    
    // ˄

    // Column width
    abstract get columns(): number;

    // Number of rows
    abstract get rows(): number;

    abstract getLineText(row: number): string;

    // Show all
    show(): void {
        // ˅
        for (let i = 0; i < this.rows; i++) {
            console.log(this.getLineText(i));
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
