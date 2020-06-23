const express = require('express');
const routes = express.Router();

const AirlineController = require('./controllers/AirlineController');
const FlightController = require('./controllers/FlightController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/airlines',AirlineController.index);
routes.post('/airlines',AirlineController.create);

routes.get('/profile',ProfileController.index);

routes.get('/flights',FlightController.index);
routes.post('/flights',FlightController.create);
routes.delete('/flights',FlightController.delete);



module.exports = routes;