const express = require('express');
const router = express.Router();
var db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// GET JOBS
//*express   '/'
router.get("/", (req, res) =>
    db.Job.findAll()
        .then(dbjobs => res.json(dbjobs)
        )
        .catch(err => console.log(err))
);
//*react     '/add'
//DISPLAY ADD JOB
router.get("/add", (req, res) => res.render("add"));

// ADD A JOB
router.post("/add", (req, res) => {

    let { title, technologies, salary, description, contactEmail } = req.body
    let errors = [];
    //VALIDATION
    if (!title) {
        errors.push({ text: "Please add a title" })
    }
    if (!technologies) {
        errors.push({ text: "Please add some technologies" })
    } if (!description) {
        errors.push({ text: "Please add a description" })
    }
    if (!title) {
        errors.push({ text: "Please add a contact email" })
    }

    //CHECK FOR ERROS
    if (errors.length > 0) {
        res.render("add", {
            errors,
            title,
            technologies,
            description,
            salary,
            contactEmail

        });
    } else {
        if (!salary) {
            salary = "Unknown"
        } else {
            budget = `$${salary}`
        }
        //LOWERCASE AND NO SPACE AFTER COMMA
        technologies = technologies.toLowerCase().replace(/, /g, ",")
        //CREATING A JOB
        db.Job.create({
            title,
            technologies,
            description,
            salary,
            contactEmail

        })
            .then(dbjobs => res.json(dbjobs))
            .catch(err => console.log(err));

    }

});

//*react /search

//SEARCH FOR JOB
router.get('/search', (req, res) => {
    // req.query.term;
    const { term } = req.query;

    db.Job.findAll({ where: { title: { [Op.like]: "%" + term + "%" } } })
        .then(dbjobs => res.render(dbjobs))
        .catch(error => console.log(error));

});

module.exports = router;

