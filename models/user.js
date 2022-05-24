const   mongoose = require('mongoose'),
        passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profileImage: String,
    firstname: String,
    lastname: String,
    isAdmin: {type: Boolean, default: false},
    payment: {
        type: String,
        nameoncard: String,
        creditno: String,
        exp: String,
        cvv: String
    }
    
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);