var User = require('../models/user');

module.exports = function(req, res, next) {
    console.log('in addUser.js');
    console.log(req.body);
    // check for existing username
    User.findOne({'username': req.body.username}, function(error, response) {
        // if any error occured
        if(error) {
            console.log('error occured: ' + error.status);
            res.status(error.status | 500).json({status: 'error occured'});
        }
        // if response is null add user
        if(!response) {
            console.log('response is null');

            // add user fields
            var user = new User();

            // set values from form 
            user.username = req.body.username;
            user.description = req.body.description;
            user.state = req.body.state;
            user.age = req.body.age;
            user.ethnicity = user.setEthnicity(req.body.ethnicity);
            user.race = user.setRace(req.body.race);
            user.sex = user.setSex(req.body.sex);
            user.height = req.body.height;
            user.weight = req.body.weight;

            // set custom index id
            User.find().count(function(error1, count) {
                if(error1) {
                    console.log('error occured: ' + error1);
                    res.status(error1.status | 500).json({status: 'error occured'});
                }
                user.id = count;
                // write to db
                user.save();
                next();
            });
        }
        // if response is not null reject
        else {
            console.log('response not null');
            console.log(response);
            res.status(200).json({status: 'user already exist'});
        }
    });
};