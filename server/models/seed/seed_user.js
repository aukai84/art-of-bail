const User = require('../user.js');
const mongoose = require('mongoose');
mongoose.connect('localhost:27017/art-of-bail');

const user = new User({
    username: 'artLeeJr',
    password: 'bigBBC808'
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