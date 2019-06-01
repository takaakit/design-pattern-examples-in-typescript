// ˅
'use strict';

// ˄

export abstract class AbstractDisplay {
    // ˅
    
    // ˄

    abstract open(): void;

    abstract write(): void;

    abstract close(): void;

    output(): void {
        // ˅
        this.open();
        for (let i = 0; i < 5; i++) {   // Repeat write 5 times
            this.write();
        }
        this.close();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
