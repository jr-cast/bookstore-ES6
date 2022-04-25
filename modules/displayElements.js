export default function displayElements() {
  if (localStorage.Books) {
    for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
      const ul = document.getElementById('bookShelf');
      const li = document.createElement('li');
      li.className = 'item';
      li.id = `${i}`;
      li.style.listStyle = 'none';
      const cont = document.createElement('div');
      cont.className = 'titleAuthor';
      const addTitle = document.createElement('p');
      addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
      addTitle.innerHTML += ' by ';
      cont.appendChild(addTitle);
      const addAuthor = document.createElement('p');
      addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
      cont.appendChild(addAuthor);
      const rmvButton = document.createElement('button');
      rmvButton.innerHTML = 'Remove';
      rmvButton.id = `btn${i}`;
      rmvButton.className = 'rmv';
      li.appendChild(cont);
      li.appendChild(rmvButton);
      const hr = document.createElement('hr');
      li.appendChild(hr);
      ul.appendChild(li);
    }
  }
}
