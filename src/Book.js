const LibraryItem = require('./LibraryItem');

class Book extends LibraryItem {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Book;
