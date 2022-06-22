const Article = require('../src/Article');
const Book = require('../src/Book');
const Author = require('../src/Author');
const Newspaper = require('../src/Newspaper');

describe('Author', () => {
  let author;
  beforeEach(() => {
    author = new Author('Author Name', 12294532891);
  });

  it('article has author', () => {
    const article = new Article('My Article', author);
    expect(article.author.name).toEqual('Author Name');
  });

  it('book has author', () => {
    const book = new Book('My Book', author);
    expect(book.author.name).toEqual('Author Name');
  });
});
