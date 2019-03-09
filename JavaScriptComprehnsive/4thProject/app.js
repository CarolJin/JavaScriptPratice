function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){}

UI.prototype.addBooksToList = function(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
`;
    list.appendChild(row);
};

UI.prototype.resetFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

function addBookFromUI(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    ui.addBooksToList(book);
    ui.resetFields();
    e.preventDefault();
}