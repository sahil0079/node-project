const express = require('express');

const router = express.Router();

//Post Method

router.post('/post', (req, res) => {
    res.send('POST API')
})

//get all

router.get("/getData", (req, res) => {
    res.send('GET DATA API')
})

//get the data by id
router.get("/getOne/:id", (req, res) => {
    res.send(req.params.id)
})
//update the data using id
router.patch("/update/:id", (req, res) => {
    res.send('UPDATE BY ID API')
})
//Delete by ID
router.delete("/delete/:id", (req, res) => {
    res.send('DELETE DATA BY ID API')
})

module.exports = router;