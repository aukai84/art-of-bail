const express = require('express');
const router = express.Router();
const Bail = require('../../models/case');

router.get('/', function(req, res, next) {
    res.send('this is where a client enters their case #')
});

//does this need to be password protected ? 
//ex: enter case number + a password
router.get('/:caseNumber', function(req, res, next) {
    Bail.findOne({caseNumber: req.params.caseNumber}, function(err, bail){
        if(err){
            res.status(500).send(err);
        } else {
            let message = {
                message: 'Successfully found your case!',
                case: bail 
            }
            res.status(200).json(message)
        }
    })
});

module.exports = router;
