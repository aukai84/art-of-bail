const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const schedule = require('node-schedule');
const sendSMS = require('./services/send-sms.js');

const app = express();

mongoose.connect('localhost:27017/art-of-bail');

app.use(cors());
app.use(bodyParser.json());

app.use('/', require('./routes'));


const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Art of bail is running on port 8080!')
});


const rule = new schedule.RecurrenceRule();
rule.hour = 2;
//rule.minute = ??; for testing

const j = schedule.scheduleJob(rule, function() {
    sendSMS();
});