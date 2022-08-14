// ˅
'use strict';

import { State } from './state';
import { Context } from './context';
import { DaytimeState } from './daytime-state';

// ˄

export class NightState implements State {
    // ˅
    
    // ˄

    private static instance: NightState = new NightState();

    static getInstance(): NightState {
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
        if (9 <= hour && hour < 17) {
            context.changeState(DaytimeState.getInstance());
        }
        // ˄
    }

    use(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom(`Emergency: Use a safe at night!`);
        // ˄
    }

    alarm(context: Context): void {
        // ˅
        context.callSecurityGuardsRoom(`Sound an emergency bell at night`);
        // ˄
    }

    phone(context: Context): void {
        // ˅
        context.recordSecurityLog(`Record a night call`);
        // ˄
    }

    toString(): string {
        // ˅
        return `[Night]`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
