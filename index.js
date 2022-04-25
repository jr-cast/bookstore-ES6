// Import BooksRack class
import { BooksRack } from './modules/mainClasses.js';

// Import AddNewBook Function
import { addNewBook } from './modules/addBookFunc.js';

// Import DisplayElements Function
import displayElements from './modules/displayElements.js';

// Import anchors functions
import { checkListFunc, addNewFunc, contactFunc } from './modules/anchorFunctions.js';

// Import luxon
import { DateTime } from './modules/luxon.js';

// Populate local storage collection with user entries
const storedBooks = new BooksRack();
storedBooks.UpdateRack();
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addNewBook);

// Display localStorage Books Collection entries
displayElements();

// Remove books from collection and display
for (let i = 0; i < document.getElementsByClassName('rmv').length; i += 1) {
  const rmvButton = document.getElementById(`btn${i}`);
  const titleName = storedBooks.Books[i].title;
  const list = document.getElementById(`${i}`);
  rmvButton.addEventListener('click', () => {
    const filtered = storedBooks.Books.filter((Books) => Books.title !== titleName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Books', stringData);
    list.remove();
    window.location.reload();
  });
}

// Anchors in Nav added functionality
document.getElementById('list').addEventListener('click', checkListFunc);
document.getElementById('new').addEventListener('click', addNewFunc);
document.getElementById('cont').addEventListener('click', contactFunc);

// Date
const date = DateTime.now();
document.getElementById('date').innerHTML = date;
