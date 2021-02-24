// ˅
'use strict';

import { Iterator } from './iterator';
import { BookShelf } from './book-shelf';
import { Book } from './book';

// ˄

export class BookShelfIterator implements Iterator {
    // ˅
    
    // ˄

    private index: number;

    private readonly bookShelf: BookShelf;

    constructor(bookShelf: BookShelf) {
        // ˅
        this.index = 0;
        this.bookShelf = bookShelf;
        // ˄
    }

    hasNext(): boolean {
        // ˅
        return this.index < this.bookShelf.numberOfBooks;
        // ˄
    }

    next(): any {
        // ˅
        const book: Book = this.bookShelf.getAt(this.index);
        this.index++;
        return book;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
