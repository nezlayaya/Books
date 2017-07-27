export function getBooks () {
    $.get("http://localhost:3001/books",function ( data ) {
        console.log(data);
       return data;
    });
}


