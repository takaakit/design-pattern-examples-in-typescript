// ˅
'use strict';

// ˄

// Analyze the syntax
export class Context {
    // ˅
    
    // ˄

    private nodes: Array<string>;

    private currentNumber: number;

    constructor(text: string) {
        // ˅
		this.nodes = text.split(/\s+/);
		this.currentNumber = 0;
        // ˄
    }

    nextToken(): string {
        // ˅
		if (this.currentNumber < this.nodes.length) {
			return this.nodes[this.currentNumber++];
		}
		else {
			return null;
		}
        // ˄
    }

    getToken(): string {
        // ˅
		return this.nodes[this.currentNumber];
        // ˄
    }

    slideToken(token: string): void {
        // ˅
		if (token !== this.nodes[this.currentNumber]) {
			throw new Error('WARNING: ' + token + ' is expected but ' + this.nodes[this.currentNumber] + ' was found.');
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
