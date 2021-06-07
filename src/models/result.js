const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Result = new Schema({
  ISTJ: Number,
  ISFP: Number,
  INTP: Number,
  ISFJ: Number,
  INFJ: Number,
  INFP: Number,
  ISTP: Number,
  INTJ: Number,
  ENTP: Number,
  ESTP: Number,
  ENFP: Number,
  ESFP: Number,
  ENTJ: Number,
  ESTJ: Number,
  ENFJ: Number,
  ESFJ: Number,
});

module.exports = mongoose.model("result", Result);
