// ˅
'use strict';

import { Page } from '../factory/page';

// ˄

export class ListPage extends Page {
    // ˅
    
    // ˄

    constructor(title: string, author: string) {
        // ˅
        super(title, author);
        // ˄
    }

    toHTML(): string {
        // ˅
        const htmlData: Array<string> = new Array<string>();
        htmlData.push('<html><head><title>' + this.title + '</title></head>');
        htmlData.push('<body><h1>' + this.title + '</h1>');
        htmlData.push('<ul>');
        for (let content of this.contents) {
            htmlData.push(content.toHTML());
        }
        htmlData.push('</ul>');
        htmlData.push('<hr><address>' + this.author + '</address>');
        htmlData.push('</body></html>');
        return htmlData.join('\n');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
