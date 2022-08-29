function createLibrary (libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
}

function addBook(library, book) {
  if(library.shelves.hasOwnProperty('fantasy') === true && book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)}
  if(library.shelves.hasOwnProperty('fiction') === true && book.genre === 'fiction') {
    library.shelves.fiction.push(book)}
  if(library.shelves.hasOwnProperty('nonFiction') === true && book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book)}
}


function checkoutBook(library, book, genre) {
  var shelf = library.shelves[genre]
  for (var i = 0; i < shelf.length; i++)
    {
        if (shelf[i].title === book)
        {shelf.splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}`}
      }
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
    }






module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
