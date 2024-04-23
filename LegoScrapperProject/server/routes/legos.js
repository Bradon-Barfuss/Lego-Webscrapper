const express = require('express');
const router = express.Router();
const {Legos} = require("../models");

router.get("/", async (req, res) =>{
    const listofLegos = await Legos.findAll();
    res.json(listofLegos);
});


router.post("/", async (req, res) => { //want to wait fo the data to inserted into the db before moving on
    const lego = req.body;
    await Legos.create(lego);
    res.json(lego);
});

module.exports = router;
