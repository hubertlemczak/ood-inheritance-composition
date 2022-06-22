const LibraryItem = require('./LibraryItem');

class Newspaper extends LibraryItem {
  getAll() {
    return this;
  }

  checkIn() {
    throw new Error('newspapers are not available for loan');
  }

  checkOut() {
    throw new Error('newspapers are not available for loan');
  }
}

module.exports = Newspaper;
