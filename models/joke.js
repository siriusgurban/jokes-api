const { default: mongoose } = require("mongoose");

const jokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Joke", jokeSchema);