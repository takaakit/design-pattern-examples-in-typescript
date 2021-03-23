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

    private readonly timerId: number;

    // Current state
    private state: State;

    private readonly textClock: HTMLTextAreaElement;

    private readonly textMessage: HTMLTextAreaElement;

    private readonly useButton: HTMLButtonElement;

    private readonly alarmButton: HTMLButtonElement;

    private readonly phoneButton: HTMLButtonElement;

    constructor() {
        // ˅
        this.state = DaytimeState.getInstance();
        this.hour = 0;
        this.textClock = <HTMLTextAreaElement>document.getElementById('textTime');
        this.textMessage = <HTMLTextAreaElement>document.getElementById('textMessage');
        this.useButton = <HTMLButtonElement>document.getElementById('buttonUse');
        this.alarmButton = <HTMLButtonElement>document.getElementById('buttonAlarm');
        this.phoneButton = <HTMLButtonElement>document.getElementById('buttonPhone');

        this.useButton.addEventListener('click', () => this.pressedUseButton());
        this.alarmButton.addEventListener('click', () => this.pressedAlarmButton());
        this.phoneButton.addEventListener('click', () => this.pressedPhoneButton());

        this.timerId = window.setInterval(this.setTime.bind(this), 1000);       // Set interval timer
        // ˄
    }

    // Set time
    setTime(): void {
        // ˅
        let clockTime: string;
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

    private pressedUseButton(): void {
        // ˅
        this.state.use(this);
        // ˄
    }

    private pressedAlarmButton(): void {
        // ˅
        this.state.alarm(this);
        // ˄
    }

    private pressedPhoneButton(): void {
        // ˅
        this.state.phone(this);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
