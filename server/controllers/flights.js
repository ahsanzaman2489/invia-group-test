const Flights = require('../models/Flight');
const insertPagination = require('../utils/insertPagination');

exports.search = function (req, res, next) {
    const {to, from, departure, adults, iPP, page} = req.body;
    const query = {
        "origin.AP": from,
        "date.D": departure,
        "destination.AP": to,
        "availability": {$gte: adults}
    };
    Flights.count(query, function (err, count) {
        Flights.find(query).skip(page > 1 ? ((page - 1) * iPP) : 0)
            .limit(iPP)
            .then((flights, err) => {

                if (err) throw err;
                const response = {};
                const paginationItems = {iPP, page, count}
                response.items = flights;

                res.send(insertPagination(response, paginationItems));
            });
    });


};
