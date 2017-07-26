$.get("http://localhost:3001/books",function ( data ) {
    console.log(data);
    createListBooks(data);
});

function createListBooks ( data ) {
    var container = document.querySelector('.books');

    data.forEach((book) => {
        let item = document.createElement('div');
        let title = document.createElement('a');
        title.innerHTML = book.title;
        title.setAttribute('href', 'detailBookPage.html?'+book._id);
        item.appendChild(title);
        container.appendChild(item);
    });

}