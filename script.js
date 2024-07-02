/* Basic book adding and display functionality */
const myLibrary = [];

function Book(author, title, pages, read) {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.read = read;
	this.changeStatus = function () {
		this.read = !this.read;
	};
}

function addBooktoLibrary(author, title, pages, read) {
	let newBook = new Book(author, title, pages, read);
	myLibrary.push(newBook);
}

function bookDisplay(myLibrary) {
	const container = document.querySelector("#card-container");

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	for (let i = 0; i < myLibrary.length; i++) {
		const div = document.createElement("div");
		const bookTitle = document.createElement("h3");
		const bookAuthor = document.createElement("span");
		const bookPages = document.createElement("span");
		const bookRead = document.createElement("span");
		const buttonRemove = document.createElement("button");
		const buttonRead = document.createElement("button");
		const buttonContainer = document.createElement("div");
		buttonContainer.style.display = "flex";
		buttonContainer.style.margin = "auto 5px 15px 5px";
		buttonContainer.style.gap = "30px";
		div.style.display = "flex";
		div.style.flexDirection = "column";
		//div.style.justifyContent = "center";
		div.style.alignItems = "center";
		div.style.backgroundColor = "gainsboro";
		div.style.width = "200px";
		div.style.height = "200px";
		div.style.border = "1px solid black";
		div.style.margin = "10px";
		div.setAttribute("id", `card${i}`);
		buttonRemove.textContent = "Remove";
		buttonRead.textContent = "Toggle Read Status";
		buttonRemove.addEventListener("click", () => {
			const card = document.querySelector(`#card${i}`);
			card.remove();
			myLibrary.splice(i, 1);
			bookDisplay(myLibrary);
		});
		buttonRead.addEventListener("click", () => {
			myLibrary[i].changeStatus();
			bookDisplay(myLibrary);
		});
		bookTitle.textContent = myLibrary[i].title;
		bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
		bookPages.textContent = `Page Count: ${myLibrary[i].pages}`;
		if (myLibrary[i].read === "read") {
			bookRead.textContent = "Status: Read";
		} else {
			bookRead.textContent = "Status: Unread";
		}
		div.appendChild(bookTitle);
		div.appendChild(bookAuthor);
		div.appendChild(bookPages);
		div.appendChild(bookRead);
		buttonContainer.appendChild(buttonRead);
		buttonContainer.appendChild(buttonRemove);
		div.append(buttonContainer);
		container.appendChild(div);
	}
}

addBooktoLibrary("Tolkien", "Lord of the Rings", 455, false);
addBooktoLibrary("Austen", "Pride and Prejudice", 377, true);
addBooktoLibrary("Colfer", "Artemis Fowl", 274, true);
bookDisplay(myLibrary);

/* Temp Button for adding new books */
/* 
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
*/
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog #closeButton");
const confirmButton = document.querySelector("#confirmButton");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const form = document.querySelector("#dialog-container");
// Show button opens dialog modally
showButton.addEventListener("click", () => {
	dialog.showModal();
});
// Close button closes dialog
closeButton.addEventListener("click", () => {
	dialog.close();
});
// Confirm button closes dialog and adds book
/*
confirmButton.addEventListener("click", (event) => {
	event.preventDefault(); // Dont submit to server
	console.log(inputRead.value);
	let readStatus = false;
	if (inputRead.value === "read") {
		console.log("True");
		readStatus = true;
	} else if (inputRead.value === "unread") {
		console.log("False");
		readStatus = false;
	}
	dialog.close(
		addBooktoLibrary(
			inputAuthor.value,
			inputTitle.value,
			inputPages.value,
			readStatus
		)
	); // Make new book
	bookDisplay(myLibrary);
});
*/
let log = "";

form.addEventListener(
	"submit",
	(event) => {
		event.preventDefault();
		const data = new FormData(form);
		console.log(data);
		const title = data.get("title");
		console.log(title);
		const author = data.get("author");
		console.log(author);
		const pages = data.get("pages");
		console.log(pages);
		const read = data.get("read");
		console.log(read);
		addBooktoLibrary(author,title,pages,read);
		bookDisplay(myLibrary);
		dialog.close();
	}
);