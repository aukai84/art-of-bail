const winston = require('winston');
const moment = require('moment');
const mongoose = require('mongoose');
const Bail = require('../models/case.js');
const config = require('../config.js');
const sid = config.twilio_sid;
const tok = config.twilio_token;
const client = require('twilio')(sid, tok);


module.exports = function() {

    mongoose.connect('localhost:27017/art-of-bail');

    var logger = new(winston.Logger)({
        transports: [
            new(winston.transports.Console)(),
            new(winston.transports.File)({ filename: 'sms-sent.log' })
        ]
    });

    logger.log('info', 'Scheduler launched at: ' + moment());

    //search DB for court dates tomorrow
    //search DB for court dates +7 days from today

    //hardcoded for trial. replace w/ defendantPhone in prod.
    const defendantPhone = '8082060379';


    const cursor = Bail.find().cursor();

    cursor.on('data', function(doc) {

        doc.courtDatesList.forEach(function(courtDate) {
            if (moment().add(1, 'days').isSame(courtDate.date, 'day')) {

                let textBody = doc.defendantName + ' has a court date tomorrow, at ' + courtDate.time + ', ' + courtDate.date;
                console.log(courtDate);
                console.log('your courtDate is tomorrow.');
                sendSms(defendantPhone, doc.cosignerPhone, textBody);
            }

            if (moment().add(7, 'days').isSame(courtDate.date, 'day')) {
                let textBody = doc.defendantName + ' has a court date in 7 days. ' + courtDate.date + ', at ' + courtDate.time;
                console.log(courtDate);
                console.log('your courtDate is in 7 days.');
                sendSms(defendantPhone, doc.cosignerPhone, textBody);
            }
        }, this);
    });
    cursor.on('close', function() {
        mongoose.disconnect();
    });


    //courtInfo = defendantName + desc + date&time
    const sendSms = function(defendantPhone, cosignerPhone, textBody) {
        //send to defendant
        client.messages
            .create({
                to: '+1' + defendantPhone,
                from: '+18087252356',
                body: textBody,
            })
            .then((message) => console.log(message.sid));

        //send to cosigner (twilio does not spport multiple 'to' #s).
        /*client.messages
            .create({
                to: '+1' + cosignerPhone,
                from: '+18087252356',
                body: textBody,
            })
            .then((message) => console.log(message.sid));
        */

        logger.log('info', textBody, '. SENT TO: ' + defendantPhone, ', ' + cosignerPhone);
    };

}
