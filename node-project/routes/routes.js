const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    // console.log({ data })
    try {
        const savedData = await data.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//get all

router.get("/getData", async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get the data by id
router.get("/getOne/:id", async (req, res) => {
    try {

        const data = await Model.findById(req.params.id);
        res.json(data)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//update the data using id
router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options)

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID
router.delete("/delete/:id", (req, res) => {
    res.send('DELETE DATA BY ID API')
})

module.exports = router;