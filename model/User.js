var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testdb',{ useNewUrlParser: true });
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');