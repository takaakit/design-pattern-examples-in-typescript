// ˅
'use strict';

import * as fs from 'fs';

// ˄

export class DataLibrary {
    // ˅
    
    // ˄

    private static instance: DataLibrary = new DataLibrary();

    private constructor() {
        // ˅
        
        // ˄
    }

    static getInstance(): DataLibrary {
        // ˅
        return DataLibrary.instance;
        // ˄
    }

    // Read a data library file.
    getData(dataLibraryName: string): Map<string, string> {
        // ˅
        const data: Map<string, string> = new Map<string, string>();
        const fileName: string = dataLibraryName + '.txt';

        for (let line of fs.readFileSync(__dirname + '/' + fileName, 'utf8').toString().split(/\r\n|\r|\n/)) {
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
