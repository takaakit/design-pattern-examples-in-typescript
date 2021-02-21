// ˅
'use strict';

import { Node } from './node';
import { Context } from './context';
import { CommandList } from './command-list';

// ˄

// A node corresponding to "program".
export class Program implements Node {
    // ˅
    
    // ˄

    private commandList: Node;

    constructor() {
        // ˅
        this.commandList = null;
        // ˄
    }

    parse(context: Context): void {
        // ˅
		context.slideToken('program');
		this.commandList = new CommandList();
		this.commandList.parse(context);
        // ˄
    }

    toString(): string {
        // ˅
		return ('[program ' + this.commandList + ']');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
