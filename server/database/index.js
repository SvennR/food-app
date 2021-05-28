var {Pool} = require('pg');
const pool = new Pool ({
    user: "postgres",
    password: "Jaxiboy87admin",
    host: "localhost",
    port: 5432,
    database: "recipes-db"
})

module.exports = pool;
