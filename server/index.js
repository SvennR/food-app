const path = require('path');
//const router = express.Router();
//var request = require('request')
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var pool = require('./database');
var Recipes = require('./models/recipes');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
  


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use('./', router);
// enable CORS (cross origin resource sharing)
app.use((req, res, next) => {
    //res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

//app.use('/api/recipes', require('./api/recipes'))
/*
// Get recipes from fish
app.get('/', function (req, res) {
    Recipes.retrieveAllFromFish(function (err, recipes) {
        if (err)
            return res.json(err);
        return res.json(recipes);
    });
});
*/

// Get all fish dishes
app.get('/fish', async(req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * from fish");
        res.json(allRecipes.rows)
        console.log(allRecipes.rows)
    } catch (err) {
    console.log(err.message)        
    }
})
 
// Get all vegetarian dishes
app.get('/vegetarian', async(req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * from vegetarian");
        res.json(allRecipes.rows)
        console.log(allRecipes.rows)
    } catch (err) {
    console.log(err.message)        
    }
})

// Get all various dishes
app.get('/various', async(req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * from various");
        res.json(allRecipes.rows)
        console.log(allRecipes.rows)
    } catch (err) {
    console.log(err.message)        
    }
})

// Get the random from fish
app.get('/fish/:id', async(req, res) => {
    try {
        const  { id } = req.params;
        const getRecipe = await pool.query("SELECT * from fish WHERE id = $1", [
            id
        ]);
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// Get the random from vegetarian
app.get('/vegetarian/:id', async(req, res) => {
    try {
        const  { id } = req.params;
        const getRecipe = await pool.query("SELECT * from vegetarian WHERE id = $1", [
            id
        ]);
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// Get the random from various
app.get('/various/:id', async(req, res) => {
    try {
        const  { id } = req.params;
        const getRecipe = await pool.query("SELECT * from various WHERE id = $1", [
            id
        ]);
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// Add a recipe
// TODO: make optional input for rest of the coloumns;
app.post('/addFish', async(req, res) => {
    try {
        const { name } = req.body;
        const { lookup } = req.body;
        const newFishRecipe = await pool.query(
            "INSERT INTO fish (name,lookup) VALUES($1,$2) RETURNING *", 
            [name, lookup]
        );
        res.json(newFishRecipe);
    } catch (err) {
    console.log("error: "+err.message)
    }
})

// Update a recipe

// Delete a recipe

// Delete all


app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}...`);
});
/*
db.query('SELECT NOW()', (err, res) => {
    if (err.error)
        return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});
*/
module.exports = app;