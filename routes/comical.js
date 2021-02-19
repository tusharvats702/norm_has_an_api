const { json } = require("body-parser");

const comicalRoute = (app, fs) => {

    const jsonData = './model/comical.json';

    app.get('/comical/:num?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data))
        });
    });

};
module.exports = comicalRoute;

