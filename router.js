"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? "Router" is special app for URL control in ExpressJS.

// express.Router()  router nasil calistirilir
const router = express.Router() //url yonetimi yapabilecegimiz bir router


// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: req.params.id }))

//? router.route()
router.route('/')
    .get((req, res) => res.send({ message: "get" }))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" }))

 After finished router-design, it will call like middleware:
app.use(require('./routes/')) // application a router kullandigimi bildiriyorum

/* ------------------------------------------------------- */



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));