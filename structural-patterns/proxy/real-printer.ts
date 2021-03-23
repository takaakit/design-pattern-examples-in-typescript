// ˅
'use strict';

import { Printer } from './printer';

// ˄

export class RealPrinter implements Printer {
    // ˅
    
    // ˄

    private name: string;

    constructor(name: string) {
        // ˅
        this.name = name;
        this.heavyTask('Creating an instance (' + this.name + ') of the Printer');
        // ˄
    }

    getName(): string {
        // ˅
        return this.name;
        // ˄
    }

    changeName(name: string): void {
        // ˅
        this.name = name;
        // ˄
    }

    // Display a content with the name
    output(content: string): void {
        // ˅
        console.log('==========');
        console.log(content);
        console.log('Printed by ' + this.name);
        console.log('==========');
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
