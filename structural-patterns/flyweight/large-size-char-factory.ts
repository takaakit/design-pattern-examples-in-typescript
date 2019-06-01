// ˅
'use strict';

import { LargeSizeChar } from './large-size-char';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    private poolChars: Map<string, LargeSizeChar>;

    private static readonly instance: LargeSizeCharFactory = new LargeSizeCharFactory();

    private constructor() {
        // ˅
        this.poolChars = new Map<string, LargeSizeChar>();
        // ˄
    }

    static getInstance(): LargeSizeCharFactory {
        // ˅
        return this.instance;
        // ˄
    }

    // Create an instance of the large size character.
    getLargeSizeChar(charName: string): LargeSizeChar {
        // ˅
        var lsc: LargeSizeChar = null;
        if (this.poolChars.has(charName) === false) {
            lsc = new LargeSizeChar(charName);  // Create an instance
            this.poolChars.set(charName, lsc);
        }
        else {
            lsc = this.poolChars.get(charName);
        }
        return lsc;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
