const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(author, title, pages, read) {
    let newBook = new Book(author, title, pages, read);
    return newBook;
}

function bookDisplay(myLibrary) {
    document.createElement()
}