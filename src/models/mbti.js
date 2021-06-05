const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mbti = new Schema({
  mbti: String,
  image: String,
  comment: String,
  description: String,
  recommendation: [{ name: String, image: String }],
  lck: [String],
  friend: [{ mbti: String, image: String }],
});

module.exports = mongoose.model("mbti", Mbti);
