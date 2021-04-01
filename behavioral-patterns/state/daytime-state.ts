// ˅
'use strict';

import { State } from './state';
import { Context } from './context';
import { NightState } from './night-state';

// ˄

export class DaytimeState implements State {
    // ˅
    
    // ˄

    private static instance: DaytimeState = new DaytimeState();

    static getInstance(): DaytimeState {
        // ˅
        return this.instance;
        // ˄
    }

    private constructor() {
        // ˅
        
        // ˄
    }

    setTime(context: Context, hour: number): void {
        // ˅
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
        // ˄
    }

    use(context: Context): void {
        // ˅
        context.recordSecurityLog('Use a safe in the daytime');
        // ˄
    }

    alarm(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom('Sound an emergency bell in the daytime');
        // ˄
    }

    phone(context: Context): void {
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
