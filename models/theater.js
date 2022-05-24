  const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    name: String,
    movie: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ],
    cinema: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cinema'
        }
    ]
});

module.exports = mongoose.model('Theater', theaterSchema);