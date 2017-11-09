const express = require('express');
const router = express.Router();

const Bail = require('../../../models/case');

//get list of all cases
router.get('/', function(req, res, next) {
    Bail.find(function(err, bails) {
        res.json(bails);
    });
});

/*post new case
//pass case as object on req.body all fields optional, but we should require certain fields to submit the form.
newCase: {
        defendantName: STRING,
        defendantPhone: STRING,
        cosignerName: STRING,
        cosignerPhone: STRING,
        stateCaseLink: STRING,
        totalBailAmount: NUMBER,
        totalBailOutstanding: NUMBER,
        BailPaymentDueDate: DATE
}
*/
router.post('/new-case', function(req, res, next) {

    let newCase = new Bail(req.body.newCase);

    newCase.save(function(err, result) {
        if (err) {
            console.log(err);
            res.send('error adding case.');
        } else {
            console.log('new case added.');
            res.json({case: result, message: "new case created!"});
        }
    });
});



//update case

//delete case




module.exports = router;
