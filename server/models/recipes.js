const db = require('../database');

class Recipes {
    static retrieveAllFromFish (callback) {
        db.query('SELECT name from fish', function (err,res) {
            if (err.error)
            return callback(err);
        callback(res);
        });
    }

    static retrieveAllFromVegetarian (callback) {
        db.query('SELECT name from vegetarian', function (err,res) {
            if (err.error)
            return callback(err);
        callback(res);
        });
    }

    static insertFish (name, callback) {
        db.query('INSERT INTO fish (name) VALUES ($1)', [name], function (err, res) {
            if (err.error)
            return callback(err);
        callback(res);
        })
    }

    static insertVegetarian (name, callback) {
        db.query('INSERT INTO vegetarian (name) VALUES ($1)', [name], function (err, res) {
            if (err.error)
            return callback(err);
        callback(res);
        })
    }

}

module.exports = Recipes;