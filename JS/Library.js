"use strict";
//Develop a system to manage library resources.
//Define interfaces for books with properties like title, author, genre, etc.
//Implement functions to add new books, remove books, update book details,
//search for books by title or author, and manage borrowing and returning books.
function addBook(AddIn, newBook) {
    AddIn.books.push(newBook);
}
function removeBook(RemoveFrom, BookTitle) {
    RemoveFrom.books = RemoveFrom.books.filter((book) => book.title !== BookTitle);
}
var Lib = {
    books: [
        { title: 'book', author: 'writer' }
    ]
};
addBook(Lib, { title: 'ABC', author: 'XYZ' });
removeBook(Lib, 'book');
console.log(Lib);
