const comicRoute = require('./comic');
const comicalRoute = require('./comical');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('add /comic or /comical to the current url');
    });

    comicRoute(app, fs);
    comicalRoute(app, fs);

};

module.exports = appRouter;