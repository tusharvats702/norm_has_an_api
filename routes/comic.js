
const comicRoute = (app, fs) => {

    const dataPath = './model/comic.json';


    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    app.get('/comic', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    app.get('/comic/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {

            const id = req.params["id"];
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data))
        });
    });
};
module.exports = comicRoute;
