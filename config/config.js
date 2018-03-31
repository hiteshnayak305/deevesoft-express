var config = {
    development: {
        database: {
            url:'mongodb://localhost:27017/deevesoft'
        }
    },
    production: {
        database: {
            url:'remotedb url'
        }
    }
};

//export config variable
module.exports = config;