// ˅
'use strict';

import { Printer } from './printer';
import { RealPrinter } from './real-printer';

// ˄

// ProxyPrinter forwards requests to RealPrinter when appropriate.
export class ProxyPrinter implements Printer {
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

    getName(): string {
        // ˅
        if (this.real != null) {
            return this.real.getName();
        }
        else {
            return this.currentName;
        }
        // ˄
    }

    changeName(name: string): void {
        // ˅
        if (this.real != null) {
            this.real.changeName(name);
        }
        
        this.currentName = name;
        // ˄
    }

    output(content: string): void {
        // ˅
        // Check to see if the RealPrinter had been created, create it if necessary.
        if (this.real == null) {
            this.real = new RealPrinter(this.currentName);
        }
        
        this.real.output(content);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
