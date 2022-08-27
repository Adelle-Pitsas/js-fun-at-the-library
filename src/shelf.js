function shelfBook(book, shelf1) {
  if (shelf1.length < 3) {
    return shelf1.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
      if(shelf[i].title === title) {
        return shelf.splice(i, 1)
      }
    }
  }


function listTitles(shelf2) {
  var list = [];
  for (var i=0; i<shelf2.length; i++) {
    list.push(shelf2[i].title)
  }
    return list.join(', ')
}

function searchShelf(shelf3, bookTitle) {
  for (var i = 0; i < shelf3.length; i++)
  {
    if (shelf3[i].title === bookTitle) {
      return true }
  }
    return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
