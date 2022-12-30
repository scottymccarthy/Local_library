function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id))
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1: -1)
}
//The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has 
//two parameters, in the following order:

//- An account object.
//- An array of all book objects.

//It returns a _number_ that represents the number of times the account's
// ID appears in any book's `borrows` array.

function getTotalNumberOfBorrows(account, books) {
let accountId = account.id;
//reduce method to add total times account id appears in "borrows" array
  return books.reduce((total, {borrows}) => {
    //if any book id matches account id, increment total
    if (borrows.some((record) => record.id === accountId))
    total++;
    return total}, 0)
}


function getBooksPossessedByAccount(account, books, authors) {
  //empty array for books with author info
  let total = [];
  //if book id and account id match, and book hasn't been returned
  books.forEach((book) => { 
  if (book.borrows.find((item) => item.id === account.id && !item.returned))
  {total.push(book)
  }})
 //if author id and account id match, return author info array inside book
  total.forEach((book) => {
  let AuthorInfo = authors.find((person) => 
  person.id === book.authorId);
  book ["author"] = AuthorInfo
 })
 return total;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
