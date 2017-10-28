const passport = require('passport')
const User = require('../../../models/user');
const localStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../../../config');

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

<<<<<<< HEAD
passport.use(localLogin);
=======
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const adminStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            if (payload.admin) {
                done(null, user);
            } else {
                done(null, false, { message: 'you are not the admin.' });
            }
        } else {
            done(null, false);
        }
    });
});


passport.use(localLogin);
passport.use(adminStrategy);
>>>>>>> 825da1cf5858b57453a8860d48d8b6ae456c98d5
