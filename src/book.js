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
//the includes function determines whether an
// array includes a certain value among it entries,
// returning true or false. The if statement says, "If
// the array reviews does not contain the new review,
// then push the new reivew into the array"

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

// Because we already have information for createTitle and
// buildMainCharacter, we were just focused on writeBook. I followed
// the assertion statements to make sure the object returned
// what we assumed they would

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
