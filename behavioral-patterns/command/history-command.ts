// ˅
'use strict';

import { Command } from './command';

// ˄

// Holder of the past commands
export class HistoryCommand implements Command {
    // ˅
    
    // ˄

    // A set of past commands
    private readonly pastCommands: Array<Command>;

    constructor() {
        // ˅
        this.pastCommands = new Array<Command>();
        // ˄
    }

    execute(): void {
        // ˅
        for (let command of this.pastCommands) {
            command.execute();
        }
        // ˄
    }

    add(command: Command): void {
        // ˅
        this.pastCommands.push(command);
        // ˄
    }

    // Delete the last command
    undo(): void {
        // ˅
        if (this.pastCommands.length != 0) {
            this.pastCommands.pop();
        }
        // ˄
    }

    // Delete all past commands
    clear(): void {
        // ˅
        this.pastCommands.length = 0;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
