function findAuthorById(authors, id) {
return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
 return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let Returned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  let Borrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  let total = [[...Borrowed], [...Returned]];
  return total;
}

function getBorrowersForBook(book, accounts) {
  let total = [];
book.borrows.map((borrow) => {
  let account = accounts.find((account) => account.id === borrow.id);
  account ["returned"] = borrow.returned;
  total.push(account);
});
return total.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
