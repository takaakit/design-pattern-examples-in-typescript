// ˅
'use strict';

import { Node } from './node';
import { Context } from './context';
import { Repeat } from './repeat';
import { Action } from './action';

// ˄

export class Command implements Node {
    // ˅
    
    // ˄

    private node: Node;

    constructor() {
        // ˅
        this.node = null;
        // ˄
    }

    parse(context: Context): void {
        // ˅
		if (context.getToken() === 'repeat') {
			this.node = new Repeat();
			this.node.parse(context);
		}
		else {
			this.node = new Action();
			this.node.parse(context);
		}
        // ˄
    }

    toString(): string {
        // ˅
		return this.node.toString();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
