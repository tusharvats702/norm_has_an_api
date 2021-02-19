const { json } = require("body-parser");

const comicalRoute = (app, fs) => {

    const jsonData = './model/comical.json';


    app.get('/comical/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const parsedJSON = JSON.parse(data)
            const keys = Object.keys(parsedJSON);
            const query = parseInt(req.params.query) || 1;
            const limit = query > keys.length ? keys.length : query;
            let filteredData = new Array(limit);
            let object;

            for (let i = 0; i < limit; i++) {
                do {
                    object = parsedJSON[keys[Math.floor(keys.length * Math.random())]]
                } while (filteredData.indexOf(object) > -1);
                filteredData[i] = object;
            }
            res.send(filteredData);
        });
    });

};
module.exports = comicalRoute;

