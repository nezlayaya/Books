var mongoose    = require('mongoose');
var log         = require('./log')(module);

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

 var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String},
    birthday: { type: Date, default: Date.now }
});

// User API
var UserModel = mongoose.model('User', UserSchema);


exports.createUser = function(userData){
    var user = {
        username: userData.username,
        password: hash(userData.password)
    }
    return new UserModel(user).save()
}

exports.getUser = function(id) {
    return UserModel.findOne(id)
}

exports.checkUser = function(userData) {
    return UserModel
        .findOne({username: userData.username})
        .then(function(doc){
            if ( doc.password == hash(userData.password) ){
                console.log("User password is ok");
                return Promise.resolve(doc)
            } else {
                return Promise.reject("Error wrong")
            }
        })
}

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64')
}



module.exports.UserModel = UserModel;
