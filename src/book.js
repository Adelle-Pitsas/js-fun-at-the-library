function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
}


function saveReview(newReview, reviews) {
  if(reviews.includes(newReview) === false) {
    return reviews.push(newReview);
  }
}


function calculatePageCount(bookTitle) {
  return bookTitle.length*20
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book =
  {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: bookTitle.length*20,
  genre: "fantasy"
  }
  return book
}


function editBook(book) {
  book.pageCount = book.pageCount * .75
  return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
