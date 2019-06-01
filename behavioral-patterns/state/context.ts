// ˅
'use strict';

import { State } from './state';

// ˄

export interface Context {

    // Set time
    setTime(): void;

    // Change state
    changeState(state: State): void;

    // Call a security guard room
    callSecurityGuardsRoom(message: string): void;

    // Record security log
    recordSecurityLog(message: string): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
