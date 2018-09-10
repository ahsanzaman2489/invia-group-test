const Flights = require('../controllers/search');
const express = require('express');


module.exports = function (app) {
    const router = express.Router();

    router.post('/search', Flights.search);

    app.use('/airport', router);
};
