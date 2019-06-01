// ˅
'use strict';

import { State } from './state';
import { Context } from './context';
import { NightState } from './night-state';

// ˄

export class DaytimeState implements State {
    // ˅
    
    // ˄

    private static readonly instance: DaytimeState = new DaytimeState();

    private constructor() {
        // ˅
        
        // ˄
    }

    static getInstance(): DaytimeState {
        // ˅
        return DaytimeState.instance;
        // ˄
    }

    // Set time
    setTime(context: Context, hour: number): void {
        // ˅
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
        // ˄
    }

    // Use a safe
    useSafe(context: Context): void {
        // ˅
        context.recordSecurityLog('Use a safe in the daytime');
        // ˄
    }

    // Sound a emergency bell
    soundBell(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom('Sound a emergency bell in the daytime');
        // ˄
    }

    // Make a normal call
    call(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom('Make a normal call in the daytime');
        // ˄
    }

    toString(): string {
        // ˅
        return '[Daytime]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
