const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Score = new Schema({
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("Score", Score);
