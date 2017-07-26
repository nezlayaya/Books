
    $.get( "http://localhost:3000/users", function( data ) {
        console.log(data);
        createProfile(data);
    });

function createElement ( data ) {
    var username = document.querySelector('.profile-name');
    username.innerHTML = data[0].username;
}

