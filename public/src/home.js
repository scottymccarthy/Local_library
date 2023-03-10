function getTotalBooksCount(books) {
  return countItems(books);
}

function getTotalAccountsCount(accounts) {
  return countItems(accounts);
}

function getBooksBorrowedCount(books) {
   //reduce method for amount books not yet returned in collection
return books.reduce((total, {borrows}) => {
  const amount = borrows[0];
  //if book is checked out, increment the total
  if (!amount.returned){
    total++}
    return total;
  }, 0);
}

function getMostCommonGenres(books) {
  let total = [];
let common = books.map((book) => book.genre);
//map over total and check if each genre repeats in the array
common.map((genre) => {
  //findIndex() to find if names match
  const count = total.findIndex((match) => match.name === genre);
  if (count >= 0){
     //increase count if it exists
    total[count].count = total[count].count +1;
  } else {
    //else push into new array
    total.push({name: genre, count: 1});
  }
})
  //sort top five from most common to least
  total.sort((genreA,genreB) => genreB.count - genreA.count);
    if(total.length > 5){
      return total.slice(0,5);
    }
  return total;
}

function getMostPopularBooks(books) {
    //map method for new array of books with 'name' and 'count' keys/values
let total = books.map((book) => {
  return {name: book.title, count: book.borrows.length};
});
//sort() 'count' values from most to least, slice() method for top five
return total.sort((bookA, bookB) => 
(bookA.count < bookB.count ? 1 : -1)).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let total = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
      }
    });
    total.push(theAuthor);
  });
  return total.sort((a, b) => b.count - a.count).slice(0, 5);
}
//create helper function
function countItems(item) {
  return item.length;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
