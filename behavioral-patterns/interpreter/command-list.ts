// ˅
'use strict';

import { Node } from './node';
import { Context } from './context';
import { Command } from './command';

// ˄

export class CommandList implements Node {
    // ˅
    
    // ˄

    private readonly nodes: Array<Node>;

    constructor() {
        // ˅
        this.nodes = new Array<Node>();
        // ˄
    }

    parse(context: Context): void {
        // ˅
        while (true) {
            if (context.getToken() == null) {
                throw new Error(`Missing "end"`);
            }
            else if (context.getToken() === `end`) {
                context.slideToken(`end`);
                break;
            }
            else {
                const aNode: Node = new Command();
                aNode.parse(context);

                this.nodes.push(aNode);  // Hold the parsed node
            }
        }
        // ˄
    }

    toString(): string {
        // ˅
        return `[${this.nodes.join(`, `)}]`;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
