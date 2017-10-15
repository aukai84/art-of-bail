const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('localhost:27017/art-of-bail');

app.use('/', require('./routes'));



const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Art of bail is running on port 8080!')
});