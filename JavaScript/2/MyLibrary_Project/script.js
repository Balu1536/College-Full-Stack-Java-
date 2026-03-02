
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function getBooks() {
    if (!localStorage.getItem("books")) {
        const books = [
            {id:1,title:"The Great Gatsby",author:"F. Scott Fitzgerald",category:"Fiction",status:"Available"},
            {id:2,title:"Brief History of Time",author:"Stephen Hawking",category:"Science",status:"Available"},
            {id:3,title:"Sapiens",author:"Yuval Noah Harari",category:"History",status:"Available"}
        ];
        localStorage.setItem("books", JSON.stringify(books));
    }
    return JSON.parse(localStorage.getItem("books"));
}

function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
}

function issueBook(id) {
    let books = getBooks();
    let issued = JSON.parse(localStorage.getItem("issued")) || [];
    let book = books.find(b => b.id === id);
    if (book && book.status === "Available") {
        book.status = "Issued";
        issued.push({...book, issueDate: new Date().toLocaleDateString()});
        saveBooks(books);
        localStorage.setItem("issued", JSON.stringify(issued));
        alert("Book Issued Successfully!");
        location.reload();
    }
}

function returnBook(id) {
    let books = getBooks();
    let issued = JSON.parse(localStorage.getItem("issued")) || [];
    books.find(b => b.id === id).status = "Available";
    issued = issued.filter(b => b.id !== id);
    saveBooks(books);
    localStorage.setItem("issued", JSON.stringify(issued));
    alert("Book Returned Successfully!");
    location.reload();
}
