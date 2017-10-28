const User = require('../user.js');
const mongoose = require('mongoose');
const config = require('../../config.js');
mongoose.connect('localhost:27017/art-of-bail');

const user = new User({
    username: config.admin_user,
    password: config.admin_password
});

user.save(function(err, result) {
    if (err) {
        console.log(err);
        return next(err);
    } else {
        console.log('save successful')
    }

});

mongoose.disconnect();