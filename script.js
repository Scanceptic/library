/* Basic book adding and display functionality */
const myLibrary = [];

function Book(author, title, pages, read) {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.read = read;
}

function addBooktoLibrary(author, title, pages, read) {
	let newBook = new Book(author, title, pages, read);
	myLibrary.push(newBook);
}

function bookDisplay(myLibrary) {
    const container = document.querySelector("#card-container");

    while (container.firstChild){
        container.removeChild(container.firstChild);
    };
        
	for (let i = 0; i < myLibrary.length; i++) {
		const div = document.createElement("div");
		const bookTitle = document.createElement("h3");
		const bookAuthor = document.createElement("span");
		const bookPages = document.createElement("span");
		const bookRead = document.createElement("span");
		div.style.display = "flex";
		div.style.flexDirection = "column";
		div.style.justifyContent = "center";
		div.style.alignItems = "center";
		div.style.backgroundColor = "gainsboro";
		div.style.width = "200px";
		div.style.height = "150px";
		div.style.border = "1px solid black";
        div.style.margin = "10px";
		div.classList.add(`card${i}`);
		bookTitle.textContent = myLibrary[i].title;
		bookAuthor.textContent = myLibrary[i].author;
		bookPages.textContent = myLibrary[i].pages;
		if (myLibrary[i].read) {
			bookRead.textContent = "Read";
		} else {
			bookRead.textContent = "Unread";
		}
		div.appendChild(bookTitle);
		div.appendChild(bookAuthor);
		div.appendChild(bookPages);
		div.appendChild(bookRead);
		container.appendChild(div);
	}
}

addBooktoLibrary("Tolkien", "Lord of the Rings", 455, false);
addBooktoLibrary("Austen", "Pride and Prejudice", 377, true);
addBooktoLibrary("Colfer", "Artemis Fowl", 274, true);
bookDisplay(myLibrary);

/* Form for entering book details */
const form = document.createElement("form");

/* Button for adding new books */
const btn = document.createElement("button");
const content = document.querySelector(".content");
const container = document.querySelector("#card-container");
btn.textContent = "NEW BOOK";
btn.style.margin = "50px";
btn.style.padding = "20px";
btn.style.width = "200px";
btn.style.borderRadius = "15px";
btn.style.border = "none";
btn.style.fontWeight = "700";
btn.style.backgroundColor = "green";
btn.style.color = "white";
btn.addEventListener("click", () => {
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Number of pages: ");
    let read = prompt("Read? T/F");
    addBooktoLibrary(author, title, pages, read);
    bookDisplay(myLibrary);
});
content.insertBefore(btn, container);