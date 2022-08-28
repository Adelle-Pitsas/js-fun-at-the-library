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





// function checkoutBook(library, book, genre) {
//   var listOfGenres = Object.keys(library.shelves);
//   console.log(library.shelves.fiction.includes(book.title))
//   for (var i = 0; i < listOfGenres.length; i++)
//     {
//         if (listOfGenres[i] === 'fiction' && genre === 'fiction' && library.shelves.fiction.includes(book) === true)
//         { library.shelves.fiction.pop(book);
//         console.log('after unshelving fiction: ', library.shelves.fiction)
//         return `You have now checked out ${book} from the ${library.name}`}
//
//         if (listOfGenres[i] === 'nonFiction' && genre === 'nonFiction' && library.shelves.nonFiction.includes(book) === true)
//         { library.shelves.nonFiction.pop(book)
//         return `You have now checked out ${book} from the ${library.name}`}
//
//         if (listOfGenres[i] === 'fantasy' && genre === 'fantasy' && library.shelves.fantasy.includes(book) === true)
//         { library.shelves.fantasy.pop(book)
//         return `You have now checked out ${book} from the ${library.name}`}
//
//         else { return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
//         }
//     }
// }


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
