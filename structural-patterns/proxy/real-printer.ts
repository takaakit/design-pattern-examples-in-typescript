// ˅
'use strict';

import { Printer } from './printer';

// ˄

export class RealPrinter implements Printer {
    // ˅
    
    // ˄

    private _printerName: string;

    constructor(name: string) {
        // ˅
        this._printerName = name;
        this.heavyTask('Creating an instance(' + name + ') of the Printer');
        // ˄
    }

    set printerName(name: string) {
        // ˅
        this._printerName = name;
        // ˄
    }

    // Display a content with the name
    output(content: string): void {
        // ˅
        console.log('==========');
        console.log(content);
        console.log('Printed by ' + this._printerName);
        console.log('==========');
        // ˄
    }

    // Heavy task (Please think so...)
    private heavyTask(message: string): void {
        // ˅
        process.stdout.write(message);
        const sleep: any = require('sleep');
        for(var i = 0; i < 10; i++){
            sleep.msleep(500);   // Wait 500ms
            process.stdout.write('.');
        }
        console.log('Done.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
