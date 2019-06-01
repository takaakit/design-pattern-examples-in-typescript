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
		this.name = context.getToken();
		context.slideToken(this.name);
		if (this.name !== 'forward' && this.name !== 'right' && this.name !== 'left') {
			throw new Error(this.name + ' is unknown');
		}
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
