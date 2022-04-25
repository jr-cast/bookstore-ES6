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
