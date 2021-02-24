// ˅
'use strict';

import * as fs from 'fs';

// ˄

export class LargeSizeChar {
    // ˅
    
    // ˄

    // Display data of the large size character
    private displayData: string;

    constructor(charName: string) {
        // ˅
        try {
            const buf = fs.readFileSync(__dirname + '/big' + charName + '.txt', 'utf8');
            this.displayData = buf.toString();
        }
        catch {
            this.displayData = charName + '?';
        }
        // ˄
    }

    // Display the large size character
    display(): void {
        // ˅
        console.log(this.displayData);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
