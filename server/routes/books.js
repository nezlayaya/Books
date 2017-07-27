var express = require('express');
var router = express.Router();
var books = require('../jsons/books.json');

router.get('/', function(req, res, next) {
  res.send(books);
});

router.get('/:id', function(req, res, next) {
    books.map((book) => {

        if(book._id === req.params.id) {
            res.send(book);
            return;
        }
    })
});


module.exports = router;
