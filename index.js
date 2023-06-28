function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(`https://anapioficeandfire.com/api/books`)
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    renderBooks(data)})


  function renderBooks(books){
      const main = document.querySelector('main');
      books.forEach(book => {
        const heading = document.createElement('h2');
        heading.textContent = book.name;
        main.appendChild(heading);
      })
  
  }
 
}

document.addEventListener('DOMContentLoaded', fetchBooks);
// function getData(){
//   console.log("2. Returning instantly available data.");
//   return [{author: "Ta-Nehisi Coates"}, {author: "Cathy Park Hong"}];
// }

// function main(){
//   console.log("1. Starting Script");
//   const data = getData();
//   console.log(`3. Data is currently ${JSON.stringify(data)}`);
//   console.log("4. Script Ended");
// }

// main();
// setTimeout(() => console.log('Hello World!'), 10000); // 0 Milliseconds!!
// console.log("No, me first");



