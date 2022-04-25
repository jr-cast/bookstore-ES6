export class BooksRack { /* eslint-disable-line max-classes-per-file */
  constructor() { /* eslint-disable-line no-unused-vars */
    this.Books = [];
  }

  UpdateRack() {
    if (localStorage.Books) {
      this.Books = JSON.parse(localStorage.Books);
    }
  }
}

export class Book { /* eslint-disable-line max-classes-per-file */
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const bookTitle = document.getElementById('title');
const author = document.getElementById('author');
const storedBooks = new BooksRack();
storedBooks.UpdateRack();
let stringData = JSON.stringify(storedBooks.Books);
let book;

export function addNewBook() {
  if (!bookTitle.value || !author.value) {
    alert('Enter both book title and author please');
    // Display localStorage Books Collection entries
  } else {
    book = new Book(bookTitle.value, author.value);
    storedBooks.Books.push(book);
    bookTitle.value = '';
    author.value = '';
    stringData = JSON.stringify(storedBooks.Books);
    localStorage.setItem('Books', stringData);
    window.location.reload();
  }
}
