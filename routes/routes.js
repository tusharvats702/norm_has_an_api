const userRoutes = require('./comic');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('all things funny');
    });

    userRoutes(app, fs);

};

module.exports = appRouter;