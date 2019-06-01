// ˅
'use strict';

// ˄

export interface Builder {

    createTitle(title: string): void;

    createSection(section: string): void;

    createItems(items: Array<string>): void;

    close(): void;

    // ˅
    
    // ˄
}

// ˅

// ˄
