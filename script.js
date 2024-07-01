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
	for (let i = 0; i < myLibrary.length; i++) {
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
