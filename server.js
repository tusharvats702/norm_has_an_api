const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var port = process.env.PORT || 4001 ;

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

app.listen(port, () => {
    console.log(`⚡️[bootup]: Server is running at http://localhost:${port}`);
});