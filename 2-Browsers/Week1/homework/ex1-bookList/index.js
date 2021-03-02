//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  const ulBook = document.createElement('ul');

  books.forEach((book) => {
    const liBook = document.createElement('li');
    const parBook = document.createElement('p');
    parBook.innerText = `${book.title} - ${book.author}`;

    liBook.appendChild(parBook);

    const imgBook = document.createElement('img');
    if (book.title === 'The Design of Everyday Things') {
      imgBook.src = 'assets/the_design_of_everyday_things.jpg';
    } else if (book.title === 'The Most Human Human') {
      imgBook.src = 'assets/the_most_human_human.jpg';
    } else if (book.title === 'The Pragmatic Programmer') {
      imgBook.src = 'assets/the_pragmatic_programmer.jpg';
    }
    imgBook.alt = book.title;
    liBook.appendChild(imgBook);

    if (book.alreadyRead === false) {
      liBook.style.backgroundColor = 'red';
    } else {
      liBook.style.backgroundColor = 'green';
    }

    ulBook.appendChild(liBook);
  });
  return ulBook;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
