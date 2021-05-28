//const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')
//const bodyParser = require('body-parser');
var pool = require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
  

app.use(cors());
app.use(express.json()); // req.body
//app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.json());
//app.use('./', router);
// enable CORS (cross origin resource sharing)
//app.use((req, res, next) => {
    //res.append('Access-Control-Allow-Origin', '*');
    //res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //next();
  //});

// TODO: make a api-folder(routes for requests) and models-folder(database query models) 
// for more good-looking (readability, consistensy) code and reusable functions.

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

// Get all meat dishes
app.get('/meat', async(req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * from meat");
        res.json(allRecipes.rows)
        console.log(allRecipes.rows)
    } catch (err) {
    console.log(err.message)        
    }
})

// Get dinner from fish by row number
app.get('/fish/:id', async(req, res) => {
    try {
        const  { id } = req.params;
        const getRecipe = await pool.query("SELECT * from fish ORDER BY id LIMIT 1 OFFSET $1", [
            id
        ]);
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// Get dinner from vegetarian by row number
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

// Get dinner from meat by row number
app.get('/meat/:id', async(req, res) => {
    try {
        const  { id } = req.params;
        const getRecipe = await pool.query("SELECT * from meat WHERE id = $1", [
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
        const { src } = req.body;
        const { rating } = req.body;
        const newFishRecipe = await pool.query(
            "INSERT INTO fish (name, lookup, src, rating) VALUES($1, $2, $3, $4) RETURNING *", 
            [name, lookup, src, rating]
        );
        res.json(newFishRecipe);
    } catch (err) {
    console.log("error: "+err.message)
    }
})

// Add a recipe
// TODO: make optional input for rest of the coloumns;
app.post('/addVegetarian', async(req, res) => {
    try {
        const { name } = req.body;
        const { lookup } = req.body;
        const { src } = req.body;
        const { rating } = req.body;
        const newVegRecipe = await pool.query(
            "INSERT INTO vegetarian (name,lookup, src, rating) VALUES($1, $2, $3, $4) RETURNING *", 
            [name, lookup, src, rating]
        );
        res.json(newVegRecipe);
    } catch (err) {
    console.log("error: "+err.message)
    }
})

// Add a recipe
// TODO: make optional input for rest of the coloumns;
app.post('/addMeat', async(req, res) => {
    try {
        const { name } = req.body;
        const { lookup } = req.body;
        const { src } = req.body;
        const { rating } = req.body;
        const newMeatRecipe = await pool.query(
            "INSERT INTO meat (name,lookup, src, rating) VALUES($1, $2, $3, $4) RETURNING *", 
            [name, lookup, src, rating]
        );
        res.json(newMeatRecipe);
    } catch (err) {
    console.log("error: "+err.message)
    }
})

// Update a recipe

// Delete a recipe
app.delete('/fish/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFish = await pool.query("DELETE FROM fish WHERE id = $1", [
            id
        ]);
        res.jeson("recipe was deleted")
    } catch (err) {
        console.log(err.message)
        //console.log(deleteFish)
    }
})

// Delete all

// count rows in table
app.get('/fishCount', async(req, res) => {
    try {
        const getRecipe = await pool.query("SELECT COUNT(*) from fish");
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// count rows in table
app.get('/vegetarianCount', async(req, res) => {
    try {
        const getRecipe = await pool.query("SELECT COUNT(*) from vegetarian");
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

// count rows in table
app.get('/meatCount', async(req, res) => {
    try {
        const getRecipe = await pool.query("SELECT COUNT(*) from meat");
        res.json(getRecipe.rows[0])
        console.log(getRecipe.rows[0])
    } catch (err) {
    console.log(err.message)        
    }
})

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}...`);
});

module.exports = app;