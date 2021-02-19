const comicRoute = require('./comic');
const comicalRoute = require('./comical');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('all things funny');
    });

    comicRoute(app, fs);
    comicalRoute(app, fs);

};

module.exports = appRouter;