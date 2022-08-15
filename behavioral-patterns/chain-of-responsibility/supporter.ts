// ˅
'use strict';

import { Trouble } from './trouble';

// ˄

export abstract class Supporter {
    // ˅
    
    // ˄

    // Supporter name
    private readonly name: string;

    // Next supporter
    private next: Supporter;

    constructor(name: string) {
        // ˅
        this.next = null;
        this.name = name;
        // ˄
    }

    // Trouble support
    // Troubles are sent around.
    support(trouble: Trouble): void {
        // ˅
        if (this.canHandle(trouble)) {
            this.supported(trouble);
        }
        else if (this.next !== null) {
            this.next.support(trouble);
        }
        else {
            this.unsupported(trouble);
        }
        // ˄
    }

    // Set a next supporter and return it.
    setNext(next: Supporter): Supporter {
        // ˅
        this.next = next;
        return this.next;
        // ˄
    }

    protected abstract canHandle(trouble: Trouble): boolean;

    // Trouble was supported.
    private supported(trouble: Trouble): void {
        // ˅
        console.log(`${trouble.toString()} was handled by ${this.name}.`);
        // ˄
    }

    // Trouble was unsupported.
    private unsupported(trouble: Trouble): void {
        // ˅
        console.log(`${trouble.toString()} was not handled.`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
