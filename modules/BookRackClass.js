export default class BooksRack {
  constructor() {
    this.Books = [];
  }

  UpdateRack() {
    if (localStorage.Books) {
      this.Books = JSON.parse(localStorage.Books);
    }
  }
}
