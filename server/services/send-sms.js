const mongoose = require('mongoose');
const Bail = require('../models/case.js');
const config = require('../config.js');
const sid = config.twilio_sid;
const tok = config.twilio_token;

mongoose.connect('localhost:27017/art-of-bail');

const client = require('twilio')(sid, tok);


//search DB for court dates tomorrow
//search DB for court dates +7 days from today

//call sendSms for those court dates
const defendantPhone = '8082060379';


const cursor = Bail.find({ "defendantName": "Keegan Famouss" }).cursor();

cursor.on('data', function(doc) {

    let courtInfo = doc.defendantName + ' has an upcoming court date.';

    sendSms(defendantPhone, doc.cosignerPhone, courtInfo);

});
cursor.on('close', function() {
    mongoose.disconnect();
});


//courtInfo = defendantName + desc + date&time
const sendSms = function(defendantPhone, cosignerPhone, courtInfo) {
    //send to defendant
    client.messages
        .create({
            to: '+1' + defendantPhone,
            from: '+18087252356',
            body: courtInfo,
        })
        .then((message) => console.log(message.sid));

    //send to cosigner (twilio does not spport multiple 'to' #s).
    /*client.messages
        .create({
            to: '+1' + cosignerPhone,
            from: '+18087252356',
            body: courtInfo,
        })
        .then((message) => console.log(message.sid));
    */
};