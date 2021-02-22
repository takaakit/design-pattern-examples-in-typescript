/*
Add books in a bookshelf and display the names of the book in turn.
 */
'use strict';

import { Iterator } from './iterator';
import { BookShelf } from './book-shelf';
import { Book } from './book';

const bookShelf: BookShelf = new BookShelf(5);
bookShelf.add(new Book('Design Patterns: Elements of Reusable Object-Oriented Software'));
bookShelf.add(new Book('The Object Primer: Agile Model-Driven Development with UML 2.0'));
bookShelf.add(new Book('Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives'));
bookShelf.add(new Book('A Practical Guide to SysML: The Systems Modeling Language'));
bookShelf.add(new Book('A Pattern Language: Towns, Buildings, Construction'));

const iterator: Iterator = bookShelf.iterator();
while (iterator.hasNext()) {
    const book: Book = <Book>iterator.next();
    console.log(book.title);
}
