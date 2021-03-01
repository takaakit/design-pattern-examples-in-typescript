// ˅
'use strict';

import * as fs from 'fs';
import * as path from 'path';
import { DataLibrary } from './data-library';
import { HtmlWriter } from './html-writer';

// ˄

export class PageCreator {
    // ˅
    
    // ˄

    private static readonly instance: PageCreator = new PageCreator();

    static getInstance(): PageCreator {
        // ˅
        return this.instance;
        // ˄
    }

    private constructor() {
        // ˅
        
        // ˄
    }

    createSimpleHomepage(mailAddress: string, htmlFileName: string): void {
        // ˅
        const addressBook: Map<string, string> = DataLibrary.getInstance().getData(__dirname + '/addressbook.txt');
        const userName: string = addressBook.get(mailAddress);
        
        const writer: HtmlWriter = new HtmlWriter(fs.createWriteStream(htmlFileName, 'utf8'));
        writer.heading(userName + '\'s homepage');
        writer.paragraph('Welcome to ' + userName + '\'s homepage.');
        writer.paragraph('Please email me at this address.');
        writer.mailto(mailAddress, userName);
        writer.close();
        console.log(htmlFileName + ' is created for ' + mailAddress + ' (' + userName + ')');
        console.log('Output File: ' + path.join(process.cwd(), htmlFileName));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
