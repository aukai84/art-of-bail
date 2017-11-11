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
            res.json({ case: result, message: "new case created!" });
        }
    });
});



//update case
/* 
Pass req: updateCase { defendantName: blah, ...} 
any field in the case model can be passed here and will be updated in the db.
need to explore support for CRUD on courtDates array on each case.
*/
router.put('/:id', function(req, res, next) {
    let updateCase = req.body.updateCase;

    Bail.findByIdAndUpdate(req.params.id, updateCase, { new: true }, function(err, bail) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(bail);
        }
    });
});

//delete case
router.delete('/remove/:id', function(req, res, next) {
    Bail.findByIdAndRemove(req.params.id, function(err, bail) {
        if (err) {
            res.status(500).send(err);
        } else {
            let message = {
                message: 'delete successful',
                id: bail.id
            }
            res.status(200).send(message);
        }
    });
});



module.exports = router;