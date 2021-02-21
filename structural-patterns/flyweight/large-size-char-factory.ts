// ˅
'use strict';

import { LargeSizeChar } from './large-size-char';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    private static poolChars: Map<string, LargeSizeChar> = new Map<string, LargeSizeChar>();

    // Create an instance of the large size character.
    static getLargeSizeChar(charName: string): LargeSizeChar {
        // ˅
        var lsc: LargeSizeChar = this.poolChars.get(charName);
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
