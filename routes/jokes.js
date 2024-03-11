const express = require("express")
const router = express.Router();
const Joke = require("../models/joke")

router.get("/", async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/", async (req, res) => {
    const joke = new Joke({
        name: req.body.name
    })
    try {
        const newJoke = await joke.save();
        res.status(201).json(newJoke)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;