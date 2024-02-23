//Develop a system to manage library resources.
//Define interfaces for books with properties like title, author, genre, etc.
//Implement functions to add new books, remove books, update book details,
//search for books by title or author, and manage borrowing and returning books.

interface Book{
    title: string;
    author: string;
    genre?: string;
}

interface Library{
    books: Book[]
}

function addBook(AddIn:Library , newBook:Book):void{
    AddIn.books.push(newBook)
}

function removeBook(RemoveFrom:Library , BookTitle:string):void{
    RemoveFrom.books=RemoveFrom.books.filter((book) => book.title !== BookTitle)
}



var Lib : Library = {
    books:[
        {title: 'book' , author: 'writer'}
    ]
}

addBook(Lib, {title: 'ABC', author: 'XYZ'})
removeBook(Lib , 'book')

console.log(Lib)