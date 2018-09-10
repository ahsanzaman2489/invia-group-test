const Airport = require('../models/Airport');


exports.search = function (req, res, next) {
    const {searchTerm} = req.body;

    Airport.find({"APN": {"$regex": searchTerm, "$options": "i"}})
        .then((airports, err) => {

            if (airports) {
                res.send(airports);
            }
        });


};