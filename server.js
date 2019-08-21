const express = require('express');

const path = require('path');

const Sequelize = require("sequelize");
const routes = require("./routes/jobs")

const PORT = process.env.PORT || 4000;
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("jobs_db", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error' + err))

const app = express();

//STATIC FILE
// app.use(express.static("public"));

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => res.render(''));



//ROUTES
app.use(routes);


var db = require("./models/index.js");
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('server started at http://localhost:' + PORT);
    });
});
