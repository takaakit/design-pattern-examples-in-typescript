// ˅
'use strict';

import { Printer } from './printer';
import { RealPrinter } from './real-printer';

// ˄

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
        return this.currentName;
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
