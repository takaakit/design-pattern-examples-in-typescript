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
        context.slideToken(`program`);

        const aCommandList: CommandList = new CommandList();
        aCommandList.parse(context);

        this.commandList = aCommandList;    // Hold the parsed command list
        // ˄
    }

    toString(): string {
        // ˅
        return (`[program ${this.commandList}]`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
