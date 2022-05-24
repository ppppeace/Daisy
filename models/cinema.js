const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
        name: String,
        zone:   String
    });

module.exports = mongoose.model('Cinema', cinemaSchema);