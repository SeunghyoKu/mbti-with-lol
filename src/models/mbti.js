const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mbti = new Schema({
  mbti: {
    type: String,
  },
  comment: {
    type: String,
  },
  description: {
    type: String,
  },
  recommendation: {
    type: [String],
  },
  lck: {
    type: [String],
  },
  friend: {
    type: [String],
  },
});

module.exports = mongoose.model("mbti", Mbti);
