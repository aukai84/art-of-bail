const BailCase = require('../case.js');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/art-of-bail');

//arthur would select a date from a calendar object in the UI before submitting the request to start this case.
//random dates
const payment = new Date(2018, 1, 20);
const payment2 = new Date(2018, 10, 12);
const payment3 = new Date(2018, 3, 31);


/*
bailCase1: simple,
bailCase2: simple,
bailCase3: no cosigner info
bailCase4: simple
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
        BailPaymentDueDate: payment.getTime()
    }),
    new BailCase({
        defendantName: 'Leia Janell',
        defendantPhone: '808-603-1234',
        cosignerName: 'Jennessa',
        cosignerPhone: '808-603-4321',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 3000,
        totalBailOutstanding: 3000,
        BailPaymentDueDate: payment2.getTime()
    }),
    new BailCase({
        defendantName: 'Amos G',
        defendantPhone: '808-555-1234',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 50,
        totalBailOutstanding: 0,
        BailPaymentDueDate: payment3.getTime()
    }),
    new BailCase({
        defendantName: 'Austin Boston',
        defendantPhone: '808-555-1234',
        cosignerName: 'Aukai Tyrell',
        cosignerPhone: '808-555-4321',
        stateCaseLink: 'http://ekokua.com/notRealLink',
        totalBailAmount: 10000,
        totalBailOutstanding: 4500,
        BailPaymentDueDate: payment.getTime()
    }),
];

done = 0;
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