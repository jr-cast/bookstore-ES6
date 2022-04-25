const wrapper = document.getElementById('wrapper');
const addNew = document.getElementById('addBook');
const title = document.getElementById('mainTitle');
const anchor = document.getElementById('list');
const anchorNew = document.getElementById('new');
const contact = document.getElementById('contact');
const footer = document.getElementById('foot');
const cont = document.getElementById('cont');

// List
function checkListFunc() {  /* eslint-disable-line*/
  wrapper.classList.remove('hidden');
  addNew.classList.add('hidden');
  title.classList.remove('hidden');
  contact.classList.add('hidden');
  anchor.style.color = 'blue';
  anchorNew.style.color = 'black';
  cont.style.color = 'black';
  footer.classList.remove('foot');
}

// Add New
function addNewFunc() {  /* eslint-disable-line*/
  wrapper.classList.add('hidden');
  addNew.classList.remove('hidden');
  title.classList.add('hidden');
  contact.classList.add('hidden');
  anchor.style.color = 'black';
  anchorNew.style.color = 'blue';
  footer.classList.remove('foot');
  cont.style.color = 'black';
}

// Contact
function contactFunc() {
  contact.classList.remove('hidden');
  wrapper.classList.add('hidden');
  title.classList.add('hidden');
  addNew.classList.add('hidden');
  footer.classList.add('foot');
  anchor.style.color = 'black';
  anchorNew.style.color = 'black';
  cont.style.color = 'blue';
}

export { checkListFunc, addNewFunc, contactFunc};