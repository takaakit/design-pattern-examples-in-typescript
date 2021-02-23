// ˅
'use strict';

import { Printer } from './printer';
import { RealPrinter } from './real-printer';

// ˄

export class PrinterProxy implements Printer {
    // ˅
    
    // ˄

    private currentName: string;

    // A printer that actually prints
    private real: RealPrinter;

    constructor(name: string) {
        // ˅
        this.currentName = name;
        this.real = null;
        // ˄
    }

    output(content: string): void {
        // ˅
        if (this.real == null) {
            this.real = new RealPrinter(this.currentName);
        }
        this.real.output(content);
        // ˄
    }

    get printerName(): string {
        // ˅
        return this.currentName;
        // ˄
    }

    set printerName(printerName: string) {
        // ˅
        if (this.real != null) {
            this.real.printerName = printerName;
        }
        this.currentName = printerName;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
