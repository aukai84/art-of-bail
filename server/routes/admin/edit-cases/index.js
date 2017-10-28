const express = require('express');
const router = express.Router();

const Bail = require('../../../models/case');

//get list of all cases
router.get('/', function(req, res, next) {
    Bail.find(function(err, bails) {
        res.json(bails);
    });
});

//post new case

//update case

//delete case



module.exports = router;