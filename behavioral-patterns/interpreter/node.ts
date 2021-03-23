// ˅
'use strict';

import { Context } from './context';

// ˄

// Node in the syntax tree.
export interface Node {

    parse(context: Context): void;

    toString(): string;

    // ˅
    
    // ˄
}

// ˅

// ˄
