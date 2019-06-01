// ˅
'use strict';

import { LargeSizeChar } from './large-size-char';
import { LargeSizeCharFactory } from './large-size-char-factory';

// ˄

export class LargeSizeString {
    // ˅
    
    // ˄

    private readonly largeSizeChars: Array<LargeSizeChar>;

    constructor(stringValue: string) {
        // ˅
        this.largeSizeChars = new Array<LargeSizeChar>();
        
        for (let i = 0; i < stringValue.length; i++) {
            this.largeSizeChars.push(LargeSizeCharFactory.getInstance().getLargeSizeChar(stringValue[i]));
        }
        // ˄
    }

    display(): void {
        // ˅
        for (let largeSizeChar of this.largeSizeChars) {
            largeSizeChar.display();
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
