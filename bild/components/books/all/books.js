import {getBooks} from './service';





// let promice = new Promise((resolve,reject) => {
//     let data = getBooks();
//     resolve (data);
// });
//
//
// promice.then(
//     (result) =>{
//         console.log('result', result);
//         createListBooks(result);
//     },
//        (error) =>{
//       console.log(error)
// }
// );

var temporary = [];

$.get("http://localhost:3001/books",function ( data ) {
    createListBooks(data);

    var temporary = data;
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


function createFilters ( arrayFilters ) {
    const filtersBlock = document.querySelector('.filters');
    arrayFilters.forEach((filter)=>{
        let btn = document.createElement('button');
        btn.innerHTML = filter;
        btn.addEventListener('click', filterData);
        filtersBlock.appendChild(btn);
    })
}

function filterData () {
   let value = this.innerHTML;
   let container = document.querySelector('.books');
   let newArray = temporary.filter((book) =>{
       return value === book.genre;
   });
   container.innerHTML = '';
   createListBooks(newArray);
}


createFilters(['Военное дело', 'Драматургия']);