const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
        name: String,
        date: String,
        desc: String,
        time: String,
        genre: String,
        img: String,
        trailer: String,
        rate: String,
        status: String,
        pop: String,
        dir: [
            {
                img_dir: String,
                name_dir: String
        }
    ],
    act: [
        {
            img_act: String,
            name_act: String
    }
],comments: [
    {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
]
    });

module.exports = mongoose.model('Movie', movieSchema);