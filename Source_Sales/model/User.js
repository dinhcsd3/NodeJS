var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//var bcrypt = require('bcryptjs');

var User = new Schema({
 fullname 		: String,
 img 			: String,
 email 			: String,
 password 		: String,

},{collection : 'user'});

 //hashing a password before saving it to the database
/* User.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });  */

module.exports = mongoose.model('User', User);