const displayElements = () => {
  if (localStorage.Books) {
    for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
      const ul = document.getElementById('bookShelf');
      ul.className = 'flex flex-col justify-center items-center bg-slate-200';
      const li = document.createElement('li');
      li.className = 'item border-b-2 p-6 border-slate-500 m-1 w-full flex flex-col justify-between bg-gray-100 rounded-lg hover:bg-blue-100 lg:flex-row lg:justify-between lg:items-center';
      li.id = `${i}`;
      li.style.listStyle = 'none';
      const cont = document.createElement('div');
      cont.className = 'titleAuthor flex w-full p-4 text-xl justify-center lg:w-1/2';
      const addTitle = document.createElement('p');
      addTitle.className = 'font-bold text-md flex pt-1 pr-1';
      addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
      addTitle.innerHTML += ' by';
      cont.appendChild(addTitle);
      const addAuthor = document.createElement('p');
      addAuthor.className = 'font-bold text-xl pt-1';
      addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
      cont.appendChild(addAuthor);
      const rmvButton = document.createElement('button');
      rmvButton.innerHTML = 'Remove';
      rmvButton.id = `btn${i}`;
      rmvButton.className = 'rmv bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded shadow-md shadow-slate-400 text-sm lg:w-1/3';
      li.appendChild(cont);
      li.appendChild(rmvButton);
      const hr = document.createElement('hr');
      li.appendChild(hr);
      ul.appendChild(li);
    }
  }
};

export default displayElements;
