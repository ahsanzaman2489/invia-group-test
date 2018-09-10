const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const airportSchema = new Schema({
    APN: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
});


const Airport = mongoose.model('airports', airportSchema);


module.exports = Airport;