class book {
    constructor(title, author, pages, read, del) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.del = del;
    }
}

//store
class store {
    static getBooks() {
        let books;
        localStorage.getItem('books') === null ? books = [] : books = JSON.parse(localStorage.getItem('books'));

        return books;
    }
    static addBook(book) {
        const books = store.getBooks();
        books.push(book);

        console.log(book)

        localStorage.setItem('books', JSON.stringify(books));
    }
    static updateBookStatus(bookTitle, status) {
        const books = store.getBooks();

        books.forEach((book) => { 
            if(book.title !== bookTitle) return;
            book.status = status;
        });

        localStorage.setItem('books', JSON.stringify(books))
        }
    static deleteBook(bookTitle) {
        const books = store.getBooks();

        books.forEach((book, index) => { book.title === bookTitle ? books.splice(index, 1) : books});
        localStorage.setItem('books', JSON.stringify(books));  
    }
}

//UI Class
class UI {

    static displayBooks() {
        const books = store.getBooks()
        UI.usageTip();
        books.forEach((book) => UI.addBookToLibrary(book))
    }

    static activateBtn() {
        function removeTransition(e) {
            if(e.propertyName !== 'transform') return
            e.target.classList.remove('clicked')
        }
        const actionBtns = document.querySelectorAll('button');
        actionBtns.forEach(btn => btn.addEventListener('transitioned', removeTransition))
    }

    static usageTip() {
        const main = document.querySelector('main');
        const usageTipPrompt = document.querySelector('.usage-tip');

        if (main.children.length !== 0) {
            main.classList.add('usage-tip-active');
            usageTipPrompt.classList.add('animated', 'spaceInLeft');
            usageTipPrompt.classList.remove('disabled');

        } if (main.children.length > 1) {
            main.classList.remove('usage-tip-active');
            usageTipPrompt.classList.remove('spaceInLeft')
            usageTipPrompt.classList.add('disabled')
        }
    }

    static tryBooks() {
        const sampleBooks = [
            {
                title: 'The Lion and the Jewel',
                author: 'Prof Wole Soyinka',
                pages: 312,
                status: false
            },
            {
                title: 'Things Fall Apart',
                author: 'Chinua Achebe',
                pages: 312,
                status: false
            },
            {
                title: 'Sozaboy',
                author: 'Ken Saro--Wiwa',
                pages: 312,
                status: false
            }
            {
                title: 'The Life Changer',
                author: 'Khadija Abubakar Jalli',
                pages: 82,
                status: false
            }
        ]

        const books = sampleBooks;

        setTimeout(() => {books.forEach((book) => {
            UI.addBookToLibrary(book);
            store.addBook(book)})
        }, 200)
    }

    static addBookToLibrary(book) {
        const librarySection = document.querySelector('main');

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card', 'animated', 'vanishIn');

        if(book.status === true) {
            book.status = 'Read';
            book.process = 'success';
            book.summary = 'Completed'
        }
        else {
            book.status = 'Not Read';
            book.process = 'failure';
            book.summary = 'On progress'
        };

        bookCard.innerHTML = `
        <div class='description'>
        <h2>${book.title}</h2>
        <h3>by ${book.author}</h3>
        <p>Pages: ${book.pages}</p>
    </div>
    <div class="action-btns">
        <button class="read read-status ${book.process}">${book.status}</button>
        <button class="delete">Delete</button>
    </div>
    <div class="status">${book.summary}</div>`
    }
}





/*const main = document.getElementById('main');
const subjects = [
    Mathematics,
    Chemistry,
    Physics,
    Biology,
    Literature,
    History,
    Economics,
    Computer-Science,
    Technical-Drawing,
    
    color: #010130;
    #fda172;
];*/

//const book1 = 

/*const library = (/*book, navbar, add()) => {
    for (let i=0; i<5; i++) {

    /*const navbar = document.createElement('nav');
    navbar.classList.add('nav')

    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('ul')

    const list = document.createElement('li');
    list.classList.add('li')

    const address = document.createElement('a');
    address.classList.add('a')*/
    
    /*const book = document.createElement('div');
    book.classList.add('book');

    const name = document.createElement('p');
    name.classList.add('name');

    const author = document.createElement('p');
    author.classList.add('author');
    
    const pages = document.createElement('p');
    pages.classList.add('pages');
    
    const read = document.createElement('button');
    read.classList.add('read');                
    read.innerText = 'Read'

    let isClicked = false;
    read.onclick = function() {
        if(isClicked) {
            read.style.backgroundColor = 'white';
            isClicked = false
        } else {
            read.style.backgroundColor = '#77dd77';
            isClicked = true
        }
    }

    const del = document.createElement('button');
    del.classList.add('del');
    del.innerText = 'Delete'

    
    let nowClicked = false;
    del.onclick = function() {
        if(nowClicked) {
            del.style.backgroundColor = 'white';
            nowClicked = false
        } else {
            del.style.backgroundColor = '#e3242b';
            nowClicked = true
        }
    }

