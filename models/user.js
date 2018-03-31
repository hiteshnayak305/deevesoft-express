// ./models/user.js
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    _id: {
        type: Number,
        default: -1,
        index: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    ethnicity: {
        type: Number,
        required: true,
        enum: [0, 1]
    },
    race: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3, 4]
    },
    sex: {
        type: Number,
        required: true,
        enum: [0, 1, 2]
    },
    height: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
});

/* 
* we cannot add any category in between
* we can only add at the end.
*
*/

// get ethnicity stored number
userSchema.methods.getEthnicity = function(ethnicity) {
    switch(ethnicity) {
        case 0:
            return 'hispanic or latino';
        case 1: 
            return 'non hispanic or non latino';
        default:
            return 'undefined';
    }
};

// get race stored number
userSchema.methods.getRace = function(race) {
    switch(race) {
        case 0:
            return 'american indian';
        case 1: 
            return 'asian';
        case 2:
            return 'native hawaiian or other pacific islander';
        case 3:
            return 'Black or other african american';
        case 4:
            return 'white';
        default:
            return 'undefined';
    }
};
// get sex stored as number
userSchema.methods.getSex = function(sex) {
    switch(sex) {
        case 0:
            return 'male';
        case 1: 
            return 'female';
        case 2:
            return 'other';
        default:
            return 'undefined';
    }
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);