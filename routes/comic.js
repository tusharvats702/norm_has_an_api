const comicRoute = (app, fs) => {

    const jsonData = './model/comic.json';
    const where = require("lodash");
    const _ = require("underscore");
    const thisYear = new Date().getFullYear()

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
            console.log(`⚡️[comic]: random comic fetched successfully`);
            res.send(filteredData);
        });
    });

    app.get('/comic/name/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            var query = req.params.query || "danieltosh";
            query = where.lowerCase(query);
            query = query.replace(/\s/g, '');
            console.log(query)
            const filteredData = _.where(parsedJSON, { stageName: query });
            console.log(`⚡️[comic]: ${query} fetched successfully`);
            res.send(filteredData);
        });
    });
    

    app.get('/comic/country/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = req.params.query || "british";
            const filteredData = _.where(parsedJSON, { nationality: query });
            console.log(`⚡️[comic]: ${query} comic fetched successfully`);
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
            console.log(`⚡️[comic]: comic with ${query} id fetched successfully`);
            res.send(filteredData);
        });
    });


    app.get('/comic/minAge/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = parseInt(req.params.query) || parseInt(Math.floor(15 + (45 - 16) * Math.random()));
            const filteredData = _.filter(parsedJSON, ({ dateOfBirth }) => thisYear - dateOfBirth.split('-')[0] >= query);
            console.log(`⚡️[comic]: comic with minimum age ${query} fetched successfully`);
            res.send(filteredData);
        });
    });


    app.get('/comic/maxAge/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = parseInt(req.params.query) || parseInt(Math.floor(15 + (45 - 16) * Math.random()));
            const filteredData = _.filter(parsedJSON, ({ dateOfBirth }) => thisYear - dateOfBirth.split('-')[0] <= query);
            console.log(`⚡️[comic]: comic with maximum age ${query} fetched successfully`);
            res.send(filteredData);
        });
    });


    app.get('/comic/bornAfter/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = parseInt(req.params.query) || parseInt(Math.floor(15 + (45 - 16) * Math.random()));
            const filteredData = _.filter(parsedJSON, ({ dateOfBirth }) => dateOfBirth.split('-')[0] > query);
            console.log(`⚡️[comic]: comic bornafter ${query} fetched successfully`);
            res.send(filteredData);
        });
    });


    app.get('/comic/bornBefore/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = parseInt(req.params.query) || parseInt(Math.floor(15 + (45 - 16) * Math.random()));
            const filteredData = _.filter(parsedJSON, ({ dateOfBirth }) => dateOfBirth.split('-')[0] < query);
            console.log(`⚡️[comic]: comic bornbefore ${query} fetched successfully`);
            res.send(filteredData);
        });
    });


    app.get('/comic/isAlive/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const query = (req.params.query === 'true');
            const filteredData = _.where(parsedJSON, { alive: query });
            console.log(`⚡️[comic]: all alive:${query} comics fetched successfully`);
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
            const filteredData = _.filter(parsedJSON, ({ workingSince }) => workingSince >= query);
            console.log(`⚡️[comic]: comic working since  ${query} fetched successfully`);
            res.send(filteredData);
        });
    });

};

module.exports = comicRoute;
