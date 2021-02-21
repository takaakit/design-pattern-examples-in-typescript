// ˅
'use strict';

import { Aggregate } from './aggregate';
import { Iterator } from './iterator';
import { Book } from './book';
import { BookShelfIterator } from './book-shelf-iterator';

// ˄

export class BookShelf implements Aggregate {
    // ˅
    
    // ˄

    private _numberOfBooks: number;

    private readonly books: Array<Book>;

    constructor(maxsize: number) {
        // ˅
		this.books = new Array<Book>(maxsize);
		this._numberOfBooks = 0;
        // ˄
    }

    iterator(): Iterator {
        // ˅
		return new BookShelfIterator(this);
        // ˄
    }

    getAt(index: number): Book {
        // ˅
		return this.books[index];
        // ˄
    }

    add(book: Book): void {
        // ˅
		this.books[this._numberOfBooks] = book;
		this._numberOfBooks++;
        // ˄
    }

    get numberOfBooks(): number {
        // ˅
        return this._numberOfBooks;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
