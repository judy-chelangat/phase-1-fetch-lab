function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(data => renderBooks(data))


  function renderBooks(books){
      const main = document.querySelector('main');
      books.forEach(book => {
        const heading = document.createElement('h2');
        h2.textContent = book.name;
        main.appendChild(heading);
      })
  
  }
 
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

});



