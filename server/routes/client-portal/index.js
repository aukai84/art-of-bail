const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('this is where a client enters their case #')
});

//does this need to be password protected ? 
//ex: enter case number + a password
router.get('/:caseNumber', function(req, res, next) {
    res.send('you entered case number: ' + req.params.caseNumber);
});

module.exports = router;