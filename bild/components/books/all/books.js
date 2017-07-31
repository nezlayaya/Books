import {getBooks} from '../service';

books();
export default function books (  ) {

    var temporary = [];

    let promise = new Promise((resolve, reject) => {
        resolve(getBooks());
    });

    promise
        .then(
            result => {
                createListBooks(result);
                temporary = result;
            },
            error => {
                console.log("Rejected: " + error);
            }
        );


    function createListBooks(data) {
        var container = document.querySelector('.books');
        data.forEach((book) => {
            let item = document.createElement('div');
            let title = document.createElement('a');
            title.innerHTML = book.title;
            title.setAttribute('href', '../detail/detailBookPage.html?'+book._id);
            item.appendChild(title);
            container.appendChild(item);
        })
    }

    function createFilters(arrayFilters) {
        const filtersBlock = document.querySelector('.filters');
        arrayFilters.forEach((filter) => {
            let btn = document.createElement('button');
            btn.innerHTML = filter;
            btn.addEventListener('click', filterData);
            filtersBlock.appendChild(btn);
        })
    }

    function filterData() {
        let value = this.innerHTML;
        let container = document.querySelector('.books');

        let newArray = temporary.filter((book) => {
            return value === book.genre;
        });
        container.innerHTML = '';
        createListBooks(newArray);
    }

    createFilters(['Домоводство', 'Триллеры']);
}
