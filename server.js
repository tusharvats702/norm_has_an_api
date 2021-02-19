const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var port = process.env.PORT || 4001 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(port, () => {
    console.log(`⚡️[success]: Server is running at https://localhost:${port}`);
});