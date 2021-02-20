const comicRoute = require('./comic');
const comicalRoute = require('./comical');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('add /comic to view comedians or /comical to quotes etc');
    });

    comicRoute(app, fs);
    comicalRoute(app, fs);

};

module.exports = appRouter;