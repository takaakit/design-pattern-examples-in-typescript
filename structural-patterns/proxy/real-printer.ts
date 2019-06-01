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
        console.log('=== ' + this.printerName + ' ===');
        console.log(content);
        // ˄
    }

    // Heavy task (Please think so...)
    private heavyTask(message: string): void {
        // ˅
        console.log(message);
        console.log('Done heavy task.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
