const express = require('express');
const router = express.Router();
const config = require('../../config.js');
const passport = require('passport');
const passportService = require('./service/passport');
const jwt = require('jwt-simple');

const signInAdmin = passport.authenticate('local', { session: false });
const authenticatedAdmin = passport.authenticate('jwt', { session: false });

//test route, should be handled on client.
router.get('/', function(req, res, next) {
    res.send('default admin homepage.')
});

//test route, should be handled on client w/ form for signin.
router.get('/signin', function(req, res, next) {
    res.send(' admin sign in route.');
});

//admin signin, check user Credentials, if PASS-> create token
//pass username and password as params.
router.post('/signin', signInAdmin, function(req, res, next) {
    const timestamp = new Date().getTime();
    const token = jwt.encode({ sub: req.user.id, iat: timestamp, admin: true }, config.secret);
    res.send({ token: token });

});

//test authenticatedAdmin check.
router.get('/testadmin', authenticatedAdmin, function(req, res, next) {
    res.send('congrats you are authenticated.');
});

//edit-cases routes must be authenticated.
router.use('/edit-cases', authenticatedAdmin, require('./edit-cases'));

module.exports = router;