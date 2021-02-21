// ˅
'use strict';

import { Node } from './node';
import { Context } from './context';

// ˄

// A node corresponding to "forward", "left", and "right".
export class Action implements Node {
    // ˅
    
    // ˄

    protected name: string;

    parse(context: Context): void {
        // ˅
		const currentToken: string = context.getToken();
		if (currentToken !== 'forward' && currentToken !== 'right' && currentToken !== 'left') {
			throw new Error(currentToken + ' is unknown');
		}

        this.name = currentToken;

        context.slideToken(currentToken);
        // ˄
    }

    toString(): string {
        // ˅
		return this.name;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
