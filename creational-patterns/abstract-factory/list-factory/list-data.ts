// ˅
'use strict';

import { Data } from '../factory/data';

// ˄

export class ListData extends Data {
    // ˅
    
    // ˄

    constructor(name: string) {
        // ˅
        super(name);
        // ˄
    }

    toHTML(): string {
        // ˅
        const htmlData: Array<string> = new Array<string>();
        htmlData.push('<li>' + this.name + '<ul>');
        for (let item of this.items) {
            htmlData.push(item.toHTML());
        }
        htmlData.push('</ul></li>\n');
        return htmlData.join('');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
