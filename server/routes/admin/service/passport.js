const passport = require('passport')
const User = require('../../../models/user');
const localStrategy = require('passport-local');

const localLogin = new localStrategy(function(username, password, done) {
    console.log('username..', password)
    User.findOne({ username: username }, function(err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user);
        });
    });
});

passport.use(localLogin);
