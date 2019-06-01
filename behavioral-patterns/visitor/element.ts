// ˅
'use strict';

import { Visitor } from './visitor';

// ˄

export interface Element {

    accept(visitor: Visitor): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
