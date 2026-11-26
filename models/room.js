const mongoose = require('mongoose');

// each room has a location, room capacity, noise level and availability
let roomSchema = mongoose.Schema({
    name: String,
    building: String,
    capacity: Number,
    noiseLevel: String,
    roomNumber: String,
    available: Boolean
});

module.exports = mongoose.model('room', roomSchema);
