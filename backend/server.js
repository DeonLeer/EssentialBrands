const database = require('./database');
const apiRoutes = require('./apiRoutes');

const Express = require('express');
const App = Express();
const cors = require('cors');
const BodyParser = require('body-parser');
const PORT = 8080;
require("dotenv").config()
// Express Configuration
App.use(cors())
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//api endpoints
const apiRouter = Express.Router();
apiRoutes(apiRouter, database);
App.use('/api', apiRouter)
App.listen((process.env['PORT'] || PORT), (err) => console.log(err || `listening on port ${PORT}`))
