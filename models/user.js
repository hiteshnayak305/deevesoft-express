// ./models/user.js
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: {
        type: Number,
        default: -1,
        index: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default:''
        //required: false
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
        //required: true,
        enum: [-1, 0, 1]
    },
    race: {
        type: Number,
        //required: true,
        enum: [-1, 0, 1, 2, 3, 4]
    },
    sex: {
        type: Number,
        required: true,
        enum: [-1, 0, 1, 2]
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

// set and get ethnicity stored number
userSchema.methods.setEthnicity = function(ethnicity) {
    switch(ethnicity) {
        case 'hispanic or latino':
            return 0;
        case 'non hispanic or non latino': 
            return 1;
        default:
            return -1;
    }
};
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

// set and get race stored number
userSchema.methods.setRace = function(race) {
    switch(race) {
        case 'american indian':
            return 0;
        case 'asian': 
            return 1;
        case 'native hawaiian or other pacific islander':
            return 2;
        case 'Black or other african american':
            return 3;
        case 'white':
            return 4;
        default:
            return -1;
    }
};
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

// set and get sex stored as number
userSchema.methods.setSex = function(sex) {
    switch(sex) {
        case 'male':
            return 0;
        case 'female': 
            return 1;
        case 'other':
            return 2;
        default:
            return -1;
    }
};
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