// ˅
'use strict';

import { Context } from './context';
import { State } from './state';
import { DaytimeState } from './daytime-state';

// ˄

// Safe security system that the security status changes with time.
export class AppSafe implements Context {
    // ˅
    
    // ˄

    private hour: number;

    // Current state
    private state: State;

    private readonly textClock: HTMLTextAreaElement;

    private readonly textMessage: HTMLTextAreaElement;

    private readonly safebutton: HTMLButtonElement;

    private readonly soundbutton: HTMLButtonElement;

    private readonly callbutton: HTMLButtonElement;

    private readonly exitbutton: HTMLButtonElement;

    constructor() {
        // ˅
        this.state = new DaytimeState();
        this.hour = 0;
        this.textClock = <HTMLTextAreaElement>document.getElementById('textTime');
        this.textMessage = <HTMLTextAreaElement>document.getElementById('textMessage');
        this.safebutton = <HTMLButtonElement>document.getElementById('buttonUse');
        this.soundbutton = <HTMLButtonElement>document.getElementById('buttonAlarm');
        this.callbutton = <HTMLButtonElement>document.getElementById('buttonPhone');
        this.exitbutton = <HTMLButtonElement>document.getElementById('buttonExit');

        this.safebutton.addEventListener('click', (e) => this.state.useSafe(this));         // Safe use button pressed
        this.soundbutton.addEventListener('click', (e) => this.state.soundBell(this));      // Emergency bell button pressed
        this.callbutton.addEventListener('click', (e) => this.state.call(this));            // Normal call button pressed
        this.exitbutton.addEventListener('click', (e) => document.body.innerHTML = "<h1>Dialog terminated.</h1>"); // Exit button pressed

        setInterval(this.setTime.bind(this), 1000);     // Set the time
        // ˄
    }

    // Set time
    setTime(): void {
        // ˅
        var clockTime: string;
        if (this.hour < 10) {
            clockTime = '0' + this.hour + ':00';
        }
        else {
            clockTime = this.hour + ':00';
        }

        console.log(clockTime);
        this.textClock.value = clockTime;
        this.state.setTime(this, this.hour);
    
        this.hour++;
        if (this.hour >= 24) {
            this.hour = 0;
        }
        // ˄
    }

    // Change state
    changeState(state: State): void {
        // ˅
        console.log('The state changed from ' + this.state.toString() + ' to ' + state.toString() + '.');
        this.state = state;
        // ˄
    }

    // Call a security guard room
    callSecurityGuardsRoom(message: string): void {
        // ˅
        this.textMessage.value += 'call! ' + message + '\n';
        this.textMessage.scrollTop = this.textMessage.scrollHeight;     // Scroll to the bottom
        // ˄
    }

    // Record security log
    recordSecurityLog(message: string): void {
        // ˅
        this.textMessage.value += 'record ... ' + message + '\n';
        this.textMessage.scrollTop = this.textMessage.scrollHeight;     // Scroll to the bottom
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
