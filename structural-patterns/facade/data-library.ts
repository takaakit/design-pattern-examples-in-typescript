// ˅
'use strict';

import * as fs from 'fs';

// ˄

export class DataLibrary {
    // ˅
    
    // ˄

    // Read a data library file.
    static getData(dataLibraryFileName: string): Map<string, string> {
        // ˅
        const data: Map<string, string> = new Map<string, string>();

        for (let line of fs.readFileSync(dataLibraryFileName, 'utf8').toString().split(/\r\n|\r|\n/)) {
            const keyAndValue: string[] = line.split('=');
            if (keyAndValue.length === 2) {
                data.set(keyAndValue[0], keyAndValue[1]);
            }
        }

        return data;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
