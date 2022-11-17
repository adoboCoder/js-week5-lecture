// examples of stacks & queues
// stacks LIFO - Last In, First Out
// stacks uses push() to add items, pop() to remove items
// queues FIFO - First In, First Out
// queues uses unshift() to add items, shift to remove items
let books = ["book1", "book2", "book3"];
console.log("current books");
displayBooks(books);


// add book4 using push()
books.push("book4");
console.log("\n\nBooks after push()");
displayBooks(books);

// remove item using pop()
books.pop();
console.log("\n\nBooks after pop()");
displayBooks(books);


// add book5 using unshift()
console.log("\n\nBooks after unshift()");
books.unshift("book5");
displayBooks(books);

// remove item using shift()
console.log("\n\nBooks after shift()");
books.shift();
displayBooks(books);


// function that displays all books in the array
function displayBooks(bookTitles) {
    for(let i = 0; i < bookTitles.length; i++){
        console.log("bookTitles[" + i + "]: " + bookTitles[i])
    }
}