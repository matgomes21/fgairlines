const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const AirlineController = require('./controllers/AirlineController');
const FlightController = require('./controllers/FlightController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { join } = require('./database/connection');

routes.post('/sessions', SessionController.create);

routes.get('/airlines',AirlineController.index);

routes.post('/airlines', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),AirlineController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

routes.get('/flights', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),FlightController.index);

routes.post('/flights',FlightController.create);

routes.delete('/flights/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),FlightController.delete);

module.exports = routes;