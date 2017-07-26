
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
Profile page
<div class="wrapper row3">
    <main class="hoc container clear">
        <div class="profile-name">
            <h1>Alina</h1>
            <h2></h2>
        </div>
    </main>
</div>
<script src="../../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../../dist/all.js"></script>
</body>
</html>



    $.get( "http://localhost:3000/users", function( data ) {
        console.log(data);
        createProfile(data);
    });

function createElement ( data ) {
    var username = document.querySelector('.profile-name');
    username.innerHTML = data[0].username;
}

