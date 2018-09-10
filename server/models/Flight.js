const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new Schema({
    origin: {
        type: Object,
        required: true,
        lowercase: true
    },
    destination: {
        type: Object,
        required: true,
        lowercase: true
    }, time: {
        type: Object,
        required: true,
        lowercase: true
    }, date: {
        type: Object,
        required: true,
        lowercase: true
    },
    airline: {
        type: String,
        required: true,
        lowercase: true
    },
    aircraft: {
        type: String,
        required: true,
        lowercase: true
    }, flightNumber: {
        type: String,
        required: true,
        lowercase: true
    }, availability: {
        type: Number,
        required: true,
        lowercase: true
    }, price: {
        type: Number,
        required: true,
        lowercase: true
    },
});


const flight = mongoose.model('flight', flightSchema);


module.exports = flight;