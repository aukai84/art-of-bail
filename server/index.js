const express = require('express');


const app = express();


app.use('/', require('./routes'));



const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Art of bail is running on port 8080!')
});