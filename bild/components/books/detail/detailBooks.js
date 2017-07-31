const id = this.location.search.slice(1);

$.get("http://localhost:3001/books/"+id, function ( data ) {
    console.log(data);
    createDetailBook(data);
});

function createDetailBook ( book ) {
    var container = document.querySelector('.detailBooks');
        let buttonForCard = document.createElement('button');
        let item = document.createElement('div');
        let title = document.createElement('h1');
        let about = document.createElement('p');
        let avatar = document.createElement('img');
        title.innerHTML = book.title;
        about.innerHTML = book.about;
        item.appendChild(title);
        item.appendChild(avatar);
        item.appendChild(about);
        item.appendChild(buttonForCard);
        buttonForCard.innerHTML = 'Купить';
        avatar.setAttribute('src', book.avatar);
        container.appendChild(item);
    };


