var express = require('express');
var router = express.Router();
var UserModel = require('../mongoose').UserModel;
var api = require('../mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req, res)
   return UserModel.find(function (err, users) {
      if (!err) {
          console.log(users);
          return res.send(users);
      } else {
          res.statusCode = 500;
          log.error('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
      }
  });
});

/* Создание пользователя */
router.post('/login', function(req, res, next) {
    // if (req.session.user) return res.redirect('/')

    api.checkUser(req.body)
        .then(function(user){
            if(user){
                req.session.user = {id: user._id, name: user.name}
                res.redirect('/')
            } else {
                return next(error)
            }
        })
        .catch(function(error){
            return next(error)
        })

});

router.post('/', function(req, res, next) {
    api.createUser(req.body)
        .then(function(result){
            console.log("User created")
        })
        .catch(function(err){
            if (err.toJSON().code == 11000){
                res.status(500).send("This email already exist")
            }
        })
});

router.post('/logout', function(req, res, next) {
    if (req.session.user) {
        delete req.session.user;
        res.redirect('/')
    }
});

module.exports = router;
