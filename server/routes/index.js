const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('Welcome to art of bail!')
});

router.post('/contact', function(req, res, next) {
    res.send('/the contact form was submitted.');
});

router.use('/admin', require('./admin'));
router.use('/client-portal', require('./client-portal'));

module.exports = router;