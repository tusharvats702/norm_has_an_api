const comicRoute = (app, fs) => {

    const jsonData = './model/comic.json';
    const where = require("lodash");
    const _ = require("underscore");

    app.get('/comic/:query?', (req, res) => {
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

    app.get('/comic/name/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = req.params.query || "danieltosh";
            const filteredData = _.where(parsedJSON, { stageName: query });
            res.send(filteredData);
        });
    });

    app.get('/comic/country/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = req.params.query || "uk";
            const filteredData = _.where(parsedJSON, { nationality: query });
            res.send(filteredData);
        });
    });

    app.get('/comic/id/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const keys = Object.keys(parsedJSON);
            const query = parseInt(req.params.query) || parseInt(keys[Math.floor(keys.length * Math.random())]) + 1;
            const filteredData = _.where(parsedJSON, { id: query });
            res.send(filteredData);
        });
    });


    app.get('/comic/alive', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const filteredData = _.where(parsedJSON, { alive: true });
            res.send(filteredData);
        });
    });

    app.get('/comic/dead', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const filteredData = _.where(parsedJSON, { alive: false });
            res.send(filteredData);
        });
    });

    app.get('/comic/since/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = parseInt(req.params.query) || parseInt(Math.floor(1900 + (2021 - 1900) * Math.random()));
            console.log(query);
            const filteredData = _.filter(parsedJSON, ({ workingSince }) => workingSince >= query);
            res.send(filteredData);
        });
    });

};
module.exports = comicRoute;
