// ˅
'use strict';

// ˄

// Hold data which will be interpreted.
export class Context {
    // ˅
    
    // ˄

    private tokens: Array<string>;

    private currentIndex: number;

    constructor(text: string) {
        // ˅
        this.tokens = text.split(/\s+/);
        this.currentIndex = 0;
        // ˄
    }

    nextToken(): string {
        // ˅
        if (this.currentIndex < this.tokens.length) {
            return this.tokens[this.currentIndex++];
        }
        else {
            return null;
        }
        // ˄
    }

    getToken(): string {
        // ˅
        return this.tokens[this.currentIndex];
        // ˄
    }

    slideToken(token: string): void {
        // ˅
        if (token !== this.getToken()) {
            throw new Error('WARNING: ' + token + ' is expected but ' + this.getToken() + ' was found.');
        }
        this.nextToken();
        // ˄
    }

    getNumber(): number {
        // ˅
        try {
            return parseInt(this.getToken());
        }
        catch {
            throw new Error('WARNING: ' + this.getToken());
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
