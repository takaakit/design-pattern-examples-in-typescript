// ˅
'use strict';

import { LargeSizeChar } from './large-size-char';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    private poolChars: Map<string, LargeSizeChar>;

    private static readonly instance: LargeSizeCharFactory = new LargeSizeCharFactory();

    static getInstance(): LargeSizeCharFactory {
        // ˅
        return this.instance;
        // ˄
    }

    private constructor() {
        // ˅
        this.poolChars = new Map<string, LargeSizeChar>();
        // ˄
    }

    // Create an instance of the large size character.
    getLargeSizeChar(charName: string): LargeSizeChar {
        // ˅
        let lsc: LargeSizeChar = this.poolChars.get(charName);
        if (lsc === undefined) {
            lsc = new LargeSizeChar(charName);  // Create an instance
            this.poolChars.set(charName, lsc);
        }
        return lsc;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
