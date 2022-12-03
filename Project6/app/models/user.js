const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    login_name: String,
    password: String
});

var User = mongoose.model('users', userSchema);

module.exports = User;