const id = this.location.search.slice(1);

$.get("http://localhost:3001/books/"+id, function ( data ) {
    console.log(data);
    createDetailBook(data);
});

function createDetailBook ( book ) {
    var container = document.querySelector('.detailBooks');

        let item = document.createElement('div');
        let title = document.createElement('h1');
        title.innerHTML = book.title;
        item.appendChild(title);
        container.appendChild(item);
    };
console.log(createDetailBook());
