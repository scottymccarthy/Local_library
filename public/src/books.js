function findAuthorById(authors, id) {
return accounts.find((author) => author.id === id)}

function findBookById(books, id) {
return accounts.find((books) => book.id === id}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book)=> book.borrows.some((borrow) => 
borrow.retured === false));

let returned = books.filter((book) => 
book.borrows.every((borrow) => borrow.returned === true));
//return array with all books borrowed, and another with books returned
return [[...borrowed], [...returned]];
}

function getBorrowersForBook(book, accounts) {
  let total = [];
book.borrows.map((borrow) => {
  let account = accounts.find((account) => account.id === borrow.id);
  account ["returned"] = borrow.returned;
  total.push(account);
});
return total.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
