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

    // Display a content with the name
    output(content: string): void {
        // ˅
        console.log('==========');
        console.log(content);
        console.log('Printed by ' + this._printerName);
        console.log('==========');
        // ˄
    }

    set printerName(name: string) {
        // ˅
        this._printerName = name;
        // ˄
    }

    // Heavy task (Please think so...)
    private heavyTask(message: string): void {
        // ˅
        process.stdout.write(message);
        for (let i = 0; i < 50; i++) {
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
