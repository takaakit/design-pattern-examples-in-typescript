// ˅
'use strict';

import { Context } from './context';

// ˄

export interface State {

    setTime(context: Context, hour: number): void;

    use(context: Context): void;

    alarm(context: Context): void;

    phone(context: Context): void;

    toString(): string;

    // ˅
    
    // ˄
}

// ˅

// ˄
