// ˅
'use strict';

import { State } from './state';
import { Context } from './context';
import { DaytimeState } from './daytime-state';

// ˄

export class NightState implements State {
    // ˅
    
    // ˄

    private static readonly instance: NightState = new NightState();

    private constructor() {
        // ˅
        
        // ˄
    }

    static getInstance(): NightState {
        // ˅
        return NightState.instance;
        // ˄
    }

    // Set time
    setTime(context: Context, hour: number): void {
        // ˅
        if (9 <= hour && hour < 17) {
            context.changeState(DaytimeState.getInstance());
        }
        // ˄
    }

    // Use a safe
    useSafe(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom('Emergency: Use a safe at night!');
        // ˄
    }

    // Sound a emergency bell
    soundBell(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom('Sound a emergency bell at night');
        // ˄
    }

    // Make a normal call
    call(context: Context): void {
        // ˅
        context.recordSecurityLog('Record a night call');
        // ˄
    }

    toString(): string {
        // ˅
        return '[Night]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
