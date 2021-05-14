var express = require('express');
var Recipes = require('../models/recipes');

var router = express.Router();

router.get('/', function (req, res) {
    Recipes.retrieveAllFromFish(function (err, recipes) {
        if (err)
            return res.json(err);
        return res.json(recipes);
    });
});


router.post('/', function (req, res) {
    var recipe = req.body.recipe;

    Recipes.insertFish(recipe, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(recipes);
    })
})

module.exports = router;