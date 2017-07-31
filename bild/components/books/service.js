export function getBooks() {
    return $.get( "http://localhost:3001/books", function( data ) {
        return data;
    });
}