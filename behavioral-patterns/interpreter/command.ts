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
        let aNode: Node;
        if (context.getToken() === 'repeat') {
            aNode = new Repeat();
            aNode.parse(context);
        }
        else {
            aNode = new Action();
            aNode.parse(context);
        }

        this.node = aNode;  // Hold the parsed node
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
