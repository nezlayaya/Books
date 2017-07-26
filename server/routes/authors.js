var express = require('express');
var router = express.Router();
var authors = require('../jsons/authors.json');

router.get('/', function(req, res, next) {
  res.send(authors);
});

module.exports = router;
