// ˅
'use strict';

import { Node } from './node';
import { Context } from './context';
import { CommandList } from './command-list';

// ˄

// A node corresponding to "repeat".
export class Repeat implements Node {
    // ˅
    
    // ˄

    private number: number;

    private commandList: Node;

    constructor() {
        // ˅
        this.number = 0;
        this.commandList = null;
        // ˄
    }

    parse(context: Context): void {
        // ˅
        context.slideToken('repeat');
        
        this.number = context.getNumber();
        context.slideToken(String(this.number));

        const aCommandList = new CommandList();
        aCommandList.parse(context);

        this.commandList = aCommandList;    // Hold the parsed command list
        // ˄
    }

    toString(): string {
        // ˅
        return 'repeat ' + this.number + ' ' + this.commandList;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
