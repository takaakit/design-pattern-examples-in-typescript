// ˅
'use strict';

import { Context } from './context';

// ˄

export interface State {

    // Set time
    setTime(context: Context, hour: number): void;

    // Use a safe
    useSafe(context: Context): void;

    // Sound a emergency bell
    soundBell(context: Context): void;

    // Make a normal call
    call(context: Context): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
