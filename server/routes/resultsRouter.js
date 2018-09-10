const FlightsResults = require('../controllers/flights');
const express = require('express');


module.exports = function (app) {
    const router = express.Router();

    router.post('/results', FlightsResults.search);

    app.use('/flights', router);
};