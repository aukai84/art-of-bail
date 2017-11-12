const BailCase = require('../case.js');
const mongoose = require('mongoose');
const moment = require('moment');

mongoose.connect('localhost:27017/art-of-bail');

//arthur would select a date from a calendar object in the UI before submitting the request to start this case.
//random dates
const payment = '2018-1-20';
const payment2 = '2018-10-12';
const payment3 = '2018-3-31';

/*arbitrary*/
const courtDate1 = '2017-11-12';
const courtDate2 = '2017-11-18';
/*
bailCase1: simple,
bailCase2: simple,
bailCase3: no cosigner info
bailCase4: simple
*/

/* USE in courtDatesList as a courtDate object: { desc: { type: String }, date: { type: Date } }
    
*/

const bails = [
    new BailCase({
        defendantName: 'Keegan Famouss',
        defendantPhone: '808-555-1234',
        cosignerName: 'Aukai Tyrell',
        cosignerPhone: '808-555-4321',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 5000,
        totalBailOutstanding: 3000,
        BailPaymentDueDate: payment,
        courtDatesList: [{ desc: 'first court date', date: courtDate1, time: '8:00am' }, { desc: 'second court date', date: courtDate2, time: '9:00am' }]
    }),
    new BailCase({
        defendantName: 'Leia Janell',
        defendantPhone: '808-206-0379',
        cosignerName: 'Jennessa',
        cosignerPhone: '808-603-4321',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 3000,
        totalBailOutstanding: 3000,
        BailPaymentDueDate: payment2,
        courtDatesList: [{ desc: '2nd second court date', date: courtDate2, time: '8:00am' }, { desc: '2nd first court date', date: courtDate1, time: '9:00am' }]

    }),
    new BailCase({
        defendantName: 'Amos G',
        defendantPhone: '808-206-0379',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 50,
        totalBailOutstanding: 0,
        BailPaymentDueDate: payment3
    }),
    new BailCase({
        defendantName: 'Austin Boston',
        defendantPhone: '808-206-0379',
        cosignerName: 'Aukai Tyrell',
        cosignerPhone: '808-555-4321',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 10000,
        totalBailOutstanding: 4500,
        BailPaymentDueDate: payment,
        courtDatesList: [{ desc: '4th second court date', date: courtDate2, time: '8:00am' }, { desc: '4th first court date', date: courtDate1, time: '9:00am' }]

    }),
];

done = 1;
for (var i = 0; i < bails.length; i++) {
    bails[i].save(function(err, result) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            done++;
            if (done === bails.length) {
                exit();
            }
        }
    });
}

function exit() {
    mongoose.disconnect();
}